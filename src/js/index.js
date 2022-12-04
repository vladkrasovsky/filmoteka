import { onLoadPage, onLoadSlider } from './trendingMovies';
import { getLocalStorageData } from './localStorage';
import { handleSearchSubmit } from './searchMovies';
import * as modalMovie from './modalMovie';
import * as modalTeam from './modalTeam';
import * as footerYear from './footerYear';
import * as scrollToTop from './button';

//
// Variables
//
const searchFormRef = document.querySelector('.movie-search');

//
// Inits & Event Listeners
//
onLoadPage();
getLocalStorageData();
onLoadSlider();

searchFormRef.addEventListener('submit', handleSearchSubmit);
