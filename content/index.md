---
title: "yangton // Security Research"
description: "AppSec Engineer & Penetration Tester — write-ups, methodology, and offensive security research."
---

<div class="jm-wrapper">

  <p class="jm-status">signal: online // engagements: closed // focus: web appsec</p>

  <h1 class="jm-headline">Break It. Understand It. Write It Down.</h1>

  <p class="jm-cursor"><span class="jm-blink">$</span></p>

  <p class="jm-bio">:P</p>

  <hr class="jm-rule" />

  <h2 class="jm-h2">About</h2>
  <p class="jm-prose">yangton is the research log of an AppSec engineer working the offensive side of web security. The rule here is simple: break it, understand it, write it down.</p>
  <p class="jm-prose">Write-ups covers lab post-mortems, CTF solutions, and exploit chain analysis from HackTheBox and self-built targets. Methodology is the personal playbook — workflows, checklists, and mindmaps used on real engagements. Insights tracks the current threat landscape and where AppSec is heading.</p>

  <hr class="jm-rule" />

  <h2 class="jm-h2">Featured</h2>
  <div class="jm-featured">
    <a href="/Write-ups" class="jm-feat-item">
      <span class="jm-feat-icon">⚔</span>
      <span class="jm-feat-text"><strong>Write-ups</strong> — Lab post-mortems, CTF solutions, and exploit chain analysis. <span class="jm-arrow">→</span></span>
    </a>
    <a href="/Methodology" class="jm-feat-item">
      <span class="jm-feat-icon">⚙</span>
      <span class="jm-feat-text"><strong>Methodology</strong> — Personal pentesting workflows, checklists, and mindmaps. <span class="jm-arrow">→</span></span>
    </a>
    <a href="/Insights" class="jm-feat-item">
      <span class="jm-feat-icon">◈</span>
      <span class="jm-feat-text"><strong>Insights</strong> — Notes on the current threat landscape and AppSec trends. <span class="jm-arrow">→</span></span>
    </a>
  </div>

  <hr class="jm-rule" />

  <h2 class="jm-h2">Progress</h2>
  <p class="jm-stat-line">Certifications <span class="jm-stat-num">2 / 4</span></p>
  <p class="jm-stat-line">HackTheBox <span class="jm-stat-num">Active</span></p>
  <p class="jm-stat-line">Years in AppSec <span class="jm-stat-num">3</span></p>

  <hr class="jm-rule" />

  <h2 class="jm-h2">Certifications</h2>
  <div class="jm-cert-row">
    <span class="jm-badge done">BSCP</span>
    <span class="jm-badge done">CWES</span>
    <span class="jm-badge pending">CWEE</span>
    <span class="jm-badge pending">CPTS</span>
    <span class="jm-badge pending">OSWA</span>
  </div>

</div>

<style>
.jm-wrapper {
  color: var(--dark);
  max-width: 680px;
  font-family: var(--codeFont);
}

.jm-status {
  font-size: 0.78rem;
  color: var(--gray);
  margin: 0 0 1.25rem 0;
  letter-spacing: 0.02em;
}

.jm-headline {
  font-size: 2.1rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.15;
  color: var(--darkgray);
  margin: 0 0 1rem 0;
}

.jm-cursor {
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  color: var(--secondary);
}

.jm-blink {
  animation: jm-blink 1.1s step-end infinite;
}

@keyframes jm-blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.jm-bio {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--gray);
  margin: 0 0 1.5rem 0;
}

.jm-rule {
  border: none;
  border-top: 1px solid var(--lightgray);
  margin: 1.75rem 0;
}

.jm-h2 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--darkgray);
  margin: 0 0 0.85rem 0;
}

.jm-prose {
  font-size: 0.92rem;
  line-height: 1.75;
  color: var(--gray);
  margin: 0 0 0.9rem 0;
}

.jm-prose:last-child {
  margin-bottom: 0;
}

.jm-featured {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.jm-feat-item {
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  text-decoration: none;
  color: inherit;
}

.jm-feat-icon {
  color: var(--secondary);
  font-size: 0.9rem;
  flex-shrink: 0;
}

.jm-feat-text {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--gray);
}

.jm-feat-text strong {
  color: var(--darkgray);
  font-weight: 600;
}

.jm-arrow {
  color: var(--secondary);
  opacity: 0;
  transition: opacity 0.15s ease;
}

.jm-feat-item:hover .jm-arrow {
  opacity: 1;
}

.jm-feat-item:hover strong {
  color: var(--secondary);
}

.jm-stat-line {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: var(--gray);
  margin: 0 0 0.6rem 0;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid var(--lightgray);
  max-width: 320px;
}

.jm-stat-num {
  color: var(--secondary);
  font-weight: 600;
}

.jm-cert-row {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.jm-badge {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.3rem 0.7rem;
  border-radius: 2px;
}

.jm-badge.done {
  border: 1px solid var(--secondary);
  color: var(--secondary);
}

.jm-badge.pending {
  border: 1px solid var(--lightgray);
  color: var(--gray);
}

@media (max-width: 768px) {
  .jm-headline { font-size: 1.7rem; }
}
</style>