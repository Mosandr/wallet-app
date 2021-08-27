import axios from 'axios';
import {
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
  getTransactionsRequest,
  getTransactionsSuccess,
  getTransactionsError,
} from './transactionsSlice';

const getTransactions = () => async dispatch => {
  dispatch(getTransactionsRequest());

  try {
    const response = await axios.get('/transactions');
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
