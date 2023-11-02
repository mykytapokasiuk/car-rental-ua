import React from 'react';
import { Dna } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div>
      <Dna
        visible={true}
        height="70"
        width="70"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass={css.dnaWrapper}
      />
    </div>
  );
};

export default Loader;
