
import { featuredItems } from "@/public/data/featured";
import FeaturedCardPropertyList from "@/components/FeaturedCardPropertyList";
import CardPagination from "@/components/CardPagination";

async function fetchData() {
  const myPostApiUrl = 'http://localhost:5001/modules/services/get-services';

  return fetch(myPostApiUrl, {
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

export default async function page() {
  const postData = await fetchData();
  console.log("data", postData);


  return (
    <>
      {postData ? (
        
        <FeaturedCardPropertyList postData={postData} />
        ) : (
          <p>Error loading data</p>
        )}
      <CardPagination />
    </>
  );
};

