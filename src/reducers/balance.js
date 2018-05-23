import * as constants from '../actions/constants';

const balanceReducer = function (state = 0, action) {
  switch (action.type) {
    case constants.SET_BALANCE: {
      return action.payload
    }
    default: return state;
  }
}

export default balanceReducer;