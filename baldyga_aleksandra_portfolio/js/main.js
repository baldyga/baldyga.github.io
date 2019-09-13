const times = document.querySelector('.fa-times');
const bars = document.querySelector('.fa-bars');
const btnCap = document.querySelector('.fa-graduation-cap');
const btnClose = document.querySelector('.fa-times-circle');
const spanContact = document.querySelector('.spnContact');

function navBurger() {
    const nav = document.querySelector('nav');

    times.classList.toggle('hidden');
    bars.classList.toggle('hidden');
    nav.classList.toggle('hidden');
}
times.addEventListener('click', navBurger);
bars.addEventListener('click', navBurger);


function moreInfo() {
    const divMore = document.querySelector('.more');
    divMore.classList.toggle('inactive');
}
btnCap.addEventListener('click', moreInfo);
btnClose.addEventListener('click', moreInfo);

function form() {
    const activeForm = document.querySelector('.cooperation');
    activeForm.classList.toggle('form');
    const h4 = document.querySelector('.contacth4');
    h4.classList.add('color');
}
spanContact.addEventListener('click', form);