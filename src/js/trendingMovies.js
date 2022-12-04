import { Themoviedb } from './API/Themoviedb';
import { createMarkup } from './createMarkup';
import { createMarkupSlider } from './createMarkupSlider';
import { initPagination } from './pagination';
import { spinerStart, spinerStop } from './loader';
import { onSlider } from './slider';

export const trendingMovies = new Themoviedb();

const moviesListRef = document.querySelector('.moviesListRef');
const swiperWrapperRef = document.querySelector('.swiperWrapperRef');

export async function onLoadPage() {
  try {
    spinerStart();

    const data = await trendingMovies.getTrendings();
    const { results: movie, total_pages: totalPages } = data;

    initPagination(data, onLoadPage);

    trendingMovies.totalPages = totalPages;

    const markupTrending = createMarkup(movie);
    moviesListRef.innerHTML = markupTrending;

  } catch (error) {
    console.log(error);
  } finally {
    spinerStop();
  }
}


export async function onLoadSlider() {
  try { 
    const dataSlider = await trendingMovies.getUkrainianMovies();
    const { results: movieUa } = dataSlider;

    const markupSlider = createMarkupSlider(movieUa);
    swiperWrapperRef.innerHTML = markupSlider;

    onSlider();

  } catch (error) {
    console.log(error);
  } 
}

