import handlerModal from '/src/modules/handlerModal.js';

function showSlider() {
  //работа с кнопками
  let sliderActiveItems = document.querySelector('#slider-active');
  let sliderLeftItems = document.querySelector('#slider-left');
  let sliderRightItems = document.querySelector('#slider-right');
  const btnLeftSlider = document.querySelectorAll('.left-arrow');
  const btnRightSlider = document.querySelectorAll('.right-arrow');
  const carousel = document.querySelector('.our-friends__slider');

  //анимация ЛЕВАЯ кнопка
  const moveLeft = () => {
    carousel.classList.add('transition-left');

    //удаляем событие с кнопки во время анимации
    btnLeftSlider.forEach((btn) => {
      btn.removeEventListener('click', moveLeft);
    });
    btnRightSlider.forEach((btn) => {
      btn.removeEventListener('click', moveRight);
    });
    handlerModal();
  };

  //анимация ПРАВАЯ кнопка
  const moveRight = () => {
    carousel.classList.add('transition-right');
    //удаляем событие с кнопки во время анимации
    btnRightSlider.forEach((btn) => {
      btn.removeEventListener('click', moveRight);
    });
    btnLeftSlider.forEach((btn) => {
      btn.removeEventListener('click', moveLeft);
    });
    handlerModal();
  };

  //ПОСЛЕ АНИМАЦИИ
  carousel.addEventListener('animationend', (animationEvent) => {
    //условие по названию анимации
    if (
      animationEvent.animationName === 'move-left-desktop' ||
      animationEvent.animationName === 'move-left-laptop' ||
      animationEvent.animationName === 'move-left-mobile'
    ) {
      //удаляем класс
      carousel.classList.remove('transition-left');

      // //двигаем карточки
      sliderRightItems.innerHTML = sliderActiveItems.innerHTML;
      //меняем видимую страницу слайдера на левую
      sliderActiveItems.innerHTML = sliderLeftItems.innerHTML;
      sliderLeftItems.innerHTML = sliderRightItems.innerHTML;
    } else {
      //удаляем класс
      carousel.classList.remove('transition-right');
      //делаем невидимой активную часть
      sliderLeftItems.innerHTML = sliderActiveItems.innerHTML;
      //делаем видимой правую часть
      sliderActiveItems.innerHTML = sliderRightItems.innerHTML;
      //генерируем новую часть карусели
      sliderRightItems.innerHTML = sliderLeftItems.innerHTML;
    }
    //снова добавляем прослушку события на кнопки
    btnLeftSlider.forEach((btn) => {
      btn.addEventListener('click', moveLeft);
    });
    btnRightSlider.forEach((btn) => {
      btn.addEventListener('click', moveRight);
    });
    handlerModal();
  });

  //ПРОСЛУШКИ НА КНОПКИ
  btnLeftSlider.forEach((btn) => {
    btn.addEventListener('click', moveLeft);
  });
  btnRightSlider.forEach((btn) => {
    btn.addEventListener('click', moveRight);
  });
  handlerModal();
}

export default showSlider;
