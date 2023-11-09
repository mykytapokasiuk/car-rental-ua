import Modal from 'react-bootstrap/Modal';
import css from './CarInfoModal.module.css';

const CarInfoModal = ({ show, setShow, carProps }) => {
  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      aria-labelledby="car-info"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title as="h2" id="car-info" className={css.advertTitle}>
          {carProps.make} {carProps.model}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body as="div" className={css.advertBody}>
        <img
          src={carProps.img}
          alt={`${carProps.make} ${carProps.model} ${carProps.year}`}
        />
        <div className={css.carInfoContainer}>
          <h3 className={css.carInfoTitle}>
            {carProps.make}
            <span className={css.model}>{carProps.model},</span>
            {carProps.year}
          </h3>
          <div className={css.carInfoBody}>
            <p className={css.carInfoText}>
              {carProps.address.city} | {carProps.address.country} | id:{' '}
              {carProps.id} | Year: {carProps.year} | Type: {carProps.type} |
              Fuel Consumption: {carProps.fuelConsumption} | Engine Size:{' '}
              {carProps.engineSize}
            </p>
            <p className={css.carDescription}>{carProps.description}</p>
            <div className={css.carAccessories}>
              <p className={css.accessoriesTitle}>
                Accessories and functionalities:
              </p>
              <p className={css.accessoriesText}>
                {carProps.accessories[0]} | {carProps.accessories[1]} |{' '}
                {carProps.accessories[2]} | {carProps.functionalities[0]} |{' '}
                {carProps.functionalities[1]} | {carProps.functionalities[2]}
              </p>
            </div>

            <div className={css.rentalConditions}>
              <p className={css.rentalConditionsTitle}>Rental Conditions:</p>
              <ul className={css.rentalConditionsText}>
                <li className={css.rentalConditionsItem}>
                  {carProps.rentalConditions.age} :
                  <span className={css.ageNumber}>
                    {carProps.rentalConditions.ageNumber}
                  </span>
                </li>
                <li className={css.rentalConditionsItem}>
                  {carProps.rentalConditions.license}
                </li>
                <li className={css.rentalConditionsItem}>
                  {carProps.rentalConditions.required}
                </li>
                <li className={css.rentalConditionsItem}>
                  Mileage:{' '}
                  <span className={css.mileage}>{carProps.mileage}</span>
                </li>
                <li className={css.rentalConditionsItem}>
                  Price:{' '}
                  <span className={css.price}>{carProps.rentalPrice}$</span>
                </li>
              </ul>
            </div>
          </div>
          <button className={css.rentalCarBtn} type="button">
            <a className={css.rentalCarBtnLink} href="tel:+380730000000">
              Rental car
            </a>
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CarInfoModal;
