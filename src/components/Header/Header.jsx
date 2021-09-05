import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import userSelectors from '../../redux/auth/authSelectors';
import LogoSmall from '../../images/logo_small.svg';
import styles from './Header.module.css';
import Container from '../Container/Container';

function Header({ onLogout }) {
  const userName = useSelector(userSelectors.getUsername);

  return (
    <div className={styles.pageHeader}>
      {/* <Container> */}
      <div className={styles.wrapper}>
        <div className={styles.img_thumb}>
          <NavLink exact to="/" activeClassName={styles.active_link}>
            <img src={LogoSmall} alt="logo" className={styles.logo} />
          </NavLink>
        </div>
        <div className={styles.headerMenu}>
          <div className={styles.headerMenuName}>{userName}</div>
          <div className={styles.headerMenuLogout} onClick={onLogout}>
            <span>Выйти</span>
          </div>
        </div>
      </div>
      {/* </Container> */}
    </div>
  );
}

export default Header;
