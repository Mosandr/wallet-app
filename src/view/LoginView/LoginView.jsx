import LoginForm from '../../components/LoginForm/LoginForm';
import headImg from '../../images/frame_login.svg';
import styles from './LoginView.module.css';

function LoginView() {
  return (
    <div className={styles.loginView}>
      <div className={styles.loginViewHead}>
        <img
          src={headImg}
          className={styles.loginViewImage}
          alt="Finance App"
        />

        <p className={styles.loginViewTitle}>Finance App</p>
      </div>
      <LoginForm />
    </div>
  );
}

export default LoginView;
