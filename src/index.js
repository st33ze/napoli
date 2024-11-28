import './styles.css';

// import { loadHeader } from './components/header/header.js';
// import { loadMain } from './components/main/main.js';
import { header } from './components/header/header.js';

const app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);

// loadHeader(app);
// loadMain(app);

app.appendChild(header);