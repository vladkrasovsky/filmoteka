import {Themoviedb} from './API/Themoviedb';
import {markupMovieModal} from './markupModal';
import storageAPI from './API/storage.js';
import {storageKey} from './constants';
import {spinerStart, spinerStop} from './loader';
import {getTrailer, addCloseBtn} from "./trailer";

const movieDetails = new Themoviedb();
const movieCards = document.querySelector('.movies__list');
const movieBackdrop = document.querySelector('.movie__backdrop');

movieCards.addEventListener('click', onMovieCardClick);
movieBackdrop.addEventListener('click', onBackdropClick);

function onMovieCardClick(e) {
  e.preventDefault();
  if (e.target.nodeName === 'UL') return;
  fetchOneMovie(e.target.getAttribute('data-id'));
}

function onBackdropClick(e) {
  e.preventDefault();
  const classList = e.target.classList;
  if (
    classList.contains('movie__backdrop') ||
    classList.contains('movie-modal__btn-close')
  ) {
    closeModal();
  }
}

async function fetchOneMovie(movieId) {
  movieDetails.movieId = movieId;
  try {
    spinerStart();
    const movieData = await movieDetails.getMovieDetails();

    movieBackdrop.innerHTML = markupMovieModal(movieData);
    storageAPI.save(storageKey.ACTIVE_MOVIE, movieData);
    window.addEventListener('keydown', closeModalEsc);
    showModal();
  } catch (error) {
    console.log(error);
  } finally {
    spinerStop();
    const trailerBtn = document.querySelector('.youtube-icon-btn')
    trailerBtn.addEventListener('click', onYoutubeClick);
  }
}

function closeModalEsc(e) {
  if (e.code === 'Escape') {
    e.preventDefault();
    closeModal();
  }
}

function showModal() {
  movieBackdrop.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');
}

function closeModal() {
  movieBackdrop.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
  window.removeEventListener('keydown', closeModalEsc);
  storageAPI.remove(storageKey.ACTIVE_MOVIE);
}

async function onYoutubeClick() {
  console.log(movieDetails.movieId)
  const trailer = await movieDetails.getMovieTrailer();
  const videoRef = trailer.results[0].key;
  const trailerInstance = getTrailer(videoRef)
  trailerInstance.show(() => addCloseBtn());
}
