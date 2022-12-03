export const themoviedb = {
  BASE_URL: 'https://api.themoviedb.org/3/',
  POSTER_BASE_URL: 'https://image.tmdb.org/t/p/w500/',
  POSTER_PLACEHOLDER_URL: 'https://placehold.co/500x750?text=No+Image',
  API_KEY: '68fa3d310c9d2cffbb85ba21d660e67a',
  LANGUAGE: 'en-US',
  INCLUDE_ADULT: false,
};

export const storageKey = {
  WATCHED_LIST: 'watched-list',
  QUEUE_LIST: 'queue-list',
  ACTIVE_MOVIE: 'active-movie',
};

export default { themoviedb, storageKey };
