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