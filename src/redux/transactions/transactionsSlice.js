import { createSlice } from '@reduxjs/toolkit';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const initialState = {
  list: [],
  filterMonth: (new Date().getMonth() + 1).toString().padStart(2, '0'),
  filterYear: new Date().getFullYear().toString(),
  error: null,
  isLoading: false,
};

const { reducer, actions } = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    getTransactionsRequest: state => {
      state.isLoading = true;
    },
    getTransactionsSuccess: (state, { payload }) => {
      state.list = payload;
      state.isLoading = false;
    },
    getTransactionsError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    addTransactionRequest: state => {
      state.isLoading = true;
    },
    addTransactionSuccess: (state, { payload }) => {
      state.isLoading = false;
    },
    addTransactionError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    monthChange: (state, { payload }) => {
      state.filterMonth = payload;
    },
    yearChange: (state, { payload }) => {
      state.filterYear = payload;
    },
    yearListChange: (state, { payload }) => {
      state.yearList = payload;
    },
  },
});

export const {
  getTransactionsRequest,
  getTransactionsSuccess,
  getTransactionsError,
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
  monthChange,
  yearChange,
  yearListChange,
} = actions;
export default reducer;
