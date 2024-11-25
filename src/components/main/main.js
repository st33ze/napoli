
import home from './pages/home/home.html';
import './pages/home/home.css';
import './pages/home/home.js';

document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  main.insertAdjacentHTML('beforeend', home);
});