import { useSelector, useDispatch } from 'react-redux';
import userSelectors from '../../redux/auth/authSelectors';
import authOps from '../../redux/auth/authOperations';
import logoSmall from '../../images/logo_small.svg';
import styles from './Header.module.css';

function Header() {
  const userName = useSelector(userSelectors.getUsername);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(authOps.logOut());
  };
  return (
    <div className={styles.pageHeader}>
      <img src={logoSmall} alt="logo" className={styles.logo} />
      <div className={styles.headerMenu}>
        <div className={styles.headerMenuName}>{userName}</div>
        <div className={styles.headerMenuLogout} onClick={onLogout}>
          <span>Выйти</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
