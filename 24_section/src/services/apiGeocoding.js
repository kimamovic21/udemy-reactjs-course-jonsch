const BASE_URL = `https://api.bigdatacloud.net/data/reverse-geocode-client`;

export const getAddress = async ({ latitude, longitude }) => {
  const response = await fetch(`${BASE_URL}?latitude=${latitude}&longitude=${longitude}`);
  console.log(response);
  
  if (!response.ok) {
    throw Error("Failed getting address");
  }

  const data = await response.json();
  console.log(data);
  
  return data;
};