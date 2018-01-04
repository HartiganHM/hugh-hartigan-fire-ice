/*esling-disable*/
import fetchHouseMembers from './fetchHouseMembers';
import mockMembersData from '../../data/mockMembersData';

window.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    status.200,
    json: () => Promise.resolve(mockMembersData)
  })
)

describe('fetchHouseMembers tests', () => {
  it('Should be called correctly', () => {
    expect(fetchHouseMembers).toBeAFunction;
  });

  it('Should return an object', async () => {
    const response = await fetchHouseMembers();

    expect(typeof response).toEqual('object');
  });

  it('Should throw an error if the fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        status: 500
      })
    );
    const response = await fetchHouseMembers();
    const expected = Error('error fetching members data');

    expect(response).toEqual(expected);
  });
})