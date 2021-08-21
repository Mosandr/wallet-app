import React from 'react';
import styles from './ButtonsBlock.module.css';

const ButtonsBlock = ({
  btn_1_text,
  btn_2_text,
  btn_1_callback,
  btn_2_callback,
}) => {
  return (
    <div className={styles.buttonsWrapper}>
      <button
        className={styles.formButton + ' ' + styles.ok}
        onClick={btn_1_callback}
      >
        {btn_1_text}
      </button>

      <button
        className={styles.formButton + ' ' + styles.notOk}
        onClick={btn_2_callback}
      >
        {btn_2_text}
      </button>
    </div>
  );
};

export default ButtonsBlock;
