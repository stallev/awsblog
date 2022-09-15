import React from 'react';
import cx from 'classnames';
import Text from '../Text';

import styles from './styles/_textarea.module.scss';

const Textarea = ({
  placeholder,
  validation,
  onChange,
  errorMessage,
  className
}) => {
  return (
    <div
      className={cx(
        styles.textarea,
        className
      )}
    >
      <textarea
        placeholder={placeholder}
        className={cx(
          styles.textarea__field,
          {
            [styles['textarea__field--error']]: errorMessage,
          }
        )}
        {...validation}
        onChange={onChange || (validation && validation.onChange)}
      />
      {errorMessage && (
        <Text className="error-message">{errorMessage}</Text>
      )}
    </div>
  );
};

export default Textarea;