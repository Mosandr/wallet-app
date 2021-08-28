import styles from './DiagramTab.module.css';
import Table from '../Table/Table';
import Chart from '../Chart/Chart';
import Selector from '../Selector/Selector';
import sumToString from '../../helpers/numberToStringCurrency';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  monthChange,
  yearChange,
} from '../../redux/transactions/transactionsSlice';

import selectors from '../../redux/transactions/transactionsSelectors';
import categoriesSelectors from '../../redux/categories/categoriesSelectors';
import transactionsOperations from '../../redux/transactions/transactionsOperations';
import categoriesOperations from '../../redux/categories/categoriesOperations';

function DiagramTab() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(transactionsOperations.getTransactions());
    dispatch(categoriesOperations.getCategories());
  }, [dispatch]);

  const transactions = useSelector(selectors.getAllTransactions);
  const monthFilter = useSelector(selectors.getMonthFilter);
  const yearFilter = useSelector(selectors.getYearFilter);
  const categories = useSelector(categoriesSelectors.getCategories);

  const filteredTransactions = transactions.filter(
    ({ month, year }) => month === monthFilter && year === yearFilter,
  );

  const yearsList = transactions
    .reduce((acc, item) => {
      if (acc.includes(item.year)) return acc;
      return [...acc, item.year];
    }, [])
    .map(item => {
      return { value: item, label: item };
    });

  const labels = filteredTransactions.reduce((acc, item) => {
    if (acc.includes(item.category.name) || item.type === '+') return acc;
    return [...acc, item.category.name];
  }, []);

  const colors = labels.reduce((acc, item) => {
    const color = categories.find(({ name }) => name === item)?.color;
    return [...acc, color];
  }, []);

  const totals = labels.reduce((acc, item) => {
    const total = filteredTransactions.reduce((sum, transaction) => {
      if (transaction.category.name === item) return sum + transaction.sum;
      return sum;
    }, 0);
    return [...acc, total];
  }, []);

  const data = labels.map((item, index) => {
    return { category: item, total: totals[index], color: colors[index] };
  });

  const onMonthSelect = e => {
    dispatch(monthChange(e.value));
  };

  const onYearSelect = e => {
    dispatch(yearChange(e.value));
  };

  const { totalProfit, totalLoose } = filteredTransactions.reduce(
    (acc, item) => {
      if (item.type === '-') {
        const sum = acc.totalLoose + Number(item.sum);
        acc.totalLoose = sum;
      }
      if (item.type === '+') {
        const sum = acc.totalProfit + Number(item.sum);
        acc.totalProfit = sum;
      }

      return acc;
    },
    { totalProfit: 0, totalLoose: 0 },
  );

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

  const total = totalProfit - totalLoose;
  const selectedMonth = months.filter(({ value }) => value === monthFilter);
  const selectedYear = { value: yearFilter, label: yearFilter };

  const strBalance = sumToString(total, '₴ ');
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Статистика</h2>
      <div className={styles.stat_wrapper}>
        <div className={styles.chart_wrapper}>
          <span className={styles.balance}>{strBalance}</span>
          <Chart labels={labels} colors={colors} totals={totals} />
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
              options={yearsList}
              selected={selectedYear}
              className="react-select-container"
              classNamePrefix="react-select"
              onChange={onYearSelect}
            />
          </div>
          <Table
            transactionsTotal={data}
            totalProfit={totalProfit}
            totalLoose={totalLoose}
          />
        </div>
      </div>
    </section>
  );
}

export default DiagramTab;
