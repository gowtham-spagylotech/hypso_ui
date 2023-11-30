"use client";
import {
  ArrowDownTrayIcon,
  EllipsisVerticalIcon,
  PencilSquareIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Footer from "@/components/vendor-dashboard/Vendor.Footer";
import Pagination from "@/components/vendor-dashboard/Pagination";
import { SearchIcon } from "@/public/data/icons";
import { agentWithdraw } from "@/public/data/agentWithdraw";
import { coupons } from "@/public/data/coupons";
import HeadlessList from "@/components/ListBox";

const Page = () => {
  return (
    <div className="bg-[var(--bg-2)]">
      <div className="flex items-center justify-between flex-wrap px-3 py-5 md:p-[30px] gap-5 lg:p-[60px] bg-[var(--dark)]">
        <h2 className="h2 text-white">Coupon</h2>
        <Link href="/cab/add-new-cab" className="btn-primary">
          <PlusCircleIcon className="w-5 h-5" /> Add New Coupon
        </Link>
      </div>

      {/* Recent bookings */}
      <section className="bg-[var(--bg-2)] px-3 lg:px-6 mb-4 lg:mb-6  relative after:absolute after:bg-[var(--dark)] after:w-full after:h-[60px] after:top-0 after:left-0 xxl:pb-0">
        <div className="p-4 md:py-6 lg:py-8 md:px-8 lg:px-10 border rounded-2xl bg-white z-[1] relative ">
          <div className="flex flex-wrap gap-3 justify-between mb-7">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="h3">Coupon Management</h3>
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
              <div className="flex items-center gap-1">
                <span>Sort By :</span>
                <div className="border rounded-full pr-3">
                  <select className="p-3 min-w-[100px] rounded-full focus:outline-none">
                    <option value="1">Date</option>
                    <option value="2">Price</option>
                    <option value="3">Location</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr className="text-left bg-[var(--bg-1)] border-b border-dashed">
                  <th className="py-3 lg:py-4 px-2">Name</th>
                  <th className="py-3 lg:py-4 px-2">Code</th>
                  <th className="py-3 lg:py-4 px-2">Amount</th>
                  <th className="py-3 lg:py-4 px-2">Discount</th>
                  <th className="py-3 lg:py-4 px-2">End Date</th>
                  <th className="py-3 lg:py-4 px-2">Time</th>
                  <th className="py-3 lg:py-4 px-2">Status</th>
                  <th className="py-3 lg:py-4 px-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {coupons.map(
                  ({
                    amount,
                    code,
                    discount,
                    endDate,
                    id,
                    name,
                    status,
                    time,
                  }) => (
                    <tr
                      key={id}
                      className="border-b border-dashed hover:bg-[var(--bg-1)] duration-300">
                      <td
                        className="py-3 lg:py-4 px-2 
 lg:px-4">
                        {name}
                      </td>
                      <td className="py-3 lg:py-4 px-2">{code}</td>
                      <td className="py-3 lg:py-4 px-2">{amount}</td>
                      <td className="py-3 lg:py-4 px-2">{discount}</td>
                      <td className="py-3 lg:py-4 px-2">{endDate}</td>
                      <td className="py-3 lg:py-4 px-2">{time}</td>
                      <td className={`py-3 lg:py-4 px-2`}>
                        <div className={`w-32`}>
                          <HeadlessList initialValue={status} />
                        </div>
                      </td>
                      <td className="py-3 lg:py-4 px-2 ">
                        <button className="text-primary px-1">
                          <PencilSquareIcon className="w-5 h-5" />
                        </button>
                        <button className="text-[var(--secondary-500)] px-1">
                          <TrashIcon className="w-5 h-5" />
                        </button>
                        <button>
                          <EllipsisVerticalIcon className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  )
                )}
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
