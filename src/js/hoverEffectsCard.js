import { Themoviedb } from './API/Themoviedb';
// import { Spinner } from 'spin.js';

const movieAboutText = new Themoviedb();
let getEl = selector => document.querySelector(selector);
const movieList = getEl('.movies__list');

// var opts = {
//   lines: 12, // The number of lines to draw
//   length: 58, // The length of each line
//   width: 21, // The line thickness
//   radius: 54, // The radius of the inner circle
//   scale: 0.3, // Scales overall size of the spinner
//   corners: 1, // Corner roundness (0..1)
//   speed: 1.1, // Rounds per second
//   rotate: 0, // The rotation offset
//   animation: 'spinner-line-shrink', // The CSS animation name for the lines
//   direction: 1, // 1: clockwise, -1: counterclockwise
//   color: '#ffffff', // CSS color or array of colors
//   fadeColor: 'transparent', // CSS color or array of colors
//   top: '50%', // Top position relative to parent
//   left: '50%', // Left position relative to parent
//   shadow: '0 0 1px transparent', // Box-shadow for the lines
//   zIndex: 2000000000, // The z-index (defaults to 2e9)
//   className: 'spinner', // The CSS class to assign to the spinner
//   position: 'absolute', // Element positioning
// };

// var target = document.querySelector('.movies__item');
// var spinner = new Spinner(opts).spin(target);

movieList.addEventListener('mouseover', onHoverCard);
movieList.addEventListener('mouseout', onNotHoverCard);

function onHoverCard(e) {
  if (e.target.nodeName !== 'LI') {
    return;
  }
  // let numId = e.target.getAttribute('data-id');
  fetchHoverEffect(e.target.getAttribute('data-id'));
}

let overlayText = null;
let movieOverlay = null;
let overlayVote = null;
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
        `<div class="movies__overlay">
            <p class="movies__overlay-vote">Vote: no ratings</p>
            <p class="movies__overlay-about">About:</p>
            <p class="movies__overlay-txt">${overlayText}</p>
          </div>`
      );
    } else {
      boxOverlay.insertAdjacentHTML(
        'beforeend',
        `<div class="movies__overlay">
            <p class="movies__overlay-vote">Vote: ${overlayVote}</p>
            <p class="movies__overlay-about">About:</p>
            <p class="movies__overlay-txt">${overlayText}</p>
          </div>`
      );
    }

    movieOverlay = getEl('.movies__overlay');
  } catch (error) {
    console.log(error);
  }
}

// function markupOverlayCardNoVote() {
//   return `<div class="movies__overlay">
//             <p class="movies__overlay-vote">Vote: no ratings</p>
//             <p class="movies__overlay-about">About:</p>
//             <p class="movies__overlay-txt">${overlayText}</p>
//           </div>`;
// }

// function markupOverlayCard() {
//   return `<div class="movies__overlay">
//             <p class="movies__overlay-vote">Vote: ${overlayVote}</p>
//             <p class="movies__overlay-about">About:</p>
//             <p class="movies__overlay-txt">${overlayText}</p>
//           </div>`;
// }

function onNotHoverCard(e) {
  if (e.target.nodeName !== 'LI') {
    return;
  }
  movieOverlay.remove();
}
