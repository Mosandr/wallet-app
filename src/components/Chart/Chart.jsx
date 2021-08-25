// import styles from './Chart.module.css'

import { Doughnut } from 'react-chartjs-2';

const Chart = ({ width, height, className }) => {
  const categoriesNames = [
    'Кафе и рестораны',
    'Продукты',
    'Авто',
    'Образование',
    'Дети',
    'Дом',
    'Досуг',
    'Красота и здоровье',
    'Разное',
  ];
  const categoriesTotals = [
    5000, 3500.5, 1000, 2000, 2000.45, 800.5, 350.99, 320.45, 8000,
  ];
  const categoriesColors = [
    '#00AD84',
    '#FFD8D0',
    '#FD9498',
    '#81E1FF',
    '#6E78E8',
    '#4A56E2',
    '#24CCA7',
    '#C5BAFF',
    '#FED057',
  ];

  const data = {
    labels: categoriesNames,
    datasets: [
      {
        data: categoriesTotals,
        backgroundColor: categoriesColors,
        cutout: '70%',
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <Doughnut data={data} options={options} className={className} />
    </>
  );
};

export default Chart;
