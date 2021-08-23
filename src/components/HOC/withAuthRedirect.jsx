import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';

const WithAuthRedirect = ({ component: Component }) => {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return <>{isLoggedIn ? <Redirect to="/dashboard" /> : <Component />}</>;
};

export default WithAuthRedirect;
