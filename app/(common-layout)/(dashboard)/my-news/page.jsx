'use server'
import { Tab } from "@headlessui/react";
import TabList from "@/components/TabList";
import PostTabPanel from "@/components/PostTabPanel";
import { fetchData } from "@/utils/fetch_data";
import ApiConfig from "@/utils/api-config";

const News = async () => {
    const postData = await fetchData(ApiConfig.myPostApiUrl);
    return (
        <ul className="flex flex-col gap-6">
            <li>
                <div className="p-3 sm:p-4 lg:p-6 p-xl-10 rounded-2xl bg-white shadow-3">
                    <h3 className="mb-0 h3 flex-grow"> My News list </h3>
                    <div className="hr-line my-6">
                        {postData ? (
                                <PostTabPanel postData={postData} />
                        ) : (
                            <p>Error loading data</p>
                        )}
                    </div>
                </div>
            </li>
        </ul>
    )
}

export default News