import './styles.css';

import { header } from './components/header/header.js';
import { main } from './components/main/main.js';

const app = document.createElement('div');
app.id = 'app';
document.body.appendChild(app);

app.appendChild(header);
app.appendChild(main);
