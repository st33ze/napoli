import headerHTML from './header.html';
import './header.css';


const container = document.createElement('div');
container.innerHTML = headerHTML;

const header = container.firstChild;
const nav = header.querySelector('nav');
const hamburger = header.querySelector('.hamburger-menu');
let isAnimating = false;
function toggleNav() {
  if (isAnimating) return;
  isAnimating = true;
  
  
  const event = new CustomEvent('toggleMenu');
  document.dispatchEvent(event);
  
  const isOpen = hamburger.classList.toggle('open');
  const navHeight = nav.offsetHeight;
  if (navHeight === 0) nav.style.height = `${nav.scrollHeight}px`;
  else nav.style.height = 0;
  
  // Update aria attributes for accessibility
  hamburger.setAttribute('aria-expanded', isOpen);
  nav.setAttribute('aria-hidden', !isOpen);
  
  setTimeout(() => {
    isAnimating = false;
  }, 600);
}

hamburger.addEventListener('click', toggleNav);
document.addEventListener('toggleMenu', toggleNav);

nav.addEventListener('click', (e) => {
  if (e.target.dataset.link) {
    toggleNav();
    nav.querySelector('.button-active').classList.remove('button-active');
    e.target.classList.add('button-active');
  }
  document.dispatchEvent(new CustomEvent('navClick', {detail: e.target.dataset.link}));
});


export { header };