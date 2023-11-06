import React from 'react';
import useFilterAdverts from '../../hooks/useFilterAdverts.js';
import css from './CarFilter.module.css';

const CarFilter = () => {
  const { filter, filterCarId, onChangeFilter } = useFilterAdverts();

  return (
    <div className={css.filter}>
      <label htmlFor={filterCarId}>Car brand</label>
      <input
        type="text"
        value={filter}
        name="name"
        placeholder="Enter the text"
        id={filterCarId}
        onChange={onChangeFilter}
        required
      />
    </div>
  );
};

export default CarFilter;
