import styles from './HomeTab.module.css';
import { useMediaQuery } from 'react-responsive';
import Balance from '../Balance/Balance';
const transactions = [
  {
    id: 1,
    timestamp: 125632586,
    date: '24/08/2021',
    month: 'august',
    year: '2021',
    type: '-',
    category: 'id',
    comment: 'бес попутал',
    sum: 300,
    monthlyBalance: 1200,
  },
  {
    id: 2,
    timestamp: 1256532586,
    date: '25/08/2021',
    month: 'august',
    year: '2021',
    type: '+',
    category: 'id1',
    comment: 'ola',
    sum: 1000,
    monthlyBalance: 1300,
  },
];

function HomeTab() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  // const isTabletOrDesktop = useMediaQuery({
  //   query: '(min-width: 768px)',
  // });

  return (
    <>
      {isMobile && <Balance />}
      <div className={styles.tableWrapper}>
        <table>
          <thead>
            <tr className={styles.tableHeader}>
              <th>Дата</th>
              <th>Тип</th>
              <th>Категория</th>
              <th>Комментарий</th>
              <th>Сумма</th>
              <th>Баланс</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map(
              ({ id, date, type, category, comment, sum, monthlyBalance }) => (
                <tr key={id}>
                  <td>{date}</td>
                  <td>{type}</td>
                  <td>{category}</td>
                  <td>{comment}</td>
                  <td style={{ color: type === '+' ? '#24CCA7' : '#FF6596' }}>
                    {sum.toFixed(2)}
                  </td>
                  <td>{monthlyBalance.toFixed(2)}</td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default HomeTab;
