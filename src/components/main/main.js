import mainHTML from './main.html';
import './main.css'

import { homePage } from './pages/home/home.js';
import { menuPage } from './pages/menu/menu.js';


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

const pageContainer = main.querySelector('.page');
const routes = {
  '/': homePage,
  '/menu': menuPage,
}

// Initial home page render
renderPage(pageContainer, routes['/']);

document.addEventListener('navClick', (e) => {
  if(e.detail in routes) {
    renderPage(pageContainer, routes[e.detail]);
  }
});

function renderPage(container, page) {
  container.innerHTML = '';
  container.classList.add('fade-in');
  container.appendChild(page);
  setTimeout(() => {
    container.classList.remove('fade-in');
  }, 1000);
}

export { main };