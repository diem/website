import React from 'react';
import styles from './styles.module.css';

const WaveBackground = () => (
  <div className={styles.root}>
    <div>
      <img src="/img/docs/wave-top.png" />
      <div className={styles.rectangle} />
    </div>
  </div>
);

export default WaveBackground;
