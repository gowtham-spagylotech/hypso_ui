"use client";
import { Tab } from "@headlessui/react";
import TabList from "@/components/TabList";
import PostTabPanel from "@/components/PostTabPanel";

const page = () => {
  return (
    <ul className="flex flex-col gap-6">
      <li>
        <div className="p-3 sm:p-4 lg:p-6 p-xl-10 rounded-2xl bg-white shadow-3">
          <h3 className="mb-0 h3 flex-grow"> My Post list </h3>
          <div className="hr-line my-6"></div>
          <Tab.Group>
            <TabList />

            <PostTabPanel />
          </Tab.Group>
        </div>
      </li>
    </ul>
  );
};

export default page;
