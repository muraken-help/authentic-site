const navToggle = document.querySelector('.nav-toggle');
const globalNav = document.querySelector('.global-nav');

if (navToggle && globalNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = globalNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  globalNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      globalNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
