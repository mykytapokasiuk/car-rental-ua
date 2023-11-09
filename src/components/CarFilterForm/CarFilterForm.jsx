import React from 'react';
import Select from 'react-select';
import useFilterAdverts from '../../hooks/useFilterAdverts.js';
import { carMakes, pricesPerHour } from '../../services/utils.js';
import useFetchAdverts from '../../hooks/useFetchAdverts.js';

const CarFilterForm = () => {
  const { updatedAdverts } = useFetchAdverts();
  const {
    onChangeCarBrand,
    onChangePricePerHour,
    onChangeMileageFrom,
    onChangeMileageTo,
    clearFilters,
    filter,
  } = useFilterAdverts();

  const filteredAdverts = updatedAdverts.filter(
    (item) =>
      item.make === filter.carBrand.value &&
      item.rentalPrice <= filter.pricePerHour.value &&
      item.mileage >= filter.mileageFrom / 1000 &&
      item.mileage <= filter.mileageTo / 1000,
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(filteredAdverts);
  };

  return (
    <form onSubmit={handleSubmit} id="carFilterForm">
      <label htmlFor="brand">Car brand</label>
      <Select
        options={carMakes}
        name="brand"
        inputId="brand"
        form="carFilterForm"
        value={filter.carBrand}
        onChange={onChangeCarBrand}
        placeholder="Enter the text"
        required
        autoFocus
      />
      <label htmlFor="price">Price/1 hour</label>
      <Select
        options={pricesPerHour}
        name="price"
        inputId="price"
        form="carFilterForm"
        value={filter.pricePerHour}
        onChange={onChangePricePerHour}
        placeholder="To $"
        required
      />

      <label htmlFor="mileageFrom">Car mileage / km</label>
      <input
        type="number"
        id="mileageFrom"
        form="carFilterForm"
        name="mileageFrom"
        value={filter.mileageFrom}
        onChange={onChangeMileageFrom}
        placeholder="From"
        required
      />
      <input
        type="number"
        id="mileageTo"
        form="carFilterForm"
        name="mileageTo"
        value={filter.mileageTo}
        onChange={onChangeMileageTo}
        placeholder="To"
        required
      />
      <button type="submit">SUBMIT</button>
      <button
        type="button"
        onClick={() => {
          clearFilters();
        }}
      >
        Clear filters
      </button>
    </form>
  );
};

export default CarFilterForm;
