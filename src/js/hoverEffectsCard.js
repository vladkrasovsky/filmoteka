import { Themoviedb } from './API/Themoviedb';

const movieAboutText = new Themoviedb();
let getEl = selector => document.querySelector(selector);
const movieList = getEl('.movies__list');

let overlayText = null;
let movieOverlay = null;
let overlayVote = null;

movieList.addEventListener('mouseover', onHoverCard);
movieList.addEventListener('mouseout', onNotHoverCard);

function onHoverCard(e) {
  if (e.target.nodeName !== 'LI') {
    return;
  }

  fetchHoverEffect(e.target.getAttribute('data-id'));
}

async function fetchHoverEffect(movieId) {
  movieAboutText.movieId = movieId;

  try {
    movieAbout = await movieAboutText.getMovieDetails();
    overlayText = movieAbout.overview;
    overlayVote = movieAbout.vote_average;

    const boxOverlay = getEl(`[data-id-thumb='${movieAboutText.movieId}']`);
    if (overlayVote === 0) {
      boxOverlay.insertAdjacentHTML(
        'beforeend',
        markupOverlayCardNoVote(overlayText)
      );
    } else {
      boxOverlay.insertAdjacentHTML(
        'beforeend',
        markupOverlayCard(overlayVote, overlayText)
      );
    }

    movieOverlay = getEl('.movies__overlay');
  } catch (error) {
    console.log(error);
  }
}

function onNotHoverCard(e) {
  if (e.target.nodeName !== 'LI') {
    return;
  }
  movieOverlay.remove();
}

function markupOverlayCardNoVote(overlayText) {
  return `<div class="movies__overlay">
            <p class="movies__overlay-vote">Vote: no ratings</p>
            <p class="movies__overlay-about">About:</p>
            <p class="movies__overlay-txt">${overlayText}</p>
          </div>`;
}

function markupOverlayCard(overlayVote, overlayText) {
  return `<div class="movies__overlay">
            <p class="movies__overlay-vote">Vote: ${overlayVote}</p>
            <p class="movies__overlay-about">About:</p>
            <p class="movies__overlay-txt">${overlayText}</p>
          </div>`;
}
