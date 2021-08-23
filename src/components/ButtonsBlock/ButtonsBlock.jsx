import React from 'react';
import styles from './ButtonsBlock.module.css';

const ButtonsBlock = ({
  btn_1_text = '',
  btn_2_text = '',
  btn_1_child = '',
  btn_2_child = '',
  btn_1_type = 'button',
  btn_2_type = 'button',
  btn_1_callback = null,
  btn_2_callback = null,
}) => {
  return (
    <div className={styles.buttonsWrapper}>
      <button
        className={styles.formButton + ' ' + styles.ok}
        onClick={btn_1_callback}
        type={btn_1_type}
      >
        {btn_1_text}
        {btn_1_child}
      </button>

      <button
        className={styles.formButton + ' ' + styles.notOk}
        onClick={btn_2_callback}
        type={btn_2_type}
      >
        {btn_2_text}
        {btn_2_child}
      </button>
    </div>
  );
};

export default ButtonsBlock;
