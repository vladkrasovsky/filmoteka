import axios from 'axios';
import {themoviedb as config} from '../constants';

axios.defaults.baseURL = config.BASE_URL;

export class Themoviedb {
  page = 1;
  totalPages = 0;
  perPage = 20;
  movieId = 0;
  #params = {
    params: {
      api_key: config.API_KEY,
      language: config.LANGUAGE,
    },
  };

  async getTrendings() {
    const urlAXIOS = `trending/movie/day?page=${this.page}&include_adult=${config.INCLUDE_ADULT}`;
    const {data} = await axios.get(urlAXIOS, this.#params);
    return data;
  }

  async getMovieDetails() {
    const urlAXIOS = `movie/${this.movieId};`;
    const {data} = await axios.get(urlAXIOS, this.#params);
    return data;
  }

  async getMovieTrailer() {
    const urlAXIOS = `/movie/${this.movieId}/videos`;
    const {data} = await axios.get(urlAXIOS, this.#params);
    return data;
  }
}
