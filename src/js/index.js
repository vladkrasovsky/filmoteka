import { onLoadPage } from './trendingMovies';
import { getLocalStorageData } from './localStorage';
import { handleSearchSubmit } from './search_keyWord';
import * as modalMovie from './modalMovie';
import * as modalTeam from './modalTeam';
import * as footerYear from './footerYear';
import { onHoverCard } from './hoverEffectsCard';

onLoadPage();
getLocalStorageData();

const searchFormRef = document.querySelector('.movie-search');

searchFormRef.addEventListener('submit', handleSearchSubmit);
