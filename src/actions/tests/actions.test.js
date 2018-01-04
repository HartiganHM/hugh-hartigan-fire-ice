import * as actions from '../index';
import mockHousesData from '../../data/mockHousesData';

describe('actions tests', () => {
  it('setHousesDataInStore should have a type of SET_HOUSES_DATA', () => {
    const housesData = mockHousesData;
    const expected = {
      type: 'SET_HOUSES_DATA',
      housesData
    }

    expect(actions.setHousesDataInStore(housesData)).toEqual(expected);
  });
})