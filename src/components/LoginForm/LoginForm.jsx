import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import AuthInput from '../AuthInput/AuthInput';
import ButtonsBlock from '../ButtonsBlock/ButtonsBlock';
import styles from './LoginForm.module.css';

function LoginForm() {
  return (
    <div className={styles.loginFormContainer}>
      <div className={styles.logo}></div>
      <Formik>
        <Form>
          <AuthInput type="text" placeholder="E-mail" iconType="email" />
          <AuthInput type="text" placeholder="Пароль" iconType="lock" />
          <ButtonsBlock btn_1_text="Вход" btn_2_text="Регистрация" />
        </Form>
      </Formik>
    </div>
  );
}

export default LoginForm;
