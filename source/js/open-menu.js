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
