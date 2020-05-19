import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Bucket from '../Bucket';

import s from './styles.module.css';

const ColorBucket = ({ color, icon, title, to }) => (
  <Bucket className={classnames(s.root, s[color])} hasShadow={false} to={to}>
    <img className={s.image} src={useBaseUrl(icon)} />
    <h4 className={s.title}>{title}</h4>
  </Bucket>
);

ColorBucket.propTypes = {
  color: PropTypes.oneOf(['aqua', 'purple-dark', 'purple-light']).isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
};

export default ColorBucket;
