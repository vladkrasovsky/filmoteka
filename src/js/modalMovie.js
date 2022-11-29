setTimeout(movieCardsSelector, 500);

const movieBackdrop = document.querySelector('.movie__backdrop');
const modalCloseBtn = document.querySelector('.movie-modal__btn-close');

modalCloseBtn.addEventListener('click', onCloseModalBtn);

function movieCardsSelector() {
  const movieCards = document.querySelector('.movies__list');
  movieCards.addEventListener('click', onMovieCardClick);
}

function onMovieCardClick(e) {
  e.preventDefault();
  if (e.target.nodeName === 'UL') {
    return;
  }

  // ID для запиту повн. інформації
  const movieID = e.target.dataset.id;
  console.log(movieID);

  movieBackdrop.classList.remove('is-hidden');
}

function onCloseModalBtn(e) {
  e.preventDefault();
  movieBackdrop.classList.add('is-hidden');
}
