import styles from './DiagramTab.module.css';
import Table from '../Table/Table';
import Chart from '../Chart/Chart';
import Selector from '../Selector/Selector';
import sumToString from '../../helpers/numberToStringCurrency';

function DiagramTab() {
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
  const years = [
    { value: '2021', label: '2021' },
    { value: '2022', label: '2022' },
    { value: '2023', label: '2023' },
  ];

  const total = 24000;

  const strBalance = sumToString(total, '₴ ');
  return (
    <section className={styles.section}>
      <h2>Статистика</h2>
      <div className={styles.stat_wrapper}>
        <div className={styles.chart_wrapper}>
          <span className={styles.balance}>{strBalance}</span>
          <Chart />
        </div>
        <div className={styles.table_wrapper}>
          <div className={styles.selects_wrapper}>
            <Selector options={months} />
            <Selector options={years} />
          </div>
          <Table />
        </div>
      </div>
    </section>
  );
}

export default DiagramTab;
