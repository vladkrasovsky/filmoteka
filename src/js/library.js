import LsService from './API/storage';
import { storageKey } from './constants';
import { createMarkup } from './createMarkup';
import { getLocalStorageData } from './localStorage';
import * as modalMovie from './modalMovie';

const refs = {
  moviesList: document.querySelector('.moviesListRef'),
  watchedBtn: document.querySelector('button[data-btn-watched]'),
  queueBtn: document.querySelector('button[data-btn-queue]'),
};

getLocalStorageData();
onWatched();

refs.watchedBtn.addEventListener('click', onWatched);
refs.queueBtn.addEventListener('click', onQueue);

function onWatched() {
  const movies = LsService.load(storageKey.WATCHED_LIST);
  refs.moviesList.innerHTML = createMarkup(movies);

  refs.queueBtn.classList.remove('header-btn-active');
  refs.watchedBtn.classList.add('header-btn-active');
  refs.watchedBtn.disabled = true;
}

function onQueue() {
  const movies = LsService.load(storageKey.QUEUE_LIST);
  refs.moviesList.innerHTML = createMarkup(movies);

  refs.queueBtn.classList.add('header-btn-active');
  refs.watchedBtn.classList.remove('header-btn-active');
  refs.watchedBtn.disabled = false;
}
