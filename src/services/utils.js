import { Notify } from 'notiflix';

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
