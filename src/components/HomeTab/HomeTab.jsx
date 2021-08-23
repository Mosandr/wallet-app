import styles from './HomeTab.module.css';
import { useMediaQuery } from 'react-responsive';
import Balance from '../Balance/Balance';
import transactions from './transactions';
import Container from '../Container/Container';

function HomeTab() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTabletOrDesktop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  return (
    <>
      {isMobile && (
        <>
          <Container>
            <Balance />
            <ul className={styles.transactionList}>
              {transactions.map(
                ({
                  id,
                  date,
                  type,
                  category,
                  comment,
                  sum,
                  monthlyBalance,
                }) => (
                  <li
                    style={{
                      borderLeft:
                        type === '+'
                          ? '5px solid #24CCA7'
                          : '5px solid #FF6596',
                    }}
                    className={styles.transactionItem}
                    key={id}
                  >
                    <ul className={styles.transactionParamsList}>
                      <li className={styles.transactionParamsItem}>
                        <p className={styles.paramName}>Дата</p>
                        <p className={styles.paramValue}>{date}</p>
                      </li>
                      <li className={styles.transactionParamsItem}>
                        <p className={styles.paramName}>Тип</p>
                        <p className={styles.paramValue}>{type}</p>
                      </li>
                      <li className={styles.transactionParamsItem}>
                        <p className={styles.paramName}>Категория</p>
                        <p className={styles.paramValue}>{category}</p>
                      </li>
                      <li className={styles.transactionParamsItem}>
                        <p className={styles.paramName}>Комментарий</p>
                        <p className={styles.paramValue}>{comment}</p>
                      </li>
                      <li className={styles.transactionParamsItem}>
                        <p className={styles.paramName}>Сумма</p>
                        <p
                          style={{
                            color: type === '+' ? '#24CCA7' : '#FF6596',
                            fontWeight: 700,
                          }}
                          className={styles.paramValue}
                        >
                          {sum.toFixed(2)}
                        </p>
                      </li>
                      <li className={styles.transactionParamsItem}>
                        <p className={styles.paramName}>Баланс</p>
                        <p className={styles.paramValue}>
                          {monthlyBalance.toFixed(2)}
                        </p>
                      </li>
                    </ul>
                  </li>
                ),
              )}
            </ul>
          </Container>
        </>
      )}
      {isTabletOrDesktop && (
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr className={styles.tableHeader}>
                <th className={styles.th}>Дата</th>
                <th className={styles.th}>Тип</th>
                <th className={styles.th}>Категория</th>
                <th className={styles.th}>Комментарий</th>
                <th className={styles.th}>Сумма</th>
                <th className={styles.th}>Баланс</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map(
                ({
                  id,
                  date,
                  type,
                  category,
                  comment,
                  sum,
                  monthlyBalance,
                }) => (
                  <tr className={styles.tr} key={id}>
                    <td className={styles.td}>{date}</td>
                    <td className={styles.td}>{type}</td>
                    <td className={styles.td}>{category}</td>
                    <td className={styles.td}>{comment}</td>
                    <td
                      className={styles.td}
                      style={{ color: type === '+' ? '#24CCA7' : '#FF6596' }}
                    >
                      {sum.toFixed(2)}
                    </td>
                    <td className={styles.td}>{monthlyBalance.toFixed(2)}</td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default HomeTab;
