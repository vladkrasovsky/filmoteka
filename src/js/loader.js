import { Loading } from 'notiflix/build/notiflix-loading-aio';

export const spinerStart = () => {
  Loading.pulse('Wait please...', {
    svgColor: '#ff001b',
  });
};

export const spinerStop = () => {
  Loading.remove();
};
