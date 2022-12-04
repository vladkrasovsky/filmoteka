import {onLoadPage} from './trendingMovies';
import {getLocalStorageData} from './localStorage';
import {handleSearchSubmit} from './search_keyWord';
import * as modalMovie from './modalMovie';
import * as modalTeam from './modalTeam';
import * as footerYear from './footerYear';
import {onClickEn, onClickUa, setLang, refs} from './languageSwitcher';



onLoadPage();
getLocalStorageData();
// setLang();

const searchFormRef = document.querySelector('.movie-search');

searchFormRef.addEventListener('submit', handleSearchSubmit);

refs.enLanguageBtn.addEventListener('click', onClickEn);
refs.uaLanguageBtn.addEventListener('click', onClickUa);


