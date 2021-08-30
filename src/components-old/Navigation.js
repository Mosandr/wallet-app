import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#ffffff',
    textShadow: '1px 2px 6px rgba(0, 0, 0, 0.9)',
  },
};

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <nav>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}

// import { NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { authSelectors } from '../redux/auth';

// const styles = {
//   link: {
//     display: 'inline-block',
//     textDecoration: 'none',
//     padding: 12,
//     fontWeight: 700,
//     color: '#2A363B',
//   },
//   activeLink: {
//     color: '#ffffff',
//     textShadow: '1px 2px 6px rgba(0, 0, 0, 0.9)',
//   },
// };

// const Navigation = ({ isLoggedIn }) => (
//   <nav>
//     <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
//       Home
//     </NavLink>

//     {isLoggedIn && (
//       <NavLink
//         to="/contacts"
//         exact
//         style={styles.link}
//         activeStyle={styles.activeLink}
//       >
//         Contacts
//       </NavLink>
//     )}
//   </nav>
// );

// const mapStateToProps = state => ({
//   isLoggedIn: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(Navigation);
