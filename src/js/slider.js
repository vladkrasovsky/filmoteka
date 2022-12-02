import Swiper, { Navigation, Virtual } from 'swiper';

// init Swiper:
const swiper = new Swiper('.swiper', {
  modules: [Navigation, Virtual],
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
      slidesPerView: 5,
      spaceBetween: 10,
    },

    1280: {
      slidesPerView: 8,
      spaceBetween: 10,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  virtual: {
    slides: (function () {
      let slide = []
      for (let i = 0; i < 300; i++) {
        slide.push(`<div class = "swiper-slide__movie">Слайд №${i}</div>`);
      }
      return slide;
    }()),
  },

  slideToClickedSlide: true,

});
