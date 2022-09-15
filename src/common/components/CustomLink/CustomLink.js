import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import styles from './styles/_custom-link.module.scss';

const CustomLink = ({
  children,
  label,
  className,
  to,
  isLikeButton
}) => {
  return (
    <div
      className={cx(
        styles['custom-link'],
        {
          [styles['custom-link--like-button']]: isLikeButton
        },
        className
      )}
    >
      <Link
        to={to}
        className={cx(
          'custom-link'
        )}
      >
        {label}
        {children}
      </Link> 
    </div>
  );
};

export default CustomLink;