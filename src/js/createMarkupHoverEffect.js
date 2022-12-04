import { overlayVote, overlayText } from './hoverEffectsCard';

export function markupOverlayCardNoVote(overlayText) {
  return `<div class="movies__overlay">
            <p class="movies__overlay-vote">Vote: no ratings</p>
            <p class="movies__overlay-about">About:</p>
            <p class="movies__overlay-txt">${overlayText}</p>
          </div>`;
}

export function markupOverlayCard(overlayVote, overlayText) {
  return `<div class="movies__overlay">
            <p class="movies__overlay-vote">Vote: ${overlayVote}</p>
            <p class="movies__overlay-about">About:</p>
            <p class="movies__overlay-txt">${overlayText}</p>
          </div>`;
}
