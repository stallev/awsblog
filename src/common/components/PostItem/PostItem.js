import React from 'react';
import Text from '../Text';

import styles from './styles/_post-item.module.scss';

const PostItem = ({postsItemData}) => {
  return (
    <article className={styles['post-item']} key={postsItemData.id}>
      <div className={styles['post-item__info']}>
        <Text heading2 className={styles['post-item__title']}>
          {postsItemData.title}
        </Text>
      </div>
    </article>
  );
};

export default PostItem;