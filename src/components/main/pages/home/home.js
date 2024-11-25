import homeHTML from './home.html';
import './home.css';

export function loadHome(parent) {
  parent.insertAdjacentHTML('beforeend', homeHTML);
}