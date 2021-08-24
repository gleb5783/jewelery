var ESC_BUTTON = 'Esc';
var ESCAPE_BUTTON = 'Escape';
var login = document.querySelector('.login');
var closePopupButton = document.querySelector('.login__close');
var openPopup = document.querySelectorAll('.header__login');


function isEscEvent(evt) {
  return evt.key === ESCAPE_BUTTON || evt.key === ESC_BUTTON;
}

function tabIndexOn () {
  document.querySelectorAll('*').forEach((el) => el.setAttribute('tabindex', '-1'));
  login.querySelectorAll('*').forEach((a) => a.setAttribute('tabindex', 'auto'));
}

function tabIndexOff () {
  document.querySelectorAll('*').forEach((el) => el.setAttribute('tabindex', 'auto'));
}

function closeEscMenu(evt) {
  if (isEscEvent(evt)) {
    login.classList.add('login--hidden');
    document.body.style.overflow = 'auto';
    tabIndexOff();
  }
}

function closeClickPopup(evt) {
  if(evt.target === login) {
    login.classList.add('login--hidden');
    document.body.style.overflow = 'auto';
    tabIndexOff();
  }
}

var closePopup = () => {
  document.removeEventListener('click', closeClickPopup);
  document.removeEventListener('keydown', closeEscMenu);
  login.classList.add('login--hidden');
  document.body.style.overflow = 'auto';
  tabIndexOff();
}

var showPopup = (evt) => {
  evt.preventDefault();
  document.addEventListener('click', closeClickPopup);
  document.addEventListener('keydown', closeEscMenu);
  login.classList.remove('login--hidden');
  document.querySelector('.login__input-wrapper input[type=email]').focus();
  document.body.style.overflow = 'hidden';
  tabIndexOn();
}

openPopup.forEach((link) => link.addEventListener('click', showPopup));

// openPopup.addEventListener('click', showPopup);
closePopupButton.addEventListener('click', closePopup);
