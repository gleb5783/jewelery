var allDropDownFilterBtn = document.querySelectorAll('.catalog__filter-show-btn');
var filterShowBtn = document.querySelector('.catalog__tablet-show-filter');
var filterCloseBtn = document.querySelector('.catalog__close-form');

allDropDownFilterBtn.forEach((element) => element.addEventListener('click', () => {
    var parent = element.closest('fieldset').querySelector('div');
    element.classList.toggle('catalog__filter-show-btn--open');
    parent.classList.toggle('catalog__material-checkbox--hidden');
  })
);

function closeFormFilter (evt) {
  if (evt.target === document.querySelector('.catalog__filter')) {
    document.querySelector('.catalog__filter').classList.toggle('catalog__filter--hidden');
    filterCloseBtn.removeEventListener('click', closeForm);
    filterCloseBtn.removeEventListener('click', closeFormFilter);
  }
}

function closeForm () {
  document.querySelector('.catalog__filter').classList.toggle('catalog__filter--hidden');
  filterCloseBtn.removeEventListener('click', closeForm);
  filterCloseBtn.removeEventListener('click', closeFormFilter);
}

function openFilter() {
  document.addEventListener('click', closeFormFilter);
  document.querySelector('.catalog__filter').classList.toggle('catalog__filter--hidden');
  filterCloseBtn.addEventListener('click', closeForm);
}

if (filterShowBtn) {
  filterShowBtn.addEventListener('click', openFilter, false);
}
