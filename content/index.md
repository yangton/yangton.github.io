---
title: "yangton // Security Research"
---

<div class="portfolio-wrapper">

  <div class="classification">[ CLASSIFICATION: PUBLIC — REV. 2026.07 ]</div>

  <div class="hero">
    <p class="hero-eyebrow">Offensive Security</p>
    <h1 class="hero-title">yangton</h1>
    <p class="hero-sub">AppSec Engineer &amp; Penetration Tester</p>
  </div>

  <dl class="meta-row">
    <div class="meta-item">
      <dt>Experience</dt>
      <dd>3 yrs</dd>
    </div>
    <div class="meta-item">
      <dt>Certifications</dt>
      <dd>2</dd>
    </div>
    <div class="meta-item">
      <dt>HTB Status</dt>
      <dd>Active</dd>
    </div>
    <div class="meta-item">
      <dt>Focus</dt>
      <dd>Web</dd>
    </div>
  </dl>

  <div class="section-divider"></div>

  <div class="cert-block">
    <p class="cert-label">Certifications</p>
    <div class="cert-row">
      <span class="cert-badge achieved">BSCP</span>
      <span class="cert-badge achieved">CWES</span>
      <span class="cert-badge pending">CPTS — in progress</span>
      <span class="cert-badge pending">OSWA — in progress</span>
    </div>
  </div>

  <div class="section-divider"></div>

  <h3 class="index-header">Directory Index</h3>

  <div class="index-grid">
    <div class="index-card">
      <a href="/Write-ups" class="index-link-wrapper">
        <div class="index-title">Write-ups</div>
        <div class="index-desc">Lab post-mortems, CTF solutions, and exploit chain analysis.</div>
      </a>
    </div>
    <div class="index-card">
      <a href="/Methodology" class="index-link-wrapper">
        <div class="index-title">Methodology</div>
        <div class="index-desc">Personal pentesting workflows, checklists, and mindmaps.</div>
      </a>
    </div>
    <div class="index-card">
      <a href="/Insights" class="index-link-wrapper">
        <div class="index-title">Insights</div>
        <div class="index-desc">Notes on the current threat landscape and AppSec trends.</div>
      </a>
    </div>
  </div>

</div>

<style>
.portfolio-wrapper {
  --ink: #0e1013;
  --panel: #16181c;
  --line: #2b2e34;
  --paper: #eae7e0;
  --steel: #9a9aa2;
  --muted: #6b7280;
  --accent: #c1440e;
  --codeFont: 'JetBrains Mono', 'Fira Code', monospace;
  --sansFont: 'Inter', system-ui, sans-serif;

  color: var(--paper);
  font-family: var(--sansFont);
  max-width: 720px;
}

/* classification stamp */
.classification {
  font-family: var(--codeFont);
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  color: var(--muted);
  border: 1px solid var(--line);
  display: inline-block;
  padding: 0.3rem 0.7rem;
  border-radius: 3px;
  margin-bottom: 2rem;
}

/* hero */
.hero {
  padding: 0 0 1.8rem 1.4rem;
  border-left: 2px solid var(--accent);
  margin-bottom: 1.8rem;
}

.hero-eyebrow {
  font-family: var(--codeFont);
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0 0 0.6rem 0;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  margin: 0 0 0.4rem 0;
  color: #ffffff;
  line-height: 1;
}

.hero-sub {
  color: var(--steel);
  font-size: 1.05rem;
  font-family: var(--codeFont);
  margin: 0;
}

/* meta row — plain data, not glowing cards */
.meta-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  margin: 0 0 1.8rem 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.meta-item {
  padding: 0.9rem 1rem;
  border-right: 1px solid var(--line);
}

.meta-item:last-child {
  border-right: none;
}

.meta-item dt {
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 0.35rem;
}

.meta-item dd {
  font-family: var(--codeFont);
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--paper);
  margin: 0;
}

/* certifications */
.cert-label {
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  margin: 0 0 0.8rem 0;
}

.cert-row {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.cert-badge {
  font-family: var(--codeFont);
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0.4rem 0.9rem;
  border-radius: 4px;
}

.cert-badge.achieved {
  border: 1px solid var(--accent);
  color: var(--paper);
  background: rgba(193, 68, 14, 0.08);
}

.cert-badge.pending {
  border: 1px dashed var(--line);
  color: var(--muted);
}

/* index */
.index-header {
  font-family: var(--codeFont);
  font-size: 0.95rem;
  letter-spacing: 0.05em;
  color: var(--paper);
  margin-bottom: 1rem;
}

.index-grid {
  display: flex;
  flex-direction: column;
}

.index-card {
  border-top: 1px solid var(--line);
  border-left: 2px solid transparent;
  transition: border-color 0.15s ease, background 0.15s ease;
}

.index-card:last-child {
  border-bottom: 1px solid var(--line);
}

.index-link-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem 1rem 1rem 1.2rem;
  text-decoration: none;
  color: inherit;
}

.index-card:hover {
  border-left-color: var(--accent);
  background: var(--panel);
}

.index-title {
  font-family: var(--codeFont);
  font-size: 1rem;
  font-weight: 600;
  color: var(--paper);
}

.index-desc {
  font-size: 0.88rem;
  color: var(--steel);
  line-height: 1.5;
}

.section-divider {
  height: 1px;
  background: var(--line);
  margin: 2rem 0;
}

@media (max-width: 768px) {
  .meta-row { grid-template-columns: repeat(2, 1fr); }
  .meta-item:nth-child(2) { border-right: none; }
  .hero-title { font-size: 2.2rem; }
}
</style>