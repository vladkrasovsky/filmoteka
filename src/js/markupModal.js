import icons from '../images/icons.svg';
import { storageKey, themoviedb as config } from './constants';
import storageAPI from './API/storage';

export function markupMovieModal(movie) {
  const {
    poster_path,
    original_title,
    vote_average,
    vote_count,
    popularity,
    overview,
    genres,
  } = movie;

  const poster_url = poster_path
    ? config.POSTER_BASE_URL + poster_path
    : config.POSTER_PLACEHOLDER_URL;

  const isWatched = Boolean(
    storageAPI.load(storageKey.WATCHED_LIST)?.find(el => el.id === movie.id)
  );

  const isQueue = Boolean(
    storageAPI.load(storageKey.QUEUE_LIST)?.find(el => el.id === movie.id)
  );

  return `<div class="movie-modal movieModalRef">
      <button class="movie-modal__btn-close btn" data-movie-modal-close>
        <svg class="movie-modal__icon-close" width="14px" height="14px">
          <use href="${icons}#icon-close"></use>
        </svg>
      </button>
      <div class="movie-modal__thumb movieModalRef">
 <button class = 'youtube-icon-btn' title="Watch Trailer">
      <svg class="youtube-icon" width="80px" height="80px">
        <use href="${icons}#youtube-play"></use>
      </svg>
</button>
      <img
        class='movie-modal__img'
        src='${poster_url}'
        alt='${original_title}'
        onerror="this.src='${config.POSTER_PLACEHOLDER_URL}'"
      >
      </div>
      <div class="movie-modal__info">
      <h2 class="movie-modal__title">${original_title}</h2>
      <ul class="movie-modal__discription">
        <li class="movie-modal-discription__vote--text left">Vote / Votes</li>
        <li class="movie-modal-discription__vote--value right">
          <span class="movie-modal__discription--accent">${vote_average.toFixed(
            1
          )}</span> / ${vote_count}
        </li>
        <li class="movie-modal-discription__popularity--text left">
          Popularity
        </li>
        <li class="movie-modal-discription__popularity--value right">${popularity}</li>
        <li class="movie-modal-discription__original-title--text left">
          Original Title
        </li>
        <li class="movie-modal-discription__original-title--value right">
        ${original_title}
        </li>
        <li class="movie-modal-discription__genre--text left">Genre</li>
        <li class="movie-modal-discription__genre--value right">
          ${genres[0]?.name || 'No genre'}
        </li>
      </ul>
      <div class="movie-modal-about">
        <h3 class="movie-modal-about__title">About</h3>
        <p class="movie-modal-about__text">
        ${overview}
        </p>
        </div>
        <div class="movie-modal__btn-container">
          <button type="button" class="movie-modal__btn btn-watched">
            ${isWatched ? 'remove from watched' : 'add to watched'}
          </button>
          <button type="button" class="movie-modal__btn btn-queue">
            ${isQueue ? 'remove from queue' : 'add to queue'}
          </button>
        </div>
      </div>
    </div>`;
}
