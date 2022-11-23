export const JSON_DATA = 'JSON_DATA';

export const jsonData = () => async dispatch => {
  const customData = require('../../utils/data.json');
  const jsonData = customData.response;

  dispatch({
    type: JSON_DATA,
    payload: jsonData,
  });
};
