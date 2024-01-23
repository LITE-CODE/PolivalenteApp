import { RESET_USER, SET_USER } from '../constants/actionTypes.js';

const initialState = {
  auth: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...action.payload, 
      };
    case RESET_USER:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
