const fetchHouseData = async () => {
  try {
    const fetchedData = await fetch('http://localhost:3001/api/v1/houses');
    const jsonData = await fetchedData.json();
    const newHouses = await fetchHouseMembers(jsonData);
    console.log(newHouses)

    return newHouses;
  } catch (error) {
    return new Error('error fetching houses data');
  }
};

const fetchHouseMembers = arrayOfHouses => {
  const newHouses = arrayOfHouses.map(async house => {
    const unresolvedPromises = house.swornMembers.map(async member => {
      const newMember = await fetch('http://localhost:3001/api/v1/character', {
        method: 'POST',
        body: JSON.stringify({ url: member }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const jsonMember = await newMember.json();

      return jsonMember.name;
    })

    const swornMembers = await Promise.all(unresolvedPromises);

    return {...house, swornMembers};
  })

  return Promise.all(newHouses)
}

export default fetchHouseData;
