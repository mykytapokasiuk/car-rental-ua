import React from 'react';
import AdvertsList from '../../components/AdvertsList/AdvertsList.jsx';
import CarFilter from '../../components/CarFilter/CarFilter.jsx';

const CatalogPage = () => {
  return (
    <section>
      <CarFilter />
      <AdvertsList />
    </section>
  );
};

export default CatalogPage;
