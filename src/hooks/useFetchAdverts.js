import { useSelector, useDispatch } from 'react-redux';
import {
  selectAdverts,
  selectError,
  selectIsloading,
  selectAxiosParams,
} from '../redux/adverts/selectors.js';
import { incrementPage } from '../redux/adverts/advertsSlice.js';
import { fetchAdvertsThunk } from '../redux/adverts/operations.js';

const useFetchAdverts = () => {
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectIsloading);
  const error = useSelector(selectError);
  const page = useSelector(selectAxiosParams); //? Useless???
  const dispatch = useDispatch();

  const onLoadMore = () => {
    dispatch(incrementPage());
    dispatch(fetchAdvertsThunk());
  };

  const filteredAdverts = adverts.map((item) => {
    return {
      ...item,
      accessories: item.accessories[0],
      functionalities: item.functionalities[0],
      address: {
        city: item.address.split(', ')[1],
        country: item.address.split(', ')[2],
      },
    };
  });

  return { adverts, filteredAdverts, isLoading, error, dispatch, onLoadMore };
};

export default useFetchAdverts;
