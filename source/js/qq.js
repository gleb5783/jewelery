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
