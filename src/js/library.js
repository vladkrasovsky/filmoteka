import storageAPI from './API/storage';
import {storageKey} from './constants';
import {createMarkup} from './createMarkup';
import {getLocalStorageData} from './localStorage';
import {onClickEn} from './languageSwitcher';
import {onClickUa} from './languageSwitcher';
import {refs as langRefs} from './languageSwitcher';
import * as modalMovie from './modalMovie';

const refs = {
  moviesList: document.querySelector('.moviesListRef'),
  watchedBtn: document.querySelector('button[data-btn-watched]'),
  queueBtn: document.querySelector('button[data-btn-queue]'),
};

langRefs.enLanguageBtn.addEventListener('click', onClickEn);
langRefs.uaLanguageBtn.addEventListener('click', onClickUa);

getLocalStorageData();
onWatched();

refs.watchedBtn.addEventListener('click', onWatched);
refs.queueBtn.addEventListener('click', onQueue);

function onWatched() {
  const movies = storageAPI.load(storageKey.WATCHED_LIST);
  renderMoviesList(movies, 'Watched');
  toggleActiveBtn(refs.watchedBtn, refs.queueBtn);
}

function onQueue() {
  const movies = storageAPI.load(storageKey.QUEUE_LIST);
  renderMoviesList(movies, 'Queue');
  toggleActiveBtn(refs.queueBtn, refs.watchedBtn);
}

function renderMoviesList(movies, listName) {
  refs.moviesList.innerHTML = movies?.length
    ? createMarkup(movies)
    : createNoMoviesMarkup(listName);
}

function createNoMoviesMarkup(listName) {
  return `<li class="no-movies">No movies were added to ${listName} List</li>`;
}

function toggleActiveBtn(activeBtn, inactiveBtn) {
  activeBtn.classList.add('header-btn-active');
  activeBtn.disabled = true;
  inactiveBtn.classList.remove('header-btn-active');
  inactiveBtn.disabled = false;
}
