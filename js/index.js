//mobile menu

const burgerIcon = document.querySelector('#burger');
const navMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navMenu.classList.toggle('is-active');
});

//Button New Tab Handler

const githubButton = document.querySelector('#github-button');
const discordButton = document.querySelector('#discord-button');
const statifyLinkButton = document.querySelector('#statify-url');
const statifyInviteButton = document.querySelector('#statify-invite');
const statifyDiscordButton = document.querySelector('#statify-discord');
const statifyGitHubButton = document.querySelector('#statify-github');
const croupierInviteButton = document.querySelector('#croupier-invite');
const croupierGitHubButton = document.querySelector('#croupier-github');
const redcodesLinkButton = document.querySelector('#redcodes-link');
const redcodesGitHubButton = document.querySelector('#redcodes-github');
const slockDownloadButton = document.querySelector('#slock-download');
const slockGitHubButton = document.querySelector('#slock-github');

githubButton.addEventListener('click', () => {
    window.open("https://github.com/RedstonecraftHD", "_blank");
});

discordButton.addEventListener('click', () => {
    window.open("https://statifybot.net/discord/", "_blank");
});

statifyLinkButton.addEventListener('click', () => {
    window.open("https://statifybot.net/", "_blank");
});

statifyInviteButton.addEventListener('click', () => {
    window.open("https://statifybot.net/invite/", "_blank");
});

statifyDiscordButton.addEventListener('click', () => {
    window.open("https://statifybot.net/discord/", "_blank");
});

statifyGitHubButton.addEventListener('click', () => {
    window.open("https://github.com/StatifyBot", "_blank");
});

croupierInviteButton.addEventListener('click', () => {
    window.open("https://discord.com/oauth2/authorize?client_id=828674781196582974&scope=bot&permissions=2147871808", "_blank");
});

croupierGitHubButton.addEventListener('click', () => {
    window.open("https://github.com/RedstonecraftHD/Croupier", "_blank");
});

redcodesGitHubButton.addEventListener('click', () => {
    window.open("https://github.com/RedstonecraftHD/Redcodes.dev", "_blank");
});

redcodesLinkButton.addEventListener('click', () => {
    window.open("https://redcodes.dev/", "_blank");
});

slockGitHubButton.addEventListener('click', () => {
    window.open("https://github.com/RedstonecraftHD/Slock", "_blank");
});

slockDownloadButton.addEventListener('click', () => {
    window.open("https://www.spigotmc.org/resources/slock-advanced-server-locker.68672/", "_blank");
});
