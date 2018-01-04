const fetchHouseData = async () => {
  try {
    const fetchedData = await fetch('http://localhost:3001/api/v1/houses');
    const jsonData = await fetchedData.json();
  
    return jsonData;
  } catch(error) {
    return new Error('error fetching houses data')
  }
};

export default fetchHouseData;