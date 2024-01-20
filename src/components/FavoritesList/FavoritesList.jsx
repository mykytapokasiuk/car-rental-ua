import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import FavoritesListItem from '../FavoritesListItem/FavoritesListItem.jsx';
import useAddFavoriteAdverts from '../../hooks/useAddFavoriteAdverts.js';
import ScrollToTop from 'react-scroll-to-top';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import css from './FavoritesList.module.css';

const FavoritesList = () => {
  const { favorites, showNoFavoritesMessage } = useAddFavoriteAdverts();

  return (
    <>
      <div className={css.favoritesContainer}>
        <h2 className={css.favoritesTitle}>My Favorites</h2>
        <ul className={css.favoritesList}>
          {favorites.map((item) => (
            <FavoritesListItem
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

        {showNoFavoritesMessage && (
          <div className={css.noFavoritesMessageContainer}>
            <Alert variant="primary" className={css.noFavoritesMessage}>
              <Alert.Heading>No Favorites</Alert.Heading>
              You haven`t added any favorites yet
              <hr />
              <Alert.Link as={Link} to="/catalog">
                {' '}
                Go to{' '}
                <span className={css.catalogLink} title="Catalog">
                  Catalog
                </span>{' '}
                page
              </Alert.Link>
            </Alert>
          </div>
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

export default FavoritesList;
