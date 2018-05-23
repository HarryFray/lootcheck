import * as constants from '../actions/constants';

export const balanceReducer = function (state, action) {
  switch (action.type) {
    case constants.SET_BALANCE: {
      return action.payload
    }
    default: return state;
  }
}