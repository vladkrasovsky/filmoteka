import axios from 'axios';
import { themoviedb as config } from '../constants';

axios.defaults.baseURL = config.BASE_URL;

export class ThemovieSearch {
  #params = {
    params: {
      api_key: config.API_KEY,
      language: config.LANGUAGE,
    },
  };

  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async getByQuery() {
    const urlAXIOS = `search/movie?query=${this.searchQuery}&page=${this.page}&include_adult=${config.INCLUDE_ADULT}`;
    const { data } = await axios.get(urlAXIOS, this.#params);
    return data;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  resetPage() {
    this.page = 1;
  }
}
