import { SET_USER } from '../constants/actionTypes.js';

const initialState = {
    name: 'jv',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTljNTZlMWFlYmU1MDA0MWU4MzI2MzUiLCJpYXQiOjE3MDQ4NTQ4MzQsImV4cCI6MTcwNTI4NjgzNH0.7fQ6FhFasCAo4fRbTVzMbxgeZ15lxSHtkg0zcl3YGU4'
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...action.payload, 
      };
    default:
      return state;
  }
};

export default userReducer;
