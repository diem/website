import React from 'react';

import styles from './styles.module.css';

const CardsWrapper = ({children}) => (
  <div className={styles.root}>
    {children}
  </div>
);

export default CardsWrapper;
