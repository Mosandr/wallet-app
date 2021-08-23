import { createSlice } from '@reduxjs/toolkit';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const initialState = {
  userId: null,
  name: '',
  email: '',
  isAuthenticated: false,
  token: null,
  isLoading: false,
  error: '',
  isLoading: false,
};


const { reducer, actions } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    onLoginRequest: (state) => {
      state.error = '';
      state.isLoading = true;
    },
    onLoginSuccess: (state, { payload }) => {
      state.token = payload.data.user.token;
      state.name = payload.data.user.name;
      state.email = payload.data.user.email;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = '';
    },
    onLoginError: (state, { payload }) => {
      state.token = null;
      state.isAuthenticated = false;
      state.error = 'Login error \n' + payload;
      error({
        text: `Login error : \n ${payload}`,
        type: 'error',
        animation: 'fade',
        delay: 4000,
      });
    },
    onLogoutSuccess: state => {
      state.isAuthenticated = false;
    },
    onLogoutError: (state, { payload }) => {
      state.token = null;
      state.isAuthenticated = false;
      state.error = 'LogoutError \n' + payload;
      error({
        text: `Logout error : \n ${payload}`,
        type: 'error',
        animation: 'fade',
        delay: 4000,
      });
    },
    onRegisterRequest: (state) => {
      state.error = '';
      state.isLoading = true;
    },
    onRegisterSuccess: (state, { payload }) => {
      state.userId = payload.data.user.userId
      state.email = payload.data.user.email
      state.token = payload.data.user.token;
      state.isAuthenticated = true;
      state.error = '';

    },
    onRegisterError: (state, { payload }) => {
      state.error = 'RegisterError \n' + payload;
      error({
        text: `Registration error : \n ${payload}`,
        type: 'error',
        animation: 'fade',
        delay: 4000,
      });
    },
  },
});

export const { onLoginSuccess,
  onLogoutSuccess,
  onLogoutError,
  onLoginRequest,
  onLoginError,
  onRegisterRequest,
  onRegisterSuccess,
  onRegisterError } = actions;
export default reducer;
