import { Field } from 'formik';
import ProgressBar from './ProgressBar/ProgressBar';
import styles from './AuthInput.module.css';

const AuthInput = ({ name, iconType, placeholder, type, progressBar }) => {
  let wrapperClassName = styles.authInputFieldWrap + ' ' + styles[iconType];
  if (progressBar)
    wrapperClassName = wrapperClassName + ' ' + styles.withProgressBar;
  return (
    <>
      <div className={wrapperClassName}>
        <Field
          className={styles.authInputField}
          name={name}
          placeholder={placeholder}
          type={type}
        />
      </div>
      {progressBar && <ProgressBar />}
    </>
  );
};

export default AuthInput;
