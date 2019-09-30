const times = document.querySelector('.fa-times');
const bars = document.querySelector('.fa-bars');
const spanContact = document.querySelector('.spnContact');

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
    h4.classList.add('color');
}
spanContact.addEventListener('click', form);

// scroll 
$(document).on('scroll', function () {

    const windowHeight = $(window).height()
    const scrollValue = $(this).scrollTop();

    const $mockup1 = $('.one');
    const mockup1FromTop = $mockup1.offset().top
    const mockup1Height = $mockup1.outerHeight()

    const $mockup2 = $('.two');
    const mockup2FromTop = $mockup2.offset().top
    const mockup2Height = $mockup2.outerHeight()
  
    const $mockup3 = $('.three');
    const mockup3FromTop = $mockup3.offset().top
    const mockup3Height = $mockup3.outerHeight()
  
  
    if (scrollValue > mockup1FromTop + mockup1Height / 2 - windowHeight) {
        $mockup1.addClass('active');
    }

    if (scrollValue > mockup2FromTop + mockup2Height / 2 - windowHeight) {
      $mockup2.addClass('active');
    }
  
    if (scrollValue > mockup3FromTop + mockup3Height / 2 - windowHeight) {
      $mockup3.addClass('active');
    }
  // clear
    if (scrollValue < 100) {
      $('div.project').removeClass('active');
    }
})