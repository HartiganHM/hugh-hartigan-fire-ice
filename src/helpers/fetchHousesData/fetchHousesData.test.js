import fetchHouseData from './fetchHousesData';
import mockHousesData from '../../data/mockHousesData';

window.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    status: 200,
    json: () => Promise.resolve(mockHousesData)
  })
);

describe('fetchHouseData tests', () => {
  it('Should be called correctly', () => {});

  it('Should return an object', () => {});

  it('Should throw an error if the fetch fails', () => {});
});
