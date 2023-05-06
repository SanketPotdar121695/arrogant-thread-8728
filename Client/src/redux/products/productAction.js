import * as types from './productType';
import axios from 'axios';

export const getProducts = () => async (dispatch) => {
  dispatch({ type: types.GET_PRDUCT_REQUEST });
  try {
    let { data } = await axios.get(
      `https://electro-emporium.cyclic.app/products`
    );
    dispatch({ type: types.GET_PRDUCT_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: types.GET_PRDUCT_FAILURE });
  }
};
