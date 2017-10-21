import { combineReducers } from 'redux';

const view = (state = {}, { type, payload }) => {
  switch (type) {
    case 'GET_PLACES':
      return state;
    default:
      return state;
  }
};

const rootReducer = combineReducers({ view });
export default rootReducer;
