// fetchData.tsx

function fetchData() {
  console.log('Fetching data from URL:', url); // Add this line
  return fetch("url", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Failed to fetch data. Network error or invalid response.');
      }
      return res.json();
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      throw error;
    });
}
export { fetchData };
