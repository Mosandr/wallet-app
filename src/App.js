import { Suspense } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import PublicRoute from './components/_routes/PublicRoute';
import PrivateRoute from './components/_routes/PrivateRoute';
import { routes } from './routes';

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        {routes.map(
          ({
            label,
            path,
            redirectTo,
            exact,
            restricted,
            component,
            isPublic,
          }) =>
            isPublic ? (
              <PublicRoute
                key={label}
                path={path}
                redirectTo={redirectTo}
                exact={exact}
                restricted={restricted}
                component={component}
              ></PublicRoute>
            ) : (
              <PrivateRoute
                key={label}
                path={path}
                redirectTo={redirectTo}
                exact={exact}
                restricted={restricted}
                component={component}
              ></PrivateRoute>
            ),
        )}
        <Redirect to="/" />
      </Switch>
    </Suspense>
  );
};

export default App;
