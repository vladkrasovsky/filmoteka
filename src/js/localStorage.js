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

onPageLoad();

refs.watchedRef.addEventListener('click', saveToWatched);
refs.queueRef.addEventListener('click', saveToQueue);

function saveToWatched() {
  if (watchedList.find(el => el.id === filmsList.results[1].id)) {
    Notiflix.Notify.warning('This film is already in you library!');
    return;
  }
  watchedList.push(filmsList.results[1])
  LsService.save(WATCHED_KEY, watchedList)
}

function saveToQueue() {
  console.log(refs.queueRef)
  if (queueList.find(el => el.id === filmsList.results[1].id)) {
    Notiflix.Notify.warning('This film is already in you library!');
    return;
  }
  queueList.push(filmsList.results[1])
  LsService.save(QUEUE_KEY, queueList)
}

function onPageLoad() {
  if (LsService.load(WATCHED_KEY)) {
    watchedList.push(...LsService.load(WATCHED_KEY))
  }
  if (LsService.load(QUEUE_KEY)) {
    queueList.push(...LsService.load(QUEUE_KEY))
  }
}