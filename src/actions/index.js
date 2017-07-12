export const REQUEST_DATA = "REQUEST_DATA";
export const RECEIVE_DATA = "RECEIVE_DATA";
export const SET_PRICE_RANGE = "SET_PRICE_RANGE";
export const SORT_ORDER = "SORT_ORDER";
let jsonData = require('../assets/data/offers.json');

export const requestData = (): Object => {
  return {
    type: REQUEST_DATA
  };
};

export const receiveData = (data: Object): Object => {
  return {
    type: RECEIVE_DATA,
    data
  };
};

export const fetchData = (): Function => {
  return (dispatch) => {
    dispatch(requestData());

    /* method to fetch data from API in real scenario
    return fetch(url)
      .then(response => response.json())
      then((responseJson) => {
        dispatch(receiveData(responseJson));
      })
      .catch((error) => {
        console.error(error);
      });
    */

    return setTimeout(() => {
      dispatch(receiveData(jsonData));
    }, 100);
  };
};

export const setPriceRange = (values): Object => {
  return {
    type: SET_PRICE_RANGE,
    values
  };
};

export const sortOffers = (sortOrder): Object => {
  return {
    type: SORT_ORDER,
    sortOrder
  };
};