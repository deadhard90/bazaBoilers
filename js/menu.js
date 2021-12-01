const openMenuEl = document.querySelector('[data-menu-button]');
const menuEl = document.querySelector('[nav-bar-left]');
const burgerEl = document.querySelector('[data-burger]');
const blackWindowEl = document.querySelector('[data-black-window]');
const bodyEl = document.body;

openMenuEl.addEventListener('mousedown', (event) => {
    if (event) {
        menuEl.classList.toggle('show-menu');
        blackWindowEl.classList.toggle('black-window-show');
        bodyEl.classList.toggle('scroll-fixed');
    } else {
        menuEl.classList.toggle('menu');
    }
});

openMenuEl.addEventListener('mousedown', (event) => {
    if (event) {
        burgerEl.classList.toggle('close');
        openMenuEl.classList.toggle('change-color');
    } else {
        burgerEl.classList.toggle('burger');
    }
});
