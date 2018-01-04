const fetchSwornMembers = async arrayOfMembers => {
    debugger
    const fetchMembers = arrayOfMembers.map(async member => {
      let postBody = { url: member }
      console.log(postBody)
      const fetchPerson = await fetch('http://localhost:3001/api/v1/character', {
        method: 'POST',
        body: JSON.stringify(postBody),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(fetchPerson)
      const jsonPerson = await fetchPerson.json();

      return jsonPerson
    })
    const jsonMemebers = await fetchMembers.json();

    return Promise.all(jsonMemebers);
}

export default fetchSwornMembers;

// try {
//   const fetchedMemebers = await swornMembers.map(async member => {
//     const fetchMember = await fetch('http://localhost:3001/api/v1/character', {
//       method: 'POST',
//       body: {
//         url: JSON.stringify(member)
//       },
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     const jsonMember = await fetchMember.json();

//     return jsonMember;
//   });

//   return fetchedMemebers;
// } catch (error) {
//   return Error('error retrieving sworn members');
// }
