---
title: "yangton // Security Research"
description: "AppSec Engineer & Penetration Tester — write-ups, methodology, and offensive security research."
---

<div class="portfolio-wrapper">

  <div class="hero">
    <p class="hero-eyebrow"><span class="prompt">$</span> whoami</p>
    <h1 class="hero-title">yangton</h1>
    <p class="hero-sub">AppSec Engineer &amp; Penetration Tester</p>
  </div>

  <div class="meta-line">
    <span class="meta-item"><span class="meta-value">3</span> years exp</span>
    <span class="meta-divider">/</span>
    <span class="meta-item"><span class="meta-value">2</span> certs</span>
    <span class="meta-divider">/</span>
    <span class="meta-item">HTB active</span>
    <span class="meta-divider">/</span>
    <span class="meta-item">web focus</span>
  </div>

  <div class="cert-row">
    <span class="cert-badge achieved">BSCP</span>
    <span class="cert-badge achieved">CWES</span>
    <span class="cert-badge pending">CPTS</span>
    <span class="cert-badge pending">OSWA</span>
  </div>

  <div class="section-divider"></div>

  <h3 class="index-header"><span class="prompt">$</span> ls ~/notes</h3>

  <div class="index-list">
    <a href="/Write-ups" class="index-row">
      <span class="index-title">Write-ups</span>
      <span class="index-desc">Lab post-mortems, CTF solutions, and exploit chain analysis.</span>
      <span class="arrow">→</span>
    </a>
    <a href="/Methodology" class="index-row">
      <span class="index-title">Methodology</span>
      <span class="index-desc">Personal pentesting workflows, checklists, and mindmaps.</span>
      <span class="arrow">→</span>
    </a>
    <a href="/Insights" class="index-row">
      <span class="index-title">Insights</span>
      <span class="index-desc">Notes on the current threat landscape and AppSec trends.</span>
      <span class="arrow">→</span>
    </a>
  </div>

</div>

<style>
.portfolio-wrapper {
  color: var(--dark);
  max-width: 640px;
}

/* hero */
.hero {
  padding: 0.5rem 0 1.75rem 0;
}

.hero-eyebrow {
  font-family: var(--codeFont);
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: var(--gray);
  margin: 0 0 0.9rem 0;
}

.prompt {
  color: var(--secondary);
  font-weight: 700;
  margin-right: 0.4em;
}

.hero-title {
  font-size: 2.75rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  margin: 0 0 0.4rem 0;
  color: var(--darkgray);
  line-height: 1.1;
}

.hero-sub {
  color: var(--gray);
  font-size: 1rem;
  margin: 0;
  line-height: 1.5;
}


.meta-line {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--codeFont);
  font-size: 0.82rem;
  color: var(--gray);
  margin: 0 0 1.5rem 0;
}

.meta-value {
  color: var(--secondary);
  font-weight: 700;
}

.meta-divider {
  color: var(--lightgray);
}


.cert-row {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 0 0 2rem 0;
}

.cert-badge {
  font-family: var(--codeFont);
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.3rem 0.7rem;
  border-radius: 4px;
}

.cert-badge.achieved {
  border: 1px solid color-mix(in srgb, var(--secondary) 45%, transparent);
  color: var(--secondary);
  background: transparent;
}

.cert-badge.pending {
  border: 1px dashed var(--lightgray);
  color: var(--gray);
}


.section-divider {
  height: 1px;
  background: var(--lightgray);
  margin: 0 0 2rem 0;
}

.index-header {
  font-family: var(--codeFont);
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--gray);
  margin-bottom: 0.75rem;
}


.index-list {
  display: flex;
  flex-direction: column;
}

.index-row {
  display: grid;
  grid-template-columns: 140px 1fr 20px;
  align-items: baseline;
  gap: 1rem;
  padding: 0.9rem 0.25rem;
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
  padding-left: 0.6rem;
  border-color: var(--secondary);
}

.index-row:focus-visible {
  outline: none;
  background: color-mix(in srgb, var(--secondary) 5%, transparent);
}

.index-title {
  font-family: var(--codeFont);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--darkgray);
}

.index-desc {
  font-size: 0.88rem;
  color: var(--gray);
  line-height: 1.4;
}

.arrow {
  color: var(--secondary);
  opacity: 0;
  transition: opacity 0.15s ease, transform 0.15s ease;
  text-align: right;
}

.index-row:hover .arrow,
.index-row:focus-visible .arrow {
  opacity: 1;
  transform: translateX(2px);
}

@media (max-width: 640px) {
  .hero-title { font-size: 2.1rem; }
  .meta-line { font-size: 0.78rem; }
  .index-row {
    grid-template-columns: 1fr;
    gap: 0.25rem;
  }
  .arrow { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  .index-row, .arrow {
    transition: none;
  }
}
</style>