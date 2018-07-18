$('.intro__slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  arrows: false
});

let $searchInput = $('.header-search__input-field');

$searchInput.focusout(() => {
  $searchInput.removeClass('active');
});

$('.header-search__icon').click(() => {
  $searchInput.addClass('active');
  $searchInput.focus();
});

// var ru = require('flatpickr/dist/l10n/ru.js').ru;

$('.languages').click(function() {
  $(this).toggleClass('active');
});

$(".input-date").flatpickr({
    locale: 'ru'
});

// new flatpickr(".input-date", {
//     locale: 'ru'
// });
