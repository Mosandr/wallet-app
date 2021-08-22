import { Formik, Form } from 'formik';
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';
import AuthInput from '../AuthInput/AuthInput';
import ButtonsBlock from '../ButtonsBlock/ButtonsBlock';
import styles from './LoginForm.module.css';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/\w+[@]\w+\.\w+/)
    .required(),
  password: Yup.string()
    .matches(/^\d{6,12}$/)
    .required(),
});

function LoginForm() {
  return (
    <div className={styles.loginFormContainer}>
      <div className={styles.logo}></div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        <Form>
          <AuthInput
            name="email"
            type="text"
            placeholder="E-mail"
            iconType="email"
          />
          <AuthInput
            name="password"
            type="text"
            placeholder="Пароль"
            iconType="lock"
          />
          <ButtonsBlock
            btn_1_text="Вход"
            btn_1_type="submit"
            btn_2_child={<NavLink to="/register">Регистрация</NavLink>}
          />
        </Form>
      </Formik>
    </div>
  );
}

export default LoginForm;
