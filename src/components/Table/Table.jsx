import styles from './Table.module.css';
import sumToString from '../../helpers/numberToStringCurrency';
import shortid from 'shortid';

const transactionsTotal = [
  { category: 'Кафе и рестораны', total: 5000, color: '#00AD84' },
  { category: 'Продукты', total: 3500.5, color: '#FFD8D0' },
  { category: 'Авто', total: 1000, color: '#FD9498' },
  { category: 'Образование', total: 2000, color: '#81E1FF' },
  { category: 'Дети', total: 2000.45, color: '#6E78E8' },
  { category: 'Товары для дома', total: 800.5, color: '#4A56E2' },
  { category: 'Досуг', total: 350.99, color: '#24CCA7' },
  { category: 'Красота и здоровье', total: 320.45, color: '#C5BAFF' },
  { category: 'Разное', total: 8000, color: '#FED057' },
];

const headers = ['Категория', 'Сумма'];

const totalProfit = 27350;
const totalLoose = 22549.24;

function Table() {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.tableHeader}>
            {headers.map((item, index) => {
              if (index === 0) {
                return (
                  <th
                    key={shortid.generate()}
                    className={styles.th}
                    colSpan="2"
                  >
                    {item}
                  </th>
                );
              }
              return (
                <th key={shortid.generate()} className={styles.th}>
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {transactionsTotal.map(({ color, category, total }) => (
            <tr key={shortid.generate()} className={styles.tr} key={category}>
              <td className={styles.td}>
                <div
                  className={styles.colorBlock}
                  style={{ backgroundColor: color }}
                ></div>
              </td>
              <td className={styles.td}>{category}</td>
              <td className={styles.td}>{sumToString(total, '')}</td>
            </tr>
          ))}
        </tbody>
        <tfoot className={styles.tfoot}>
          <tr className={styles.tfoot_tr}>
            <th className={styles.tfoot_th} colSpan="2">
              Расходы:
            </th>
            <td className={styles.tfoot_td}>{sumToString(totalLoose, '')}</td>
          </tr>
          <tr className={styles.tfoot_tr}>
            <th className={styles.tfoot_th} colSpan="2">
              Доходы:
            </th>
            <td className={styles.tfoot_td}>{sumToString(totalProfit, '')}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Table;
