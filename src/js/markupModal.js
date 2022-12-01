import { parseGenres } from './parseGenres';
import icons from '../images/icons.svg';

export function markupMovieModal(movie) {
  return `<div class="movie-modal movieModalRef">
      <button class="movie-modal__btn-close btn" data-movie-modal-close>
        <svg class="movie-modal__icon-close" width="14px" height="14px">
          <use href="${icons}#icon-close"></use>
        </svg>
      </button>
      <div class="movie-modal__thumb movieModalRef">
      <img class="movie-modal__img"
        src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.original_title}" />
      </div>
      <div class="movie-modal__info">
      <h2 class="movie-modal__title">${movie.original_title}</h2>
      <ul class="movie-modal__discription">
        <li class="movie-modal-discription__vote--text left">Vote / Votes</li>
        <li class="movie-modal-discription__vote--value right">
          <span class="movie-modal__discription--accent">${movie.vote_average}</span> / ${movie.vote_count}
        </li>
        <li class="movie-modal-discription__popularity--text left">
          Popularity
        </li>
        <li class="movie-modal-discription__popularity--value right">${movie.popularity}</li>
        <li class="movie-modal-discription__original-title--text left">
          Original Title
        </li>
        <li class="movie-modal-discription__original-title--value right">
        ${movie.original_title}
        </li>
        <li class="movie-modal-discription__genre--text left">Genre</li>
        <li class="movie-modal-discription__genre--value right">${movie.genre}</li>
      </ul>
      <div class="movie-modal-about">
        <h3 class="movie-modal-about__title">About</h3>
        <p class="movie-modal-about__text">
        ${movie.overview}
        </p>
        </div>
        <div class="movie-modal__btn-container">
          <button type="button" class="movie-modal__btn btn-watched">
            add to watched
          </button>
          <button type="button" class="movie-modal__btn btn-queue">
            add to queue
          </button>
        </div>
      </div>
    </div>`;
}
