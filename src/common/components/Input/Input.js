import React from 'react';
import cx from 'classnames';
import Text from '../Text';

import styles from './styles/_input.module.scss';

const Input = ({
  placeholder,
  inputType,
  validation,
  maxLength,
  onChange,
  errorMessage,
  className
}) => {

  return (
    <div
      className={cx(
        styles.input,
        className
      )}
    >
      <input
        type={inputType}
        placeholder={placeholder}
        maxLength={maxLength}
        className={cx(
          styles.input__field,
          {
            [styles['input__field--error']]: errorMessage,
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

export default Input;