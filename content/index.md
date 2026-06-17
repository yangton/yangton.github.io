---
title: "Yangton // Security Research"
---

<div class="portfolio-wrapper">
  <div class="loader-overlay">
    <div class="loader-text">INITIALIZING_ENVIRONMENT<span class="cursor">_</span></div>
    <div class="loader-bar"><div class="loader-progress"></div></div>
  </div>

  <div class="content-reveal">
    <div class="hero terminal-window">
      <div class="terminal-header">
        <span class="term-btn close"></span>
        <span class="term-btn min"></span>
        <span class="term-btn max"></span>
        <span class="term-title">bash -- yangton@nexus:~</span>
      </div>
      <div class="hero-bg-grid scanline"></div>
      <div class="hero-content">
        <div class="hero-tag">
          <span class="pulse-dot"></span> <span class="glitch-text" data-text="OFFENSIVE SECURITY">OFFENSIVE SECURITY</span>
        </div>
        <h1 class="hero-title type-effect">yangton<span class="cursor">_</span></h1>
        <p class="hero-sub fade-in-delay">> AppSec Engineer & Penetration Tester</p>
      </div>
    </div>

    <div class="stats-grid stagger-reveal">
      <div class="stat-card cyber-border">
        <div class="stat-icon">⏱</div>
        <span class="stat-number count-up">3</span>
        <span class="stat-label">Years Exp</span>
      </div>
      <div class="stat-card cyber-border">
        <div class="stat-icon">🏆</div>
        <span class="stat-number count-up">2</span>
        <span class="stat-label">Certs</span>
      </div>
      <div class="stat-card cyber-border">
        <div class="stat-icon">🎯</div>
        <span class="stat-number neon-text">HTB</span>
        <span class="stat-label">Active</span>
      </div>
      <div class="stat-card cyber-border">
        <div class="stat-icon">🕸️</div>
        <span class="stat-number neon-text">WEB</span>
        <span class="stat-label">Focus</span>
      </div>
    </div>

    <div class="section-divider"></div>

    <div class="cert-row stagger-reveal">
      <span class="cert-badge achieved glow-hover"><span class="check">✓</span> BSCP</span>
      <span class="cert-badge achieved glow-hover"><span class="check">✓</span> CWES</span>
      <span class="cert-badge pending"><span class="spin">⟳</span> CPTS</span>
      <span class="cert-badge pending"><span class="spin">⟳</span> OSWA</span>
    </div>

    <div class="section-divider"></div>

    <h3 class="index-header type-effect-fast">// Directory_Index</h3>
    
    <div class="index-grid stagger-reveal">
      <div class="index-card">
        <a href="/Write-ups" class="index-link-wrapper">
          <div class="index-title">[[Write-ups]]</div>
          <div class="index-desc">Lab post-mortems, CTF solutions, and exploit chain analysis.</div>
          <div class="hover-arrow">→</div>
        </a>
      </div>
      <div class="index-card">
        <a href="/Methodology" class="index-link-wrapper">
          <div class="index-title">[[Methodology]]</div>
          <div class="index-desc">My personal pentesting workflows, checklists, and mindmaps.</div>
          <div class="hover-arrow">→</div>
        </a>
      </div>
      <div class="index-card">
        <a href="/Insights" class="index-link-wrapper">
          <div class="index-title">[[Insights]]</div>
          <div class="index-desc">Raw notes on the current threat landscape and AppSec trends.</div>
          <div class="hover-arrow">→</div>
        </a>
      </div>
    </div>
  </div>
</div>

<style>
.portfolio-wrapper {
  --bg-color: #050508;
  --surface: rgba(20, 20, 25, 0.7);
  --surface-hover: rgba(35, 35, 45, 0.85);
  --primary: #b388ff;
  --secondary: #7b5ea7;
  --accent: #00e6b8;
  --dark: #0a0a0f;
  --gray: #8b8b99;
  --text-main: #e2e2e8;
  --codeFont: 'Fira Code', 'JetBrains Mono', monospace;
  --sansFont: 'Inter', system-ui, sans-serif;
  
  color: var(--text-main);
  font-family: var(--sansFont);
  position: relative;
  overflow: hidden;
}

.loader-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: var(--bg-color);
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: hideLoader 0.1s linear 2s forwards;
}

.loader-text {
  font-family: var(--codeFont);
  color: var(--accent);
  font-size: 0.9rem;
  margin-bottom: 1rem;
  letter-spacing: 2px;
}

.loader-bar {
  width: 200px;
  height: 2px;
  background: rgba(255,255,255,0.1);
  position: relative;
  overflow: hidden;
}

.loader-progress {
  position: absolute;
  top: 0; left: 0; height: 100%;
  background: var(--primary);
  width: 0%;
  animation: loadProgress 1.8s cubic-bezier(0.8, 0, 0.2, 1) forwards;
  box-shadow: 0 0 10px var(--primary);
}

.content-reveal {
  opacity: 0;
  animation: revealContent 1s ease 2s forwards;
}

.terminal-window {
  border: 1px solid rgba(179, 136, 255, 0.2);
  border-radius: 8px;
  background: rgba(10, 10, 15, 0.8);
  box-shadow: 0 10px 30px rgba(0,0,0,0.5), inset 0 0 20px rgba(179, 136, 255, 0.05);
}

.terminal-header {
  background: rgba(20, 20, 25, 0.9);
  padding: 8px 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(179, 136, 255, 0.1);
  border-radius: 8px 8px 0 0;
}

.term-btn {
  width: 12px; height: 12px;
  border-radius: 50%;
  margin-right: 6px;
}
.term-btn.close { background: #ff5f56; }
.term-btn.min { background: #ffbd2e; }
.term-btn.max { background: #27c93f; }

.term-title {
  margin-left: 10px;
  font-family: var(--codeFont);
  font-size: 0.75rem;
  color: var(--gray);
}

.hero {
  position: relative;
  padding: 3rem 2rem 3rem 2rem;
  margin-bottom: 2.5rem;
  overflow: hidden;
}

.hero-bg-grid {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image: 
    linear-gradient(rgba(179, 136, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(179, 136, 255, 0.03) 1px, transparent 1px);
  background-size: 30px 30px;
  z-index: 0;
}

.scanline {
  background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.2) 51%);
  background-size: 100% 4px;
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 1;
  pointer-events: none;
}

.scanline::after {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; height: 10%;
  background: linear-gradient(to bottom, transparent, rgba(179, 136, 255, 0.1), transparent);
  animation: scan 6s linear infinite;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-tag {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.75rem;
  letter-spacing: 0.25em;
  color: var(--primary);
  font-family: var(--codeFont);
  margin-bottom: 1.2rem;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background-color: var(--accent);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--accent);
  animation: pulse 2s infinite;
}

.glitch-text {
  position: relative;
}
.glitch-text:hover::before, .glitch-text:hover::after {
  content: attr(data-text);
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  opacity: 0.8;
}
.glitch-text:hover::before {
  left: 2px;
  text-shadow: -1px 0 red;
  animation: glitch-anim-1 0.3s infinite linear alternate-reverse;
}
.glitch-text:hover::after {
  left: -2px;
  text-shadow: -1px 0 blue;
  animation: glitch-anim-2 0.3s infinite linear alternate-reverse;
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  margin: 0 0 0.5rem 0;
  background: linear-gradient(to right, #ffffff, var(--primary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cursor {
  color: var(--accent);
  -webkit-text-fill-color: var(--accent);
  animation: blink 1s step-end infinite;
}

.hero-sub {
  color: var(--gray);
  font-size: 1.15rem;
  font-family: var(--codeFont);
  margin: 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin: 2.5rem 0;
}

.cyber-border {
  background: var(--surface);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(179, 136, 255, 0.1);
  border-radius: 8px;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;
}

.cyber-border::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; width: 0; height: 2px;
  background: var(--accent);
  transition: width 0.4s ease;
}

.cyber-border:hover {
  transform: translateY(-5px);
  background: var(--surface-hover);
  border-color: rgba(179, 136, 255, 0.4);
  box-shadow: 0 15px 30px rgba(0,0,0,0.4), 0 0 15px rgba(179, 136, 255, 0.1);
}

.cyber-border:hover::after {
  width: 100%;
}

.stat-icon {
  font-size: 1.3rem;
  margin-bottom: 0.3rem;
  filter: drop-shadow(0 0 5px rgba(255,255,255,0.2));
}

.stat-number {
  font-size: 2.2rem;
  font-weight: 800;
  font-family: var(--codeFont);
  color: #fff;
}

.neon-text {
  text-shadow: 0 0 10px rgba(179, 136, 255, 0.5);
}

.stat-label {
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  color: var(--gray);
  text-transform: uppercase;
  font-weight: 600;
}

.cert-row {
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
  flex-wrap: wrap;
}

.cert-badge {
  font-family: var(--codeFont);
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.5rem 1.2rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  overflow: hidden;
}

.cert-badge.achieved {
  background: rgba(179, 136, 255, 0.1);
  border: 1px solid var(--primary);
  color: var(--primary);
}

.glow-hover {
  transition: all 0.3s;
}
.glow-hover:hover {
  background: rgba(179, 136, 255, 0.2);
  box-shadow: 0 0 20px rgba(179, 136, 255, 0.3), inset 0 0 10px rgba(179, 136, 255, 0.2);
  transform: scale(1.02);
}

.cert-badge.pending {
  background: rgba(139, 139, 153, 0.05);
  border: 1px solid rgba(139, 139, 153, 0.3);
  color: var(--gray);
}

.check { color: var(--accent); text-shadow: 0 0 8px var(--accent); }
.spin { display: inline-block; animation: spin 3s linear infinite; opacity: 0.7; }

.index-header {
  font-family: var(--codeFont);
  color: var(--primary);
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 10px rgba(179, 136, 255, 0.3);
}

.index-grid {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.index-card {
  background: rgba(20, 20, 25, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.03);
  border-radius: 6px;
  transition: all 0.3s ease;
}

.index-link-wrapper {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
  padding: 1.2rem 1.5rem;
  text-decoration: none;
  color: inherit;
  position: relative;
}

.index-card:hover {
  background: var(--surface-hover);
  border-color: rgba(0, 230, 184, 0.3);
  box-shadow: -4px 0 0 var(--accent);
  transform: translateX(4px);
}

.index-title {
  grid-column: 1;
  grid-row: 1;
  font-family: var(--codeFont);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0.4rem;
  transition: color 0.3s;
}

.index-card:hover .index-title {
  color: var(--accent);
  text-shadow: 0 0 8px rgba(0, 230, 184, 0.4);
}

.index-desc {
  grid-column: 1;
  grid-row: 2;
  font-size: 0.95rem;
  color: var(--gray);
  line-height: 1.5;
}

.hover-arrow {
  grid-column: 2;
  grid-row: 1 / span 2;
  display: flex;
  align-items: center;
  font-family: var(--codeFont);
  font-size: 1.5rem;
  color: var(--accent);
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
}

.index-card:hover .hover-arrow {
  opacity: 1;
  transform: translateX(0);
}

.section-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(179, 136, 255, 0.2), transparent);
  margin: 3rem 0;
  position: relative;
}
.section-divider::after {
  content: '///';
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  background: var(--bg-color);
  padding: 0 10px;
  color: var(--gray);
  font-family: var(--codeFont);
  font-size: 0.7rem;
  letter-spacing: 2px;
}

@keyframes loadProgress {
  0% { width: 0%; }
  40% { width: 40%; }
  60% { width: 45%; }
  100% { width: 100%; }
}

@keyframes hideLoader {
  to { opacity: 0; visibility: hidden; }
}

@keyframes revealContent {
  from { opacity: 0; transform: translateY(10px); filter: blur(4px); }
  to { opacity: 1; transform: translateY(0); filter: blur(0); }
}

@keyframes scan {
  0% { top: -10%; }
  100% { top: 110%; }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(0, 230, 184, 0.4); }
  70% { box-shadow: 0 0 0 8px rgba(0, 230, 184, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 230, 184, 0); }
}

@keyframes glitch-anim-1 {
  0% { clip: rect(20px, 9999px, 85px, 0); }
  20% { clip: rect(60px, 9999px, 15px, 0); }
  40% { clip: rect(10px, 9999px, 45px, 0); }
  60% { clip: rect(80px, 9999px, 25px, 0); }
  80% { clip: rect(30px, 9999px, 65px, 0); }
  100% { clip: rect(70px, 9999px, 5px, 0); }
}

@keyframes glitch-anim-2 {
  0% { clip: rect(15px, 9999px, 90px, 0); }
  20% { clip: rect(55px, 9999px, 20px, 0); }
  40% { clip: rect(25px, 9999px, 50px, 0); }
  60% { clip: rect(85px, 9999px, 30px, 0); }
  80% { clip: rect(40px, 9999px, 70px, 0); }
  100% { clip: rect(65px, 9999px, 10px, 0); }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.stagger-reveal > * {
  opacity: 0;
  animation: revealItem 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

.stagger-reveal > *:nth-child(1) { animation-delay: 2.2s; }
.stagger-reveal > *:nth-child(2) { animation-delay: 2.3s; }
.stagger-reveal > *:nth-child(3) { animation-delay: 2.4s; }
.stagger-reveal > *:nth-child(4) { animation-delay: 2.5s; }

@keyframes revealItem {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-in-delay {
  opacity: 0;
  animation: fadeText 1s ease 2.6s forwards;
}

@keyframes fadeText {
  to { opacity: 1; }
}

@media (max-width: 768px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 1rem;}
  .hero-title { font-size: 2.8rem; }
  .hero { padding: 2rem 1.5rem; }
  .index-link-wrapper { padding: 1rem; }
}
</style>