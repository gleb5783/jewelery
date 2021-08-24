var allDropDownFilterBtn = document.querySelectorAll('.catalog__filter-show-btn');
var filterShowBtn = document.querySelector('.catalog__tablet-show-filter');
var filterCloseBtn = document.querySelector('.catalog__close-form');
var clearFilter = document.querySelector('.catalog__btn--reset');

allDropDownFilterBtn.forEach((element) => element.addEventListener('click', () => {
    var parent = element.closest('fieldset').querySelector('div');
    element.classList.toggle('catalog__filter-show-btn--open');
    parent.classList.toggle('catalog__material-checkbox--hidden');
  })
);

function tabIndexFilterOn () {
  document.querySelectorAll('*').forEach((el) => el.setAttribute('tabindex', '-1'));
  document.querySelector('.catalog__filter').querySelectorAll('*').forEach((a) => a.setAttribute('tabindex', 'auto'));
}

function tabIndexFilterOff () {
  document.querySelectorAll('*').forEach((el) => el.setAttribute('tabindex', 'auto'));
}

function closeFormFilter (evt) {
  if (evt.target === document.querySelector('.catalog__filter')) {
    document.querySelector('.catalog__filter').classList.toggle('catalog__filter--hidden');
    filterCloseBtn.removeEventListener('click', closeForm);
    filterCloseBtn.removeEventListener('click', closeFormFilter);
    document.removeEventListener('keydown', closeEscFilter);
    document.querySelector('.body').classList.remove('body--overflow');
    tabIndexFilterOff();
  }
}

function closeEscFilter(evt) {
  if(isEscEvent(evt)) {
    document.querySelector('.catalog__filter').classList.toggle('catalog__filter--hidden');
    filterCloseBtn.removeEventListener('click', closeForm);
    filterCloseBtn.removeEventListener('click', closeFormFilter);
    document.removeEventListener('keydown', closeEscFilter);
    document.querySelector('.body').classList.remove('body--overflow');
    tabIndexFilterOff();
  }
}

function closeForm () {
  document.querySelector('.catalog__filter').classList.toggle('catalog__filter--hidden');
  filterCloseBtn.removeEventListener('click', closeForm);
  filterCloseBtn.removeEventListener('click', closeFormFilter);
  document.removeEventListener('keydown', closeEscFilter);
  document.querySelector('.body').classList.toggle('body--overflow');
  tabIndexFilterOff();
}

function openFilter() {
  document.addEventListener('click', closeFormFilter);
  document.querySelector('.catalog__filter').classList.toggle('catalog__filter--hidden');
  filterCloseBtn.addEventListener('click', closeForm);
  document.addEventListener('keydown', closeEscFilter);
  document.querySelector('.body').classList.toggle('body--overflow');
  tabIndexFilterOn();
}

if (filterShowBtn) {
  filterShowBtn.addEventListener('click', openFilter, false);
  clearFilter.addEventListener('click', function (){
    document.querySelector('#necklaces').checked = true;
    document.querySelector('#chokers').checked = true;
    document.querySelector('#rings').checked = false;
    document.querySelector('#earrings').checked = true;
    document.querySelector('#gold').checked = false;
    document.querySelector('#silver').checked = false;
    document.querySelector('#pink-flamingo').checked = false;
    document.querySelector('#dream').checked = false;
  });
}

