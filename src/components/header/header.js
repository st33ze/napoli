document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const nav = header.querySelector('nav');
  const menu = header.querySelector('.hamburger-menu');
  const overlay = document.querySelector('.overlay');
  menu.addEventListener('click', () => {
    menu.classList.toggle('opened');
    nav.classList.toggle('opened');
    overlay.classList.toggle('active');
  })
});