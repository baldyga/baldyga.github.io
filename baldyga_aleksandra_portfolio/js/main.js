const times = document.querySelector('.fa-times');
const bars = document.querySelector('.fa-bars');

function burger() {
    const nav = document.querySelector('nav');

    times.classList.toggle('hidden');
    bars.classList.toggle('hidden');
    nav.classList.toggle('hidden');
}
times.addEventListener('click', burger);
bars.addEventListener('click', burger);
