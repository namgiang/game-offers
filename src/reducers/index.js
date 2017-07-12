import { combineReducers } from "redux";
import * as types from "../actions";

const data = (state = {
  isFetching: false,
  offers: [],
  priceRange: null,
  sortOrder: null
}, action) => {
  switch (action.type) {
    case types.REQUEST_DATA:
      return Object.assign({}, state, {
        isFetching: true
      });
    case types.RECEIVE_DATA:
      return Object.assign({}, state, {
        isFetching: false,
        offers: action.data
      });
    case types.SET_PRICE_RANGE:
      return Object.assign({}, state, {
        priceRange: action.values
      });
    case types.SORT_ORDER:
      return Object.assign({}, state, {
        sortOrder: action.sortOrder
      });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  data
});

export default rootReducer;