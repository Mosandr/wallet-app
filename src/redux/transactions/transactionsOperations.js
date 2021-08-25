import axios from 'axios';
import {
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
  getTransactionsRequest,
  getTransactionsSuccess,
  getTransactionsError,
} from './transactionsSlice';

axios.defaults.baseURL = 'http://localhost:3001/api/transactions';

const getTransactions = credentials => async dispatch => {
  dispatch(getTransactionsRequest());

  try {
    const response = await axios.post('/create', credentials);

    dispatch(getTransactionsSuccess(response.data));
  } catch (err) {
    dispatch(getTransactionsError(err.message));
  }
};

const addTransaction = credentials => async dispatch => {
  dispatch(addTransactionRequest());

  try {
    const response = await axios.post('/create', credentials);

    dispatch(addTransactionSuccess(response.data));
  } catch (err) {
    dispatch(addTransactionError(err.message));
  }
};

export default { addTransaction };

/*
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const logIn = credentials => async dispatch => {
  console.log('login');
  dispatch(onLoginRequest());
  try {
    const response = await axios.post('/login', credentials);
    token.set(response.data.token);
    dispatch(onLoginSuccess(response.data));
  } catch (error) {
    dispatch(onLoginError(error.message));
  }
};

const register = credentials => async dispatch => {
  dispatch(onRegisterRequest());
  try {
    const response = await axios.post('/signup', credentials);
    token.set(response.data.token);
    dispatch(onRegisterSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(onRegisterError(error.message));
  }
};

const logOut = credentials => async dispatch => {
  try {
    await axios.post('/logout', credentials);
    token.unset();
    dispatch(onLogoutSuccess());
  } catch (error) {
    dispatch(onLogoutError(error.message));
  }
};

export default { logIn, register, logOut };
*/

// const getCurrentUser = () => async (dispatch, getState) => {
//   const {
//     auth: { token: persistedToken },
//   } = getState();

//   if (!persistedToken) return;

//   token.set(persistedToken);

//   dispatch(authActions.getCurrentUserRequest());

//   try {
//     const response = await axios.get('/users/current');

//     dispatch(authActions.getCurrentUserSuccess(response.data));
//   } catch (error) {
//     dispatch(authActions.getCurrentUserError(error.message));
//   }
// };

// export default { register, logIn, logOut, getCurrentUser };

/*
import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post('/users/signup', credentials);

    token.set(response.data.token);
    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

const logIn = credentials => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const response = await axios.post('/users/login', credentials);

    token.set(response.data.token);
    dispatch(authActions.loginSuccess(response.data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

const logOut = () => async dispatch => {
  dispatch(authActions.logoutRequest());

  try {
    await axios.post('/users/logout');

    token.unset();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) return;

  token.set(persistedToken);

  dispatch(authActions.getCurrentUserRequest());

  try {
    const response = await axios.get('/users/current');

    dispatch(authActions.getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
};

export default { register, logIn, logOut, getCurrentUser };
*/
