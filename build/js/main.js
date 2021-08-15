var allDropDownBtn = document.querySelectorAll('.about-us__item-button');

allDropDownBtn.forEach((element) => element.addEventListener('click', () => {
    var parent = element.closest('li').querySelector('p');
    element.classList.toggle('about-us__item-button--open');
    parent.classList.toggle('about-us__text--hidden');
  })
);

var allDropDownFilterBtn = document.querySelectorAll('.catalog__filter-show-btn');
var filterShowBtn = document.querySelector('.catalog__tablet-show-filter');
var filterCloseBtn = document.querySelector('.catalog__close-form');

allDropDownFilterBtn.forEach((element) => element.addEventListener('click', () => {
    var parent = element.closest('fieldset').querySelector('div');
    element.classList.toggle('catalog__filter-show-btn--open');
    parent.classList.toggle('catalog__filter--hidden');
  })
);

function closeFormFilter (evt) {
  if (evt.target === document.querySelector('.catalog__filter')) {
    document.querySelector('.catalog__filter').classList.toggle('catalog__filter-form--hidden');
    filterCloseBtn.removeEventListener('click', closeForm);
    filterCloseBtn.removeEventListener('click', closeFormFilter);
  }
}

function closeForm () {
  document.querySelector('.catalog__filter').classList.toggle('catalog__filter-form--hidden');
  filterCloseBtn.removeEventListener('click', closeForm);
  filterCloseBtn.removeEventListener('click', closeFormFilter);
}

function openFilter() {
  document.addEventListener('click', closeFormFilter);
  document.querySelector('.catalog__filter').classList.toggle('catalog__filter-form--hidden');
  filterCloseBtn.addEventListener('click', closeForm);
}

if (filterShowBtn) {
  filterShowBtn.addEventListener('click', openFilter, false);
}

var openMenuBtn = document.querySelector('.header__burger');

openMenuBtn.addEventListener('click', function () {
  document.querySelector('.header__list').classList.toggle('header__list--open');
  document.querySelector('.header__input-wrapper').classList.toggle('header__input-wrapper--menu-hidden');
  openMenuBtn.classList.toggle('header__burger--open');
  document.querySelector('.header__input').classList.toggle('header__input--hidden');
  document.querySelector('.header__logo').classList.toggle('header__logo--menu');
  document.querySelector('.header__login').classList.toggle('header__login--vission');
  document.querySelector('.header__basket').classList.toggle('header__basket--open');
  document.querySelector('.header__list-item-bottom-group').classList.toggle('header__list-item-bottom-group--hidden');
});

var ESC_BUTTON = 'Esc';
var ESCAPE_BUTTON = 'Escape';
var login = document.querySelector('.login');
var closePopupButton = document.querySelector('.login__close');
var openPopup = document.querySelector('.header__login');

function isEscEvent(evt) {
  return evt.key === ESCAPE_BUTTON || evt.key === ESC_BUTTON;
}

function asd () {
  document.querySelectorAll('*').forEach((el) => el.setAttribute('tabindex', '-1'));
  login.querySelectorAll('*').forEach((a) => a.setAttribute('tabindex', 'auto'));
}

function zxc () {
  document.querySelectorAll('*').forEach((el) => el.setAttribute('tabindex', 'auto'));
}

function closeEscMenu(evt) {
  if (isEscEvent(evt)) {
    login.classList.add('login--hidden');
    document.body.style.overflow = 'auto';
    zxc();
  }
}

function closeClickPopup(evt) {
  if(evt.target === login) {
    login.classList.add('login--hidden');
    document.body.style.overflow = 'auto';
    zxc();
  }
}

var closePopup = () => {
  document.removeEventListener('click', closeClickPopup);
  document.removeEventListener('keydown', closeEscMenu);
  login.classList.add('login--hidden');
  document.body.style.overflow = 'auto';
  zxc();
}

var showPopup = (evt) => {
  evt.preventDefault();
  document.addEventListener('click', closeClickPopup);
  document.addEventListener('keydown', closeEscMenu);
  login.classList.remove('login--hidden');
  document.body.style.overflow = 'hidden';
  asd();
}

openPopup.addEventListener('click', showPopup);
closePopupButton.addEventListener('click', closePopup);

var addToCartBtn = document.querySelector('.card__add-btn');
var card = document.querySelector('.product-card-popup');
var closeCartBtn = document.querySelector('.product-card-popup__close-btn');

function closeCart () {
  card.classList.toggle('product-card-popup--hidden');
  document.removeEventListener('keydown', closeCardEscCart);
  document.removeEventListener('click', closeClickCart);
  closeCartBtn.removeEventListener('click', closeCart);
}

function closeCardEscCart(evt) {
  if (isEscEvent(evt)) {
    card.classList.toggle('product-card-popup--hidden');
    document.removeEventListener('keydown', closeCardEscCart);
    document.removeEventListener('click', closeClickCart);
    closeCartBtn.removeEventListener('click', closeCart);
  }
}

function closeClickCart (evt) {
  if(evt.target === card) {
    card.classList.toggle('product-card-popup--hidden');
    document.removeEventListener('click', closeClickCart);
    document.removeEventListener('keydown', closeCardEscCart);
    closeCartBtn.removeEventListener('click', closeCart);
  }
}

function addToCart () {
  card.classList.toggle('product-card-popup--hidden');
  document.addEventListener('keydown', closeCardEscCart);
  document.addEventListener('click', closeClickCart);
  closeCartBtn.addEventListener('click', closeCart);
}

if(addToCartBtn) {
  addToCartBtn.addEventListener('click', addToCart, false);
}

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
