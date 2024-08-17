import React from 'react';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <li>Home</li>
      <li>Menu</li>
      <li>About Us</li>
      <li>Contact Us</li>
    </nav>
  );
};

export default NavBar;
