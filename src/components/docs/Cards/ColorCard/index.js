import React from 'react';
import PropTypes from 'prop-types';

import useBaseUrl from '@docusaurus/useBaseUrl';

import BaseContainer from '../BaseContainer';

import classnames from 'classnames';
import styles from './styles.module.css';

const ColorCard = ({ color, icon, title, to }) => (
  <BaseContainer 
    className={classnames(styles.root, styles[color])} 
    hasShadow={false} 
    to={to}
  >
    <div 
      className={styles.image} 
      style={{ backgroundImage: `url('${useBaseUrl(icon)}')` }}
    />
    <span className={styles.title}>{title}</span>
  </BaseContainer>
);

ColorCard.propTypes = {
  color: PropTypes.oneOf(['aqua', 'purpleDark', 'purpleLight']).isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
};

export default ColorCard;
