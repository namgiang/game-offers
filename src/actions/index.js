export const REQUEST_DATA = "REQUEST_DATA";
export const RECEIVE_DATA = "RECEIVE_DATA";
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
    }, 200);
  };
};