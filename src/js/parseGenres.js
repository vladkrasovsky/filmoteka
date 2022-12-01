import genresJSON from '../data/movies/genres.json';

export function parseGenres(genresArray) {
  let genresNames = [];

  for (let genre of genresArray) {
    const genreOfMovie = genresJSON.find(movie => movie.id === genre);
    genresNames.push(' ' + genreOfMovie.name);
  }

  if (genresNames.length > 3) {
    genresNames = genresNames.slice(0, 2);
    genresNames.splice(2, 0, ' Other');
  }

  if (genresNames.length === 0) {
    genresNames = 'No genres';
  }

  return genresNames;
}
