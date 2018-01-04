const fetchSwornMembers = async swornMembers => {
  try {
    const fetchedMemebers = await swornMembers.map(async member => {
      const fetchMember = await fetch('http://localhost:3001/api/v1/character', {
        method: 'POST',
        body: {
          url: JSON.stringify(member)
        },
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const jsonMember = await fetchMember.json();
      console.log(jsonMember)

      return jsonMember;
    });

    const jsonMembers = await fetchedMemebers.json()

    return Promise.all(jsonMembers);
  } catch (error) {
    return Error('error retrieving sworn members');
  }
};

export default fetchSwornMembers;
