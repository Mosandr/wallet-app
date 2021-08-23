const getIsAuthenticated = state => state.user.isAuthenticated;
const getError = state => state.user.error;
const getUsername = state => state.user.name;

export default {
  getIsAuthenticated,
  getError,
  getUsername
};
