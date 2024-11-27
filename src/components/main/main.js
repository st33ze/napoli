import mainHTML from './main.html';
import './main.css'

import { loadHome } from './pages/home/home.js';
import { loadMenu } from './pages/menu/menu.js';

export function loadMain(parent) {
  parent.insertAdjacentHTML('beforeend', mainHTML);
  const main = parent.querySelector('main');
  loadHome(main);
  // loadMenu(main);

  const overlay = main.querySelector('.overlay');
  document.addEventListener('toggleMenu', () => {
    overlay.classList.toggle('active');
  });
}