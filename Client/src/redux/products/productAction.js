import * as types from './productType';
import axios from 'axios';

const baseURL = process.env.REACT_APP_baseURL;

export const getProducts = (allParams) => async (dispatch) => {
  dispatch({ type: types.GET_PRDUCT_REQUEST });
  try {
    let res = await axios(`${baseURL}/products`, allParams);
    const totalProductCount = res.headers['x-total-count'];
    // console.log(res);
    dispatch({
      type: types.GET_PRDUCT_SUCCESS,
      payload: { data: res.data, totalProductCount }
    });
  } catch (err) {
    dispatch({ type: types.GET_PRDUCT_FAILURE });
  }
};
