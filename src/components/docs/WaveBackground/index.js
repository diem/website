import React from 'react';
import styles from './styles.module.css';

import useThemeContext from '@theme/hooks/useThemeContext';

const WaveBackground = () => {
  const {isDarkTheme} = useThemeContext();

  const url = isDarkTheme ? '/img/docs/wave-top-dark.svg' : '/img/docs/wave-top.svg';

  return (
    <div className={styles.root}>
      <div>
        <img src={url} />
        <div className={styles.rectangle} />
      </div>
    </div>
  );
};

export default WaveBackground;
