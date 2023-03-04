import React from 'react';
import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <p className={styles.header__result}>Your Result</p>
      <div className={styles.header__circle}>
        <p className={styles.header__circle_title}>76</p>
        <span className={styles.header__circle_subtitle}>of 100</span>
      </div>
      <h1 className={styles.header__title}>Great</h1>
      <p className={styles.header__subtitle}>
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}

export default Header;
