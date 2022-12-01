import { Themoviedb } from './API/Themoviedb';
import { markupMovieModal } from './markupModal';

setTimeout(movieCardsSelector, 500);

const movieBackdrop = document.querySelector('.movie__backdrop');

movieBackdrop.addEventListener('click', CloseModal);

const movieDetails = new Themoviedb();

function movieCardsSelector() {
  const movieCards = document.querySelector('.movies__list');
  movieCards.addEventListener('click', onMovieCardClick);
}

function onMovieCardClick(e) {
  e.preventDefault();
  if (e.target.nodeName === 'UL') {
    return;
  }

  const movieId = e.target.dataset.id;
  fetchOneMovie(movieId);
}

async function fetchOneMovie(movieId) {
  movieDetails.movieId = movieId;
  const movieData = await movieDetails.getMovieDetails();

  const markup = markupMovieModal(movieData);
  movieBackdrop.innerHTML = markup;

  movieBackdrop.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');

  window.addEventListener('keydown', closeModalEsc);
}

function closeModalEsc(e) {
  if (e.code === 'Escape') {
    e.preventDefault();
    movieBackdrop.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');
    window.removeEventListener('keydown', closeModalEsc);
  }
}

function CloseModal(e) {
  e.preventDefault();
  if (
    e.target.classList.contains('movie__backdrop') ||
    e.target.classList.contains('movie-modal__btn-close')
  ) {
    movieBackdrop.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');
    window.removeEventListener('keydown', closeModalEsc);
  }
}
