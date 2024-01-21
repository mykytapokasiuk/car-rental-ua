import { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import useFilterAdverts from '../../hooks/useFilterAdverts.js';
import { pricesPerHour } from '../../services/utils.js';
import { makes } from '../../services/makes.js';
import css from './CarFilterForm.module.css';

const CarFilterForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [brandSelectArrowUp, setBrandSelectArrowUp] = useState(false);
  const [priceSelectArrowUp, setPriceSelectArrowUp] = useState(false);
  const { onChangeCarFilter, clearFilter, getFilteredAdverts, filter } =
    useFilterAdverts();

  const handleShowForm = () => {
    setShowForm(true);
  };
  const handleCloseForm = () => {
    setShowForm(false);
  };
  const handleSelectArrowIcon = (filter) => {
    filter === 'brand'
      ? setBrandSelectArrowUp(!brandSelectArrowUp)
      : setPriceSelectArrowUp(!priceSelectArrowUp);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    getFilteredAdverts();
    handleCloseForm();
  };

  return (
    <div className={css.carFilterFormContainer}>
      <Button
        variant="outline-primary"
        className="d-lg-none"
        title="Filter"
        onClick={handleShowForm}
        style={{
          padding: '0px 20px',
          marginBottom: '25px',
          fontSize: '18px',
          letterSpacing: '0.08em',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        }}
      >
        Filter
      </Button>
      <Offcanvas
        className={css.offCanvasContainer}
        show={showForm}
        onHide={handleCloseForm}
        responsive="lg"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className={css.offCanvasTitle}>
            Filter
          </Offcanvas.Title>
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
                  title="Select brand"
                  onChange={onChangeCarFilter}
                  onClick={() => {
                    handleSelectArrowIcon('brand');
                  }}
                  onBlur={() => {
                    brandSelectArrowUp ? handleSelectArrowIcon('brand') : null;
                  }}
                  value={filter.make}
                >
                  <option value="">Select brand</option>
                  {makes.map((item) => (
                    <option
                      className={css.brandSelectOption}
                      key={item}
                      value={item}
                    >
                      {item}
                    </option>
                  ))}
                </select>
                <svg
                  className={
                    brandSelectArrowUp ? css.selectArrowUp : css.selectArrowDown
                  }
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
                  X
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
                  title="Price per hour"
                  onChange={onChangeCarFilter}
                  onClick={() => {
                    handleSelectArrowIcon('price');
                  }}
                  onBlur={() => {
                    priceSelectArrowUp ? handleSelectArrowIcon('price') : null;
                  }}
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
                  className={
                    priceSelectArrowUp ? css.selectArrowUp : css.selectArrowDown
                  }
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
                  X
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
                  title="Mileage from"
                  onChange={onChangeCarFilter}
                  value={filter.mileageFrom}
                  style={{ width: '160px' }}
                />
                <button
                  type="button"
                  className={css.clearFilterBtn}
                  title="Clear filter"
                  onClick={() => {
                    clearFilter('mileageFrom');
                  }}
                >
                  X
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
                  title="Mileage to"
                  onChange={onChangeCarFilter}
                  value={filter.mileageTo}
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
                  X
                </button>
              </div>
            </div>
            <button
              type="submit"
              className={css.carFilterSubmitBtn}
              title="Search"
            >
              Search
            </button>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default CarFilterForm;
