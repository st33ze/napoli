import headerHTML from './header.html';
import './header.css';

export function loadHeader(parent) {
  parent.insertAdjacentHTML('beforeend', headerHTML);

  const header = document.getElementById('header');
  const nav = header.querySelector('nav');
  const hamburger = header.querySelector('.hamburger-menu');
  let isAnimating = false;
  hamburger.addEventListener('click', () => {
    if (isAnimating) return;
    isAnimating = true;
    
    const event = new CustomEvent('toggleMenu');
    document.dispatchEvent(event);
    
    const isOpen = hamburger.classList.toggle('open');
    toggleNav(nav);
    
    // Update aria attributes for accessibility
    hamburger.setAttribute('aria-expanded', isOpen);
    nav.setAttribute('aria-hidden', !isOpen);
    
    setTimeout(() => {
      isAnimating = false;
    }, 500);
  });  
}

function toggleNav(nav) {
  const navHeight = nav.offsetHeight;
  if (navHeight === 0) nav.style.height = `${nav.scrollHeight}px`;
  else nav.style.height = 0;
}