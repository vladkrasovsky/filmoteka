import LsService from './API/storage';
import {genresUa, genres} from "./translationGenres";
import {storageKey} from "./constants";

const refs = {
  enLanguageBtn: document.querySelector('#en_btn'),
  uaLanguageBtn: document.querySelector('#ua_btn'),

  headerHome: document.querySelector('#nav-link-home'),
  headerLibrary: document.querySelector('#nav-link-library'),
  headerLibrBtnWatched: document.querySelector('.btn-watched'),
  headerLibrBtnQueue: document.querySelector('.btn-queue'),
};

export function onClickEn() {
  refs.uaLanguageBtn.disabled = false;
  refs.enLanguageBtn.disabled = true;
  LsService.save('lang', 'EN');

  refs.headerHome.textContent = 'home';
  refs.headerLibrary.textContent = 'my library';
  if (refs.headerLibrBtnWatched) {
    refs.headerLibrBtnWatched.textContent = 'watched';
    refs.headerLibrBtnQueue.textContent = 'queue';
  }

  changeGenres();
}

export function onClickUa() {
  refs.uaLanguageBtn.disabled = true;
  refs.enLanguageBtn.disabled = false;
  LsService.save('lang', 'UA');

  refs.headerHome.textContent = 'Головна';
  refs.headerLibrary.textContent = 'Бібліотека';
  if (refs.headerLibrBtnWatched) {
    refs.headerLibrBtnWatched.textContent = 'переглянуто';
    refs.headerLibrBtnQueue.textContent = 'подивитись';
  }

  changeGenres();
};

export function changeModalLang() {
  const refs = {
    modalVotes: document.querySelector('.votes'),
    modalPopularity: document.querySelector('.popularity'),
    modalOriginalTitle: document.querySelector('.original-title'),
    modalGenres: document.querySelector('.genres.left'),
    modalAbout: document.querySelector('.about'),
    modalBtnAddWatched: document.querySelector('.add-watched'),
    modalBtnAddQueue: document.querySelector('.add-queue')
  };
  if (LsService.load('lang') === "UA") {
    refs.modalVotes.textContent = 'Оцінки';
    refs.modalPopularity.textContent = 'Популярність';
    refs.modalOriginalTitle.textContent = 'Оригінальна назва';
    refs.modalGenres.textContent = 'Жанри';
    refs.modalAbout.textContent = 'Опис';
    refs.modalBtnAddWatched.textContent = 'додати до переглянутого';
    refs.modalBtnAddQueue.textContent = 'додати до черги';
  }
}


export function changeGenres() {
  const cardsRef = document.querySelectorAll('.movies__item');
  if (LsService.load('lang') === "UA") {
    cardsRef.forEach(el => {
      const arr = el.querySelector('.genres__text').textContent.split(',');
      const ress = arr.map(el => {
        return (genres.find(element => element.name === el.trim())?.id)
      })
      const nameArr = ress.map(elem => genresUa.find(e => elem === e.id)?.name).join(', ');
      console.log(nameArr);
      el.querySelector('.genres__text').textContent = nameArr;
    })
  }
  if (LsService.load('lang') === "EN") {
    cardsRef.forEach(el => {
      const arr = el.querySelector('.genres__text').textContent.split(',');
      const ress = arr.map(el => {
        return (genresUa.find(element => element.name === el.trim())?.id)
      })
      const nameArr = ress.map(elem => genres.find(e => elem === e.id)?.name).join(', ');
      console.log(nameArr);
      el.querySelector('.genres__text').textContent = nameArr;
    })
  }
}

export function setLang() {
  if (LsService.load('lang') === "EN") {
    refs.uaLanguageBtn.disabled = false;
    refs.enLanguageBtn.disabled = true;
  }
  if (LsService.load('lang') === "UA") {
    refs.uaLanguageBtn.disabled = true;
    refs.enLanguageBtn.disabled = false;
  }
}

export {refs};