import React from 'react';

import styles from './styles.module.css';

const BucketsContainer = ({children}) => (
  <div className={styles.root}>
    {children}
  </div>
);

export default BucketsContainer;
