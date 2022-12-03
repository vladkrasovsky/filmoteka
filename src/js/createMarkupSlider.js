import { themoviedb as config } from './constants';

export function createMarkupSlider(movieUa) {
  return movieUa.reduce((acc, movie) => {
    const { poster_path, original_title } = movie;

    const poster_url = poster_path
      ? config.POSTER_BASE_URL + poster_path
        : config.POSTER_PLACEHOLDER_URL;
      
    //   ${original_title}

    return (
      acc +
        `<div class="swiper-slide">
      <img class="movies__image" src='${poster_url}' alt='${original_title}'>
      <p class='movies__title'>${original_title}</p>
        </div>`
    );
  }, '');
}