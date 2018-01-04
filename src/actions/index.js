import fetchHousesData from '../helpers/fetchHousesData/fetchHousesData';

export const populateHouseData = () => async dispatch => {
  const housesData = await fetchHousesData();
  dispatch()
}

export const setHousesDataInStore = housesData => {
  return {
    type: 'SET_HOUSES_DATA',
    housesData
  }
}
