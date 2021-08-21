import { Formik, Form } from 'formik';
import ButtonsBlock from '../ButtonsBlock/ButtonsBlock';
import styles from './LoginForm.module.css';

function LoginForm() {
  return (
    <div className={styles.loginFormContainer}>
      <div className={styles.logo}></div>
      <Formik>
        <input type="text" placeholder="E-mail" />
        <input type="text" placeholder="Пароль" />
        <ButtonsBlock btn_1_text="Вход" btn_2_text="Регистрация" />
      </Formik>
    </div>
  );
}

export default LoginForm;
