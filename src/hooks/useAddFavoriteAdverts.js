import { useSelector, useDispatch } from 'react-redux';
import {
  addFavoriteAdvert,
  deleteFavoriteAdvert,
} from '../redux/favorites/favoritesSlice.js';
import { selectFavorite } from '../redux/favorites/selectors.js';
import { selectAdverts } from '../redux/adverts/selectors.js';

const useAddFavoriteAdverts = () => {
  const adverts = useSelector(selectAdverts);
  const favorites = useSelector(selectFavorite);
  const dispatch = useDispatch();

  const updatedAdverts = adverts.map((item) => {
    return {
      ...item,
      address: {
        city: item.address.split(', ')[1],
        country: item.address.split(', ')[2],
      },
      mileage: +(item.mileage / 1000).toFixed(3),
      rentalConditions: {
        age: item.rentalConditions.substring(0, 11),
        ageNumber: item.rentalConditions.substring(13, 15),
        license: item.rentalConditions.substring(16, 38),
        required: item.rentalConditions.substring(39),
      },
      rentalPrice: +item.rentalPrice.substring(1),
    };
  });

  const onAddFavoriteAdvert = (event) => {
    const advertId = +event.currentTarget.id;
    const favoriteAdvert = updatedAdverts.filter(
      (item) => item.id === advertId,
    );
    if (favorites.some((item) => item.id === advertId)) {
      dispatch(deleteFavoriteAdvert(advertId));
      return;
    }
    dispatch(addFavoriteAdvert(favoriteAdvert));
  };

  const setFavoriteIconColor = (advertId, prop) => {
    const advertIn = favorites.some((item) => item.id === advertId);
    if (prop === 'fill') {
      return advertIn ? '#3470FF' : 'none';
    } else if (prop === 'stroke') {
      return advertIn ? 'none' : 'white';
    }
  };

  return {
    favorites,
    onAddFavoriteAdvert,
    setFavoriteIconColor,
  };
};

export default useAddFavoriteAdverts;
