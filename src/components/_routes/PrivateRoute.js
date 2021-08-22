import { Redirect, Route } from "react-router-dom";
// import { useSelector } from 'react-redux';
// import authSelectors from '../../redux/auth/authSelectors';

export default function PrivateRoute({ redirectTo, children, ...routeProps }) {
  // const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  const isAuthenticated = false;

  return (
    <Route {...routeProps}>
      {isAuthenticated ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
