import toggleScrollHtml from './toggleScrollHtml.js';

//адаптивное меню

function adaptiveMenu() {
  const hamburger = document.querySelector('.header__menu-line');
  const windowAdaptiveMenu = document.querySelector('.adaptive_menu');
  const adaptiveMenuLinks = document.querySelectorAll('.adaptive_menu__li');
  const adaptiveMenuPets = document.querySelectorAll('.adaptive_menu_pets');

  function toggleMenu() {
    windowAdaptiveMenu.classList.toggle('active');
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
      windowAdaptiveMenu.classList.contains('active') &&
      !hamburger.contains(tar) &&
      !windowAdaptiveMenu.contains(tar)
    ) {
      toggleMenu();
      toggleScrollHtml();
    }
  });

  //закрытие по ссылке в адаптивном меню
  adaptiveMenuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (windowAdaptiveMenu.classList.contains('active')) {
        toggleMenu();
        toggleScrollHtml();
      }
    });
  });
}

export default adaptiveMenu;
