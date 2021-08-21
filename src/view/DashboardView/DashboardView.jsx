// import styles from "./DashboardView.module.css"
import { Route, Switch, Redirect } from 'react-router';
import { useMediaQuery } from 'react-responsive';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Currency from '../../components/Currency/Currency';
import Balance from '../../components/Balance/Balance';
import HomeTab from '../../components/HomeTab/HomeTab';
import Statistics from '../../components/Statistics/Statistics';

function DashboardView() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTabletOrDesktop = useMediaQuery({
    query: '(min-width: 768px)',
  });
  return (
    <>
      <Header />
      {isTabletOrDesktop && (
        <>
          <aside>
            <Navigation />
            <Balance />
            <Currency />
          </aside>
          <Switch>
            <Route path="/" exact component={HomeTab} />
            <Route path="/stat" exact component={Statistics} />
            <Redirect to="/" />
          </Switch>
        </>
      )}
      {isMobile && (
        <>
          <Navigation />
          <Switch>
            <Route path="/" exact component={HomeTab} />
            <Route path="/stat" exact component={Statistics} />
            <Route path="/currency" exact component={Currency} />
          </Switch>
        </>
      )}
    </>
  );
}

export default DashboardView;
