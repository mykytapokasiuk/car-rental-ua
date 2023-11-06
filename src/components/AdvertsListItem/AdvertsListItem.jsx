import React from 'react';
import PropTypes from 'prop-types';

import css from './AdvertsListItem.module.css';

const AdvertsListItem = ({
  make,
  model,
  year,
  rentalPrice,
  address,
  rentalCompany,
  type,
  mileage,
  accessories,
  functionalities,
  img,
}) => {
  return (
    <li className={css.advertCard}>
      <img
        src={img}
        alt={`${make} ${model} ${year}`}
        className={css.advertImage}
      />
      <div className={css.advertCardTitle}>
        {make}
        <span className={css.model}>{model},</span>
        {year}
        <span className={css.rentalPrice}>{rentalPrice}</span>
      </div>
      <div className={css.advertCardBody}>
        {address.city} | {address.country} | {rentalCompany} | {type} |{' '}
        {mileage} | {accessories} | {functionalities}
      </div>
      <button className={css.advertCardBtn}>Learn more</button>
    </li>
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
  accessories: PropTypes.string.isRequired,
  functionalities: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default AdvertsListItem;
