import React from 'react';
import * as types from './productType';

let initState = {
  products: [],
  loading: false,
  error: false
};

export const productReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.GET_PRDUCT_REQUEST:
      return {
        ...state,
        loading: true
      };

    case types.GET_PRDUCT_SUCCESS:
      return {
        ...state,
        products: payload,
        loading: false
      };

    case types.GET_PRDUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      };

    default:
      return state;
  }
};
