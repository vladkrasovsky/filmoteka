import { onLoadPage } from './trendingMovies';
import { getLocalStorageData } from './localStorage';
import { pagination } from './pagination';

onLoadPage();
getLocalStorageData();
// pagination();

console.log('index.js');
