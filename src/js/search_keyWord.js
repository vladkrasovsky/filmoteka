import Notiflix from 'notiflix';
import { ThemovieSearch } from './API/Themoviesearch';
import { createMarkup } from './createMarkup';
import { initPagination, destroyPagination } from './pagination';

const galleryRef = document.querySelector('.movies__list');
const pRef = document.querySelector('.header__no-search');

export const searchMovies = new ThemovieSearch();

export function handleSearchSubmit(evt) {
  evt.preventDefault();
  pRef.classList.add('visually-hidden');

  searchMovies.query = evt.currentTarget.search.value.trim();

  if (searchMovies.query === '') {
    Notiflix.Notify.warning('Please enter a request');
    return;
  }

  searchMovies.resetPage();
  searchByWord();
}

export async function searchByWord() {
  try {
    const responseData = await searchMovies.getByQuery();
    renderGallery(responseData);
  } catch (error) {
    Notiflix.Notify.warning(
      'Sorry, something gone wrong. Please repeat a request'
    );
  }
}

function renderGallery(responseData) {
  const movieData = responseData.results;

  if (movieData.length === 0) {
    pRef.classList.remove('visually-hidden');
    return;
  }

  destroyPagination();
  initPagination(responseData, searchByWord);

  galleryRef.innerHTML = createMarkup(movieData);
}
