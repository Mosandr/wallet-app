import axios from 'axios';
import { error as errorNotify } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import {
  onLoginSuccess,
  onLogoutSuccess,
  onLoginRequest,
  onLoginError,
  onLogoutError,
  onRegisterRequest,
  onRegisterSuccess,
  onRegisterError,
  onGetCurrentUserRequest,
  onGetCurrentUserSuccess,
  onGetCurrentUserError,
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
  token.set(storedToken)
}

const logIn = credentials => async dispatch => {
  console.log('login');
  dispatch(onLoginRequest());
  try {
    const response = await axios.post('/users/login', credentials);
    token.set(response.data.data.user.token);
    dispatch(onLoginSuccess(response.data));
  } catch (error) {
    dispatch(onLoginError(error.message));
    errorNotify({
      text: `Login error : \n ${error}`,
      type: 'error',
      animation: 'fade',
      delay: 4000,
    });
  }
};

const register = credentials => async dispatch => {
  dispatch(onRegisterRequest());
  try {
    const response = await axios.post('/users/signup', credentials);
    token.set(response.data.data.user.token);
    dispatch(onRegisterSuccess(response.data));
  } catch (error) {
    dispatch(onRegisterError(error.message));
    errorNotify({
      text: `Registration error : \n ${error}`,
      type: 'error',
      animation: 'fade',
      delay: 4000,
    });
  }
};

const logOut = () => async dispatch => {
  console.log('logout')
  try {
    const response = await axios.post('/users/logout');
    console.log(response);
    token.unset();
    dispatch(onLogoutSuccess());
  } catch (error) {
    dispatch(onLogoutError(error.message));
    errorNotify({
      text: `Logout error : \n ${error}`,
      type: 'error',
      animation: 'fade',
      delay: 4000,
    });
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    user: { token: persistedToken },
  } = getState();

  if (!persistedToken) return;

  token.set(persistedToken);

  dispatch(onGetCurrentUserRequest());

  try {
    const response = await axios.get('/users/current');
    dispatch(onGetCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(onGetCurrentUserError(error.message));
    errorNotify({
      text: `Authentication error : \n ${error}`,
      type: 'error',
      animation: 'fade',
      delay: 4000,
    });
  }
};

export default { logIn, register, logOut, tokenPresenceCheck, getCurrentUser };
