import styles from './Navigation.module.css';
import { useMediaQuery } from 'react-responsive';
import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Home from '../HomeTab/HomeTab';
import Stats from '../Chart/Chart';
import Currency from '../Currency/Currency';
import navIconsSvg from '../../images/symbol-defs.svg';
import currencyMob from '../../images/currency_mob.svg';

function Navigation() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTabletOrDesktop = useMediaQuery({
    query: '(min-width: 768px)',
  });
  return (
    <div className={styles.navigation}>
      <ul className={styles.nav_list}>
        <li className={styles.list_item}>
          <NavLink
            exact
            to="/"
            className={styles.main_link}
            activeClassName={styles.active_link}
          >
            <svg className={styles.mainPageSvg}>
              <use href={navIconsSvg + '#icon-main_page'}></use>
            </svg>

            {isTabletOrDesktop && <span className={styles.title}>Главная</span>}
          </NavLink>
        </li>
        <li className={styles.list_item}>
          <NavLink
            exact
            to="/stat"
            className={styles.stats_link}
            activeClassName={styles.active_link}
          >
            <svg className={styles.statsPageSvg}>
              <use href={navIconsSvg + '#icon-stats_page'}></use>
            </svg>
            {isTabletOrDesktop && (
              <span className={styles.title}>Статистика</span>
            )}
          </NavLink>
        </li>
        {isMobile && (
          <li className={styles.list_item}>
            <NavLink
              exact
              to="/currency"
              className={styles.stats_link}
              activeClassName={styles.active_link}
            >
              <svg className={styles.currencyPageSvg}>
                <use href={navIconsSvg + '#icon-currency_mob'}></use>
              </svg>
            </NavLink>
          </li>
        )}
      </ul>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/diagram" component={Stats} />
      </Switch>
      {/* {isMobile && <Route path="/currency" component={Currency} />} */}
    </div>
  );
}

export default Navigation;
