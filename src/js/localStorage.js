import LsService from './API/storage';
import filmsList from '../data/movies/trendings.json';
import Notiflix from "notiflix";

const refs = {
  watchedRef: document.querySelector('.btn-watched'),
  queueRef: document.querySelector('.btn-queue'),
}

const WATCHED_KEY = 'watched-list';
let watchedList = [];

const QUEUE_KEY = 'queue-list';
let queueList = [];

refs.watchedRef.addEventListener('click', saveToWatched);
refs.queueRef.addEventListener('click', saveToQueue);

function saveToWatched() {
  if (watchedList.find(el => el.id === filmsList.results[3].id)) {
    const idx = watchedList.findIndex(el => el.id === filmsList.results[3].id)
    watchedList.splice(idx, 1);
    LsService.save(WATCHED_KEY, watchedList)
    Notiflix.Notify.warning('This film was removed from your library!');
    refs.watchedRef.textContent = 'Add to Watched';
    return;
  }
  watchedList.push(filmsList.results[3])
  LsService.save(WATCHED_KEY, watchedList)
  Notiflix.Notify.success('This film was added to you library!');
  refs.watchedRef.textContent = 'Remove from Watched';
}

function saveToQueue() {
  if (queueList.find(el => el.id === filmsList.results[14].id)) {
    const idx = queueList.findIndex(el => el.id === filmsList.results[3].id);
    queueList.splice(idx, 1);
    LsService.save(QUEUE_KEY, queueList);
    Notiflix.Notify.warning('This film was removed from your library!');
    refs.queueRef.textContent = 'Add to Queue';
    return;
  }
  queueList.push(filmsList.results[14])
  LsService.save(QUEUE_KEY, queueList)
  Notiflix.Notify.success('This film was added to you library!');
  refs.queueRef.textContent = 'Remove from Queue';
}

export function getLocalStorageData() {
  if (LsService.load(WATCHED_KEY)) {
    watchedList.push(...LsService.load(WATCHED_KEY))
  }
  if (LsService.load(QUEUE_KEY)) {
    queueList.push(...LsService.load(QUEUE_KEY))
  }
}