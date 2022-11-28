import { Themoviedb } from './API/Themoviedb';
import { createMarkup } from './createMarkup';

const trendingMovies = new Themoviedb();

const moviesListRef = document.querySelector('.moviesListRef');


export async function onLoadPage() {
    try {
        const {
            results: movie,
            total_pages: totalPages,
        } = await trendingMovies.getTrendings();

        // console.log(movie)

        trendingMovies.totalPages = totalPages;

        const markup = createMarkup(movie);
        moviesListRef.insertAdjacentHTML('beforeend', markup);

        trendingMovies.incrementPage();

    } catch (error) {
    console.log(error)
  }
}