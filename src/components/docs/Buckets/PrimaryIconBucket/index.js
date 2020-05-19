import React from 'react';
import PropTypes from 'prop-types';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Bucket from '../Bucket';

import s from './styles.module.css';

const PrimaryIconBucket = ({ description, icon, title, to }) => (
  <Bucket className={s.root} to={to}>
    <div className={s.circleOverlay} />
    <div className={s.contents}>
      <img className={s.image} src={useBaseUrl(icon)} />
      <div className={s.textContainer}>
        <h4 className={s.title}>{title}</h4>
        <p className={s.description}>{description}</p>
      </div>
    </div>
  </Bucket>
);

PrimaryIconBucket.propTypes = {
  description: PropTypes.string,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
};

export default PrimaryIconBucket;
