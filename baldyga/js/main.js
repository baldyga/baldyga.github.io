const times = document.querySelector('.fa-times');
const bars = document.querySelector('.fa-bars');

function navBurger() {
    const nav = document.querySelector('nav');

    times.classList.toggle('hidden');
    bars.classList.toggle('hidden');
    nav.classList.toggle('hidden');
}
times.addEventListener('click', navBurger);
bars.addEventListener('click', navBurger);