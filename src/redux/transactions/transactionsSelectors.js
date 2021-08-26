import { createSelector } from "reselect";

const getAllTransactions = (state) => state.transactions.result;
// const totalTransactions = (state) => getAllTransactions(state).length;

const transactionsSelectors = {
  getAllTransactions,
  // totalTransactions,
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
