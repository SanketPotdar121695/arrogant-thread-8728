/** @format */

import React from 'react';
import {
  GET_LOGIN_ERROR,
  GET_LOGIN_REQUEST,
  GET_LOGIN_SUCCESS,
  LOGOUT_USER
} from './authtype';

/** @format */
let { role, username, token } =
  JSON.parse(localStorage.getItem('userData')) || {};

let initialstate = {
  isLoading: false,
  isError: false,
  isAuth: role ? true : false,
  token: token || '',
  role: role || '',
  username: username || ''
};

export let authReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case GET_LOGIN_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isAuth: role ? true : false
      };
    }
    case GET_LOGIN_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }
    case LOGOUT_USER: {
      localStorage.removeItem('userData');
      return { ...state, isAuth: false };
    }
    default: {
      return state;
    }
  }
};
