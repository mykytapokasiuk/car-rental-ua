import React, { useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import Loader from '../Loader/Loader.jsx';
import AdvertsListItem from '../AdvertsListItem/AdvertsListItem.jsx';
import useFetchAdverts from '../../hooks/useFetchAdverts.js';
import * as notifications from '../../services/utils.js';
import ScrollToTop from 'react-scroll-to-top';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';
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
          <div className={css.noMatchMessageContainer}>
            <Alert variant="primary" className={css.noMatchMessage}>
              <Alert.Heading className={css.noMatchMessageTitle}>
                No Results
              </Alert.Heading>
              We apologize, but we couldn't find any results matching your
              query.
              <hr />
              <p className={css.noMatchMessageText}>Please try again!</p>
            </Alert>
          </div>
        )}
        {!isLoading && showButton && (
          <button
            className={css.loadMoreBtn}
            type="button"
            title="Load more"
            onClick={() => {
              onLoadMore();
            }}
          >
            Load more
          </button>
        )}
      </div>
      <ScrollToTop
        smooth
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '60px',
          height: '60px',
          borderRadius: '8px',
          backgroundColor: '#0d6efd',
          boxShadow: '2px 2px 5px 0px rgba(0, 0, 0, 0.75)',
        }}
        component={
          <IconContext.Provider value={{ color: '#F7F7FB', size: '3.65em' }}>
            <div>
              <BsFillArrowUpSquareFill />
            </div>
          </IconContext.Provider>
        }
      />
    </>
  );
};

export default AdvertsList;
