var allDropDownBtn = document.querySelectorAll('.about-us__item-button');

allDropDownBtn.forEach((element) => element.addEventListener('click', () => {
    var parent = element.closest('li').querySelector('p');
    element.classList.toggle('about-us__item-button--open');
    parent.classList.toggle('about-us__text--hidden');
  })
);
