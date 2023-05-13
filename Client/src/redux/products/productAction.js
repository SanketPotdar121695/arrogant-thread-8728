import * as types from './productType';
import axios from 'axios';

const baseURL = process.env.REACT_APP_baseURL;

export const getProducts = (allParams) => async (dispatch) => {
  dispatch({ type: types.GET_PRDUCT_REQUEST });
  try {
    // let res = await axios.get(`${baseURL}/products`, allParams);
    let res = await axios('http://localhost:4300/products', allParams);
    const totalProductCount = res.headers['x-total-count'];
    console.log(res);
    dispatch({
      type: types.GET_PRDUCT_SUCCESS,
      payload: { data: res.data, totalProductCount }
    });
  } catch (err) {
    dispatch({ type: types.GET_PRDUCT_FAILURE });
  }
};
