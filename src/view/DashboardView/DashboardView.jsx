import styles from './DashboardView.module.css';
import { Route, Switch, Redirect } from 'react-router';
import { useMediaQuery } from 'react-responsive';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Currency from '../../components/Currency/Currency';
import Balance from '../../components/Balance/Balance';
import HomeTab from '../../components/HomeTab/HomeTab';
import DiagramTab from '../../components/DiagramTab/DiagramTab';
import Container from '../../components/Container/Container';

function DashboardView() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTabletOrDesktop = useMediaQuery({
    query: '(min-width: 768px)',
  });
  return (
    <>
      <Header />
      {isTabletOrDesktop && (
        <Container>
          <div className={styles.dashboardWrapper}>
            <aside>
              <Navigation />
              <Balance />
              <Currency />
            </aside>
            <div className={styles.hometabWrapper}>
              <Switch>
                <Route path="/" exact component={HomeTab} />
                <Route path="/stat" exact component={DiagramTab} />
                <Redirect to="/" />
              </Switch>
            </div>
          </div>
        </Container>
      )}
      {isMobile && (
        <Container>
          <Navigation />
          <Switch>
            <Route path="/" exact component={HomeTab} />
            <Route path="/stat" exact component={DiagramTab} />
            <Route path="/currency" exact component={Currency} />
          </Switch>
        </Container>
      )}
    </>
  );
}

export default DashboardView;
