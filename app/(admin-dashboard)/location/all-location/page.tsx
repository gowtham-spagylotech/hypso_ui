"use client";
import {
  EllipsisVerticalIcon,
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Footer from "@/components/vendor-dashboard/Vendor.Footer";
import CheckboxCustom from "@/components/Checkbox";
import { SearchIcon } from "@/public/data/icons";
import { adminRecentListings } from "@/public/data/adminrecentlisting";
import Pagination from "@/components/vendor-dashboard/Pagination";

const Page = () => {
  return (
    <div className="bg-[var(--bg-2)]">
      <div className="flex items-center justify-between flex-wrap px-3 py-5 md:p-[30px] gap-5 lg:p-[60px] bg-[var(--dark)]">
        <h2 className="h2 text-white">All Location</h2>
        <Link href="#" className="btn-primary">
          <PencilSquareIcon className="w-5 h-5" /> Edit Location
        </Link>
      </div>
      {/* statisticts */}
      <section className="grid z-[1] grid-cols-12 gap-4 mb-6 lg:gap-6 px-3 md:px-6 bg-[var(--bg-2)] relative after:absolute after:bg-[var(--dark)] after:w-full after:h-[60px] after:top-0 after:left-0 after:z-[-1] pb-10 xxl:pb-0">
        <div className="col-span-12 lg:col-span-6">
          <div className=" p-4 md:p-6 lg:p-10 rounded-2xl bg-white">
            <h3 className="border-b h3 pb-6">Add Location</h3>
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
              <label
                htmlFor="date"
                className="py-4 inline-block text-base sm:text-lg lg:text-xl font-medium">
                Date :
              </label>
              <input
                type="date"
                id="date"
                placeholder="Ex: 2"
                className="w-full border py-3 px-3 lg:px-6 rounded-md focus:outline-none focus:border focus:border-primary outline-1"
              />
              <div className="mt-6">
                <div className="h-[400px]">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2233.5934788396344!2d89.78232001463437!3d23.836268639364576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1688381345276!5m2!1sen!2sbd"></iframe>
                </div>
              </div>
              <p className="mt-6 mb-4 text-xl font-medium">Address :</p>
              <input
                type="text"
                className="w-full border p-2 focus:outline-none rounded-md text-base"
                placeholder="Enter Address"
              />

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
                    <th className="py-3 font-medium lg:py-4 px-2">
                      Position Order
                    </th>
                    <th className="py-3 font-medium lg:py-4 px-2">Date</th>
                    <th className="py-3 font-medium lg:py-4 px-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {adminRecentListings
                    .slice(0, 8)
                    .map(({ id, agent, date }) => (
                      <tr
                        key={id}
                        className="border-b border-dashed hover:bg-[var(--bg-1)] duration-300">
                        <td className="py-3 lg:py-4 px-2">{agent}</td>
                        <td className="py-3 lg:py-4 px-2">{"02"}</td>
                        <td className="py-3 lg:py-4 px-2">{date}</td>
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
