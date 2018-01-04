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

export default fetchHouseMembers;