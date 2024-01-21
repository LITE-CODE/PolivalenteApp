import { SET_MENU } from '../constants/actionTypes.js';

const initialState = {
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU:
      return action.payload;
    default:
      return state;
  }
};

export default menuReducer;