import styles from './Balance.module.css';
import { useSelector } from 'react-redux';
// import numberToStringCurrency from '../../helpers/numberToStringCurrency';
import transactionsSelectors from '../../redux/transactions/transactionsSelectors';

function Balance() {
  // numberToStringCurrency(balance);
  // const getWalletBalance = state =>
  //   getAllTransactions(state).reduce((acc, element) => {
  //     const amount = element.type === '-' ? -element.sum : element.sum;
  //     return acc + amount;
  //   }, 0);

  // const getBalance = useSelector(transactionsSelectors.getAllTransactions);

  // console.log(getBalance);
  return (
    <div className={styles.balance_container}>
      <p className={styles.balance_title}>Ваш баланс</p>
      <p className={styles.total_balance}>&#8372; {1000.01}</p>
    </div>
  );
}

export default Balance;
