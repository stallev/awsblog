import React from "react";
import cx from "classnames";
import SVG from "react-inlinesvg";
import { allIcons } from "./getIcon";


const Icon = ({
  iconName,
  className
}) => {
  return(
    <SVG
      className={
        cx(
          'icon',
          `icon--${iconName}`,
          className
        )
      }
      src={allIcons[iconName]}
    />
  )
};

export default Icon;