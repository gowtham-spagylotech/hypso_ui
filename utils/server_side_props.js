// Fetches data from the server based on the provided API URL and slug.
export async function getServerSidePropsDynamic(apiUrl, slug) {
  const res = await fetch(`${apiUrl}/${slug}`);
  const data = await res.json();
  return {
    props: { data },
  };
}

// Sends a POST request to create new data on the server.
export async function createServerSideProps(apiUrl, data) {
  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const responseData = await res.json();
  return {
    props: { data: responseData },
  };
}

// Sends a PUT request to update existing data on the server based on the provided slug.
export async function updateServerSideProps(apiUrl, slug, data) {
  const res = await fetch(`${apiUrl}/${slug}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const responseData = await res.json();
  return {
    props: { data: responseData },
  };
}

// Sends a DELETE request to remove data on the server based on the provided slug.
export async function deleteServerSideProps(apiUrl, slug) {
  const res = await fetch(`${apiUrl}/${slug}`, {
    method: 'DELETE',
  });
  const data = await res.json();
  return {
    props: { data },
  };
}
