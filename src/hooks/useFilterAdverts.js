import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/filter/filterSlice.js';
import { selectFilter } from '../redux/filter/selectors.js';

const useFilterAdverts = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const filterCarId = useId();

  const onChangeFilter = (event) => {
    dispatch(setFilter(event.target.value.trim()));
  };

  return { filter, filterCarId, onChangeFilter };
};

export default useFilterAdverts;
