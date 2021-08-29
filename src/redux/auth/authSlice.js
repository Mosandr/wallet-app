import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  isAuthenticated: false,
  token: null,
  isLoading: false,
  error: '',
  totalBalance: null,
};

const { reducer, actions } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    onLoginRequest: state => {
      state.isLoading = true;
    },
    onLoginSuccess: (state, { payload }) => {
      state.token = payload.data.user.token;
      state.isAuthenticated = true;
      state.name = payload.data.user.name;
      state.email = payload.data.user.email;
      state.totalBalance = payload.data.user.totalBalance;
      state.error = '';
      state.isLoading = false;
    },
    onLoginError: (state, { payload }) => {
      state.error = 'Login error \n' + payload;
      state.isLoading = false;
    },
    onLogoutSuccess: state => {
      state.token = null;
      state.isAuthenticated = false;
      state.email = '';
      state.name = '';
      state.isLoading = false;
    },
    onLogoutError: (state, { payload }) => {
      state.token = null;
      state.isAuthenticated = false;
      state.email = '';
      state.name = '';
      state.error = 'LogoutError \n' + payload;
    },
    onRegisterRequest: state => {
      state.error = '';
      state.isLoading = true;
    },
    onRegisterSuccess: (state, { payload }) => {
      state.token = payload.data.user.token;
      state.isAuthenticated = true;
      state.email = payload.data.user.email;
      state.name = payload.data.user.name;
      state.error = '';
      state.isLoading = false;
    },
    onRegisterError: (state, { payload }) => {
      state.token = null;
      state.isAuthenticated = false;
      state.error = 'RegisterError \n' + payload;
      state.isLoading = false;
    },
    onGetCurrentUserRequest: (state, { payload }) => {
      state.isLoading = true;
    },
    onGetCurrentUserSuccess: (state, { payload }) => {
      state.isAuthenticated = true;
      state.email = payload.data.user.email;
      state.name = payload.data.user.name;
      state.totalBalance = payload.data.user.totalBalance;
      state.isLoading = false;
    },
    onGetCurrentUserError: (state, { payload }) => {
      state.token = null;
      state.isAuthenticated = false;
      state.email = '';
      state.name = '';
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const {
  onLoginRequest,
  onLoginSuccess,
  onLoginError,
  onLogoutSuccess,
  onLogoutError,
  onRegisterRequest,
  onRegisterSuccess,
  onRegisterError,
  onGetCurrentUserRequest,
  onGetCurrentUserSuccess,
  onGetCurrentUserError,
} = actions;
export default reducer;
