import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CarInfoModal from '../CarInfoModal/CarInfoModal.jsx';
import css from './AdvertsListItem.module.css';

const AdvertsListItem = (props) => {
  const carProps = { ...props };
  const [show, setShow] = useState(false);

  return (
    <>
      <li className={css.advertCard}>
        <img
          src={carProps.img}
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
  rentalPrice: PropTypes.string.isRequired,
  address: PropTypes.objectOf(PropTypes.string).isRequired,
  rentalCompany: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  mileage: PropTypes.number.isRequired,
  accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
  functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
  img: PropTypes.string.isRequired,
};

export default AdvertsListItem;
