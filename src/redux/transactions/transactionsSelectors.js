import { createSelector } from 'reselect';

const getAllTransactions = state => state.transactions.list;
const getMonthFilter = state => state.transactions.filterMonth;
const getYearFilter = state => state.transactions.filterYear;

const getTransactionsStatistic = createSelector(
  [getAllTransactions, getMonthFilter, getYearFilter],
  (items, monthFilter, yearFilter) => {
    const yearList = items
      .reduce((acc, item) => {
        if (acc.includes(item.year)) return acc;
        return [...acc, item.year];
      }, [])
      .map(item => {
        return { value: item, label: item };
      });

    const filteredTransactions = items.filter(
      ({ month, year }) => month === monthFilter && year === yearFilter,
    );

    const chartData = filteredTransactions.reduce(
      (acc, item) => {
        const index = acc.labels.indexOf(item.category.name);
        if (index === -1) {
          if (item.type === '-') {
            acc.labels = [...acc.labels, item.category.name];
            acc.colors = [...acc.colors, item.category.color];
            acc.totals = [...acc.totals, Number(item.sum)];
            acc.totalLoose += Number(item.sum);
          }
          if (item.type === '+') {
            acc.totalProfit += Number(item.sum);
          }
          return acc;
        }

        acc.totals[index] += Number(item.sum);
        item.type === '+'
          ? (acc.totalProfit += Number(item.sum))
          : (acc.totalLoose += Number(item.sum));

        return acc;
      },
      {
        labels: [],
        colors: [],
        totals: [],
        totalProfit: 0,
        totalLoose: 0,
      },
    );

    const tableData = chartData.labels.map((item, index) => {
      return {
        category: item,
        total: chartData.totals[index],
        color: chartData.colors[index],
      };
    });

    const transactionsData = {
      yearList,
      totalProfit: chartData.totalProfit,
      totalLoose: chartData.totalLoose,
      labels: chartData.labels,
      colors: chartData.colors,
      totals: chartData.totals,
      tableData,
    };

    return transactionsData;
  },
);

const transactionsSelectors = {
  getAllTransactions,
  getMonthFilter,
  getYearFilter,
  getTransactionsStatistic,
};

export default transactionsSelectors;

/*
const getIsAuthenticated = state => state.user.isAuthenticated;
const getError = state => state.user.error;
const getUsername = state => state.user.name;

export default {
  getIsAuthenticated,
  getError,
  getUsername,
};
*/
