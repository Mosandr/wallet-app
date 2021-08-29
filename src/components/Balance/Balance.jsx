import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import numberToStringCurrency from '../../helpers/numberToStringCurrency';
import styles from './Balance.module.css';

function Balance() {
  const balance = useSelector(authSelectors.getTotalBalance).toFixed(2);
  return (
    <div className={styles.balance_container}>
      <p className={styles.balance_title}>Ваш баланс</p>
      {balance && (
        <p className={styles.total_balance}>
          <span className={styles.currency_symbol}>&#8372;</span>{' '}
          {numberToStringCurrency(balance, '₴  ')}
        </p>
      )}
    </div>
  );
}

export default Balance;
