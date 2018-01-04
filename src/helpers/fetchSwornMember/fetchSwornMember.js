const fetchSwornMembers = swornMembers => {
  const fetchedMemebers = swornMembers.map(async member => {
    const fetchMember = await fetch('localhost:3001//api/v1/character', {
      method: 'POST',
      body: JSON.stringify(member),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const jsonMember = fetchMember.json();

    return jsonMember;
  })

  return Promise.all(fetchMembers);
}