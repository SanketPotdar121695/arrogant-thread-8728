/** @format */

import axios from "axios";
import {
  GET_LOGIN_ERROR,
  GET_LOGIN_REQUEST,
  GET_LOGIN_SUCCESS,
} from "./authtype";

export const login = (formData) => (dispatch) => {
  dispatch({ type: GET_LOGIN_REQUEST });
  return axios
    .post(`${process.env.REACT_APP_baseURL}user/auth/login`, formData)
    .then((res) => {
      dispatch({ type: GET_LOGIN_SUCCESS, payload: res.data.token });
      localStorage.setItem("userData",JSON.stringify(res.data))
      console.log(res.data)
    })
    .catch((err) => {
      dispatch({ type: GET_LOGIN_ERROR });
    });
};
