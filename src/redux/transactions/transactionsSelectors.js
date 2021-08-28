const getAllTransactions = state => state.transactions.list;

const getMonthFilter = state => state.transactions.filterMonth;

const getYearFilter = state => state.transactions.filterYear;

const transactionsSelectors = {
  getAllTransactions,
  getMonthFilter,
  getYearFilter,
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
