import { onLoadPage } from './trendingMovies';
import { getLocalStorageData } from './localStorage';
import { searchByWord } from './search_keyWord';
import { pagination } from './pagination';
import * as modalMovie from './modalMovie';

onLoadPage();
getLocalStorageData();

const searchFormRef = document.querySelector('.movie-search');

searchFormRef.addEventListener('submit', searchByWord);
