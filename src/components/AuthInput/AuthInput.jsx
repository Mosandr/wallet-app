import { Field } from 'formik';
import styles from './AuthInput.module.css';

const AuthInput = ({ name, iconType, onValueChange, type, placeholder }) => {
  const wrapperClassName = styles.authInputFieldWrap + ' ' + styles[iconType];
  return (
    <div className={wrapperClassName}>
      <Field
        className={styles.authInputField}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default AuthInput;
