const times = document.querySelector('.fa-times');
const bars = document.querySelector('.fa-bars');
const preloader = document.querySelector('section.wrapper');

function navBurger() {
    const nav = document.querySelector('nav');

    times.classList.toggle('hidden');
    bars.classList.toggle('hidden');
    nav.classList.toggle('hidden');
}
times.addEventListener('click', navBurger);
bars.addEventListener('click', navBurger);

// preloader
window.addEventListener('load', ()=> {
    preloader.classList.add('preloader-hiding');
});

