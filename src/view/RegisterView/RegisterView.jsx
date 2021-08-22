import { Fragment } from 'react';
import Media from 'react-media';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import smallHeadImg from '../../images/frame_register_small.svg';
import bigHeadImg from '../../images/frame_register_big.svg';
import styles from './RegisterView.module.css';

function RegisterView() {
  return (
    <div className={styles.registerView}>
      <div className={styles.registerViewHead}>
        <Media
          queries={{
            small: '(min-width: 768px) and (max-width: 1279px)',
            large: '(min-width: 1280px)',
          }}
        >
          {matches => (
            <Fragment>
              {matches.small && (
                <img
                  src={smallHeadImg}
                  className={styles.registerViewImage}
                  alt="Finance App"
                />
              )}
              {matches.large && (
                <img
                  src={bigHeadImg}
                  className={styles.registerViewImage}
                  alt="Finance App"
                />
              )}
            </Fragment>
          )}
        </Media>
        <p className={styles.registerViewTitle}>Finance App</p>
      </div>
      <RegistrationForm />
    </div>
  );
}

export default RegisterView;
