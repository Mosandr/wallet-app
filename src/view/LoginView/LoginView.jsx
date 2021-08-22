import { Fragment } from 'react';
import Media from 'react-media';
import LoginForm from '../../components/LoginForm/LoginForm';
import smallHeadImg from '../../images/Frame_login_small.svg';
import bigHeadImg from '../../images/Frame_login_big.svg';
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

/*  
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

const styles = {
  form: {
    width: 320,
    margin: '0 auto',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
  button: {
    margin: 0,
    padding: '6px',
    backgroundColor: '#222222',
    border: '1px solid #ffffff',
    borderRadius: '6px',
    boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.7)',
    color: '#ffffff',
    font: 'inherit',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
};

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const onLogin = () => dispatch(authOperations.logIn({email, password}));

  const handleChange = ({target: {name, value}}) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      
      case 'password':
        setPassword(value);
        break;
      
      default:
        console.error('Error from LoginView');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    onLogin();
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Login Page</h1>

      <form
        onSubmit={handleSubmit}
        style={styles.form}
        autoComplete="off"
      >
        <label style={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button style={styles.button} type="submit">Login</button>
      </form>
    </div>
  );
}
*/
