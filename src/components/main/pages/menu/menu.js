import menuHTML from './menu.html';
import './menu.css';
import data from './menu.json';

const container = document.createElement('div');
container.innerHTML = menuHTML;
const menuPage = container.firstChild;

const pizzas = menuPage.querySelector('.menu-pizza ul');
pizzas.innerHTML = data.pizzas.types.map(pizza => `
  <li>
    <h3>${pizza.name}</h3>
    <p>$${pizza.price}.00</p>
    <p class="ingredients">${data.pizzas.base.join(', ')}, ${pizza.ingredients.join(', ')}</p>
  </li>
`).join('');

const drinks = menuPage.querySelector('.menu-drinks ul');
drinks.innerHTML = data.drinks.map(drink => `
  <li>
    <h3>${drink.name}</h3>
    <p>$${drink.price}.00</p>
    <p class="ingredients">${drink.types.join(', ')}</p>
  </li>
`).join('');

export { menuPage };