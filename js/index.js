//mobile menu

const burgerIcon = document.querySelector('#burger');
const navMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navMenu.classList.toggle('is-active');
});

//Button New Tab Handler

const githubButton = document.querySelector('#github-button');
const discordButton = document.querySelector('#discord-button');

githubButton.addEventListener('click', () => {
    window.open("https://github.com/RedstonecraftHD", "_blank");
});

discordButton.addEventListener('click', () => {
    window.open("https://statifybot.net/discord/", "_blank");
});
