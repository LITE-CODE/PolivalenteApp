import { SET_MENU } from '../constants/actionTypes.js';

const initialState = {
  lastUpdate: 'não informado.',
  drink: 'não informado.',
  menu: 'não informado.',
  fruit: 'não informado.'
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