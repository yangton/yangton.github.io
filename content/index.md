---
title: "yangton // Security Research"
description: "AppSec Engineer & Penetration Tester — write-ups, methodology, and offensive security research."
---

<div class="portfolio-wrapper">

  <nav class="top-nav">
    <span class="nav-logo">yangton</span>
    <div class="nav-links">
      <a href="/Write-ups">Write-ups</a>
      <a href="/Methodology">Methodology</a>
      <a href="/Insights">Insights</a>
    </div>
    <div class="nav-socials">
      <a href="https://github.com/yangton" target="_blank" rel="noopener">GitHub</a>
    </div>
  </nav>

  <div class="hero">
    <h1 class="hero-title">AppSec Engineer <span class="hero-break">&amp;</span> Penetration Tester</h1>
    <p class="hero-sub">Write-ups, methodology, and offensive security research from real engagements and lab work.</p>
  </div>

  <div class="cert-row">
    <span class="cert-badge achieved">BSCP</span>
    <span class="cert-badge achieved">CWES</span>
    <span class="cert-badge pending">CPTS</span>
    <span class="cert-badge pending">OSWA</span>
    <span class="cert-meta">3 years experience · HTB active</span>
  </div>

  <section class="index-section">
    <h2 class="section-label">Explore</h2>

    <div class="index-list">
      <a href="/Write-ups" class="index-row">
        <span class="index-title">Write-ups</span>
        <span class="index-desc">Lab post-mortems, CTF solutions, and exploit chain analysis.</span>
      </a>
      <a href="/Methodology" class="index-row">
        <span class="index-title">Methodology</span>
        <span class="index-desc">Personal pentesting workflows, checklists, and mindmaps.</span>
      </a>
      <a href="/Insights" class="index-row">
        <span class="index-title">Insights</span>
        <span class="index-desc">Notes on the current threat landscape and AppSec trends.</span>
      </a>
    </div>
  </section>

</div>

<style>
.portfolio-wrapper {
  color: var(--dark);
  max-width: 760px;
}

/* nav */
.top-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 2.5rem 0;
  flex-wrap: wrap;
  gap: 1rem;
}

.nav-logo {
  font-family: var(--codeFont);
  font-weight: 700;
  font-size: 1rem;
  color: var(--darkgray);
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a,
.nav-socials a {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--gray);
  text-decoration: none;
  transition: color 0.15s ease;
}

.nav-links a:hover,
.nav-socials a:hover {
  color: var(--secondary);
}

/* hero — duży, odważny nagłówek jako centralny punkt strony */
.hero {
  padding: 1rem 0 2.5rem 0;
}

.hero-title {
  font-size: 3.4rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.05;
  margin: 0 0 1.25rem 0;
  color: var(--darkgray);
}

.hero-break {
  color: var(--secondary);
}

.hero-sub {
  font-size: 1.1rem;
  color: var(--gray);
  max-width: 480px;
  line-height: 1.55;
  margin: 0;
}

/* certifications inline z metadanymi — jeden rząd, bez boxów-statystyk */
.cert-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin: 0 0 3rem 0;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid var(--lightgray);
}

.cert-badge {
  font-family: var(--codeFont);
  font-size: 0.78rem;
  font-weight: 600;
  padding: 0.3rem 0.75rem;
  border-radius: 4px;
}

.cert-badge.achieved {
  border: 1px solid color-mix(in srgb, var(--secondary) 45%, transparent);
  color: var(--secondary);
}

.cert-badge.pending {
  border: 1px dashed var(--lightgray);
  color: var(--gray);
}

.cert-meta {
  font-size: 0.82rem;
  color: var(--gray);
  margin-left: 0.5rem;
}

/* index section */
.section-label {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gray);
  margin: 0 0 1.5rem 0;
}

.index-list {
  display: flex;
  flex-direction: column;
}

.index-row {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 1.4rem 0;
  border-bottom: 1px solid var(--lightgray);
  text-decoration: none;
  color: inherit;
  transition: padding-left 0.15s ease, border-color 0.15s ease;
}

.index-row:first-child {
  border-top: 1px solid var(--lightgray);
}

.index-row:hover,
.index-row:focus-visible {
  padding-left: 0.75rem;
  border-color: var(--secondary);
}

.index-row:focus-visible {
  outline: none;
  background: color-mix(in srgb, var(--secondary) 5%, transparent);
}

.index-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--darkgray);
  letter-spacing: -0.01em;
}

.index-desc {
  font-size: 0.92rem;
  color: var(--gray);
  line-height: 1.5;
}

@media (max-width: 640px) {
  .hero-title { font-size: 2.3rem; }
  .top-nav { flex-direction: column; align-items: flex-start; }
  .nav-links { gap: 1rem; }
}

@media (prefers-reduced-motion: reduce) {
  .index-row, .nav-links a, .nav-socials a {
    transition: none;
  }
}
</style>