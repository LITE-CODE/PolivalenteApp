import { SET_USER, RESET_USER } from '../constants/actionTypes.js';

export const setUser = (userData) => ({
  type: SET_USER,
  payload: userData,
});

export const resetUser = () => ({
  type: RESET_USER,
  payload: { auth: false},
});
