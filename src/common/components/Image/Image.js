import React from 'react';
import cx from 'classnames';
import getImages from './getImages';

import styles from './styles/_image.module.scss';

const Image = ({
  imageName,
  className
}) => {
  return (
    <div className={cx(
      'image',
      styles[`image--${imageName}`],
      className,
    )}>
      <img src={getImages[imageName]} alt={imageName} />
    </div>
  );
};

export default Image;