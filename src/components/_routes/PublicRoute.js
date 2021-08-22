import { Redirect, Route } from "react-router-dom";
// import { useSelector } from 'react-redux';
// import authSelectors from '../../redux/auth/authSelectors';

export default function PublicRoute({
  component: Component,
  redirectTo,
  children,
  ...routeProps
}) {
  // const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  const isAuthenticated = true;
  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticated && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}
