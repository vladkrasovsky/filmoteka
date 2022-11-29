import * as basicLightbox from 'basiclightbox';

import teamLeadObj from '../images/team_photos/webp/Vladyslav_Krasovsky.webp';
import scrumMasterObj from '../images/team_photos/webp/Veronika_Moskaliuk.webp';
import devStanyslavObj from '../images/team_photos/webp/Stanyslav_Cherniakov.webp';
import devViktoriiaObj from '../images/team_photos/webp/Aleksieieva_Viktoriia.webp';
import devDenysObj from '../images/team_photos/webp/Denys_Korsukov.webp';
import devIrynaObj from '../images/team_photos/webp/Iryna_Diukova.webp';
import devYanaObj from '../images/team_photos/webp/Lizogub_Yana.webp';
import devMariiaObj from '../images/team_photos/webp/Mariia_Prokopenko.webp';
import devOleksiiObj from '../images/team_photos/webp/Oleksii_Zablotskyi.webp';
import devSerhiiDenObj from '../images/team_photos/webp/Serhii_Denysiuk.webp';
import devSerhiiPadalkaObj from '../images/team_photos/webp/Serhii_Padalka.webp';

const team = [
  {
    photo: `${teamLeadObj}`,
    name: 'Vladyslav Krasovsky',
    role: 'Team-Lead',
  },
  {
    photo: `${scrumMasterObj}`,
    name: 'Veronika Moskaliuk',
    role: 'Scrum-Master',
  },
  {
    photo: `${devStanyslavObj}`,
    name: 'Stanyslav Cherniakov',
    role: 'Developer',
  },
  {
    photo: `${devViktoriiaObj}`,
    name: 'Aleksieieva Viktoriia',
    role: 'Developer',
  },
  {
    photo: `${devDenysObj}`,
    name: 'Denys Korsukov',
    role: 'Developer',
  },
  {
    photo: `${devIrynaObj}`,
    name: `Iryna Diukova`,
    role: 'Developer',
  },
  {
    photo: `${devYanaObj}`,
    name: 'Yana Lizogub',
    role: 'Developer',
  },
  {
    photo: `${devMariiaObj}`,
    name: 'Mariia Prokopenko',
    role: 'Developer',
  },
  {
    photo: `${devOleksiiObj}`,
    name: 'Oleksii Zablotskyi',
    role: 'Developer',
  },
  {
    photo: `${devSerhiiDenObj}`,
    name: 'Serhii Denysiuk',
    role: 'Developer',
  },
  {
    photo: `${devSerhiiPadalkaObj}`,
    name: 'Serhii Padalka',
    role: 'Developer',
  },
];

const markupCard = team
  .map(({ photo, name, role }) => {
    return `<li class="team_card">
             
               <img loading="lazy" src="${photo}" alt="${name}" class="team_photo">
               <div class = "team_info">
              <p class="team_name">${name}</p>
               </div>
              <p class="team_role">${role}</p>
              
              </li>`;
  })
  .join('');

const markupTeamModal = `<p class="team_title"> TEAM CREATORS </p>
<ul class="team_box">
${markupCard}
</ul>`;

const container = document.querySelector('.footer__team-modal-btn');
container.addEventListener('click', openModal);
const modal = basicLightbox.create(markupTeamModal);

function openModal(e) {
  e.preventDefault();
  modal.show();
  window.addEventListener('keydown', closeModal);

  function closeModal(e) {
    if (e.code === 'Escape') {
      modal.close();
      window.removeEventListener('keydown', closeModal);
    }
  }
}
