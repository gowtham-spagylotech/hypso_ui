async function fetchData(url) {
  try {
    const res = await fetch(url, {
      method: 'POST', // Adjust the method as needed
      headers: {
        'Content-Type': 'application/json', // Adjust the content type if needed
      },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error to handle it in the calling component
  }
}

export { fetchData };