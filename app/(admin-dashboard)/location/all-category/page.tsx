"use client";
import {
  EllipsisVerticalIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Footer from "@/components/vendor-dashboard/Vendor.Footer";
import { SearchIcon } from "@/public/data/icons";
import { adminRecentListings } from "@/public/data/adminrecentlisting";
import Pagination from "@/components/vendor-dashboard/Pagination";
import SelectUI from "@/components/SelectUI";
import { allCategory } from "@/public/data/allcategory";
import HeadlessList from "@/components/ListBox";

const Page = () => {
  return (
    <div className="bg-[var(--bg-2)]">
      <div className="flex items-center justify-between flex-wrap px-3 py-5 md:p-[30px] gap-5 lg:p-[60px] bg-[var(--dark)]">
        <h2 className="h2 text-white">All Category</h2>
        <Link href="#" className="btn-primary">
          <PencilSquareIcon className="w-5 h-5" /> Edit Category
        </Link>
      </div>
      {/* statisticts */}
      <section className="grid z-[1] grid-cols-12 gap-4 mb-6 lg:gap-6 px-3 md:px-6 bg-[var(--bg-2)] relative after:absolute after:bg-[var(--dark)] after:w-full after:h-[60px] after:top-0 after:left-0 after:z-[-1] pb-10 xxl:pb-0">
        <div className="col-span-12 lg:col-span-6">
          <div className=" p-4 md:p-6 lg:p-10 rounded-2xl bg-white">
            <h3 className="border-b h3 pb-6">Add Category</h3>
            <form>
              <label
                htmlFor="name"
                className="py-4 inline-block text-base sm:text-lg lg:text-xl font-medium">
                Name :
              </label>
              <input
                type="text"
                id="name"
                placeholder="Attribute name"
                className="w-full border py-3 px-3 lg:px-6 rounded-md focus:outline-none focus:border focus:border-primary outline-1"
              />
              <p className="mt-6 mb-4 text-xl font-medium">Description :</p>
              <textarea
                rows={5}
                className="w-full border p-2 focus:outline-none rounded-md "
                placeholder="Description.."></textarea>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 lg:col-span-1">
                  <label
                    htmlFor="date"
                    className="py-4 inline-block text-base sm:text-lg lg:text-xl font-medium">
                    Category :
                  </label>
                  <SelectUI
                    options={[
                      { name: "Category 1" },
                      { name: "Category 2" },
                      { name: "Category 3" },
                    ]}
                  />
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <label
                    htmlFor="date"
                    className="py-4 inline-block text-base sm:text-lg lg:text-xl font-medium">
                    Date :
                  </label>
                  <input
                    type="date"
                    id="date"
                    placeholder="Ex: 2"
                    className="w-full border py-[10px] px-3 lg:px-6 rounded-md focus:outline-none focus:border focus:border-primary outline-1"
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary mt-5 lg:mt-7">
                Add New
              </button>
            </form>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 ">
          <div className="p-4 md:p-6 lg:p-10 rounded-2xl bg-white">
            <div className="flex flex-wrap gap-3 justify-between mb-7">
              <div className="flex items-center flex-wrap gap-3">
                <form className="border rounded-full pr-3">
                  <select className="p-3 min-w-[160px] rounded-full focus:outline-none">
                    <option value="1">Bulk Actions</option>
                    <option value="2">Delete</option>
                    <option value="3">Publish</option>
                  </select>
                </form>
                <button className="btn-primary">Apply</button>
              </div>
              <form className="flex items-center gap-3">
                <div className="border rounded-full flex items-center p-1 pr-2 bg-[var(--bg-1)]">
                  <input
                    type="text"
                    placeholder="Search"
                    className="rounded-full bg-transparent focus:outline-none p-2"
                  />
                  <SearchIcon />
                </div>
              </form>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full whitespace-nowrap">
                <thead>
                  <tr className="text-left bg-[var(--bg-1)] border-b border-dashed">
                    <th className="py-3 font-medium lg:py-4 px-2 lg:px-4">
                      Name
                    </th>
                    <th className="py-3 font-medium lg:py-4 px-2">Category</th>
                    <th className="py-3 font-medium lg:py-4 px-2">Date</th>
                    <th className="py-3 font-medium lg:py-4 px-2">Status</th>
                    <th className="py-3 font-medium lg:py-4 px-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {allCategory
                    .slice(0, 8)
                    .map(({ id, category, date, name, status }) => (
                      <tr
                        key={id}
                        className="border-b border-dashed hover:bg-[var(--bg-1)] duration-300">
                        <td
                          className="py-3 lg:py-4 px-2 
 lg:px-4">
                          {name}
                        </td>
                        <td className="py-3 lg:py-4 px-2">{category}</td>
                        <td className="py-3 lg:py-4 px-2">{date}</td>
                        <td className={`py-3 lg:py-4 px-2`}>
                          <div className={`w-32`}>
                            <HeadlessList initialValue={status} />
                          </div>
                        </td>
                        <td className="py-3 lg:py-4 px-2 flex gap-2 items-center">
                          <button className="text-primary">
                            <PencilSquareIcon className="w-5 h-5" />
                          </button>
                          <button className="text-[var(--secondary-500)]">
                            <TrashIcon className="w-5 h-5" />
                          </button>
                          <button>
                            <EllipsisVerticalIcon className="w-5 h-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <Pagination />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
