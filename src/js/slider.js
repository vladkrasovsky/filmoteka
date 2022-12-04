import Swiper, { Navigation, Autoplay } from 'swiper';

export function onSlider() {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Autoplay],
    loop: true,
    initialSlide: 0,
    slidesPerGroup: 1,
    autoHeight: !true,
    autoplay: true,

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

    slideToClickedSlide: !true,
  });
}
