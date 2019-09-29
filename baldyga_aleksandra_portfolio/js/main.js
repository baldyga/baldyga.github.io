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

// scroll 
$(document).on('scroll', function () {

    const windowHeight = $(window).height()
    const scrollValue = $(this).scrollTop();

    const $art1 = $('div.mockup.p1');
    const art1FromTop = $art1.offset().top
    const art1Height = $art1.outerHeight()

    const $art2 = $('div.mockup.p2');
    const art2FromTop = $art2.offset().top
    const art2Height = $art2.outerHeight()
  
    const $art3 = $('div.mockup.p3');
    const art3FromTop = $art3.offset().top
    const art3Height = $art3.outerHeight()
  
  
    if (scrollValue > art1FromTop + art1Height - windowHeight) {
        $art1.addClass('active');
    }

    if (scrollValue > art2FromTop + art2Height - windowHeight) {
      $art2.addClass('active');
    }
  
    if (scrollValue > art3FromTop + art3Height - windowHeight) {
      $art3.addClass('active');
    }
  
  // clear
    if (scrollValue < 100) {
      $('div.mockup').removeClass('active');
    }
  })