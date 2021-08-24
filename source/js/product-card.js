var addToCartBtn = document.querySelector('.card__add-btn');
var card = document.querySelector('.product-card-popup');
var closeCartBtn = document.querySelector('.product-card-popup__close-btn');

function tabIndexProductOn () {
  document.querySelectorAll('*').forEach((el) => el.setAttribute('tabindex', '-1'));
  document.querySelector('.product-card-popup__wrapper').querySelectorAll('*').forEach((a) => a.setAttribute('tabindex', 'auto'));
}

function tabIndexProductOff () {
  document.querySelectorAll('*').forEach((el) => el.setAttribute('tabindex', 'auto'));
}

function closeCart () {
  card.classList.toggle('product-card-popup--hidden');
  document.removeEventListener('keydown', closeCardEscCart);
  document.removeEventListener('click', closeClickCart);
  closeCartBtn.removeEventListener('click', closeCart);
  document.querySelector('.body').classList.remove('body--overflow');
  tabIndexProductOff();
}

function closeCardEscCart(evt) {
  if (isEscEvent(evt)) {
    card.classList.toggle('product-card-popup--hidden');
    document.removeEventListener('keydown', closeCardEscCart);
    document.removeEventListener('click', closeClickCart);
    closeCartBtn.removeEventListener('click', closeCart);
    document.querySelector('.body').classList.remove('body--overflow');
    tabIndexProductOff();
  }
}

function closeClickCart (evt) {
  if(evt.target === card) {
    card.classList.toggle('product-card-popup--hidden');
    document.removeEventListener('click', closeClickCart);
    document.removeEventListener('keydown', closeCardEscCart);
    closeCartBtn.removeEventListener('click', closeCart);
    document.querySelector('.body').classList.remove('body--overflow');
    tabIndexProductOff();
  }
}

function addToCart () {
  card.classList.toggle('product-card-popup--hidden');
  document.addEventListener('keydown', closeCardEscCart);
  document.addEventListener('click', closeClickCart);
  closeCartBtn.addEventListener('click', closeCart);
  document.querySelector('.body').classList.toggle('body--overflow');
  tabIndexProductOn();
}

if(addToCartBtn) {
  addToCartBtn.addEventListener('click', addToCart, false);
}
