import { useSelector } from 'react-redux';
import userSelectors from '../../redux/auth/authSelectors';
import logoSmall from '../../images/logo_small.svg';
import styles from './Header.module.css';

function Header({ onLogout }) {
  const userName = useSelector(userSelectors.getUsername);

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
