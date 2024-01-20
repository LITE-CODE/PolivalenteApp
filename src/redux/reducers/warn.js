import { SET_WARN } from '../constants/actionTypes.js';

const initialState = [
  
];

const warnReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WARN:
      return action.payload
    default:
      return state;
  }
};

export default warnReducer;