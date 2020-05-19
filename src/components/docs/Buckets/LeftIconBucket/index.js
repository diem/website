import React from 'react';
import PropTypes from 'prop-types';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Bucket from '../Bucket';

import s from './styles.module.css';

const LeftIconBucket = ({ icon, title, to}) => (
  <Bucket className={s.root} to={to}>
    <img className={s.image} src={useBaseUrl(icon)} />
    <h4 className={s.title}>{title}</h4>
  </Bucket>
);

LeftIconBucket.propTypes = {
  to: PropTypes.string,
};

export default LeftIconBucket;
