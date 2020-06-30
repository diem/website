import React from 'react';
import PropTypes from 'prop-types';

import BaseContainer from '../BaseContainer';
import {WithBackgroundImage} from 'libra-docusaurus-components';

import classnames from 'classnames';
import styles from './styles.module.css';

const SimpleCard = ({ icon, iconDark, smallerImage, title, to }) => (
  <BaseContainer className={styles.root} to={to}>
    <WithBackgroundImage 
      className={classnames(styles.image, {
        [styles.smaller]: smallerImage,
      })}
      imageLight={icon}
      imageDark={iconDark}
    />
    <span className={styles.title}>{title}</span>
  </BaseContainer>
);

SimpleCard.propTypes = {
  icon: PropTypes.string.isRequired,
  iconDark: PropTypes.string,
  smallerImage: PropTypes.bool,
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
};

export default SimpleCard;
