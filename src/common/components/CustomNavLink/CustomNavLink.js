import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles/_custom-nav-link.module.scss';

const CustomNavLink = ({
  label,
  className,
  to
}) => {
  const setActiveLink = ({ isActive }) => isActive ? styles['custom-nav-link--active'] : '';
  return (
    <div
      className={className}
    >
      <NavLink
        to={to}
        className={setActiveLink}
      >
        {label}
      </NavLink> 
    </div>
  );
};

export default CustomNavLink;