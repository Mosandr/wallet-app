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
    .matches(/^.{6,12}$/)
    .required(),
});

function RegistrationForm() {
  const buttonsSettings = {
    btn_1_text: 'Регистрация',
    btn_2_text: 'Вход',
  };

  const fieldsSettings = [
    {
      fieldName: 'email',
      palceholder: 'E-mail',
      iconType: 'email',
    },
    {
      fieldName: 'password',
      palceholder: 'Пароль',
      iconType: 'lock',
    },
    {
      fieldName: 'passwordRepeat',
      palceholder: 'Подтвердите пароль',
      iconType: 'lock',
    },
    {
      fieldName: 'userName',
      palceholder: 'Ваше имя',
      iconType: 'account',
    },
  ];
  const dispatch = useDispatch();
  const onRegisterSubmit = values => {
    const { email, password } = values;
  };

  return (
    <AuthRegisterForm
      validationSchema={validationSchema}
      onSubmit={onRegisterSubmit}
      buttonsSettings={buttonsSettings}
      fieldsSettings={fieldsSettings}
    />
  );
}

export default RegistrationForm;
