const getIsAuthenticated = state => state.user.isAuthenticated;
const getError = state => state.user.error;
const getUsername = state => state.user.name;
const getToken = state => state.user.token;

export default {
  getIsAuthenticated,
  getError,
  getUsername,
  getToken
};
