// /src/actions/authActions.js

import axios from 'axios';

export const registerUser = (email, phone, username, password) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:5000/api/users/register', {
      email,
      phone,
      username,
      password
    });

    dispatch({
      type: 'USER_REGISTER_SUCCESS',
      payload: response.data.user
    });
  } catch (error) {
    dispatch({
      type: 'USER_REGISTER_FAILURE',
      payload: 'Registration failed!'
    });
  }
};

export const loginUser = (email, password) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:5000/api/users/login', {
      email,
      password
    });

    dispatch({
      type: 'USER_LOGIN_SUCCESS',
      payload: response.data.user
    });
  } catch (error) {
    dispatch({
      type: 'USER_LOGIN_FAILURE',
      payload: 'Login failed!'
    });
  }
};

export const logoutUser = () => {
  return {
    type: 'LOGOUT'
  };
};
