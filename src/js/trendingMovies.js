import { Themoviedb } from './API/Themoviedb';
import { createMarkup } from './createMarkup';
import { initPagination } from './pagination';

export const trendingMovies = new Themoviedb();

const moviesListRef = document.querySelector('.moviesListRef');

export async function onLoadPage() {
  try {
    const data = await trendingMovies.getTrendings();
    const { results: movie, total_pages: totalPages } = data;

    initPagination(data, onLoadPage);

    trendingMovies.totalPages = totalPages;

    const markup = createMarkup(movie);
    moviesListRef.innerHTML = markup;

  } catch (error) {
    console.log(error);
  }
}
