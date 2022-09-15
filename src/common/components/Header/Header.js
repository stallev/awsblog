import React from 'react';
import { RoutePath } from '../../constants/RoutePath';
import Container from '../Container';
import CustomNavLink from '../CustomNavLink';

import styles from './styles/_header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container
        className="header"
      >
        <div className={styles['header__nav-wrap']}>
          <nav
            className={styles.header__nav}
          >
            <CustomNavLink
              label="Home"
              to={RoutePath.Landing}
              className={styles['header__nav-link']}
            />
            <CustomNavLink
              label="Works"
              to={RoutePath.WorksList}
              className={styles['header__nav-link']}
            />
            <CustomNavLink
              label="Contacts"
              to={RoutePath.Contacts}
              className={styles['header__nav-link']}
            />
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;