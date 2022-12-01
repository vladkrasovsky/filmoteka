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
import devOleksiiVitObj from '../images/team_photos/webp/Oleksii_Vitomskyi.webp';
import github_iconRef from '../images/svg/github_icon.svg';
import linkedin_iconRef from '../images/svg/linkedin_icon.svg';

const bodyRef = document.querySelector('[data-body]');

const team = [
  {
    photo: `${teamLeadObj}`,
    name: 'Vladyslav',
    role: 'Team-Lead',
    github_path: 'https://github.com/vladkrasovsky',
    linkedin_path: 'https://www.linkedin.com/in/kros16',
  },
  {
    photo: `${scrumMasterObj}`,
    name: 'Veronika',
    role: 'Scrum-Master',
    github_path: 'https://github.com/Se1ena',
  },
  {
    photo: `${devStanyslavObj}`,
    name: 'Stanyslav',
    role: 'Developer',
    github_path: 'https://github.com/StanyslavCherniakov',
    linkedin_path:
      'https://www.linkedin.com/in/stanyslav-cherniakov-b6759a108/',
  },
  {
    photo: `${devViktoriiaObj}`,
    name: 'Vicktoriia',
    role: 'Developer',
    github_path: 'https://github.com/Vicktoriia',
    linkedin_path:
      'https://www.linkedin.com/in/viktoriia-aleksieieva-603861248/?locale=en_US',
  },
  {
    photo: `${devOleksiiObj}`,
    name: 'Oleksii',
    role: 'Developer',
    github_path: 'https://github.com/zablockiy',
  },
  {
    photo: `${devMariiaObj}`,
    name: 'Mariia',
    role: 'Developer',
    github_path: 'https://github.com/Mary-knows',
    linkedin_path:
      'https://www.linkedin.com/in/%D0%BC%D0%B0%D1%80%D0%B8%D1%8F-%D0%BF%D1%80%D0%BE%D0%BA%D0%BE%D0%BF%D0%B5%D0%BD%D0%BA%D0%BE-488885118/',
  },

  {
    photo: `${devIrynaObj}`,
    name: `Iryna`,
    role: 'Developer',
    github_path: 'https://github.com/IrynaHridnova',
    linkedin_path:
      'https://www.linkedin.com/in/%D0%B8%D1%80%D0%B8%D0%BD%D0%B0-%D0%B4%D1%8E%D0%BA%D0%BE%D0%B2%D0%B0-4a2939258',
  },
  {
    photo: `${devYanaObj}`,
    name: 'Yana',
    role: 'Developer',
    github_path: 'https://github.com/YanaLiz',
    linkedin_path: 'https://www.linkedin.com/in/yana-lizogub-4b0718258/',
  },

  {
    photo: `${devSerhiiPadalkaObj}`,
    name: 'Serhii',
    role: 'Developer',
    github_path: 'https://github.com/Padalka-Sergey',
    linkedin_path:
      'https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3Bq4G3GuGJRZW2ctPIEiYzhg%3D%3D',
  },
  {
    photo: `${devDenysObj}`,
    name: 'Denys',
    role: 'Developer',
    github_path: 'https://github.com/DenysKors',
    linkedin_path: 'https://www.linkedin.com/in/denys-korsukov-31ba04217',
  },
  {
    photo: `${devSerhiiDenObj}`,
    name: 'Serhii',
    role: 'Developer',
    github_path: 'https://github.com/CrabSerg',
    linkedin_path: 'https://www.linkedin.com/in/serg-denysiuk-858519258/',
  },
  {
    photo: `${devOleksiiVitObj}`,
    name: 'Oleksii',
    role: 'Developer',
    github_path: 'https://github.com/Alexey7272',
    linkedin_path:
      'https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9-%D0%B2%D0%B8%D1%82%D0%BE%D0%BC%D1%81%D0%BA%D0%B8%D0%B9-481a60185/',
  },
];

const markupCard = team
  .map(({ photo, name, role, github_path, linkedin_path }) => {
    return `<li class="team_card">
             
               <img loading="lazy" src="${photo}" alt="${name}" class="team_photo">
               <div class = "team_info">
              <p class="team_name">${name}</p>
              <a href="${github_path}" class="link_social">
               <img class="github_icon" src="${github_iconRef}" alt="github icon" width="30" />
              </a>
              <a href="${linkedin_path}">
               <img class="linkedin_icon" src="${linkedin_iconRef}" alt="linkedin icon" width="30" />
              </a>
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
  bodyRef.classList.toggle('no-scroll');

  function closeModal(e) {
    if (e.code === 'Escape') {
      modal.close();
      window.removeEventListener('keydown', closeModal);
    }
  }
}
