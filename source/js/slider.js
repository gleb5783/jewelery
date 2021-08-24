$(document).ready(function() {
  $('.main-product__slider-list').slick({
    dots: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 2,
            dots: true,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            dots: false,
            slidesToScroll: 2,
            arrows: false
          }
        }
      ]
  });

  $('.main-product__slider-list').on('afterChange', function(event, slick, currentSlide) {
    var curent = document.querySelector('.main-product__slider-dotted-current');

    if (currentSlide === 0) {
      curent.innerHTML = 1;
    }

    if (currentSlide === 2) {
      curent.innerHTML = 2;
    }

    if (currentSlide === 4) {
      curent.innerHTML = 3;
    }

    if (currentSlide === 6) {
      curent.innerHTML = 4;
    }

    if (currentSlide === 8) {
      curent.innerHTML = 5;
    }

    if (currentSlide === 10) {
      curent.innerHTML = 6;
    }

  });
});
