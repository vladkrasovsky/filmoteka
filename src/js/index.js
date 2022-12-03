import { onLoadPage, onLoadSlider } from './trendingMovies';
import { getLocalStorageData } from './localStorage';
import { handleSearchSubmit } from './search_keyWord';
import * as modalMovie from './modalMovie';


onLoadPage();
getLocalStorageData();
onLoadSlider();

const searchFormRef = document.querySelector('.movie-search');

searchFormRef.addEventListener('submit', handleSearchSubmit);

