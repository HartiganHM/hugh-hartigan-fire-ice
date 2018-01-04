export const housesData = (state = [], action) => {
  switch (action.type) {
  case 'SET_HOUSES_DATA':
    return action.housesData;
  default:
    return state;
  }
};
