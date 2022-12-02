import { Themoviedb } from './API/Themoviedb';

const refs = {
  enLanguageBtn: document.querySelector('#en_btn'),
  uaLanguageBtn: document.querySelector('#ua_btn'),
  modalVotes: document.querySelector('.votes'),
  modalPopularity: document.querySelector('.popularity'),
  modalOriginalTitle: document.querySelector('.original-title'),
  modalGenres: document.querySelector('.genres'),
  modalAbout: document.querySelector('.about'),
  headerHome: document.querySelector('#nav-link-home'),
  headerLibrary: document.querySelector('#nav-link-library'),
  headerLibrBtnWatched: document.querySelector('.btn-watched'),
  headerLibrBtnQueue: document.querySelector('.btn-queue'),
  modalBtnAddWatched: document.querySelector('.add-watched'),
  modalBtnAddQueue: document.querySelector('.add-queue')
};

const apiChange = new Themoviedb();

export function onClickEn() {
  refs.modalVotes.textContent = 'Vote / Votes';
  refs.modalPopularity.textContent = 'Popularity';
  refs.modalOriginalTitle.textContent = 'Original title';
  refs.modalGenres.textContent = 'Genre';
  refs.modalAbout.textContent = 'About';

  refs.headerHome.textContent = 'home';
  refs.headerLibrary.textContent = 'my library';
  refs.headerLibrBtnWatched.textContent = 'watched';
  refs.headerLibrBtnQueue.textContent = 'queue';
  refs.modalBtnAddWatched.textContent = 'add to watched';
  refs.modalBtnAddQueue.textContent = 'add to queue';
  apiChange.language = localStorage.getItem('language');
}

export function onClickUa() {
  refs.modalVotes.textContent = 'Оцінки';
  refs.modalPopularity.textContent = 'Популярність';
  refs.modalOriginalTitle.textContent = 'Оригінальна назва';
  refs.modalGenres.textContent = 'Жанри';
  refs.modalAbout.textContent = 'Опис';

  refs.headerHome.textContent = 'Головна';
  refs.headerLibrary.textContent = 'Бібліотека';
  refs.headerLibrBtnWatched.textContent = 'переглянуто';
  refs.headerLibrBtnQueue.textContent = 'подивитись';
  refs.modalBtnAddWatched.textContent = 'додати до переглянутого';
  refs.modalBtnAddQueue.textContent = 'додати до черги';
  apiChange.language = localStorage.getItem('language');
};

export {refs};