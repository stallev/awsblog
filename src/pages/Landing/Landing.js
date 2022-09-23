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
        <p>Landing page</p>
      </div>
    </>
  );
};

export default Landing;