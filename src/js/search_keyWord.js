import { ThemovieSearch } from "./API/Themoviesearch";
import { parseGenres } from './parseGenres';
import Notiflix from 'notiflix';


const refs = {
    searchForm: document.querySelector('.movie-search'),
    gallery: document.querySelector('.movies__list')
};

refs.searchForm.addEventListener('submit', searchByWord);

const newApiRequest = new ThemovieSearch();

async function searchByWord(evt) { 
    evt.preventDefault();

    newApiRequest.query = evt.currentTarget.search.value.trim();

    if (newApiRequest.query === "") {
        Notiflix.Notify.warning('Please enter a request');
        return
    }

    refs.gallery.innerHTML = '';
    newApiRequest.resetPage();

    try {
        const responseData = await newApiRequest.getByQuery();
        renderGallery(responseData);
    }
    catch(error) { 
        Notiflix.Notify.warning('Sorry, something gone wrong. Please repeat a request');
    }
}

function renderGallery(responseData) { 
    const movieData = responseData.results;

    if (movieData.length === 0) {
        Notiflix.Report.failure('Search notification', 'Sorry, there are no movies matching your search query.', 'Try one more time');
        return
    }

    galleryMarkup(movieData);
}

function galleryMarkup(movieData) {
    const markup = movieData.map((movie) => {
        const {
            poster_path,
            original_title,
            genre_ids,
            release_date,
            id,
        } = movie;

        const releaseYear = release_date.substr(0, 4);
        
        return `
        <li class='movies__item' data-id='${id}'>
            <a class='movies__link' href=''>
                <div class="thumb">
                    <img class='movies__image'
                        src='https://image.tmdb.org/t/p/w500${poster_path}'
                        alt='${original_title}'>
                </div>
                <p class='movies__title'>${original_title}</p>
                <p class='movies__genres genres'><span class='genres__text'>${parseGenres(genre_ids)}</span> ${releaseYear}</p>
            </a>
      </li>
        `;
    })
    .join('');
    refs.gallery.innerHTML = markup;
}

export { newApiRequest };