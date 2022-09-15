import React from 'react';
import Icon from '../Icon';

import styles from './styles/_technology-item.module.scss';

const TechnologyItem = ({iconName}) => {
  return (
    <div className={styles['technology-item']}>
      <Icon
        iconName={iconName}
        className={styles['technology-item__icon']}
      />
    </div>
  );
};

export default TechnologyItem;