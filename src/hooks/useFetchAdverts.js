import { useSelector, useDispatch } from 'react-redux';
import {
  selectAdverts,
  selectError,
  selectIsloading,
} from '../redux/adverts/selectors.js';
import { incrementPage } from '../redux/adverts/advertsSlice.js';
import { fetchAdvertsThunk } from '../redux/adverts/operations.js';

const useFetchAdverts = () => {
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectIsloading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const onLoadMore = () => {
    dispatch(incrementPage());
    dispatch(fetchAdvertsThunk());
  };

  const filteredAdverts = adverts.map((item) => {
    return {
      ...item,
      address: {
        city: item.address.split(', ')[1],
        country: item.address.split(', ')[2],
      },
      rentalConditions: {
        age: item.rentalConditions.substring(0, 11),
        ageNumber: item.rentalConditions.substring(13, 15),
        license: item.rentalConditions.substring(16, 38),
        required: item.rentalConditions.substring(39),
      },
    };
  });

  const showButton = filteredAdverts.length !== 32;

  return {
    adverts,
    filteredAdverts,
    isLoading,
    error,
    dispatch,
    onLoadMore,
    showButton,
  };
};

export default useFetchAdverts;
