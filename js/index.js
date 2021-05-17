//mobile menu

const burgerIcon = document.querySelector('#burger');
const navMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navMenu.classList.toggle('is-active');
});
