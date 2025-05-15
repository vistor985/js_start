const getUsers = async () => {
  try {
    const response = await fetch('http://httpstat.us/500');

    const data = await response.text();

    if (!response.ok) {
      throw new Error('Request Failed');
    }
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getUsers();
