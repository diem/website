import React from 'react';
import PropTypes from 'prop-types';

import useBaseUrl from '@docusaurus/useBaseUrl';

import BaseContainer from '../BaseContainer';

import styles from './styles.module.css';

const OverlayCard = ({ description, icon, title, to }) => (
  <BaseContainer className={styles.root} to={to}>
    <div className={styles.circleOverlay} />
    <div className={styles.contents}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url('${useBaseUrl(icon)}')` }}
      />
      <div className={styles.textContainer}>
        <span className={styles.title}>{title}</span>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  </BaseContainer>
);

OverlayCard.propTypes = {
  description: PropTypes.string,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
};

export default OverlayCard;
