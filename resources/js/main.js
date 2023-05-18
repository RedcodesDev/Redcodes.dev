window.onload = function () {

    //Animate on Scroll
    AOS.init();



    //Particle JS
    particlesJS.load('particles-js', 'resources/libs/particlesjs-config.json');
    particlesJS.load('content-particles', 'resources/libs/content-particlesjs-config.json');


    recalculateSizes();

    var typewriterBox = document.getElementById('typewriter');
    var typewriter = new Typewriter(typewriterBox, {
        loop: true,
        delay: 1000,
    });

    typewriter
        .changeDelay(75)
        .pauseFor(500)
        .typeString('I\'m David')
        .pauseFor(1000)
        .deleteChars(5)
        .pauseFor(500)
        .typeString('a Developer')
        .pauseFor(1000)
        .deleteChars(11)
        .pauseFor(500)
        .typeString('a Student')
        .pauseFor(1000)
        .deleteChars(12)
        .pauseFor(500)
        .typeString(' ❤ to code')
        .pauseFor(500)
        .start();
}

window.onresize = function () {
    recalculateSizes();
}

function recalculateSizes() {
    var titlebox = document.getElementById('title-box');
    var typeWriterBox = document.getElementById('typewriter-box');

    titlebox.style.height = typeWriterBox.offsetHeight + 'px';
    titlebox.style.top = typeWriterBox.offsetTop + 'px';
    titlebox.style.left = typeWriterBox.offsetLeft + typeWriterBox.offsetWidth + 'px';


}