---
title: "yangton // Security Research"
description: "AppSec Engineer & Penetration Tester — write-ups, methodology, and offensive security research."
---

<div class="portfolio-wrapper">

  <div class="hero">
    <p class="hero-eyebrow">// offensive security</p>
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
    <span class="cert-badge pending">CWEE</span>
    <span class="cert-badge pending">CPTS</span>
    <span class="cert-badge pending">OSWA</span>
  </div>

  <h3 class="index-header">Directory Index</h3>

  <div class="index-grid">
    <a href="/Write-ups" class="index-card">
      <div class="index-title">Write-ups <span class="arrow">→</span></div>
      <div class="index-desc">Labs, CTF solutions, and exploit chain analysis.</div>
    </a>
    <a href="/Methodology" class="index-card">
      <div class="index-title">Methodology <span class="arrow">→</span></div>
      <div class="index-desc">Personal pentesting workflows, checklists, and mindmaps.</div>
    </a>
    <a href="/Insights" class="index-card">
      <div class="index-title">Blog <span class="arrow">→</span></div>
      <div class="index-desc">Some things :@</div>
    </a>
  </div>

</div>

<style>
.portfolio-wrapper {
  color: var(--dark);
  max-width: 720px;
  font-family: var(--codeFont);
}


.hero {
  padding: 0 0 1.75rem 0;
  margin-bottom: 1.75rem;
  border-bottom: 1px solid var(--lightgray);
}

.hero-eyebrow {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: var(--gray);
  margin: 0 0 0.5rem 0;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin: 0 0 0.4rem 0;
  color: var(--darkgray);
  line-height: 1;
}

.hero-sub {
  color: var(--gray);
  font-size: 1rem;
  margin: 0;
}


.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--lightgray);
  border: 1px solid var(--lightgray);
  margin: 0 0 1.5rem 0;
}

.stat-card {
  background: var(--light);
  padding: 1rem 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.stat-number {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--secondary);
}

.stat-label {
  font-size: 0.65rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--gray);
}


.cert-row {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 0 0 2.25rem 0;
}

.cert-badge {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.3rem 0.7rem;
  border-radius: 2px;
}

.cert-badge.achieved {
  border: 1px solid var(--secondary);
  color: var(--secondary);
}

.cert-badge.pending {
  border: 1px solid var(--lightgray);
  color: var(--gray);
}


.index-header {
  font-size: 1rem;
  font-weight: 700;
  color: var(--darkgray);
  margin-bottom: 0.75rem;
}

.index-grid {
  display: flex;
  flex-direction: column;
}

.index-card {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 0.9rem 0;
  text-decoration: none;
  color: inherit;
  border-bottom: 1px solid var(--lightgray);
  transition: padding-left 0.15s ease;
}

.index-card:first-child {
  border-top: 1px solid var(--lightgray);
}

.index-card:hover {
  padding-left: 0.5rem;
}

.index-card:hover .index-title {
  color: var(--secondary);
}

.index-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--darkgray);
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: color 0.15s ease;
}

.arrow {
  color: var(--secondary);
  opacity: 0;
  transition: opacity 0.15s ease;
}

.index-card:hover .arrow {
  opacity: 1;
}

.index-desc {
  font-size: 0.85rem;
  color: var(--gray);
  line-height: 1.5;
}

@media (max-width: 768px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .hero-title { font-size: 2rem; }
}
</style>