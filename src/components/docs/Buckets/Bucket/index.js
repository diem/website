import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types'

import s from './styles.module.css';

const Container = ({children, className, hasShadow, hasRoundedCorners, to}) => (
  <a 
    className={classnames(s.root, className, {
      [s['has-shadow']]: hasShadow,
      [s['has-rounded-corners']]: hasRoundedCorners,
    })} 
    href={to}
    target="_blank"
  >
    {children}
  </a>
);

Container.propTypes = {
  className: PropTypes.string,
  hasShadow: PropTypes.bool,
  hasRoundedCorners: PropTypes.bool,
  to: PropTypes.string,
};

Container.defaultProps = {
  hasRoundedCorners: true,
  hasShadow: true,
};

export default Container;
