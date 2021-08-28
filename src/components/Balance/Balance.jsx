import styles from './Balance.module.css';
import { useSelector } from 'react-redux';
import numberToStringCurrency from '../../helpers/numberToStringCurrency';
import authSelectors from '../../redux/auth/authSelectors';

function Balance() {
  const balance = useSelector(authSelectors.getTotalBalance).toFixed(2);

  return (
    <div className={styles.balance_container}>
      <p className={styles.balance_title}>Ваш баланс</p>
      {balance && (
        <p className={styles.total_balance}>
          {numberToStringCurrency(balance, '₴  ')}
        </p>
      )}
    </div>
  );
}

export default Balance;
