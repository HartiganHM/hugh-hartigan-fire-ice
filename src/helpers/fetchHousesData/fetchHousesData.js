const fetchHouseData = async () => {
  const fetchedData = await fetch('http://localhost:3001/api/v1/houses');
  const jsonData = await fetchedData.json();

  return jsonData;
};

export default fetchHouseData;