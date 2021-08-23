import { createSlice } from '@reduxjs/toolkit';
import { string } from 'prop-types';

const initialState = {
  userId: null,
  name: '',
  email: '',
  isAuthenticated: false,
  token: null,
  isLoading: false,
  error: '',
};

const { reducer, actions } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    onLoginRequest: (state) => {
      console.log('LoginRequest')
      state.isLoading = true;
    },
    onLoginSuccess: (state, { payload }) => {
      state.token = payload.data.user.token;
      state.name = payload.data.user.name;
      state.email = payload.data.user.email;
      state.isAuthenticated = true;
      state.isLoading = false;
      console.log('Logon success')
    },
    onLoginError: (state, { payload }) => {
      state.token = null;
      state.isAuthenticated = false;
      state.error = payload
    },
    onLogoutSuccess: state => {
      state.token = null;
      state.isAuthenticated = false;
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
      console.log('RegisterSuccess', payload)

    },
    onRegisterError: (state, { payload }) => {
      state.error = 'RegisterError \n' + payload;
      console.log('RegisterError', payload)
    },
  },
});

export const { onLoginSuccess,
  onLogoutSuccess,
  onLoginRequest,
  onLoginError,
  onRegisterRequest,
  onRegisterSuccess,
  onRegisterError } = actions;
export default reducer;
