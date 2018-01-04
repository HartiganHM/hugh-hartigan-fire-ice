const fetchSwornMembers = async (membersArray) => {
  try{
    const fetchedMembers = await membersArray.map( async (member) => {
      console.log(member)
    })
  } catch (error) {
    return Error('fuck')
  }
}