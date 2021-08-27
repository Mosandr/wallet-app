const getIsAuthenticated = state => state.user.isAuthenticated;
const getError = state => state.user.error;
const getUsername = state => state.user.name;
const getToken = state => state.user.token;
const getTotalBalance = state => state.user.totalBalance;
// eslint-disable-next-line
export default {
  getIsAuthenticated,
  getError,
  getUsername,
  getToken,
  getTotalBalance,
};
