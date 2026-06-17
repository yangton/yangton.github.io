---
title: "Yangton // Security Researc"
---

<div class="portfolio-wrapper">
  <div class="hero">
    <div class="hero-bg-grid"></div>
    <div class="hero-content">
      <div class="hero-tag">
        <span class="pulse-dot"></span> OFFENSIVE SECURITY
      </div>
      <h1 class="hero-title">yangton<span class="cursor">_</span></h1>
      <p class="hero-sub">> AppSec Engineer & Penetration Tester</p>
    </div>
  </div>

  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-icon">⏱</div>
      <span class="stat-number">3</span>
      <span class="stat-label">Years Exp</span>
    </div>
    <div class="stat-card">
      <div class="stat-icon">🏆</div>
      <span class="stat-number">2</span>
      <span class="stat-label">Certs</span>
    </div>
    <div class="stat-card">
      <div class="stat-icon">🎯</div>
      <span class="stat-number">HTB</span>
      <span class="stat-label">Active</span>
    </div>
    <div class="stat-card">
      <div class="stat-icon">🕸️</div>
      <span class="stat-number">WEB</span>
      <span class="stat-label">Focus</span>
    </div>
  </div>

  <div class="section-divider"></div>

  <div class="cert-row">
    <span class="cert-badge achieved"><span class="check">✓</span> BSCP</span>
    <span class="cert-badge achieved"><span class="check">✓</span> CWES</span>
    <span class="cert-badge pending"><span class="spin">⟳</span> CPTS</span>
    <span class="cert-badge pending"><span class="spin">⟳</span> OSWA</span>
  </div>

  <div class="section-divider"></div>

  <h3 class="index-header">// Directory_Index</h3>
  
  <div class="index-grid">
    <div class="index-card">
      <a href="/Write-ups" class="index-link-wrapper">
        <div class="index-title">[[Write-ups]]</div>
        <div class="index-desc">Lab post-mortems, CTF solutions, and exploit chain analysis.</div>
      </a>
    </div>
    <div class="index-card">
      <a href="/Methodology" class="index-link-wrapper">
        <div class="index-title">[[Methodology]]</div>
        <div class="index-desc">My personal pentesting workflows, checklists, and mindmaps.</div>
      </a>
    </div>
    <div class="index-card">
      <a href="/Insights" class="index-link-wrapper">
        <div class="index-title">[[Insights]]</div>
        <div class="index-desc">Raw notes on the current threat landscape and AppSec trends.</div>
      </a>
    </div>
  </div>
</div>

<style>
.portfolio-wrapper {
  --bg-color: #0a0a0c;
  --surface: rgba(30, 30, 35, 0.6);
  --surface-hover: rgba(45, 45, 55, 0.8);
  --primary: #c7a3ff;
  --secondary: #7b5ea7;
  --accent: #00ffcc;
  --dark: #121214;
  --gray: #8b8b99;
  --text-main: #e2e2e8;
  --codeFont: 'Fira Code', 'JetBrains Mono', monospace;
  --sansFont: 'Inter', system-ui, sans-serif;
  
  color: var(--text-main);
  font-family: var(--sansFont);
}

.hero {
  position: relative;
  padding: 3rem 2rem;
  border-left: 4px solid var(--primary);
  margin-bottom: 2rem;
  background: linear-gradient(90deg, rgba(123, 94, 167, 0.05) 0%, transparent 100%);
  border-radius: 0 12px 12px 0;
  overflow: hidden;
  animation: fadeIn 0.8s ease forwards;
}

.hero-bg-grid {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 20px 20px;
  z-index: 0;
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-tag {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.75rem;
  letter-spacing: 0.25em;
  color: var(--primary);
  font-family: var(--codeFont);
  margin-bottom: 1rem;
  animation: slideIn 0.6s ease;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background-color: var(--accent);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--accent);
  animation: pulse 2s infinite;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  margin: 0 0 0.5rem 0;
  color: #ffffff;
  animation: slideIn 0.7s ease;
}

.cursor {
  color: var(--primary);
  animation: blink 1s step-end infinite;
}

.hero-sub {
  color: var(--gray);
  font-size: 1.1rem;
  font-family: var(--codeFont);
  margin: 0;
  animation: slideIn 0.8s ease;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
  margin: 2rem 0;
  animation: fadeIn 1s ease forwards;
}

.stat-card {
  background: var(--surface);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--primary), transparent);
  opacity: 0;
  transition: opacity 0.3s;
}

.stat-card:hover {
  transform: translateY(-5px);
  background: var(--surface-hover);
  border-color: rgba(199, 163, 255, 0.3);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.stat-card:hover::before {
  opacity: 1;
}

.stat-icon {
  font-size: 1.2rem;
  margin-bottom: 0.2rem;
  opacity: 0.8;
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  font-family: var(--codeFont);
  color: var(--text-main);
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
}

.stat-label {
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  color: var(--gray);
  text-transform: uppercase;
  font-weight: 600;
}

.cert-row {
  display: flex;
  gap: 1rem;
  margin: 1.5rem 0;
  flex-wrap: wrap;
  animation: fadeIn 1.1s ease forwards;
}

.cert-badge {
  font-family: var(--codeFont);
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.4rem 1rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s;
}

.cert-badge.achieved {
  background: rgba(123, 94, 167, 0.15);
  border: 1px solid var(--primary);
  color: var(--primary);
  box-shadow: 0 0 10px rgba(123, 94, 167, 0.1);
}

.cert-badge.achieved:hover {
  background: rgba(123, 94, 167, 0.25);
  box-shadow: 0 0 15px rgba(123, 94, 167, 0.3);
}

.cert-badge.pending {
  background: rgba(139, 139, 153, 0.1);
  border: 1px dashed var(--gray);
  color: var(--gray);
}

.check { color: var(--accent); }
.spin { display: inline-block; animation: spin 4s linear infinite; }

.index-header {
  font-family: var(--codeFont);
  color: var(--text-main);
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.index-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  animation: fadeIn 1.2s ease forwards;
}

.index-card {
  background: rgba(20, 20, 23, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  transition: all 0.2s ease;
  border-left: 3px solid transparent;
}

.index-link-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 1rem 1.2rem;
  text-decoration: none;
  color: inherit;
}

.index-card:hover {
  background: var(--surface);
  border-left: 3px solid var(--accent);
  transform: translateX(5px);
}

.index-title {
  font-family: var(--codeFont);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--primary);
  transition: text-shadow 0.2s;
}

.index-card:hover .index-title {
  text-shadow: 0 0 8px var(--primary);
}

.index-desc {
  font-size: 0.9rem;
  color: var(--gray);
  line-height: 1.5;
}

.section-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  margin: 2.5rem 0;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from { opacity: 0; transform: translateX(-15px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(0, 255, 204, 0.4); }
  70% { box-shadow: 0 0 0 6px rgba(0, 255, 204, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 255, 204, 0); }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@media (max-width: 768px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 1rem;}
  .hero-title { font-size: 2.5rem; }
  .hero { padding: 2rem 1.5rem; }
}
</style>