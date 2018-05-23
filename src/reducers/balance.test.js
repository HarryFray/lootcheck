import balanceReducer from './balance';
import * as constants from '../actions/constants';

describe('balanceReducer', () => {
  it('sets a balance', () => {
    const balance = 10;

    expect(balanceReducer(undefined, {
      type: constants.SET_BALANCE,
      payload: balance
    })).toEqual(balance);
  });

  it('sets keeps state when an udefined constant is passed', () => {
    const balance = 10;

    expect(balanceReducer(undefined, {
      type: null,
      payload: balance
    })).toEqual(0);
  })
})