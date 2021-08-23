import React from 'react';
import LoaderSpinner from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import styles from './Loader.module.css';

function Loader() {
  return (
    <div className={styles.loader}>
      <LoaderSpinner
        visible="true"
        type="Circles"
        color="#4A56E2"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
}

export default Loader;
