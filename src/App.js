/* Modules */
// import { Suspense, lazy, useEffect } from 'react';
// import { Switch } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

/* Components */
// import { authOperations } from './redux/auth';
// import Header from './components/Header';
// import PrivateRoute from './components/PrivateRoute';
// import PublicRoute from './components/PublicRoute';

/* Styles */
// const RegisterView = lazy(() => import('./view/RegisterView'));
// const LoginView = lazy(() => import('./view/LoginView'));
// const DashboardView = lazy(() => import('./view/DashboardView'));

export default function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(authOperations.getCurrentUser());
  // }, [dispatch]);

  return (
    <>
      {/* <Header /> */}

      {/* <Suspense fallback={<p>Loading...</p>}> */}
      {/* <Switch> */}
      {/* <PublicRoute exact path="/" redirectTo="/login"> */}
      {/* <h1>Home Page</h1> */}
      {/* </PublicRoute> */}

      {/* <PublicRoute path="/register" restricted redirectTo="/dashboard"> */}
      {/* <RegisterView /> */}
      {/* </PublicRoute> */}

      {/* <PublicRoute path="/login" restricted redirectTo="/dashboard"> */}
      {/* <LoginView /> */}
      {/* </PublicRoute> */}

      {/* <PrivateRoute path="/dashboard" redirectTo="/login"> */}
      {/* <DashboardView /> */}
      {/* </PrivateRoute> */}
      {/* </Switch> */}
      {/* </Suspense> */}
    </>
  );
}

/*
/* Modules /
import { Suspense, lazy, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

/* Components /
import { authOperations } from './redux/auth';
import Container from './components/Container';
import AppBar from './components/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

/* Styles /
const HomeView = lazy(() => import('./view/HomeView'));
const RegisterView = lazy(() => import('./view/RegisterView'));
const LoginView = lazy(() => import('./view/LoginView'));
const ContactsView = lazy(() => import('./view/ContactsView'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>

          <PublicRoute path="/register" restricted redirectTo="/contacts">
            <RegisterView />
          </PublicRoute>

          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginView />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Container>
  );
}
*/
