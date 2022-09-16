import React, { useState, useEffect, useMemo } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { MyWorks } from '../../common/constants';
import { WorksItem, Text } from '../../common/components';
import { listPosts } from '../../graphql/queries';
import styles from './styles/_works-list.module.scss';

const WorksList = () => {
  const [postList, setPostList] = useState([]);

  const fetchPosts = async () => {
    try {
      const postData = await API.graphql(graphqlOperation(listPosts));
      const postItemsList = postData.data.listPosts.items;
      console.log('postItemsList is', postItemsList);
      setPostList(postItemsList);
    } catch (error) {
      console.log('error on fetching', error);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, [])

  const renderMyWorks = useMemo(() => {
    return(
      MyWorks.map((work) => (
        <WorksItem worksItemData={work} key={work.id} />
      ))
    )
  }, MyWorks);
  return (
    <section className={styles['works-list']}>
      <Text heading1 className={styles['works-list__title']}>My Posts</Text>
      {renderMyWorks}
    </section>
  );
};

export default WorksList;