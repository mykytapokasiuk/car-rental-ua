import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCarBrandFilter,
  setPricePerHourFilter,
  setMileageFromFilter,
  setMileageToFilter,
  setClearFilter,
} from '../redux/filter/filterSlice.js';
import { selectFilter } from '../redux/filter/selectors.js';

const useFilterAdverts = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const filterId = useId();

  const onChangeCarBrand = (selectedOption) => {
    dispatch(setCarBrandFilter(selectedOption));
  };
  const onChangePricePerHour = (selectedOption) => {
    dispatch(setPricePerHourFilter(selectedOption));
  };
  const onChangeMileageFrom = (event) => {
    dispatch(setMileageFromFilter(+event.target.value));
  };
  const onChangeMileageTo = (event) => {
    dispatch(setMileageToFilter(+event.target.value));
  };
  const clearFilters = () => {
    dispatch(setClearFilter(''));
  };

  return {
    filter,
    filterId,
    onChangeCarBrand,
    onChangePricePerHour,
    onChangeMileageFrom,
    onChangeMileageTo,
    clearFilters,
  };
};

export default useFilterAdverts;
