import React from 'react';
import PropTypes from 'prop-types';

import useBaseUrl from '@docusaurus/useBaseUrl';

import BaseContainer from '../BaseContainer';

import styles from './styles.module.css';

const TagCard = ({ icon, tags, title, to }) => (
  <BaseContainer className={styles.root} to={to}>
    <img className={styles.image} src={useBaseUrl(icon)} />
    <div className={styles.textContainer}>
      <span className={styles.title}>{title}</span>
      <div>
        {tags.map(tag =>
          <span className={styles.tag}>{tag}</span>
        )}
      </div>
    </div>
  </BaseContainer>
);

TagCard.propTypes = {
  icon: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default TagCard;
