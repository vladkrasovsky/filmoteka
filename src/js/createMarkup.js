import { parseGenres } from './parseGenres';
import { themoviedb as config } from './constants';

export function createMarkup(movies) {
  return movies.reduce((acc, movie) => {
    const { poster_path, original_title, genre_ids, release_date, id } = movie;

    const releaseYear =
      release_date === '' ? 'Unknown' : release_date.slice(0, 4);

    const poster_url = poster_path
      ? config.POSTER_BASE_URL + poster_path
      : config.POSTER_PLACEHOLDER_URL;

    return (
      acc +
      `<li class='movies__item' data-id='${id}'>
        <a class='movies__link' href=''>
          <div class="thumb">
            <img class='movies__image' src='${poster_url}' alt='${original_title}'>
          </div>
          <p class='movies__title'>${original_title}</p>

          <p class='movies__genres genres'><span class='genres__text'>${parseGenres(
            genre_ids
          )}</span> ${releaseYear}</p>

        </a>
      </li>`
    );
  }, '');
}
