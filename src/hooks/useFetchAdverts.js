import { useSelector, useDispatch } from 'react-redux';
import {
  selectAdverts,
  selectError,
  selectIsloading,
} from '../redux/adverts/selectors.js';

const useFetchAdverts = () => {
  const adverts = useSelector(selectAdverts);
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
  console.log(filteredAdverts);
  const isLoading = useSelector(selectIsloading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  return { filteredAdverts, isLoading, error, dispatch };
};

export default useFetchAdverts;
