import styles from './HomeTab.module.css';
import { useMediaQuery } from 'react-responsive';
import Balance from '../Balance/Balance';
import { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import transactionsSelectors from '../../redux/transactions/transactionsSelectors';
import transactionsOperations from '../../redux/transactions/transactionsOperations';
import ModalBackdrop from '../../components/ModalBackdrop/ModalBackdrop';
import ModalAddTransactions from '../../components/ModalAddTransactions/ModalAddTransactions';
import { ReactComponent as AddIcon } from '../../icons/add.svg';
import sumToString from '../../helpers/numberToStringCurrency';

function HomeTab() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(transactionsOperations.getTransactions());
  }, [dispatch]);

  const transactions = useSelector(transactionsSelectors.getAllTransactions);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTabletOrDesktop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const [showModal, setShowModal] = useState(false);
  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  const sliceDate = date => {
    const sliceDate = date.split('.');
    const year = sliceDate[2].substr(-2);
    sliceDate[2] = year;
    return sliceDate.join('.');
  };

  return (
    <>
      {isMobile && (
        <>
          <Balance />
          <ul className={styles.transactionList}>
            {transactions.length !== 0 &&
              transactions.map(el => (
                <li
                  className={styles.transactionItem}
                  key={el._id}
                  style={{
                    borderLeft:
                      el.type === '+'
                        ? '5px solid #24CCA7'
                        : '5px solid #FF6596',
                  }}
                >
                  <ul className={styles.transactionParamsList}>
                    <li className={styles.transactionParamsItem}>
                      <p className={styles.paramName}>Дата</p>
                      <p className={styles.paramValue}>{sliceDate(el.date)}</p>
                    </li>
                    <li className={styles.transactionParamsItem}>
                      <p className={styles.paramName}>Тип</p>
                      <p className={styles.paramValue}>{el.type}</p>
                    </li>
                    <li className={styles.transactionParamsItem}>
                      <p className={styles.paramName}>Категория</p>
                      <p className={styles.paramValue}>{el.category?.name}</p>
                    </li>
                    <li className={styles.transactionParamsItem}>
                      <p className={styles.paramName}>Комментарий</p>
                      <p className={styles.paramValue}>{el.comment}</p>
                    </li>
                    <li className={styles.transactionParamsItem}>
                      <p className={styles.paramName}>Сумма</p>
                      <p
                        style={{
                          color: el.type === '+' ? '#24CCA7' : '#FF6596',
                          fontWeight: 700,
                        }}
                        className={styles.paramValue}
                      >
                        {sumToString(el.sum.toFixed(2), '')}
                      </p>
                    </li>
                    <li className={styles.transactionParamsItem}>
                      <p className={styles.paramName}>Баланс</p>
                      <p className={styles.paramValue}>
                        {sumToString(el.balance.toFixed(2), '')}
                      </p>
                    </li>
                  </ul>
                </li>
              ))}
          </ul>
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
              {transactions.length !== 0 &&
                transactions.map(el => (
                  <tr key={el._id} className={styles.tr}>
                    <td className={styles.td}>{sliceDate(el.date)}</td>
                    <td className={styles.td}>{el.type}</td>
                    <td className={styles.td}>{el.category?.name}</td>
                    <td className={styles.td}>{el.comment}</td>
                    <td
                      className={styles.td}
                      style={{ color: el.type === '+' ? '#24CCA7' : '#FF6596' }}
                    >
                      {sumToString(el.sum.toFixed(2), '')}
                    </td>
                    <td className={styles.td}>
                      {sumToString(el.balance.toFixed(2), '')}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}

      <button className={styles.addButton} type="button" onClick={toggleModal}>
        <AddIcon className={styles.addIcon} width="20" height="20" />
      </button>

      {showModal && (
        <ModalBackdrop onClose={toggleModal}>
          <ModalAddTransactions onClose={toggleModal} />
        </ModalBackdrop>
      )}
    </>
  );
}

export default HomeTab;
