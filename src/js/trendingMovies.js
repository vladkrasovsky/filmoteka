import { Themoviedb } from './API/Themoviedb';
import { createMarkup } from './createMarkup';
import { initPagination } from './pagination';
import { spinerStart, spinerStop } from './loader';

export const trendingMovies = new Themoviedb();

const moviesListRef = document.querySelector('.moviesListRef');

export async function onLoadPage() {
  try {
    spinerStart();

    const data = await trendingMovies.getTrendings();
    const { results: movie, total_pages: totalPages } = data;

    initPagination(data, onLoadPage);

    trendingMovies.totalPages = totalPages;

    const markup = createMarkup(movie);
    moviesListRef.innerHTML = markup;
  } catch (error) {
    console.log(error);
  } finally {
    spinerStop();
  }
}
