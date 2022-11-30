import LsService from './API/storage';
import {createMarkup} from './createMarkup';
import {getLocalStorageData} from './localStorage';
import trendings from '../data/movies/trendings.json';

getLocalStorageData();

const refs = {
  moviesList: document.querySelector('.moviesListRef'),
  watchedBtn: document.querySelector('button[data-btn-watched]'),
  queueBtn: document.querySelector('button[data-btn-queue]'),
  watchedRef: document.querySelector('.btn-watched'),
  queueRef: document.querySelector('.btn-queue'),
};

const WATCHED_KEY = 'watched-list';
const QUEUE_KEY = 'queue-list';

onWatched();

refs.watchedBtn.addEventListener('click', onWatched);
refs.queueBtn.addEventListener('click', onQueue);
refs.watchedRef.addEventListener('click', onWatched);
refs.queueRef.addEventListener('click', onQueue);

function onWatched() {
  const movies = LsService.load(WATCHED_KEY);
  refs.moviesList.innerHTML = createMarkup(trendings.results);
  refs.queueBtn.classList.remove('header-btn-active');
  refs.watchedBtn.classList.add('header-btn-active');
  refs.watchedBtn.disabled = true;
}

function onQueue() {
  const movies = LsService.load(QUEUE_KEY);
  refs.moviesList.innerHTML = createMarkup(trendings.results);
  refs.queueBtn.classList.add('header-btn-active');
  refs.watchedBtn.classList.remove('header-btn-active');
  refs.watchedBtn.disabled = false;
}
