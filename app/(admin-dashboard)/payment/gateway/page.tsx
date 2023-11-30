"use client";
import {
  ChevronDownIcon,
  EllipsisVerticalIcon,
  PencilSquareIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Footer from "@/components/vendor-dashboard/Vendor.Footer";
import Pagination from "@/components/vendor-dashboard/Pagination";
import { SearchIcon } from "@/public/data/icons";
import { gateWays } from "@/public/data/gateways";

const Page = () => {
  return (
    <div className="bg-[var(--bg-2)]">
      <div className="flex items-center justify-between flex-wrap px-3 py-5 md:p-[30px] gap-5 lg:p-[60px] bg-[var(--dark)]">
        <h2 className="h2 text-white">Payment Gateway</h2>
        <Link href="/flight/add-new-flight" className="btn-primary">
          <PlusCircleIcon className="w-5 h-5" /> Add New
        </Link>
      </div>

      {/* Recent bookings */}
      <section className="relative after:absolute after:bg-[var(--dark)] after:w-full after:h-[60px] after:top-0 after:left-0">
        <div className="bg-[var(--bg-2)] mx-3 lg:mx-6 pb-4 lg:pb-6 z-[1] relative rounded-2xl">
          <div className="p-3 md:py-6 lg:py-8 md:px-8 lg:px-10 border rounded-2xl bg-white relative z-[1]">
            <div className="flex flex-wrap gap-3 justify-between mb-7">
              <div className="flex items-center gap-3">
                <form className="border rounded-full pr-3">
                  <select className="p-3 min-w-[160px] rounded-full focus:outline-none">
                    <option value="1">Bulk Actions</option>
                    <option value="2">Delete</option>
                    <option value="3">Publish</option>
                  </select>
                </form>
                <button className="btn-primary">Apply</button>
              </div>
              <form className="flex flex-wrap gap-3 items-center">
                <div className="border rounded-full flex items-center p-1 pr-2 bg-[var(--bg-1)]">
                  <input
                    type="text"
                    placeholder="Search"
                    className="rounded-full bg-transparent focus:outline-none p-2"
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
              <table className="w-full whitespace-nowrap">
                <thead>
                  <tr className="text-left bg-[var(--bg-1)] border-b border-dashed">
                    <th className="py-3 font-medium lg:py-4 px-2 lg:px-4">
                      Name
                    </th>
                    <th className="py-3 font-medium lg:py-4 px-2">Details</th>
                    <th className="py-3 font-medium lg:py-4 px-2">Checkout</th>
                    <th className="py-3 font-medium lg:py-4 px-2">Deposit</th>
                    <th className="py-3 font-medium lg:py-4 px-2">
                      Subscription
                    </th>
                    <th className="py-3 font-medium lg:py-4 px-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {gateWays.map(
                    ({
                      id,
                      checkout,
                      deposit,
                      details,
                      name,
                      subscription,
                    }) => (
                      <tr
                        key={id}
                        className="border-b border-dashed hover:bg-[var(--bg-1)] duration-300">
                        <td
                          className="py-3 lg:py-4 px-2 
 lg:px-4">
                          {name}
                        </td>
                        <td className="py-3 lg:py-4 px-2">{details}</td>
                        <td className={`py-3 lg:py-4 px-2`}>
                          <span
                            className={`py-2 px-3 inline-flex gap-1 items-center rounded-xl ${
                              checkout == "Not Showed" &&
                              "text-[var(--secondary-500)] bg-[#EBFBF2]"
                            } ${
                              checkout == "Showed" &&
                              "text-primary bg-[#EBEBFD]"
                            } `}>
                            {checkout} <ChevronDownIcon className="w-5 h-5" />
                          </span>
                        </td>
                        <td className={`py-3 lg:py-4 px-2`}>
                          <span
                            className={`py-2 px-3 inline-flex gap-1 items-center  rounded-xl ${
                              deposit == "Not Showed" &&
                              "text-[var(--secondary-500)] bg-[#EBFBF2]"
                            } ${
                              deposit == "Showed" && "text-primary bg-[#EBEBFD]"
                            } `}>
                            {deposit} <ChevronDownIcon className="w-5 h-5" />
                          </span>
                        </td>
                        <td className={`py-3 lg:py-4 px-2`}>
                          <span
                            className={`py-2 px-3 inline-flex gap-1 items-center  rounded-xl ${
                              subscription == "Not Showed" &&
                              "text-[var(--secondary-500)] bg-[#EBFBF2]"
                            } ${
                              subscription == "Publish" &&
                              "text-primary bg-[#EBEBFD]"
                            } `}>
                            {subscription}{" "}
                            <ChevronDownIcon className="w-5 h-5" />
                          </span>
                        </td>
                        <td className="py-3 lg:py-4 px-2 flex gap-2 items-center align-middle">
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
                    )
                  )}
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
