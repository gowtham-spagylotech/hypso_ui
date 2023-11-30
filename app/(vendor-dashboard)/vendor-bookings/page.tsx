import Pagination from "@/components/vendor-dashboard/Pagination";
import Footer from "@/components/vendor-dashboard/Vendor.Footer";
import { recentBookings } from "@/public/data/recentbookings";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <section className="bg-[var(--bg-1)] px-3 lg:px-6 py-4 lg:py-6">
        <div className="bg-white p-3 sm:p-4  md:py-6 lg:py-8 md:px-8 lg:px-10 border rounded-2xl">
          <div className="flex justify-between mb-7">
            <h3 className="h3">Recent Bookings</h3>
            <Link
              href="/"
              className="text-primary font-semibold flex items-center gap-2">
              View All <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr className="text-left bg-[#F5F5FE] border-b border-dashed">
                  <th className="py-3 px-2">#</th>
                  <th className="py-3 px-2">Name</th>
                  <th className="py-3 px-2">item</th>
                  <th className="py-3 px-2">Amount</th>
                  <th className="py-3 px-2">Paid</th>
                  <th className="py-3 px-2">Date</th>
                  <th className="py-3 px-2">Time</th>
                  <th className="py-3 px-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.map(
                  ({ id, amount, date, name, item, paid, status, time }) => (
                    <tr key={id} className="border-b border-dashed">
                      <td className="py-3 px-2">{id}</td>
                      <td className="py-3 px-2">{name}</td>
                      <td className="py-3 px-2 text-primary">{item}</td>
                      <td className="py-3 px-2">{amount}</td>
                      <td className="py-3 px-2">{paid}</td>
                      <td className="py-3 px-2">{date}</td>
                      <td className="py-3 px-2">{time}</td>
                      <td className={`py-3 px-2`}>
                        <span
                          className={`py-2 px-3 rounded-xl ${
                            status == "Rejected" &&
                            "text-[var(--secondary-500)] bg-[#EBFBF2]"
                          } ${
                            status == "Successfull" &&
                            "text-primary bg-[#EBEBFD]"
                          } ${
                            status == "Pending" && "text-[#9C742B] bg-[#FFF9ED]"
                          }`}>
                          {status}
                        </span>
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
      <Footer />
    </div>
  );
};

export default page;
