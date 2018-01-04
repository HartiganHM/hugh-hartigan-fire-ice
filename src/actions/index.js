import fetchHousesData from '../helpers/fetchHousesData/fetchHousesData';
import fetchSwornMembers from '../helpers/fetchSwornMembers/fetchSwornMembers';

export const populateHouseData = () => async dispatch => {
  const housesData = await fetchHousesData();
  dispatch(setHousesDataInStore(housesData));
};

export const setHousesDataInStore = housesData => {
  return {
    type: 'SET_HOUSES_DATA',
    housesData
  };
};
