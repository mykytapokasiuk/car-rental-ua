import { useState } from 'react';
import PropTypes from 'prop-types';
import CarInfoModal from '../CarInfoModal/CarInfoModal.jsx';
import useAddFavoriteAdverts from '../../hooks/useAddFavoriteAdverts.js';
import css from './AdvertsListItem.module.css';

const AdvertsListItem = (props) => {
  const { onAddFavoriteAdvert, setFavoriteIconStatus } =
    useAddFavoriteAdverts();
  const [show, setShow] = useState(false);
  const carProps = { ...props };

  return (
    <>
      <li className={css.advertCard}>
        <button
          id={carProps.id}
          type="button"
          title={setFavoriteIconStatus(carProps.id, 'title')}
          className={css.favoriteBtn}
          onClick={onAddFavoriteAdvert}
        >
          <svg
            className={css.favoriteIcon}
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill={setFavoriteIconStatus(carProps.id, 'fill')}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.6301 3.45753C15.247 3.07428 14.7922 2.77026 14.2916 2.56284C13.791 2.35542 13.2545 2.24866 12.7126 2.24866C12.1707 2.24866 11.6342 2.35542 11.1336 2.56284C10.633 2.77026 10.1782 3.07428 9.79509 3.45753L9.00009 4.25253L8.20509 3.45753C7.43132 2.68376 6.38186 2.24906 5.28759 2.24906C4.19331 2.24906 3.14386 2.68376 2.37009 3.45753C1.59632 4.2313 1.16162 5.28075 1.16162 6.37503C1.16162 7.4693 1.59632 8.51876 2.37009 9.29253L3.16509 10.0875L9.00009 15.9225L14.8351 10.0875L15.6301 9.29253C16.0133 8.90946 16.3174 8.45464 16.5248 7.95404C16.7322 7.45345 16.839 6.91689 16.839 6.37503C16.839 5.83316 16.7322 5.2966 16.5248 4.79601C16.3174 4.29542 16.0133 3.84059 15.6301 3.45753Z"
              stroke={setFavoriteIconStatus(carProps.id, 'stroke')}
              strokeOpacity="0.8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <img
          src={carProps.img}
          title={`${carProps.make} ${carProps.model} ${carProps.year}`}
          alt={`${carProps.make} ${carProps.model} ${carProps.year}`}
          className={css.advertImage}
        />
        <div className={css.advertCardTitle}>
          {carProps.make}
          <span className={css.model}>{carProps.model},</span>
          {carProps.year}
          <span className={css.rentalPrice}>${carProps.rentalPrice}</span>
        </div>
        <div className={css.advertCardBody}>
          {carProps.address.city} | {carProps.address.country} |{' '}
          {carProps.rentalCompany} | {carProps.type} | {carProps.mileage} |{' '}
          {carProps.accessories[0]} | {carProps.functionalities[0]}
        </div>
        <button
          className={css.advertCardBtn}
          title="Learn more"
          onClick={() => {
            setShow(true);
          }}
        >
          Learn more
        </button>
      </li>
      <CarInfoModal show={show} setShow={setShow} carProps={carProps} />
    </>
  );
};

AdvertsListItem.propTypes = {
  make: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rentalPrice: PropTypes.number.isRequired,
  address: PropTypes.objectOf(PropTypes.string).isRequired,
  rentalCompany: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  mileage: PropTypes.number.isRequired,
  accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
  functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
  img: PropTypes.string.isRequired,
};

export default AdvertsListItem;
