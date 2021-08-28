import { createSlice } from '@reduxjs/toolkit';

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
    onLoginRequest: state => {
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
      state.isAuthenticated = false;
      state.isLoading = false;
      state.error = 'Login error \n' + payload;
    },
    onLogoutSuccess: state => {
      state.email = '';
      state.name = '';
      state.isAuthenticated = false;
      state.token = null;
    },
    onLogoutError: (state, { payload }) => {
      state.email = '';
      state.name = '';
      state.isAuthenticated = false;
      state.token = null;
      state.error = 'LogoutError \n' + payload;
    },
    onRegisterRequest: state => {
      state.error = '';
      state.isLoading = true;
    },
    onRegisterSuccess: (state, { payload }) => {
      state.userId = payload.data.user.userId;
      state.name = payload.data.user.name;
      state.email = payload.data.user.email;
      state.token = payload.data.user.token;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = '';
    },
    onRegisterError: (state, { payload }) => {
      state.isAuthenticated = false;
      state.error = 'RegisterError \n' + payload;
      state.isLoading = false;

    },

    onGetCurrentUserRequest: (state, { payload }) => {
      state.isLoading = true;
    },
    onGetCurrentUserSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.email = payload.data.user.email;
      state.name = payload.data.user.name;
    },
    onGetCurrentUserError: (state, { payload }) => {
      state.isLoading = false;
      state.email = '';
      state.name = '';
      state.isAuthenticated = false;
      state.token = null;
    },
  },
});

export const {
  onLoginSuccess,
  onLogoutSuccess,
  onLogoutError,
  onLoginRequest,
  onLoginError,
  onRegisterRequest,
  onRegisterSuccess,
  onRegisterError,
  onGetCurrentUserRequest,
  onGetCurrentUserSuccess,
  onGetCurrentUserError,
} = actions;
export default reducer;
