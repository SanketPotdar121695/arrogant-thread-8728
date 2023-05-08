import * as types from './productType';
import axios from 'axios';

const baseURL = process.env.REACT_APP_baseURL;

export const getProducts = (allParams) => async (dispatch) => {
  dispatch({ type: types.GET_PRDUCT_REQUEST });
  try {
    let { data } = await axios.get(`${baseURL}/products`, allParams);
    dispatch({ type: types.GET_PRDUCT_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: types.GET_PRDUCT_FAILURE });
  }
};
