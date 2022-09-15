import React from 'react';
import { useParams } from 'react-router-dom';
import { WorksItem } from '../../common/components';
import { MyWorks } from '../../common/constants';

const Work = () => {
  const { id } = useParams();
  return (
    <div>
      <WorksItem worksItemData={MyWorks[id]} />
    </div>
  );
};

export default Work;