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
        <div className={styles.thumb}>
          <table className={styles.table_container}>
            <thead className={styles.table_head}>
              <tr>
                <th>Валюта</th>
                <th>Покупка</th>
                <th>Продажа</th>
              </tr>
            </thead>
            <tbody>
              {currencie
                .filter(item => item.ccy !== 'BTC')
                .map(item => (
                  <tr>
                    <td>{item.ccy}</td>
                    <td>{Math.floor(item.buy * 100) / 100}</td>
                    <td>{Math.floor(item.sale * 100) / 100}</td>
                  </tr>
                ))}
              <tr>
                <td className={styles.s}></td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Currency;
