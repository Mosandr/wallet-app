import axios from 'axios';
import {
  onLoginSuccess,
  onLogoutSuccess,
  onLoginRequest,
  onLoginError,
  onLogoutError,
  onRegisterRequest,
  onRegisterSuccess,
  onRegisterError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './authSlice';

axios.defaults.baseURL = 'https://wallet-goit.herokuapp.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const tokenPresenceCheck = storedToken => dispatch => {
  token.set(storedToken);
};

const logIn = credentials => async dispatch => {
  console.log('login');
  dispatch(onLoginRequest());
  try {
    const response = await axios.post('/users/login', credentials);
    token.set(response.data.data.user.token);
    console.log(response.data.data.user);
    dispatch(onLoginSuccess(response.data));
  } catch (error) {
    dispatch(onLoginError(error.message));
  }
};

const register = credentials => async dispatch => {
  dispatch(onRegisterRequest());
  try {
    const response = await axios.post('/users/signup', credentials);
    token.set(response.data.data.user.token);
    dispatch(onRegisterSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(onRegisterError(error.message));
  }
};

const logOut = () => async dispatch => {
  console.log('logout');
  try {
    const response = await axios.post('/users/logout');
    console.log(response);
    token.unset();
    dispatch(onLogoutSuccess());
  } catch (error) {
    dispatch(onLogoutError(error.message));
  }
};
const getCurrentUser = () => async (dispatch, getState) => {
  const {
    user: { token: persistedToken },
  } = getState();

  console.log(persistedToken);

  if (!persistedToken) return;

  token.set(persistedToken);

  dispatch(getCurrentUserRequest());

  try {
    const response = await axios.get('/users/current');

    dispatch(getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};

// eslint-disable-next-line
export default { logIn, register, logOut, getCurrentUser, tokenPresenceCheck };
