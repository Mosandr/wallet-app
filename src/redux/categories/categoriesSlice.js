import { createSlice } from '@reduxjs/toolkit';
// import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const initialState = {
  list: [],
  error: null,
  isLoading: false,
};

const { reducer, actions } = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getCategoriesRequest: state => {
      state.isLoading = true;
    },
    getCategoriesSuccess: (state, { payload }) => {
      state.list = payload;
      state.isLoading = false;
    },
    getCategoriesError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const {
  getCategoriesRequest,
  getCategoriesSuccess,
  getCategoriesError,
} = actions;
export default reducer;
