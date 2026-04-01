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
      <a href="faq.html">
        <svg class="nav-icon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
        FAQ
      </a>
      <a href="contact.html">
        <svg class="nav-icon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
        </svg>
        Contact
      </a>
      <a href="faq.html">
        <svg class="nav-icon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
        FAQ
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
          <a href="faq.html">FAQ</a>
          <a href="contact.html">Contact</a>
          <a href="faq.html">FAQ</a>
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
