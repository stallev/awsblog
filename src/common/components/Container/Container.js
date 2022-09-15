import React from 'react';
import cx from 'classnames';

import styles from './styles/_container.module.scss';

const Container = ({
  children,
  className
}) => {
  return (
    <div
      className={
        cx(
          styles.container,
          styles[`container--${className}`]
        )
      }
    >
      {children}
    </div>
  );
};

export default Container;