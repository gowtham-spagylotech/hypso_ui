
import { Tab } from "@headlessui/react";
import TabList from "@/components/TabList";
import ShopTabPanel from "@/components/ShopTabPanel";

async function fetchData() {
  const myShopApiUrl = 'http://localhost:5001/modules/services/get-services';

  return fetch(myShopApiUrl, {
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

export default async function MyShop() {
  const shopData = await fetchData();
  console.log("data", shopData);

  return (
    <ul className="flex flex-col gap-6">
      <li>
        <div className="p-3 sm:p-4 lg:p-6 p-xl-10 rounded-2xl bg-white shadow-3">
          <h3 className="mb-0 h3 flex-grow"> My Shop/Business list </h3>
          <div className="hr-line my-6"></div>
          {shopData ? (
            <>
              <TabList />

              <ShopTabPanel shopData={shopData} />
            </>
          ) : (
            <p>Error loading data</p>
          )}
        </div>
      </li>
    </ul>
  );
};

