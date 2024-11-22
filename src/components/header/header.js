document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const nav = header.querySelector('nav');
  const hamburger = header.querySelector('.hamburger-menu');
  const overlay = document.querySelector('.overlay');
  let isAnimating = false;
  hamburger.addEventListener('click', () => {
    if (isAnimating) return;
    isAnimating = true;
    const isOpen = hamburger.classList.toggle('open');
    overlay.classList.toggle('active');
    toggleNav(nav);
    // Update aria attributes for accessibility
    hamburger.setAttribute('aria-expanded', isOpen);
    nav.setAttribute('aria-hidden', !isOpen);
    setTimeout(() => {
      isAnimating = false;
    }, 500);
  });
});

function toggleNav(nav) {
  const navHeight = nav.offsetHeight;
  if (navHeight === 0) nav.style.height = `${nav.scrollHeight}px`;
  else nav.style.height = 0;
}