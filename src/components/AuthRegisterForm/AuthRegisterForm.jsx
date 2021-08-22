import { useState } from 'react';
import { Formik, Form } from 'formik';
import AuthInput from '../AuthInput/AuthInput';
import ButtonsBlock from '../ButtonsBlock/ButtonsBlock';
import styles from './AuthRegisterForm.module.css';

function AuthRegisterForm({
  validationSchema,
  onSubmit,
  buttonsSettings,
  fieldsSettings,
}) {
  const [password, setPassword] = useState('');

  const inputsOnChangeListener = e => {
    if (e.target.name === 'password') setPassword(e.target.name);
    if (e.target.name === 'passwordConfirm') {
      if (password !== e.target.value) console.log('passwords are not equal!');
    }
  };

  return (
    <div className={styles.authRegFormContainer}>
      <div className={styles.logo}></div>
      <Formik
        initialValues={{
          email: '',
          password: '',
          passwordConfirm: '',
          userName: '',
        }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          {fieldsSettings.map(({ fieldName, placeholder, iconType, type }) => {
            return (
              <AuthInput
                key={fieldName}
                name={fieldName}
                type={type}
                placeholder={placeholder}
                iconType={iconType}
                onChange={inputsOnChangeListener}
              />
            );
          })}
          <ButtonsBlock
            btn_1_text={buttonsSettings.btn_1_text}
            btn_1_type={buttonsSettings.btn_1_type}
            btn_2_text={buttonsSettings.btn_2_text}
            btn_2_type={buttonsSettings.btn_2_type}
            btn_1_child={buttonsSettings.btn_1_child}
            btn_2_child={buttonsSettings.btn_2_child}
          />
        </Form>
      </Formik>
    </div>
  );
}

export default AuthRegisterForm;
