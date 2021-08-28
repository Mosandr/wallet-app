import axios from 'axios';
import {
  getCategoriesRequest,
  getCategoriesSuccess,
  getCategoriesError,
} from './categoriesSlice';

const getCategories = () => async dispatch => {
  dispatch(getCategoriesRequest());

  try {
    const response = await axios.get('/categories');

    dispatch(getCategoriesSuccess(response.data.data.categoriesList));
  } catch (error) {
    dispatch(getCategoriesError(error.message));
  }
};

const operations = { getCategories };
export default operations;
