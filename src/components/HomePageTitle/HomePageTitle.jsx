import React from 'react';
import css from './HomePageTitle.module.css';
import { Link } from 'react-router-dom';

const HomePageTitle = () => {
  return (
    <div className={css.container}>
      <h2 className={css.homePageTitle}>Drive safely with EasyDriveUA</h2>
      <Link className={css.rentCarBtn} to={'/catalog'} title="Rent now">
        Rent Now
      </Link>
    </div>
  );
};

export default HomePageTitle;
