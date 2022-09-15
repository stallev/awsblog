import React, { useMemo } from 'react';
import { MyWorks } from '../../common/constants';
import { WorksItem, Text } from '../../common/components';

import styles from './styles/_works-list.module.scss';

const WorksList = () => {
  const renderMyWorks = useMemo(() => {
    return(
      MyWorks.map((work) => (
        <WorksItem worksItemData={work} key={work.id} />
      ))
    )
  }, MyWorks);
  return (
    <section className={styles['works-list']}>
      <Text heading1 className={styles['works-list__title']}>Works</Text>
      {renderMyWorks}
    </section>
  );
};

export default WorksList;