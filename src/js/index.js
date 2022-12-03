import {onLoadPage} from './trendingMovies';
import {getLocalStorageData} from './localStorage';
import {handleSearchSubmit} from './search_keyWord';
import * as modalMovie from './modalMovie';
import {onClickEn} from './languageSwitcher';
import {onClickUa} from './languageSwitcher';
import {refs} from './languageSwitcher';

onLoadPage();
getLocalStorageData();

const searchFormRef = document.querySelector('.movie-search');

searchFormRef.addEventListener('submit', handleSearchSubmit);

refs.enLanguageBtn.addEventListener('click', onClickEn);
refs.uaLanguageBtn.addEventListener('click', onClickUa);