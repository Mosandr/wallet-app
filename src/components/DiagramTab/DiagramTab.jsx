import styles from './DiagramTab.module.css';
import Table from '../Table/Table';
import Chart from '../Chart/Chart';
import Selector from '../Selector/Selector';
import sumToString from '../../helpers/numberToStringCurrency';
import { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  monthChange,
  yearChange,
} from '../../redux/transactions/transactionsSlice';

import selectors from '../../redux/transactions/transactionsSelectors';
import transactionsOperations from '../../redux/transactions/transactionsOperations';

function DiagramTab() {
  const dispatch = useDispatch();
  const transactions = useSelector(selectors.getAllTransactions);

  useEffect(() => {
    if (transactions.length === 0) {
      dispatch(transactionsOperations.getTransactions());
    }
  }, [dispatch]);

  const transactionsData = useSelector(selectors.getTransactionsStatistic);
  const monthFilter = useSelector(selectors.getMonthFilter);
  const yearFilter = useSelector(selectors.getYearFilter);

  const onMonthSelect = e => {
    dispatch(monthChange(e.value));
  };

  const onYearSelect = e => {
    dispatch(yearChange(e.value));
  };

  const months = [
    { value: '01', label: 'Январь' },
    { value: '02', label: 'Февраль' },
    { value: '03', label: 'Март' },
    { value: '04', label: 'Апрель' },
    { value: '05', label: 'Май' },
    { value: '06', label: 'Июнь' },
    { value: '07', label: 'Июль' },
    { value: '08', label: 'Август' },
    { value: '09', label: 'Сентябрь' },
    { value: '10', label: 'Октябрь' },
    { value: '11', label: 'Ноябрь' },
    { value: '12', label: 'Декабрь' },
  ];

  const total = transactionsData.totalProfit - transactionsData.totalLoose;
  const selectedMonth = months.filter(({ value }) => value === monthFilter);
  const selectedYear = { value: yearFilter, label: yearFilter };

  const strBalance = sumToString(total, '₴ ');

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Статистика</h2>
      <div className={styles.stat_wrapper}>
        <div className={styles.chart_wrapper}>
          <span className={styles.balance}>{strBalance}</span>
          <Chart
            labels={transactionsData.labels}
            colors={transactionsData.colors}
            totals={transactionsData.totals}
          />
        </div>
        <div className={styles.table_wrapper}>
          <div className={styles.selects_wrapper}>
            <Selector
              options={months}
              selected={selectedMonth}
              className="react-select-container"
              classNamePrefix="react-select"
              onChange={onMonthSelect}
            />
            <Selector
              options={transactionsData.yearList}
              selected={selectedYear}
              className="react-select-container"
              classNamePrefix="react-select"
              onChange={onYearSelect}
            />
          </div>
          <Table
            transactionsTotal={transactionsData.tableData}
            totalProfit={transactionsData.totalProfit}
            totalLoose={transactionsData.totalLoose}
          />
        </div>
      </div>
    </section>
  );
}

export default memo(DiagramTab);
