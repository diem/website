import React from 'react';
import PropTypes from 'prop-types';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Bucket from '../Bucket';

import s from './styles.module.css';

const TagBucket = ({ icon, tags, title, to }) => (
  <Bucket className={s.root} to={to}>
    <img className={s.image} src={useBaseUrl(icon)} />
    <div className={s.textContainer}>
      <h4 className={s.title}>{title}</h4>
      <div>
        {tags.map(tag =>
          <span className={s.tag}>{tag}</span>
        )}
      </div>
    </div>
  </Bucket>
);

TagBucket.propTypes = {
  icon: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default TagBucket;
