//ф-ция для отрисовки рандомной карусели
const data = [
  {
    id: 0,
    name: 'Jennifer',
    img: './assets/img/our-friends/0.png',
    type: 'Dog',
    breed: 'Labrador',
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: '2 months',
    inoculations: ['none'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    id: 1,
    name: 'Sophia',
    img: './assets/img/our-friends/1.png',
    type: 'Dog',
    breed: 'Shih tzu',
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: '1 month',
    inoculations: ['parvovirus'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    id: 2,
    name: 'Woody',
    img: './assets/img/our-friends/2.png',
    type: 'Dog',
    breed: 'Golden Retriever',
    description:
      'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.',
    age: '3 years 6 months',
    inoculations: ['adenovirus', 'distemper'],
    diseases: ['right back leg mobility reduced'],
    parasites: ['none'],
  },
  {
    id: 3,
    name: 'Scarlett',
    img: './assets/img/our-friends/3.png',
    type: 'Dog',
    breed: 'Jack Russell Terrier',
    description:
      'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.',
    age: '3 months',
    inoculations: ['parainfluenza'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    id: 4,
    name: 'Katrine',
    img: './assets/img/our-friends/4.png',
    type: 'Cat',
    breed: 'British Shorthair',
    description:
      'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.',
    age: '6 months',
    inoculations: ['panleukopenia'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    id: 5,
    name: 'Timmy',
    img: './assets/img/our-friends/5.png',
    type: 'Cat',
    breed: 'British Shorthair',
    description:
      'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.',
    age: '2 years 3 months',
    inoculations: ['calicivirus', 'viral rhinotracheitis'],
    diseases: ['kidney stones'],
    parasites: ['none'],
  },
  {
    id: 6,
    name: 'Freddie',
    img: './assets/img/our-friends/6.png',
    type: 'Cat',
    breed: 'British Shorthair',
    description:
      'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.',
    age: '2 months',
    inoculations: ['rabies'],
    diseases: ['none'],
    parasites: ['none'],
  },
  {
    id: 7,
    name: 'Charly',
    img: './assets/img/our-friends/7.png',
    type: 'Dog',
    breed: 'Jack Russell Terrier',
    description:
      'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.',
    age: '8 years',
    inoculations: ['bordetella bronchiseptica', 'leptospirosis'],
    diseases: ['deafness', 'blindness'],
    parasites: ['lice', 'fleas'],
  },
];

//КАРУСЕЛЬ
function renderCarousel(randomArray) {
  let containerCarousel = document.getElementById('our-friends__slider');

  let htmlCarousel = `
  								<div class="slider-left" id="slider-left">
									<div class="our-friends__slider__card slider_item" id="${
                    data[randomArray[0]].id
                  }">
										<div class="card card__img_${randomArray[0]}"></div>
										<div class="card__title">${data[randomArray[0]].name}</div>
										<button class="card__button">Learn more</button>
									</div>
									<div class="our-friends__slider__card slider_item" id ="${
                    data[randomArray[1]].id
                  }">
										<div class="card card__img_${randomArray[1]}"></div>
										<div class="card__title">${data[randomArray[1]].name}</div>
										<button class="card__button">Learn more</button>
									</div>
									<div class="our-friends__slider__card slider_item" id ="${
                    data[randomArray[2]].id
                  }">
										<div class="card card__img_${randomArray[2]}"></div>
										<div class="card__title">${data[randomArray[2]].name}</div>
										<button class="card__button">Learn more</button>
									</div>
								</div>
								<div class="slider-active" id="slider-active">
									<div class="our-friends__slider__card slider_item" id ="${
                    data[randomArray[3]].id
                  }">
										<div class="card card__img_${randomArray[3]}"></div>
										<div class="card__title">${data[randomArray[3]].name}</div>
										<button class="card__button">Learn more</button>
									</div>
									<div class="our-friends__slider__card slider_item" id ="${
                    data[randomArray[4]].id
                  }">
										<div class="card card__img_${randomArray[4]}"></div>
										<div class="card__title">${data[randomArray[4]].name}</div>
										<button class="card__button">Learn more</button>
									</div>
									<div class="our-friends__slider__card slider_item" id ="${
                    data[randomArray[5]].id
                  }">
										<div class="card card__img_${randomArray[5]}"></div>
										<div class="card__title">${data[randomArray[5]].name}</div>
										<button class="card__button">Learn more</button>
									</div>
								</div>
								<div class="slider-right" id="slider-right">
									<div class="our-friends__slider__card slider_item" id ="${
                    data[randomArray[6]].id
                  }">
										<div class="card card__img_${randomArray[6]}"></div>
										<div class="card__title">${data[randomArray[6]].name}</div>
										<button class="card__button">Learn more</button>
									</div>
									<div class="our-friends__slider__card slider_item" id ="${
                    data[randomArray[7]].id
                  }">
										<div class="card card__img_${randomArray[7]}"></div>
										<div class="card__title">${data[randomArray[7]].name}</div>
										<button class="card__button">Learn more</button>
									</div>
									<div class="our-friends__slider__card slider_item" id ="${
                    data[randomArray[8]].id
                  }">
										<div class="card card__img_${randomArray[8]}"></div>
										<div class="card__title">${data[randomArray[8]].name}</div>
										<button class="card__button">Learn more</button>
									</div>
								</div>
      `;

  //отрисовка в нужном контейнере
  containerCarousel.insertAdjacentHTML('beforeend', htmlCarousel);
}

////МОДАЛКА
//ф-ция отрисовки модального окна
function renderModal(id) {
  let containerModal = document.getElementById('our-friends__wrapper');

  let htmlModal = `<div class="modal-overlay">
						<div class="modal">
							<div class="modalCloseBtn"></div>
							<div class="modalContent">
								<div class="modalContentImg">
									<img src="${data[id].img}" alt="${data[id].name}" class="petImg">
								</div>
								<div class="modalContentText">
									<h3 class="modalContentTitle">${data[id].name}</h3>
									<h4 class="modalContentTitleMini">${data[id].type}-${data[id].breed}</h4>
									<p class="modalContentDescription">${data[id].description}</p>
									<ul class="modalContentOptions">
										<li class="modalContentLi">
                    <span>Age:</span>
                    <span>${data[id].age}</span>
                    </li>
										<li class="modalContentLi">
                     <span>Inoculations:</span>
                    <span>${data[id].inoculations}</span>
                    </li>
										<li class="modalContentLi">
                     <span>Diseases:</span>
                    <span>${data[id].diseases}</span>
                    </li>
                    <li class="modalContentLi">
                     <span>Parasites:</span>
                     <span>${data[id].parasites}</span>
                     </li>
									</ul>
								</div>
							</div>
						</div>
					</div>
  `;

  //отрисовка в нужном контейнере
  containerModal.insertAdjacentHTML('beforeend', htmlModal);
}

///КАРТОЧКИ
function renderPetsCards(randomArray) {
  let containerPetsCards = document.getElementById('our-pets__slider');

  let htmlPetsCards = `
              <div class="our-friends__slider__card slider_item" id="${
                data[randomArray[0]].id
              }">
										<div class="card card__img_${randomArray[0]}"></div>
										<div class="card__title">${data[randomArray[0]].name}</div>
										<button class="card__button">Learn more</button>
									</div>
									<div class="our-friends__slider__card slider_item" id ="${
                    data[randomArray[1]].id
                  }">
										<div class="card card__img_${randomArray[1]}"></div>
										<div class="card__title">${data[randomArray[1]].name}</div>
										<button class="card__button">Learn more</button>
									</div>
									<div class="our-friends__slider__card slider_item" id ="${
                    data[randomArray[2]].id
                  }">
										<div class="card card__img_${randomArray[2]}"></div>
										<div class="card__title">${data[randomArray[2]].name}</div>
										<button class="card__button">Learn more</button>
									</div>

                  <div class="our-friends__slider__card slider_item" id ="${
                    data[randomArray[3]].id
                  }">
										<div class="card card__img_${randomArray[3]}"></div>
										<div class="card__title">${data[randomArray[3]].name}</div>
										<button class="card__button">Learn more</button>
									</div>
									<div class="our-friends__slider__card slider_item" id ="${
                    data[randomArray[4]].id
                  }">
										<div class="card card__img_${randomArray[4]}"></div>
										<div class="card__title">${data[randomArray[4]].name}</div>
										<button class="card__button">Learn more</button>
									</div>
									<div class="our-friends__slider__card slider_item" id ="${
                    data[randomArray[5]].id
                  }">
										<div class="card card__img_${randomArray[5]}"></div>
										<div class="card__title">${data[randomArray[5]].name}</div>
										<button class="card__button">Learn more</button>
									</div>
                  <div class="our-friends__slider__card slider_item" id ="${
                    data[randomArray[6]].id
                  }">
										<div class="card card__img_${randomArray[6]}"></div>
										<div class="card__title">${data[randomArray[6]].name}</div>
										<button class="card__button">Learn more</button>
									</div>
									<div class="our-friends__slider__card slider_item" id ="${
                    data[randomArray[7]].id
                  }">
										<div class="card card__img_${randomArray[7]}"></div>
										<div class="card__title">${data[randomArray[7]].name}</div>
										<button class="card__button">Learn more</button>
									</div>
									<div class="our-friends__slider__card slider_item" id ="${
                    data[randomArray[8]].id
                  }">
										<div class="card card__img_${randomArray[8]}"></div>
										<div class="card__title">${data[randomArray[8]].name}</div>
										<button class="card__button">Learn more</button>
									</div>
			 `;
  //отрисовка в нужном контейнере
  containerPetsCards.insertAdjacentHTML('beforeend', htmlPetsCards);
}

export { renderCarousel, renderModal, renderPetsCards };
