import React, { useEffect } from 'react';
import Loader from '../Loader/Loader.jsx';
import AdvertsListItem from '../AdvertsListItem/AdvertsListItem.jsx';
import useFetchAdverts from '../../hooks/useFetchAdverts.js';
import { fetchAdvertsThunk } from '../../redux/adverts/operations.js';
import * as notifications from '../../services/utils.js';
import css from './AdvertsList.module.css';

const AdvertsList = () => {
  const { adverts, filteredAdverts, isLoading, error, dispatch, onLoadMore } =
    useFetchAdverts();

  useEffect(() => {
    if (error) {
      notifications.onError(error);
      return;
    } else if (adverts.length !== 0) {
      return;
    }
    dispatch(fetchAdvertsThunk());
    notifications.onSuccessFetch();
  }, [dispatch, error]);

  return (
    <>
      {isLoading && <Loader />}
      <div className="advertsContainer">
        <ul className={css.advertsList}>
          {filteredAdverts.map((item) => (
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
            />
          ))}
        </ul>
        <button
          type="button"
          onClick={() => {
            onLoadMore();
          }}
        >
          BUTTON
        </button>
      </div>
    </>
  );
};

export default AdvertsList;
