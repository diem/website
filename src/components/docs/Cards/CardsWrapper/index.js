import React from 'react';

import styles from './styles.module.css';

const CardsWrapper = ({ children, title }) => (
  <>
    {title && <h2>{title}</h2>}
    <div className={styles.root}>
      {children}
    </div>
  </>
);

export default CardsWrapper;
