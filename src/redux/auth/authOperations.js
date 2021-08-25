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

const logIn = credentials => async dispatch => {
  console.log('login');
  dispatch(onLoginRequest());
  try {
    const response = await axios.post('/users/login', credentials);
    token.set(response.data.data.user.token);
    console.log(response.data.data.user.token);
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
  try {
    const response = await axios.post('/users/logout');
    console.log(response);
    token.unset();
    dispatch(onLogoutSuccess());
  } catch (error) {
    dispatch(onLogoutError(error.message));
  }
};

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
export default { logIn, register, logOut };
