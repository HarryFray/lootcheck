import { SET_BALANCE } from './constants';

export const setBalance = balance => {
  return {
    payload: balance,
    type: SET_BALANCE
  }
}
