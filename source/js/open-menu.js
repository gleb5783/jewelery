var openMenuBtn = document.querySelector('.header__burger');
var menuLink = document.querySelectorAll('.header__drop-meny-list a');

function escClose (evt) {
  if(isEscEvent(evt)) {
    menuToggle();
    document.removeEventListener('keydown', escClose);
    document.querySelector('.body').classList.remove('body--overflow');
  }
}

function menuToggle () {
  document.querySelector('.header__list').classList.toggle('header__list--open');
  document.querySelector('.header__input-wrapper').classList.toggle('header__input-wrapper--menu-hidden');
  openMenuBtn.classList.toggle('header__burger--open');
  document.querySelector('.header__input').classList.toggle('header__input--hidden');
  document.querySelector('.header__logo').classList.toggle('header__logo--menu');
  document.querySelector('.header__login').classList.toggle('header__login--vission');
  document.querySelector('.header__basket').classList.toggle('header__basket--open');
  document.querySelector('.header__list-item-bottom-group').classList.toggle('header__list-item-bottom-group--hidden');
  document.addEventListener('keydown', escClose);
  document.querySelector('.body').classList.toggle('body--overflow');
}

menuLink.forEach((el) => el.addEventListener('click', function() {
  menuToggle();
  document.removeEventListener('keydown', escClose);
  document.querySelector('.body').classList.remove('body--overflow');
}));

openMenuBtn.addEventListener('click', menuToggle);
