import React from 'react';
import PropTypes from 'prop-types';

import BaseContainer from '../BaseContainer';
import {WithBackgroundImage} from 'libra-components';

import styles from './styles.module.css';

const SimpleCard = ({ icon, iconDark, title, to }) => (
  <BaseContainer className={styles.root} to={to}>
    <WithBackgroundImage 
      className={styles.image}
      imageLight={icon}
      imageDark={iconDark}
    />
    <span className={styles.title}>{title}</span>
  </BaseContainer>
);

SimpleCard.propTypes = {
  icon: PropTypes.string.isRequired,
  iconDark: PropTypes.string,
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
};

export default SimpleCard;
