// preloader
const preloader = document.querySelector('section.wrapper');

window.addEventListener('load', ()=> {
    preloader.classList.add('preloader-hiding');
});

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

