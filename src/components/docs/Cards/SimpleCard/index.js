import React from 'react';
import PropTypes from 'prop-types';

import useBaseUrl from '@docusaurus/useBaseUrl';

import BaseContainer from '../BaseContainer';

import styles from './styles.module.css';

const SimpleCard = ({ icon, title, to }) => (
  <BaseContainer className={styles.root} to={to}>
    <img className={styles.image} src={useBaseUrl(icon)} />
    <span className={styles.title}>{title}</span>
  </BaseContainer>
);

SimpleCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
};

export default SimpleCard;
