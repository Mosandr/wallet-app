/* Modules */
import { useState, useCallback } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { useMediaQuery } from 'react-responsive';

/* Components */
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import Currency from '../../components/Currency/Currency';
import Balance from '../../components/Balance/Balance';
import HomeTab from '../../components/HomeTab/HomeTab';
import DiagramTab from '../../components/DiagramTab/DiagramTab';
import ModalBackdrop from '../../components/ModalBackdrop/ModalBackdrop';
import ModalAddTransactions from '../../components/ModalAddTransactions/ModalAddTransactions';

/* Styles */
// import styles from "./DashboardView.module.css";

function DashboardView() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTabletOrDesktop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const [showModal, setShowModal] = useState(false);
  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

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
            <Route path="/stat" exact component={DiagramTab} />
            <Redirect to="/" />
          </Switch>
        </>
      )}

      {isMobile && (
        <>
          <Navigation />
          <Switch>
            <Route path="/" exact component={HomeTab} />
            <Route path="/stat" exact component={DiagramTab} />
            <Route path="/currency" exact component={Currency} />
            <Redirect to="/" />
          </Switch>
        </>
      )}

      {/* Временная кнопка для открытия модалки: */}
      <button onClick={toggleModal}>Open Modal</button>

      {showModal && (
        <ModalBackdrop onClose={toggleModal}>
          <ModalAddTransactions onClose={toggleModal} />
        </ModalBackdrop>
      )}
    </>
  );
}

export default DashboardView;
