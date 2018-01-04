const fetchHouseData = async () => {
  try {
    const fetchedData = await fetch('http://localhost:3001/api/v1/houses');
    const jsonData = await fetchedData.json();
    const newHouses = fetchHouseMembers(jsonData);

    return newHouses;
  } catch (error) {
    return new Error('error fetching houses data');
  }
};

const fetchHouseMembers = arrayOfHouses => {
  const newHouses = arrayofHouses.map(house => {
    const unresolvedPromises = house.swornMembers.map(async member => {
      const newMember = await fetch('')
    })

    const swornMembers = Promise.all(unresolvedPromises);

    return {...house, swornMembers};
  })

  return newHouses
}

export default fetchHouseData;
