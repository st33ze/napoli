import homeHTML from './home.html';
import './home.css';

const container = document.createElement('div');
container.innerHTML = homeHTML;
const homePage = container.firstChild

export { homePage };