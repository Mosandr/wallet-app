import styles from './Currency.module.css';
// import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
// import { useState } from 'react';

function Currency() {
  // const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  // const isTabletOrDesktop = useMediaQuery({
  //   query: '(min-width: 768px)',
  // });

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currencie, setCurrencie] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11',
    ).then(
      res =>
        res.json().then(result => {
          setIsLoaded(true);
          setCurrencie(result);
        }),
      error => {
        setIsLoaded(true);
        setError(error);
      },
    );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <table className={styles.table_container}>
          <thead className={styles.table_head}>
            <tr className={styles.currency_title}>
              <th className={styles.currency}>Валюта</th>
              <th className={styles.currency}>Покупка</th>
              <th className={styles.currency}>Продажа</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {currencie
              .filter(item => item.ccy !== 'BTC')
              .map(item => (
                <tr key={item.ccy}>
                  <td className={styles.currency_name}>{item.ccy}</td>
                  <td className={styles.currency_name}>
                    {Math.floor(item.buy * 100) / 100}
                  </td>
                  <td className={styles.currency_name}>
                    {Math.floor(item.sale * 100) / 100}
                  </td>
                </tr>
              ))}
            {/* <tr className={styles.last_row}>
              <td className={styles.s}></td>
            </tr> */}
          </tbody>
        </table>
      </>
    );
  }
}

export default Currency;
