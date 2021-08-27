import axios from 'axios';
import {
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
  getTransactionsRequest,
  getTransactionsSuccess,
  getTransactionsError,
} from './transactionsSlice';

const getTransactions = credentials => async dispatch => {
  dispatch(getTransactionsRequest());

  try {
    const response = await axios.post('/transactions', credentials);

    dispatch(getTransactionsSuccess(response.data));
  } catch (err) {
    dispatch(getTransactionsError(err.message));
  }
};

const addTransaction = credentials => async dispatch => {
  dispatch(addTransactionRequest());

  try {
    const response = await axios.post('/transactions/create', credentials);

    dispatch(addTransactionSuccess(response.data));
  } catch (err) {
    dispatch(addTransactionError(err.message));
  }
};

const operations = { getTransactions, addTransaction };
export default operations;
