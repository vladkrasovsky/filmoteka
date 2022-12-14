import { parseGenres } from './parseGenres';
import { themoviedb as config } from './constants';

export function createMarkup(movies) {
  return movies.reduce((acc, movie) => {
    const {
      poster_path,
      original_title,
      genre_ids,
      release_date,
      id,
      vote_average,
      overview,
    } = movie;

    const releaseYear = release_date ? release_date?.slice(0, 4) : 'No date';

    const poster_url = poster_path
      ? config.POSTER_BASE_URL + poster_path
      : config.POSTER_PLACEHOLDER_URL;

    const genreIds = genre_ids ? genre_ids : movie.genres?.map(({ id }) => id);

    return (
      acc +
      `<li class='movies__item' data-id='${id}'>
        <a class='movies__link' href='' data-id='${id}' aria-label="Read more about the ${original_title}">

          <div class="thumb" data-id-thumb="${id}">
            <img
              class='movies__image'
              src='${poster_url}'
              alt='${original_title}'
              onerror="this.src='${config.POSTER_PLACEHOLDER_URL}'"
              loading="lazy"
            >   
            <div class="movies__overlay">
              <p class="movies__overlay-vote">Vote: ${vote_average.toFixed(
                1
              )}</p>
              <p class="movies__overlay-about">Overview:</p>
              <p class="movies__overlay-txt">${overview}</p>
            </div>  
          </div>
          <p class='movies__title'>${original_title}</p>

          <p class='movies__genres genres'><span class='genres__text'>${parseGenres(
            genreIds
          )}</span> ${releaseYear}</p>

        </a>
      </li>`
    );
  }, '');
}
