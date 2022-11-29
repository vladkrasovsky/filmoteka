import { ThemovieSearch } from "./API/Themoviesearch";
import { parseGenres } from './parseGenres';
import Notiflix from 'notiflix';


const galleryRef = document.querySelector('.movies__list');
const pRef = document.querySelector('.header__no-search');


const newApiRequest = new ThemovieSearch();

export async function searchByWord(evt) { 
    evt.preventDefault();
    pRef.classList.add("visually-hidden");

    newApiRequest.query = evt.currentTarget.search.value.trim();

    if (newApiRequest.query === "") {
        Notiflix.Notify.warning('Please enter a request');
        return
    }

    galleryRef.innerHTML = '';
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
        pRef.classList.remove("visually-hidden");
        return
    }

    galleryMarkup(movieData);
}

function galleryMarkup(movieData) {
    const markup = movieData.map(({poster_path, original_title, genre_ids, release_date, id}) => {

        const releaseYear = release_date.slice(0, 4);
        
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
    galleryRef.innerHTML = markup;
}