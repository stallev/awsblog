import React from 'react';
import Text from '../Text';
import Icon from '../Icon';
import Container from '../Container';
import { mySocials } from '../../constants/mocks';

import styles from './styles/_footer.module.scss';

const Footer = () => {
  return (
    <Container>
      <div className={styles.footer}>
        <div className={styles['footer__socials-list']}>
          {
            mySocials.map((item) => {
              return (
                <a
                  className={styles['footer__social-link']}
                  href={item.socialUrl}
                  key={item.id}
                >
                  <Icon iconName={item.iconName} />
                </a>
              )
            })
          }
        </div>
        <Text className={styles.footer__copyright}>
          Copyright &copy;2020 All rights reserved
        </Text>
      </div>
    </Container>
  );
};

export default Footer;