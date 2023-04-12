import toggleScrollHtml from './toggleScrollHtml.js';

//адаптивное меню

function adaptiveMenuPets() {
  const hamburger = document.querySelector('.header__menu-line');
  const adaptiveMenuLinks = document.querySelectorAll('.adaptive_menu__li');
  const adaptiveMenuPets = document.querySelector('.adaptive_menu_pets');

  function toggleMenu() {
    adaptiveMenuPets.classList.toggle('active');
    hamburger.classList.toggle('active');
  }

  //открытие адаптивного меню
  hamburger.addEventListener('click', (e) => {
    let tar = e.target;
    if (hamburger.contains(tar)) {
      toggleMenu();
      toggleScrollHtml();
    }
  });

  //закрытие по области вне меню
  document.addEventListener('click', (e) => {
    let tar = e.target;
    if (
      adaptiveMenuPets.classList.contains('active') &&
      !hamburger.contains(tar) &&
      !adaptiveMenuPets.contains(tar)
    ) {
      toggleMenu();
      toggleScrollHtml();
    }
  });

  //закрытие по ссылке в адаптивном меню
  adaptiveMenuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (adaptiveMenuPets.classList.contains('active')) {
        toggleMenu();
        toggleScrollHtml();
      }
    });
  });
}

export default adaptiveMenuPets;
