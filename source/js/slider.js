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
            dots: true,
            slidesToScroll: 2,
            arrows: false
          }
        }
      ]
  });
});
