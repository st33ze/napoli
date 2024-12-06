import mainHTML from './main.html';
import './main.css'

import { homePage } from './pages/home/home.js';
import { menuPage } from './pages/menu/menu.js';
import { contactPage } from './pages/contact/contact.js';


const container = document.createElement('div');
container.innerHTML = mainHTML;
const main = container.firstChild;

const overlay = main.querySelector('.overlay');
document.addEventListener('toggleMenu', () => {
  overlay.classList.toggle('active');
});
overlay.addEventListener('click', () => {
  const event = new CustomEvent('toggleMenu');
  document.dispatchEvent(event);
  overlay.classList.toggle('active');
})
window.addEventListener('resize', () => overlay.classList.remove('active'));

const pageContainer = main.querySelector('.page');
const routes = {
  '/': homePage,
  '/menu': menuPage,
  '/contact': contactPage,
}

// Initial home page render
renderPage(pageContainer, routes['/']);

document.addEventListener('navClick', (e) => {
  if(e.detail in routes) navigateTo(e.detail);
});
window.addEventListener('popstate', () => {
  const path = window.location.pathname;
  renderPage(pageContainer, routes[path]);
  document.querySelector('.button-active').classList.remove('button-active');
  document.querySelector(`[data-link="${path}"]`).classList.add('button-active');
});

function navigateTo(path) {
  if (window.location.pathname === path) return;
  history.pushState(null, '', path);
  renderPage(pageContainer, routes[path]);
}
function renderPage(container, page) {
  container.innerHTML = '';
  container.classList.add('fade-in');
  container.appendChild(page);
  setTimeout(() => {
    container.classList.remove('fade-in');
  }, 1000);
}

export { main };