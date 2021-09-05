import { Redirect, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';

export default function PrivateRoute({
  component: Component,
  redirectTo,
  children,
  ...routeProps
}) {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={redirectTo} />
        )
      }
    />
  );
}
