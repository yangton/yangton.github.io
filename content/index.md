---
title: "Yangton // Security Research"
---

<div class="hero">
  <div class="hero-tag">OFFENSIVE SECURITY</div>
  <h1 class="hero-title">yangton</h1>
  <p class="hero-sub">Penetration tester</p>
</div>

<div class="stats-grid">
  <div class="stat-card">
    <span class="stat-number">3</span>
    <span class="stat-label">Years Experience</span>
  </div>
  <div class="stat-card">
    <span class="stat-number">2</span>
    <span class="stat-label">Certifications</span>
  </div>
  <div class="stat-card">
    <span class="stat-number">HTB</span>
    <span class="stat-label">Active Platform</span>
  </div>
  <div class="stat-card">
    <span class="stat-number">WEB</span>
    <span class="stat-label">Primary Focus</span>
  </div>
</div>

---

<div class="cert-row">
  <span class="cert-badge">✓ BSCP</span>
  <span class="cert-badge pending">⟳ CWES</span>
</div>

---

### // Index

- **[[Write-ups]]** — Lab post-mortems and exploit chains.
- **[[Methodology]]** — How I work.
- **[[Insights]]** — Notes on the current landscape.

---


<style>
.hero {
  padding: 2rem 0 1rem 0;
  border-left: 3px solid var(--secondary);
  padding-left: 1.5rem;
  margin-bottom: 2rem;
  animation: fadeIn 0.8s ease;
}

.hero-tag {
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  color: var(--secondary);
  font-family: var(--codeFont);
  margin-bottom: 0.5rem;
  animation: slideIn 0.6s ease;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  background: linear-gradient(135deg, var(--dark) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: slideIn 0.7s ease;
}

.hero-sub {
  color: var(--gray);
  font-size: 1rem;
  margin: 0;
  animation: slideIn 0.8s ease;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin: 1.5rem 0;
  animation: fadeIn 1s ease;
}

.stat-card {
  background: var(--lightgray);
  border: 1px solid var(--lightgray);
  border-radius: 8px;
  padding: 1.2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  transition: border-color 0.2s, transform 0.2s;
  cursor: default;
}

.stat-card:hover {
  border-color: var(--secondary);
  transform: translateY(-2px);
}

.stat-number {
  font-size: 1.8rem;
  font-weight: 700;
  font-family: var(--codeFont);
  color: var(--secondary);
}

.stat-label {
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  color: var(--gray);
  text-transform: uppercase;
  text-align: center;
}

.cert-row {
  display: flex;
  gap: 0.75rem;
  margin: 1rem 0;
  flex-wrap: wrap;
  animation: fadeIn 1.1s ease;
}

.cert-badge {
  font-family: var(--codeFont);
  font-size: 0.8rem;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  background: rgba(123, 94, 167, 0.15);
  border: 1px solid var(--secondary);
  color: var(--secondary);
  letter-spacing: 0.05em;
}

.cert-badge.pending {
  background: rgba(100, 100, 100, 0.1);
  border-color: var(--gray);
  color: var(--gray);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
}

@media (max-width: 600px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .hero-title { font-size: 2rem; }
}
</style>