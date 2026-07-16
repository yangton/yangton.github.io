---
title: "yangton // Security Research"
description: "AppSec Engineer & Penetration Tester — write-ups, methodology, and offensive security research."
---

<div class="portfolio-wrapper">

  <div class="hero">
    <p class="hero-eyebrow">Offensive Security</p>
    <h1 class="hero-title">yangton</h1>
    <p class="hero-sub">AppSec Engineer &amp; Penetration Tester</p>
  </div>

  <div class="stats-grid">
    <div class="stat-card">
      <span class="stat-number">3</span>
      <span class="stat-label">Years Exp</span>
    </div>
    <div class="stat-card">
      <span class="stat-number">2</span>
      <span class="stat-label">Certs</span>
    </div>
    <div class="stat-card">
      <span class="stat-number">HTB</span>
      <span class="stat-label">Active</span>
    </div>
    <div class="stat-card">
      <span class="stat-number">Web</span>
      <span class="stat-label">Focus</span>
    </div>
  </div>

  <div class="cert-row">
    <span class="cert-badge achieved">BSCP</span>
    <span class="cert-badge achieved">CWES</span>
    <span class="cert-badge pending">CPTS</span>
    <span class="cert-badge pending">OSWA</span>
  </div>

  <h3 class="index-header">Directory Index</h3>

  <div class="index-grid">
    <div class="index-card">
      <a href="/Write-ups" class="index-link-wrapper">
        <div class="index-title">Write-ups <span class="arrow">→</span></div>
        <div class="index-desc">Lab post-mortems, CTF solutions, and exploit chain analysis.</div>
      </a>
    </div>
    <div class="index-card">
      <a href="/Methodology" class="index-link-wrapper">
        <div class="index-title">Methodology <span class="arrow">→</span></div>
        <div class="index-desc">Personal pentesting workflows, checklists, and mindmaps.</div>
      </a>
    </div>
    <div class="index-card">
      <a href="/Insights" class="index-link-wrapper">
        <div class="index-title">Insights <span class="arrow">→</span></div>
        <div class="index-desc">Notes on the current threat landscape and AppSec trends.</div>
      </a>
    </div>
  </div>

</div>

<style>
.portfolio-wrapper {
  color: var(--dark);
  max-width: 720px;
}

/* hero */
.hero {
  padding: 0.5rem 0 2rem 0;
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--lightgray);
}

.hero-eyebrow {
  font-family: var(--codeFont);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--secondary);
  margin: 0 0 0.6rem 0;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 0.5rem 0;
  color: var(--darkgray);
  line-height: 1.1;
}

.hero-sub {
  color: var(--gray);
  font-size: 1.1rem;
  margin: 0;
  line-height: 1.5;
}

/* stats */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin: 0 0 1.5rem 0;
}

.stat-card {
  background: color-mix(in srgb, var(--secondary) 7%, var(--light));
  border: 1px solid color-mix(in srgb, var(--secondary) 22%, var(--lightgray));
  border-radius: 12px;
  padding: 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.stat-card:hover {
  border-color: var(--secondary);
  box-shadow: 0 4px 12px rgba(123, 94, 167, 0.15);
  transform: translateY(-2px);
}

.stat-number {
  font-family: var(--codeFont);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--secondary);
}

.stat-label {
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gray);
  font-weight: 600;
}

/* certifications */
.cert-row {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin: 0 0 2.5rem 0;
}

.cert-badge {
  font-family: var(--codeFont);
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
}

.cert-badge.achieved {
  border: 1px solid var(--secondary);
  color: var(--secondary);
  background: color-mix(in srgb, var(--secondary) 10%, transparent);
}

.cert-badge.pending {
  border: 1px dashed color-mix(in srgb, var(--gray) 50%, var(--lightgray));
  color: var(--gray);
}

/* index */
.index-header {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--darkgray);
  margin-bottom: 1rem;
}

.index-grid {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.index-card {
  background: color-mix(in srgb, var(--secondary) 7%, var(--light));
  border: 1px solid color-mix(in srgb, var(--secondary) 22%, var(--lightgray));
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.index-link-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding: 1.1rem 1.3rem;
  text-decoration: none;
  color: inherit;
  border-radius: 12px;
}

/* focus widoczny dla nawigacji klawiaturą (Tab) — bez tego karty są
   niedostępne dla osób nieużywających myszy, mimo że wyglądają na klikalne */
.index-link-wrapper:focus-visible {
  outline: 2px solid var(--secondary);
  outline-offset: 2px;
}

.index-card:hover,
.index-card:focus-within {
  border-color: var(--secondary);
  box-shadow: 0 4px 12px rgba(123, 94, 167, 0.15);
  transform: translateX(4px);
}

.index-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--darkgray);
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.arrow {
  color: var(--secondary);
  opacity: 0.35;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

/* na dotyku/mobile nie ma :hover, więc strzałka zostawała niewidoczna
   na stałe — teraz jest zawsze lekko widoczna i tylko "ożywa" na hover */
.index-card:hover .arrow,
.index-card:focus-within .arrow {
  opacity: 1;
  transform: translateX(2px);
}

.index-desc {
  font-size: 0.9rem;
  color: var(--gray);
  line-height: 1.5;
}

@media (max-width: 768px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .hero-title { font-size: 2.2rem; }
}

/* dla osób z ustawieniem "ogranicz animacje" w systemie —
   accessibility, nie tylko kosmetyka */
@media (prefers-reduced-motion: reduce) {
  .stat-card, .index-card, .arrow {
    transition: none;
  }
}
</style>