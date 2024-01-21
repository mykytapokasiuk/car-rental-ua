import AdvertsList from '../../components/AdvertsList/AdvertsList.jsx';
import CarFilterForm from '../../components/CarFilterForm/CarFilterForm.jsx';

const CatalogPage = () => {
  return (
    <section>
      <CarFilterForm />
      <AdvertsList />
    </section>
  );
};

export default CatalogPage;
