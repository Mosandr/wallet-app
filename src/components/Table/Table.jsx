import styles from './Table.module.css';
import sumToString from '../../helpers/numberToStringCurrency';
import shortid from 'shortid';

const headers = ['Категория', 'Сумма'];

function Table({ transactionsTotal, totalProfit, totalLoose }) {
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
