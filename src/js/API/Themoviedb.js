import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export class Themoviedb {
  page = 1;
  totalPages = 0;
  perPage = 20;
  #params = {
    params: {
      api_key: '68fa3d310c9d2cffbb85ba21d660e67a',
      language: 'en-US',
    },
  };

  async getTrendings() {
    const urlAXIOS = `trending/movie/day?page=${this.page}`;
    const { data } = await axios.get(urlAXIOS, this.#params);
    return data;
  }
}
