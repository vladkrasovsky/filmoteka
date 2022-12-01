import LsService from './API/storage';
import { storageKey } from './constants';
import Notiflix from 'notiflix';

const refs = {
  movieModal: document.querySelector('[data-movie-modal]'),
};

let watchedList = [];
let queueList = [];

refs.movieModal.addEventListener('click', e => {
  e.preventDefault();

  if (e.target.classList.contains('btn-watched')) {
    handleWatchedClick();
  }

  if (e.target.classList.contains('btn-queue')) {
    handleQueueClick();
  }
});

function handleWatchedClick() {
  const activeMovie = LsService.load(storageKey.ACTIVE_MOVIE);
  const watchedBtnRef = refs.movieModal.querySelector('.btn-watched');

  if (watchedList.find(el => el.id === activeMovie.id)) {
    const idx = watchedList.findIndex(el => el.id === activeMovie.id);
    watchedList.splice(idx, 1);
    LsService.save(storageKey.WATCHED_LIST, watchedList);
    Notiflix.Notify.warning('This film was removed from your library!');
    watchedBtnRef.textContent = 'Add to Watched';
    return;
  }
  watchedList.push(activeMovie);
  LsService.save(storageKey.WATCHED_LIST, watchedList);
  Notiflix.Notify.success('This film was added to you library!');
  watchedBtnRef.textContent = 'Remove from Watched';
}

function handleQueueClick() {
  const activeMovie = LsService.load(storageKey.ACTIVE_MOVIE);
  const queueBtnRef = refs.movieModal.querySelector('.btn-queue');

  if (queueList.find(el => el.id === activeMovie.id)) {
    const idx = queueList.findIndex(el => el.id === activeMovie.id);
    queueList.splice(idx, 1);
    LsService.save(storageKey.QUEUE_LIST, queueList);
    Notiflix.Notify.warning('This film was removed from your library!');
    queueBtnRef.textContent = 'Add to Queue';
    return;
  }
  queueList.push(activeMovie);
  LsService.save(storageKey.QUEUE_LIST, queueList);
  Notiflix.Notify.success('This film was added to you library!');
  queueBtnRef.textContent = 'Remove from Queue';
}

export function getLocalStorageData() {
  if (LsService.load(storageKey.WATCHED_LIST)) {
    watchedList.push(...LsService.load(storageKey.WATCHED_LIST));
  }
  if (LsService.load(storageKey.QUEUE_LIST)) {
    queueList.push(...LsService.load(storageKey.QUEUE_LIST));
  }
}
