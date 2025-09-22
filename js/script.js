// DOM ready
document.addEventListener('DOMContentLoaded', () => {
  // Nav toggle (mobile)
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav'); // toggling 'open' on nav
  const navList = nav.querySelector('.nav-list');

  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open'); // fixed here
    });

    // Close nav when clicking a link (mobile)
    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768 && nav.classList.contains('open')) {
          nav.classList.remove('open'); // fixed here
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Close nav if window is resized to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && nav.classList.contains('open')) {
        nav.classList.remove('open'); // fixed here
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Contact form (client-side demo)
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');

      // Basic validation
      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        formMessage.textContent = 'Please fill in all fields.';
        formMessage.style.color = '#b00020';
        return;
      }

      // Simple email format check
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(email.value.trim())) {
        formMessage.textContent = 'Please enter a valid email.';
        formMessage.style.color = '#b00020';
        return;
      }

      // Demo "send"
      formMessage.textContent = '✅ Thanks! Your message was sent (demo).';
      formMessage.style.color = 'var(--accent-2)';
      contactForm.reset();
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});



