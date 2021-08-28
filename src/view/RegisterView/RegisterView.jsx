import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import headImg from '../../images/frame_register.svg';
import '@pnotify/core/dist/PNotify.css';
import styles from './RegisterView.module.css';

function RegisterView() {
  return (
    <div className={styles.registerView}>
      <div className={styles.registerViewHead}>
        <img
          src={headImg}
          className={styles.registerViewImage}
          alt="Finance App"
        />
        <p className={styles.registerViewTitle}>Finance App</p>
      </div>
      <RegistrationForm />
    </div>
  );
}

export default RegisterView;
