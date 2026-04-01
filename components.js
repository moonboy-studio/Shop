/* ============================================================
   MOONBOY STUDIO — Sidebar & Footer HTML Templates
   Injected via components.js on every page
   ============================================================ */

(function () {
  /* ── Sidebar HTML ── */
  const sidebarHTML = `
  <button class="hamburger" id="hamburger" aria-label="Toggle menu">
    <span></span><span></span><span></span>
  </button>

  <div class="overlay" id="overlay"></div>

  <nav class="sidebar" id="sidebar">
    <div class="sidebar-header">
      <div class="sidebar-logo">MOONBOY<span>.</span>STUDIO</div>
    </div>
    <div class="sidebar-nav">
      <a href="index.html">
        <svg class="nav-icon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
        Home
      </a>
      <a href="about.html">
        <svg class="nav-icon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
        </svg>
        About
      </a>
      <a href="services.html">
        <svg class="nav-icon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
        </svg>
        Services
      </a>
      <a href="portfolio.html">
        <svg class="nav-icon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
        </svg>
        Portfolio
      </a>
      <a href="pricing.html">
        <svg class="nav-icon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
        </svg>
        Pricing
      </a>
      <a href="contact.html">
        <svg class="nav-icon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
        </svg>
        Contact
      </a>
    </div>
    <div class="sidebar-footer">
      <a href="https://discord.gg/uCGvsjTVT5" target="_blank" rel="noopener" class="btn-discord-sidebar">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.079.11 18.1.132 18.115a19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/>
        </svg>
        Join Discord
      </a>
    </div>
  </nav>`;

  /* ── Footer HTML ── */
  const footerHTML = `
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-brand-name">MOONBOY STUDIO</div>
          <p class="footer-desc">Professional digital agency for gaming communities, tournament hosts, and esports creators. We design, build, and promote.</p>
        </div>
        <div class="footer-col">
          <h4>Pages</h4>
          <a href="index.html">Home</a>
          <a href="about.html">About</a>
          <a href="services.html">Services</a>
          <a href="portfolio.html">Portfolio</a>
          <a href="pricing.html">Pricing</a>
          <a href="contact.html">Contact</a>
        </div>
        <div class="footer-col">
          <h4>Connect</h4>
          <a href="https://discord.gg/uCGvsjTVT5" target="_blank" rel="noopener">Discord Server</a>
          <a href="pricing.html">Get a Quote</a>
          <a href="contact.html">Contact Us</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2025 Moonboy Studio. All rights reserved.</span>
        <span style="color: var(--purple-light)">Made for gamers, by gamers.</span>
      </div>
    </div>
  </footer>`;

  /* ── Inject into page ── */
  document.body.insertAdjacentHTML('afterbegin', sidebarHTML);

  const mainEl = document.getElementById('main-content');
  if (mainEl) mainEl.insertAdjacentHTML('afterend', footerHTML);
})();
