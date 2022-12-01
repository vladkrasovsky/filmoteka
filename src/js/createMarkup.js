import { parseGenres } from './parseGenres';

export function createMarkup(movies) {
  return movies.reduce((acc, movie) => {
    const { poster_path, original_title, genre_ids, release_date, id } = movie;

    return (
      acc +
      `<li class='movies__item' data-id='${id}'>
        <a class='movies__link' href=''>
          <div class="thumb">
            <img class='movies__image'
                 src='https://image.tmdb.org/t/p/w500/${poster_path}'
                 src='https://image.tmdb.org/t/p/w500${poster_path}'
                 onerror="this.src='https://placehold.co/500x750?text=No+Image'"
                 alt='${original_title}'>
          </div>
          <p class='movies__title'>${original_title}</p>
          <p class='movies__genres genres'><span class='genres__text'>${parseGenres(
            genre_ids
          )}</span> ${release_date.slice(0, 4)}</p>
        </a>
      </li>`
    );
  }, '');
}
