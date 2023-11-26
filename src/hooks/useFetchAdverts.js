import { useSelector, useDispatch } from 'react-redux';
import {
  selectAdverts,
  selectError,
  selectIsloading,
} from '../redux/adverts/selectors.js';
import {
  setAxiosParams,
  incrementPage,
} from '../redux/adverts/advertsSlice.js';
import { fetchAdvertsThunk } from '../redux/adverts/operations.js';

const useFetchAdverts = () => {
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectIsloading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const onFetchAdverts = () => {
    dispatch(
      setAxiosParams({
        page: 1,
        limit: 12,
      }),
    );
    dispatch(fetchAdvertsThunk());
  };

  const onLoadMore = () => {
    dispatch(incrementPage());
    dispatch(fetchAdvertsThunk());
  };

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

  const showButton = updatedAdverts.length !== 32;

  return {
    adverts,
    updatedAdverts,
    isLoading,
    error,
    dispatch,
    onLoadMore,
    showButton,
    onFetchAdverts,
  };
};

export default useFetchAdverts;
