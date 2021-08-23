import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AuthRegisterForm from '../AuthRegisterForm/AuthRegisterForm';
import authOps from '../../redux/auth/authOperations';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/\w+[@]\w+\.\w+/)
    .required(),
  password: Yup.string()
    .matches(/^.{6,20}$/)
    .required(),
});

function LoginForm() {
  const buttonsSettings = {
    btn_1_text: 'Вход',
    btn_1_type: 'submit',
    btn_2_child: <NavLink to="/register">Регистрация</NavLink>,
  };

  const fieldsSettings = [
    {
      fieldName: 'email',
      placeholder: 'E-mail',
      iconType: 'email',
    },
    {
      fieldName: 'password',
      placeholder: 'Пароль',
      iconType: 'lock',
    },
  ];
  const dispatch = useDispatch();
  const onLoginSubmit = values => {
    const { email, password } = values;
    dispatch(authOps.logIn({ email, password }));
  };

  return (
    <AuthRegisterForm
      validationSchema={validationSchema}
      onSubmit={onLoginSubmit}
      buttonsSettings={buttonsSettings}
      fieldsSettings={fieldsSettings}
    />
  );
}

export default LoginForm;
