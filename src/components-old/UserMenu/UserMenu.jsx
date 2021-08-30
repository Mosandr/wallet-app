import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.jpg';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
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

export default function UserMenu() {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
  const onLogOut = useCallback(() => {
    dispatch(authOperations.logOut())
  }, [dispatch]);

  return (
    <div style={styles.container}>
      <img src={defaultAvatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Welcome, {name}</span>
      <button style={styles.button} type="button" onClick={onLogOut}>
        Logout
      </button>
    </div>
  );
}

// import { connect } from 'react-redux';
// import { authSelectors, authOperations } from '../../redux/auth';
// import defaultAvatar from './default-avatar.jpg';

// const styles = {
//   container: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   avatar: {
//     marginRight: 4,
//   },
//   name: {
//     fontWeight: 700,
//     marginRight: 12,
//   },
//   button: {
//     margin: 0,
//     padding: '6px',
//     backgroundColor: '#222222',
//     border: '1px solid #ffffff',
//     borderRadius: '6px',
//     boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.7)',
//     color: '#ffffff',
//     font: 'inherit',
//     cursor: 'pointer',
//     display: 'inline-flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// };

// const UserMenu = ({ avatar, name, onLogout }) => (
//   <div style={styles.container}>
//     <img src={avatar} alt="" width="32" style={styles.avatar} />
//     <span style={styles.name}>Welcome, {name}</span>
//     <button style={styles.button} type="button" onClick={onLogout}>
//       Logout
//     </button>
//   </div>
// );

// const mapStateToProps = state => ({
//   name: authSelectors.getUsername(state),
//   avatar: defaultAvatar,
// });

// const mapDispatchToProps = {
//   onLogout: authOperations.logOut,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);