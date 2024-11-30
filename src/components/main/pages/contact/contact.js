import contactHTML from './contact.html';
import './contact.css';

const container = document.createElement('div');
container.innerHTML = contactHTML;
const contactPage = container.firstChild;

export { contactPage }