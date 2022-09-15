import React from 'react';
import Icon from '../Icon';
import Text from '../Text';
import Image from '../Image';

import styles from './styles/_works-item.module.scss';

const WorkItem = ({worksItemData}) => {
  const renderItemTechnologies = (source) => {
    return(
      source.map((item) => (
        <span 
          className={styles['works-item__technologies-item']} 
          key={item.id}
        >
          {item.name}
        </span>
      ))
    )
  };
  return (
    <article className={styles['works-item']} key={worksItemData.id}>
      <Image
        imageName={worksItemData.image}
        className={styles['works-item__image']}
      />
      <div className={styles['works-item__info']}>
        <Text heading2 className={styles['works-item__title']}>
          {worksItemData.title}
        </Text>
        <div className={styles['works-item__types-block']}>
          <Text color='white' className={styles['works-item__year']}>{worksItemData.year}</Text>
          |
          <div className={styles['works-item__links']}>
            <a
              className={styles['works-item__link']}
              href={worksItemData.siteLink}
            >
              Go to website...
            </a>
            <a
              className={styles['works-item__github-link']}
              href={worksItemData.githubLink}
            >
              <Icon iconName="github"/>
            </a>
          </div>
        </div>        
        <Text className={styles['works-item__description']}>{worksItemData.description}</Text>
        <div className={styles['works-item__technologies-list']}>
          {renderItemTechnologies(worksItemData.technologies)}
        </div>
      </div>
    </article>
  );
};

export default WorkItem;