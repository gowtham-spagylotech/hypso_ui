"use client";
import {
  EllipsisVerticalIcon,
  PencilSquareIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Footer from "@/components/vendor-dashboard/Vendor.Footer";
import Pagination from "@/components/vendor-dashboard/Pagination";
import { StarIcon } from "@heroicons/react/20/solid";
import { SearchIcon } from "@/public/data/icons";
import { alltours } from "@/public/data/alltours";

const Page = () => {
  return (
    <div className="bg-[var(--bg-2)]">
      <div className="flex items-center justify-between flex-wrap px-3 py-5 md:p-[30px] gap-5 lg:p-[60px] bg-[var(--dark)]">
        <h2 className="h2 text-white">Booking Calendar</h2>
        <Link href="/tour/add-new-tour" className="btn-primary">
          <PlusCircleIcon className="w-5 h-5" /> Add New Tour
        </Link>
      </div>

      {/* Recent bookings */}
      <section className="bg-[var(--bg-2)] px-3 lg:px-6 pb-4 lg:pb-6 relative after:absolute after:bg-[var(--dark)] after:w-full after:h-[60px] after:top-0 after:left-0 ">
        <div className="p-3 md:py-6 lg:py-8 md:px-8 lg:px-10 border rounded-2xl bg-white relative z-[1]">
          <div className="flex justify-between mb-7 gap-3 flex-wrap">
            <div className="flex items-center gap-3">
              <form className="border rounded-full pr-3 xl:pr-4 bg-[var(--bg-1)]">
                <select className="p-3 bg-transparent xl:pl-4 min-w-[160px] rounded-full focus:outline-none">
                  <option value="1">Bulk Actions</option>
                  <option value="2">Delete</option>
                  <option value="3">Publish</option>
                </select>
              </form>
              <button className="btn-primary">Apply</button>
            </div>
            <form className="flex flex-wrap items-center gap-3">
              <div className="border rounded-full flex items-center p-1 pr-2 xl:pr-4 bg-[var(--bg-1)]">
                <input
                  type="text"
                  placeholder="Search"
                  className="rounded-full bg-transparent focus:outline-none p-2 xl:px-4"
                />
                <SearchIcon />
              </div>
              <div className="border rounded-full pr-3">
                <select className="p-3 min-w-[100px] rounded-full focus:outline-none">
                  <option value="1">Advanced</option>
                  <option value="2">Delete</option>
                  <option value="3">Publish</option>
                </select>
              </div>
            </form>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full table-auto whitespace-nowrap">
              <thead>
                <tr className="text-left bg-[var(--bg-2)] border-b border-dashed">
                  <th className="p-3 lg:py-4 font-normal border-r">
                    Tour Name
                  </th>
                  <th className="p-3 lg:py-4 font-normal border-r">
                    01 Apr, 2023 (Sat)
                  </th>
                  <th className="p-3 lg:py-4 font-normal border-r">
                    02 Apr, 2023 (Sun)
                  </th>
                  <th className="p-3 lg:py-4 font-normal border-r">
                    03 Apr, 2023 (Mon)
                  </th>
                  <th className="p-3 lg:py-4 font-normal border-r">
                    04 Apr, 2023 (Tue)
                  </th>
                  <th className="p-3 lg:py-4 font-normal border-r">
                    05 Apr, 2023 (Wed)
                  </th>
                  <th className="p-3 lg:py-4 font-normal border-r">
                    06 Apr, 2023 (Thu)
                  </th>
                  <th className="p-3 lg:py-4 font-normal border-r">
                    07 Apr, 2023 (Fri)
                  </th>
                </tr>
              </thead>
              <tbody>
                {alltours.map(({ id, name }) => (
                  <tr
                    key={id}
                    className="border-b border-dashed hover:bg-[var(--bg-1)] duration-300">
                    <td className="p-3 border-r border-dashed lg:py-4">
                      {name}
                    </td>
                    <td className="p-3 border-r border-dashed lg:py-4"></td>
                    <td className="p-3 border-r border-dashed lg:py-4"></td>
                    <td className="p-3 border-r border-dashed lg:py-4"></td>
                    <td className="p-3 border-r border-dashed lg:py-4"></td>
                    <td className="p-3 border-r border-dashed lg:py-4"></td>
                    <td className="p-3 border-r border-dashed lg:py-4"></td>
                    <td className="p-3 border-r border-dashed lg:py-4"></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
