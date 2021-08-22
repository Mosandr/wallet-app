import styles from './AuthInput.module.css';

const AuthInput = ({ name, iconType, onValueChange, type, placeholder }) => {
  const wrapperClassName = styles.authInputFieldWrap + ' ' + styles[iconType];
  return (
    <div className={wrapperClassName}>
      <input
        className={styles.authInputField}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onValueChange}
      />
    </div>
  );
};

export default AuthInput;
