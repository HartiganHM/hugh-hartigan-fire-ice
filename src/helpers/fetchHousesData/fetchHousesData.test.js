import fetchHouseData from './fetchHousesData';
import mockHousesData from '../../data/mockHousesData';

window.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    status: 200,
    json: () => Promise.resolve(mockHousesData)
  })
);

describe('fetchHouseData tests', () => {
  it('Should be called correctly', () => {
    expect(fetchHouseData).toBeAFunction;
  });

  it('Should return an object', async () => {
    const response = await fetchHouseData();

    expect(typeof response).toEqual('object');
  });

  it('Should throw an error if the fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        status: 500
      })
    );
    const response = await fetchHouseData();
    const expected = Error('error fetching houses data');

    expect(response).toEqual(expected);
  });
});
