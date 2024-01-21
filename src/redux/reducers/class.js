import { SET_CLASS } from '../constants/actionTypes.js';

const initialState = {

};

const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLASS:
      return action.payload;
    default:
      return state;
  }
};

export default classReducer;