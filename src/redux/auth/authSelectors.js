const getToken = state => state.user.token;
const getIsAuthenticated = state => state.user.isAuthenticated;
const getUsername = state => state.user.name;
const getTotalBalance = state => state.user.totalBalance;
const getError = state => state.user.error;

// eslint-disable-next-line
export default {
  getToken,
  getIsAuthenticated,
  getUsername,
  getTotalBalance,
  getError,
};
