import { createSlice } from "@reduxjs/toolkit";
import { error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

const initialState = {
  list: [],
  error: null,
  isLoading: false,
};

const { reducer, actions } = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    getTransactionsRequest: (state) => {
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
    addTransactionRequest: (state) => {
      state.isLoading = true;
    },
    addTransactionSuccess: (state, { payload }) => {
      state.isLoading = false;
    },
    addTransactionError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
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
} = actions;
export default reducer;
