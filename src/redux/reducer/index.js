import {JSON_DATA} from '../action';

const INITIAL_STATE = {
  data: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;

  switch (type) {
    case JSON_DATA:
      return {...state, data: payload};
    default:
      return state;
  }
};

export default reducer;
