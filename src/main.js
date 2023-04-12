console.log(
  'Реализация burger menu на обеих страницах: +26\n\nРеализация слайдера-карусели на странице Main: +36\n\nРеализация попап на обеих страницах: +12'
);

import adaptiveMenu from './modules/adaptiveMenu.js';
import showSlider from './modules/showSlider.js';
import { renderCarousel, renderPetsCards } from './modules/renderElements.js';
import getRandomArray from '/src/modules/getRandomArray.js';
import handlerModal from '/src/modules/handlerModal.js';
import adaptiveMenuPets from './modules/adaptiveMenuPets.js';

//оболочка для загрузки контента в первую очередь
window.onload = function () {
  handlerModal();
  //создание уникального массива из 9 чисел для карточек
  let randomArray = getRandomArray();
  let body = document.body;
  if (body.classList.contains('body_main')) {
    //отрисовка карусели
    renderCarousel(randomArray);
    showSlider();
    // handlerModal();
    adaptiveMenu();
  } else if (body.classList.contains('body_pets')) {
    //отрисовка второй страницы
    renderPetsCards(randomArray);
    handlerModal();
    adaptiveMenuPets();
  }
};
