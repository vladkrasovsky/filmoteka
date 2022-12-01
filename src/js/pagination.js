import { trendingMovies } from './trendingMovies';
import { searchMovies } from './search_keyWord';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';

const paginationContainerID = 'tui-pagination-container';

export function initPagination(data, callback) {
  const { page, results, total_results } = data;

  const options = {
    totalItems: total_results,
    itemsPerPage: 20,
    visiblePages: 5,
    page: page,
    centerAlign: true,
  };

  const pagination = new Pagination(paginationContainerID, options);

  pagination.on('afterMove', event => {
    const currentPage = event.page;
    trendingMovies.page = currentPage;
    searchMovies.page = currentPage;
    callback();
  });
}

export function destroyPagination() {
  document.getElementById(paginationContainerID).innerHTML = '';
}
