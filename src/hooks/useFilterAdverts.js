import { useDispatch, useSelector } from 'react-redux';
import {
  setCarFilter,
  setClearCarFilter,
} from '../redux/filter/filterSlice.js';
import { fetchFilteredAdvertsThunk } from '../redux/adverts/operations.js';
import { selectFilter } from '../redux/filter/selectors.js';

const useFilterAdverts = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChangeCarFilter = (event) => {
    dispatch(
      setCarFilter({
        [event.target.id]: event.target.value,
      }),
    );
  };

  const clearFilter = (filter) => {
    dispatch(
      setClearCarFilter({
        [filter]: '',
      }),
    );
  };

  const getFilteredAdverts = () => {
    dispatch(fetchFilteredAdvertsThunk());
  };

  return {
    filter,
    onChangeCarFilter,
    clearFilter,
    getFilteredAdverts,
  };
};

export default useFilterAdverts;
