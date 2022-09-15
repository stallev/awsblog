import React from 'react';
import cx from 'classnames';
import Icon from '../Icon/Icon';

import './styles/text.scss';

const Text = ({
  prefixIcon,
  suffixIcon,
  iconPrefixClassName,
  iconSuffixClassName,
  className,
  color = 'main-text',
  children,
  onClick,
  ...props
}) => {

  const textTypes = {
    heading1: { element: 'h1' },
    heading2: { element: 'h2' },
    heading3: { element: 'h3' },
    heading4: { element: 'h4' },
    heading5: { element: 'h5' },
    body: { element: 'p' },
    button: { element: 'span' },
    caption: { element: 'p' },
    timestamp: { element: 'p' },
  };

  const getTextEl = (props) => {
    const textType = Object.keys(textTypes).find((type) => props[type]) || 'body';
    const { element } = textTypes[textType];

    return { type: textType, TextEl: element };
  };
  const { type, TextEl } = getTextEl(props);

  return (
    <TextEl
      className={cx(
        'text',
        `text--${type}`,
        `text--color-${color}`,
        className
      )}
      onClick={onClick}
    >
      {
        prefixIcon && (
          <Icon iconName={prefixIcon} className={iconPrefixClassName && iconPrefixClassName}/>
        )
      }
      {children}
      {
        suffixIcon && (
          <Icon iconName={suffixIcon} className={iconSuffixClassName && iconSuffixClassName}/>
        )
      }
    </TextEl>
  );
};

export default Text;