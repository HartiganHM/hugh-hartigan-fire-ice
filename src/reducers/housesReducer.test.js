import housesData from './housesReducer';
import * as actions from '../actions';
import mockHousesData from '../data/mockHousesData';

describe('housesReducer tests', () => {
  it('Should return the store by default', () => {
    const expected = [];

    expect(housesData(undefined, {})).toEqual(expected);
  });

  it('Should return a new store with housesData', () => {
    const expected = mockHousesData;

    expect(housesData(undefined, actions.setHousesDataInStore(mockHousesData))).toEqual(expected)
  });
});