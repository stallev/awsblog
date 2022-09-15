import React from 'react';
import cx from 'classnames';
import Text from '../Text';
import Icon from '../Icon';
import Button from '../Button';

import styles from './styles/_modal.module.scss';

const Modal = ({
  children,
  onHide,
  show,
  isIndent,
  isPopupInfo,
  isMarginHeader,
  titleHeader,
  onSubmit,
  titleButton = null,
  isCloseOnClickWrapper = true
}) => {
  const onChangeVisible = (e) => {
    if (isCloseOnClickWrapper) {
      if (e.target.classList.contains(styles['modal-container'])) {
        onHide();
      }
    }
  };

  return (
    show && (
      <div
        className={cx(
          styles['modal-container'],
          {
            [styles['modal-container--visible']]: show
          },
        )}
        onMouseDown={onChangeVisible}
      >
        <div
          className={cx(
            styles.modal__container,
            styles['animation-modal'],
            {
              [styles['modal__container--indent']]: isIndent,
            }
          )}
        >
          <div className={cx(
            styles['modal__container-header'],
            {
              [styles['modal__container-header--margin']]: isMarginHeader
            }
          )}
          >
            <Text className={styles['modal__container-header--title']} heading3>{titleHeader}</Text>

            {!isPopupInfo && (<Icon className={styles['modal__container-header--icon']} iconName="close" onClick={onHide} />)}
          </div>

          {children}

          {titleButton && (
            <Button buttonTitle={titleButton} onClick={onSubmit} />
          )}
        </div>
      </div>
    )
  );
};

export default Modal;