const times = document.querySelector('.fa-times');
const bars = document.querySelector('.fa-bars');
const btnContact = document.querySelector('.btnContact');

function navBurger() {
    const nav = document.querySelector('nav');

    times.classList.toggle('hidden');
    bars.classList.toggle('hidden');
    nav.classList.toggle('hidden');
}
times.addEventListener('click', navBurger);
bars.addEventListener('click', navBurger);


function form() {
    const activeForm = document.querySelector('.cooperation');
    activeForm.classList.toggle('form');
    const h4 = document.querySelector('.contacth4');
}
btnContact.addEventListener('click', form);
