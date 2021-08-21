import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: null,
  isAuthenticated: false,
  token: null,
  error: '',
};

const { reducer, actions } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    onLoginSuccess: (state, { payload }) => {
      state.token = payload.token;
      state.isAuthenticated = true;
    },
    onLogoutSuccess: state => {
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { onLoginSuccess, onLogoutSuccess } = actions;
export default reducer;
