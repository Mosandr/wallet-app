// import styles from "./RegisterView.module.css"

function RegisterView() {
  return <div>RegisterView</div>;
}

export default RegisterView;

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

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const onRegister = () => dispatch(authOperations.register({name, email, password}));

  const handleChange = ({target: {name, value}}) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      
      case 'email':
        setEmail(value);
        break;
      
      case 'password':
        setPassword(value);
        break;
      
      default:
        console.error('Error from RegisterView');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    onRegister();
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Registration Page</h1>

      <form
        onSubmit={handleSubmit}
        style={styles.form}
        autoComplete="off"
      >
        <label style={styles.label}>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>

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

        <button style={styles.button} type="submit">Register</button>
      </form>
    </div>
  );
}
*/
