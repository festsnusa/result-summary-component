import React from 'react';
import styles from './Main.module.scss';
import reaction from '../../images/icon-reaction.svg';
import memory from '../../images/icon-memory.svg';
import verbal from '../../images/icon-verbal.svg';
import visual from '../../images/icon-visual.svg';

function Element(props) {
  return (
    <div className={[styles.element, styles[props.color]].join(' ')}>
      <div className={styles.element_left}>
        <img src={props.icon} alt="icon" />
        <p className={styles[`${props.color}_text`]}>{props.title}</p>
      </div>
      <p>
        <span className={styles.element_total}>{props.total}</span> / 100
      </p>
    </div>
  );
}

function Main() {
  return (
    <div className={styles.main}>
      <p className={styles.title}>Summary</p>
      <div className={styles.elements}>
        <Element title="Reaction" icon={reaction} total="80" color="red" />
        <Element title="Memory" icon={memory} total="92" color="yellow" />
        <Element title="Verbal" icon={verbal} total="61" color="green" />
        <Element title="Visual" icon={visual} total="72" color="blue" />
      </div>
      <button className={styles.button}>Continue</button>
    </div>
  );
}

export default Main;
