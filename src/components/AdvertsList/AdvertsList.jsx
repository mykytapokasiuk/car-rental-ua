import React, { useEffect } from 'react';
import Loader from '../Loader/Loader.jsx';
import AdvertsListItem from '../AdvertsListItem/AdvertsListItem.jsx';
import useFetchAdverts from '../../hooks/useFetchAdverts.js';
import * as notifications from '../../services/utils.js';
import css from './AdvertsList.module.css';

const AdvertsList = () => {
  const {
    adverts,
    updatedAdverts,
    isLoading,
    error,
    dispatch,
    onLoadMore,
    showButton,
    showNoMatchMessage,
    onFetchAdverts,
  } = useFetchAdverts();

  useEffect(() => {
    if (error) {
      notifications.onError(error);
      return;
    } else if (adverts.length !== 0) {
      return;
    }
    onFetchAdverts();
    notifications.onSuccessFetch();
  }, [dispatch, error]);

  return (
    <>
      {isLoading && <Loader />}
      <div className={css.advertsContainer}>
        <ul className={css.advertsList}>
          {updatedAdverts.map((item) => (
            <AdvertsListItem
              key={item.id}
              make={item.make}
              model={item.model}
              year={item.year}
              rentalPrice={item.rentalPrice}
              address={item.address}
              rentalCompany={item.rentalCompany}
              type={item.type}
              mileage={item.mileage}
              accessories={item.accessories}
              functionalities={item.functionalities}
              img={item.img}
              id={item.id}
              description={item.description}
              fuelConsumption={item.fuelConsumption}
              engineSize={item.engineSize}
              rentalConditions={item.rentalConditions}
            />
          ))}
        </ul>
        {!isLoading && showNoMatchMessage && (
          <p className={css.noMatchMessage}>
            We apologize, but we couldn't find any results matching your query.
            Please try again.
          </p>
        )}
        {!isLoading && showButton && (
          <button
            className={css.loadMoreBtn}
            type="button"
            onClick={() => {
              onLoadMore();
            }}
          >
            Load more
          </button>
        )}
      </div>
    </>
  );
};

export default AdvertsList;
