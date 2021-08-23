import { Fragment } from 'react';
import Media from 'react-media';
import LoginForm from '../../components/LoginForm/LoginForm';
import smallHeadImg from '../../images/frame_login_small.svg';
import bigHeadImg from '../../images/frame_login_big.svg';
import { WithAuthRedirect } from '../../components/HOC';
import styles from './LoginView.module.css';

function LoginView() {
  return (
    <div className={styles.loginView}>
      <div className={styles.loginViewHead}>
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
                  className={styles.loginViewImage}
                  alt="Finance App"
                />
              )}
              {matches.large && (
                <img
                  src={bigHeadImg}
                  className={styles.loginViewImage}
                  alt="Finance App"
                />
              )}
            </Fragment>
          )}
        </Media>
        <p className={styles.loginViewTitle}>Finance App</p>
      </div>
      <LoginForm />
    </div>
  );
}

export default LoginView;
