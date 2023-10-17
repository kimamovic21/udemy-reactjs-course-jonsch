const API_URL = 'https://react-fast-pizza-api.onrender.com/api';

export const getMenu = async () => {
  const response = await fetch(`${API_URL}/menu`);
  console.log(response);

  /* fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. 
  This will then go into the catch block, where the message is set */
  if (!response.ok) {
    throw Error('Failed getting menu');
  }

  const { data } = await response.json();
  console.log(data);

  return data;
};

export const getOrder = async (id) => {
  const response = await fetch(`${API_URL}/order/${id}`);
  console.log(response);

  if (!response.ok) {
    throw Error(`Couldn't find order #${id}`)
  }

  const { data } = await response.json();
  console.log(data);  

  return data;
};

export const createOrder = async (newOrder) => {
  try {
    const response = await fetch(`${API_URL}/order`, {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
        throw Error();
    }

    const { data } = await response.json();
    console.log(data);
    
    return data;
  } 
  catch (error) {
    throw Error('Failed creating your order');
  }
};

export const updateOrder = async (id, updateObj) => {
  try {
    const response = await fetch(`${API_URL}/order/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateObj),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
        throw Error()
    }
    // We don't need the data, so we don't return anything
  } 
  catch (error) {
    throw Error('Failed updating your order');
  }
};