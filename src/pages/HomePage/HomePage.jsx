import React from 'react';
import css from './HomePage.module.css';
import HomePageTitle from '../../components/HomePageTitle/HomePageTitle';

const HomePage = () => {
  return (
    <section className={css.sectionContainer}>
      <HomePageTitle />
    </section>
  );
};

export default HomePage;
