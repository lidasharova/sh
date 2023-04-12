import { renderModal } from './renderElements.js';
import toggleScrollHtml from './toggleScrollHtml.js';

//флаг для проверки открытия формы
let modalOpen = false;
const html = document.documentElement;

//работа с модальным окном
function handlerModal() {
  //находим карточки на которые вешаем прослушку
  let cards = document.querySelectorAll('.slider_item');
  cards.forEach((item) => {
    item.addEventListener('click', (e) => {
      //находим id карточки по которой кликнули
      let id = e.currentTarget.id;
      //рисуем модалку ,передаем id элемента
      modalOpen = true;
      renderModal(id);
      //отключаем скролл на странице
      toggleScrollHtml();

      //закрытие модалки по клику на крестик или оверлей
      let modalCloseBtn = document.querySelector('.modalCloseBtn');
      let overlay = document.querySelector('.modal-overlay');
      //закрытие формы на крестик
      modalCloseBtn.addEventListener('click', (e) => {
        let classes = e.target.classList;
        if (
          classes.contains('modal-overlay') ||
          classes.contains('modalCloseBtn')
        ) {
          html.classList.remove('scroll-lock');
          html.classList.add('scrollable');
          overlay.remove();
          modalOpen = false;
        }
      });

      //закрытие формы на оверлей
      overlay.addEventListener('click', (e) => {
        let classes = e.target.classList;
        if (
          classes.contains('modal-overlay') ||
          classes.contains('modalCloseBtn')
        ) {
          html.classList.remove('scroll-lock');
          html.classList.add('scrollable');
          overlay.remove();
          modalOpen = false;
        }
      });
    });
  });
}

export default handlerModal;
