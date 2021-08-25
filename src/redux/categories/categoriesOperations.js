import axios from 'axios';
import {
  getCategoriesRequest,
  getCategoriesSuccess,
  getCategoriesError,
} from './categoriesSlice';

// axios.defaults.baseURL = 'https://wallet-goit.herokuapp.com/api';
// axios.defaults.baseURL = 'http://localhost:3001/api/categories';

const getCategories = credentials => async dispatch => {
  dispatch(getCategoriesRequest());

  try {
    const response = await axios.get('/categories', credentials);

    dispatch(getCategoriesSuccess(response.data));
    console.log(response);
  } catch (error) {
    dispatch(getCategoriesError(error.message));
  }
};

const operations = { getCategories };
export default operations;
