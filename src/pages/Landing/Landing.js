import React, { useMemo } from 'react';
import { useForm } from "react-hook-form";
import { RoutePath } from '../../common/constants/RoutePath';
import { MyWorks, MyTechnologies } from '../../common/constants';
import { Text, ContactsForm, Image, CustomLink, WorksItem, TechnologyItem } from '../../common/components';

import styles from './styles/_landing.module.scss';

const Landing = () => {
  const renderMyWorks = useMemo(() => {
    return(
      MyWorks.map((work) => (
        <WorksItem worksItemData={work} key={work.id} />
      ))
    )
  }, [MyWorks]);
  const renderMyTechnologies = useMemo(() => {
    return(
      MyTechnologies.map((item) => (
        <TechnologyItem iconName={item.iconName} key={item.id} />
      ))
    )
  }, [MyTechnologies]);

  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <>
      <div className={styles.landing__top}>
        <Image
          imageName="author"
          className={styles['landing__top-image']}
        />
        <div className={styles['landing__top-my-info']}>
          <Text heading1 className={styles['landing__top-title']}>
            Hi, I am John, Creative Technologist
          </Text>
          <Text className={styles['landing__top-my-description']}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </Text>
          <CustomLink
            label="Download resume"
            to={RoutePath.Landing}
            isLikeButton
          />
        </div>
      </div>
      <div className={styles['landing__technology-list']}>
        {renderMyTechnologies}
      </div>
      <div className={styles['landing__works-list']}>
        {renderMyWorks}
      </div>
      <ContactsForm />
      <div className={styles['landing__contacts']}></div>
    </>
  );
};

export default Landing;