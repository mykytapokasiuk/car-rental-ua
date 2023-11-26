import { Notify } from 'notiflix';
import { makes } from './makes.js';

export const onError = (error) => {
  Notify.failure(`Please, try again later. Error: ${error}`, {
    width: '200px',
    distance: '25px',
    showOnlyTheLastOne: true,
    position: 'right-top',
    timeout: 3000,
    fontSize: '12px',
    borderRadius: '8px',
    cssAnimationStyle: 'from-top',
  });
};

export const onSuccessFetch = () => {
  Notify.success('All adverts were successfully fetched!', {
    width: '200px',
    distance: '25px',
    showOnlyTheLastOne: true,
    position: 'right-top',
    timeout: 3000,
    fontSize: '12px',
    borderRadius: '8px',
    cssAnimationStyle: 'from-top',
  });
};

// export const carMakes = makes.map((make) => ({
//   value: make,
//   label: make,
// }));

export const pricesPerHour = [...Array(26)].map((item, i) => 10 * i).slice(1);

// export const pricesPerHour = [...Array(26)]
//   .map((item, i) => ({
//     value: 10 * i,
//     label: 10 * i,
//   }))
//   .slice(1);
