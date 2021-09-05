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
    const {
      data: { data },
    } = await axios.get('/transactions');
    dispatch(getTransactionsSuccess(data.docs));
  } catch (err) {
    dispatch(getTransactionsError(err.message));
  }
};

const addTransaction = credentials => async dispatch => {
  dispatch(addTransactionRequest());

  try {
    const response = await axios.post('/transactions/create', credentials);
    dispatch(addTransactionSuccess(response.data.data.transaction));
  } catch (err) {
    dispatch(addTransactionError(err.message));
  }
};

const operations = { getTransactions, addTransaction };
export default operations;
