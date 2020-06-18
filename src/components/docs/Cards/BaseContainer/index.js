import React from 'react';
import PropTypes from 'prop-types'

import classnames from 'classnames';
import styles from './styles.module.css';

const BaseContainer = ({children, className, hasShadow, hasRoundedCorners, to, ...props}) => (
  <a 
    className={classnames(styles.root, className, {
      [styles.hasShadow]: hasShadow,
      [styles.hasRoundedCorners]: hasRoundedCorners,
    })} 
    href={to}
    target="_blank"
    {...props}
  >
    {children}
  </a>
);

BaseContainer.propTypes = {
  className: PropTypes.string,
  hasShadow: PropTypes.bool,
  hasRoundedCorners: PropTypes.bool,
  to: PropTypes.string,
};

BaseContainer.defaultProps = {
  hasRoundedCorners: true,
  hasShadow: true,
};

export default BaseContainer;
