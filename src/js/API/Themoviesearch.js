import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export class ThemovieSearch {
  #params = {
    params: {
      api_key: '68fa3d310c9d2cffbb85ba21d660e67a',
      language: 'en-US',
    },
  };

  constructor() { 
    this.searchQuery = '';
    this.page = 1;
  }

  async getByQuery() { 
    const urlAXIOS = `search/movie?query=${this.searchQuery}&page=${this.page}&include_adult=false`;
    const { data } = await axios.get(urlAXIOS, this.#params);
    this.page += 1;
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