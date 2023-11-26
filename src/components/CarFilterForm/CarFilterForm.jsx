import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import useFilterAdverts from '../../hooks/useFilterAdverts.js';
import { pricesPerHour } from '../../services/utils.js';
import { makes } from '../../services/makes.js';
import css from './CarFilterForm.module.css';

const CarFilterForm = () => {
  const [showForm, setShowForm] = useState(false);
  const { onChangeCarFilter, clearFilter, getFilteredAdverts, filter } =
    useFilterAdverts();

  const handleShowForm = () => {
    setShowForm(true);
  };
  const handleCloseForm = () => {
    setShowForm(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    getFilteredAdverts();
    handleCloseForm();
  };

  return (
    <div className={css.carFilterFormContainer}>
      <Button variant="primary" className="d-lg-none" onClick={handleShowForm}>
        Filter
      </Button>
      <Offcanvas show={showForm} onHide={handleCloseForm} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form className={css.carFilterForm} onSubmit={handleSubmit}>
            <div className={css.carBrandContainer}>
              <label htmlFor="make">Car brand</label>
              <div className={css.carBrandSelectContainer}>
                <select
                  className={css.carBrandSelect}
                  id="make"
                  name="make"
                  onChange={onChangeCarFilter}
                  value={filter.make}
                >
                  <option value="">Select brand</option>
                  {makes.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <svg
                  className={css.selectArrow}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="#121417"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <button
                  className={css.clearFilterBtn}
                  type="button"
                  title="Clear filter"
                  onClick={() => {
                    clearFilter('make');
                  }}
                >
                  x
                </button>
              </div>
            </div>

            <div className={css.carPriceContainer}>
              <label htmlFor="rentalPrice">Price/ 1 hour</label>
              <div className={css.carPriceSelectContainer}>
                <select
                  className={css.carPriceSelect}
                  id="rentalPrice"
                  name="rentalPrice"
                  onChange={onChangeCarFilter}
                  value={filter.rentalPrice}
                >
                  <option value="">To $</option>
                  {pricesPerHour.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <svg
                  className={css.selectArrow}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="#121417"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <button
                  className={css.clearFilterBtn}
                  type="button"
                  title="Clear filter"
                  onClick={() => {
                    clearFilter('rentalPrice');
                  }}
                >
                  x
                </button>
              </div>
            </div>

            <div className={css.carMileageFromContainer}>
              <label htmlFor="mileageFrom">Car mileage / km</label>
              <div className={css.carMileageFromInputContainer}>
                <input
                  className={css.carMileageFromInput}
                  type="number"
                  id="mileageFrom"
                  name="mileageFrom"
                  onChange={onChangeCarFilter}
                  value={filter.mileageFrom}
                  placeholder="From"
                  style={{ width: '160px' }}
                  min={0}
                />
                <button
                  type="button"
                  className={css.clearFilterBtn}
                  title="Clear filter"
                  onClick={() => {
                    clearFilter('mileageFrom');
                  }}
                >
                  x
                </button>
              </div>
            </div>

            <div className={css.carMileageToContainer}>
              <div className={css.carMileageToInputContainer}>
                <input
                  className={css.carMileageToInput}
                  type="number"
                  id="mileageTo"
                  name="mileageTo"
                  onChange={onChangeCarFilter}
                  value={filter.mileageTo}
                  placeholder="To"
                  style={{ width: '160px' }}
                  min={0}
                />
                <button
                  className={css.clearFilterBtn}
                  type="button"
                  title="Clear filter"
                  onClick={() => {
                    clearFilter('mileageTo');
                  }}
                >
                  x
                </button>
              </div>
            </div>
            <button type="submit" className={css.carFilterSubmitBtn}>
              Search
            </button>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default CarFilterForm;
