setTimeout(movieCardsSelector, 500);

const movieBackdrop = document.querySelector('.movie__backdrop');
const modalCloseBtn = document.querySelector('.movie-modal__btn-close');

modalCloseBtn.addEventListener('click', onCloseModalBtn);

function movieCardsSelector() {
    const movieCards = document.querySelectorAll('.movies__item');

    movieCards.forEach(movieCard => {
        movieCard.addEventListener('click', onMovieCardClick);
    })
}

function onMovieCardClick(e) {
    e.preventDefault();
    movieBackdrop.classList.remove('is-hidden');
}

function onCloseModalBtn(e) {
    e.preventDefault();
    movieBackdrop.classList.add('is-hidden');
}