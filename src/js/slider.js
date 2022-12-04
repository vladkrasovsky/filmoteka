import Swiper, { Navigation } from 'swiper';

// init Swiper:

export function onSlider() {
  const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  loop: true,
  initialSlide:0,
  slidesPerGroup: 1,
  autoHeight: true,

  slidesPerView: 2,
  spaceBetween: 20,

  breakpoints: {
    480: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 4,
      spaceBetween: 35,
    },

    1280: {
      slidesPerView: 8,
      spaceBetween: 35,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // virtual: {
  //   slides: (function () {
  //     let slide = []
  //     for (let i = 0; i < 300; i++) {
  //       slide.push(`<div class = "swiper-slide__movie">Слайд №${i}</div>`);
  //     }
  //     return slide;
  //   }()),
  // },

});
}

