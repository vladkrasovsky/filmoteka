import { trendingMovies } from './trendingMovies';
import { searchByWord } from './search_keyWord';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';

const paginationContainerID = 'tui-pagination-container';

export function initPagination(data, callback) {
  const { page, results, total_results } = data;

  const options = {
    totalItems: total_results,
    itemsPerPage: results.length,
    visiblePages: 5,
    page: page,
    centerAlign: true,
  };

  const pagination = new Pagination(paginationContainerID, options);

  pagination.on('afterMove', event => {
    const currentPage = event.page;
    trendingMovies.page = currentPage;
    searchByWord.page = currentPage;
    callback();
  });
}

export function destroyPagination() {
  console.log('destroy');
  document.getElementById(paginationContainerID).innerHTML = '';
}
