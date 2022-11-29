import { onLoadPage } from './trendingMovies';
import { getLocalStorageData } from './localStorage';
import { pagination } from './pagination';
import { searchByWord } from "./search_keyWord";
import * as modalMovie from "./modalMovie";

onLoadPage();
getLocalStorageData();

const searchFormRef = document.querySelector('.movie-search');

searchFormRef.addEventListener('submit', searchByWord);
// pagination();

console.log('index.js');
