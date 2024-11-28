import mainHTML from './main.html';
import './main.css'

import { homePage } from './pages/home/home.js';
import { menuPage } from './pages/menu/menu.js';

export function loadMain(app) {
  app.insertAdjacentHTML('beforeend', mainHTML);
  const main = document.querySelector('main');

  const overlay = main.querySelector('.overlay');
  document.addEventListener('toggleMenu', () => {
    overlay.classList.toggle('active');
  });

  const pageContainer = main.querySelector('.page');
  const routes = {
    '/': homePage,
    '/menu': menuPage,
  }

  document.addEventListener('navClick', (e) => {
    console.log(e.detail in routes);
    if (e.detail in routes) {
      renderPage(pageContainer, routes[e.detail]);
    }
  });
  
  renderPage(pageContainer, routes['/']);
}

function renderPage(container, page) {
  container.innerHTML = '';
  container.appendChild(page);
}