document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const nav = header.querySelector('nav');
  const hamburgerMenu = header.querySelector('.hamburger-menu');
  const overlay = document.querySelector('.overlay');
  let isAnimating = false;
  hamburgerMenu.addEventListener('click', () => {
    if (isAnimating) return;
    isAnimating = true;
    hamburgerMenu.classList.toggle('open');
    overlay.classList.toggle('active');
    toggleNav(nav);
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