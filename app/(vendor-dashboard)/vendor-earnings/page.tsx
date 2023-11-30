"use client";
import {
  ArrowDownTrayIcon,
  ArrowRightIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { candlestick } from "@/public/data/candlestick";
import dynamic from "next/dynamic";
import { recentBookings } from "@/public/data/recentbookings";
import Pagination from "@/components/vendor-dashboard/Pagination";
import Footer from "@/components/vendor-dashboard/Vendor.Footer";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const page = () => {
  return (
    <div className="px-3 lg:px-6 bg-[var(--bg-1)] pt-6">
      <div className="p-3 sm:p-4 md:px-6 lg:px-10 md:py-6 lg:py-8 rounded-2xl border bg-white">
        <h3 className="mb-4 h3">Earnings</h3>
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          <div className="flex flex-col gap-4 lg:gap-6 col-span-12 lg:col-span-6">
            <div className="rounded-2xl border flex justify-between flex-wrap items-center border-dashed p-3 sm:p-6 lg:p-8 gap-3 bg-[var(--bg-2)]">
              <div className="flex gap-3 lg:gap-5 items-center">
                <i className="las la-chart-area text-4xl text-primary bg-white rounded-full p-3"></i>
                <div>
                  <h5 className="text-xl font-medium">Sales this month</h5>
                  <Link className="text-sm text-primary" href="#">
                    View Transaction
                  </Link>
                </div>
              </div>
              <h2 className="h2">$35.5k</h2>
            </div>
            <div className="rounded-2xl border flex justify-between flex-wrap items-center border-dashed p-3 sm:p-6 lg:p-8 gap-3 bg-[var(--secondary-light)]">
              <div className="flex gap-3 lg:gap-5 items-center">
                <i className="las la-chart-bar text-4xl text-[#22804A] bg-white rounded-full p-3"></i>
                <div>
                  <h5 className="text-xl font-medium">To be paid</h5>
                  <Link className="text-sm text-primary" href="#">
                    View Transaction
                  </Link>
                </div>
              </div>
              <h2 className="h2">$15.5k</h2>
            </div>
          </div>
          <div className="py-4 text-white lg:py-6 px-6 col-span-12 lg:col-span-6 lg:px-10 rounded-2xl bg-[url('/img/card.png')] bg-no-repeat bg-cover w-full">
            <div className="flex justify-between items-center mb-6">
              <Image width={60} height={38} src="/img/master-card.png" alt="" />
              <EllipsisVerticalIcon className="w-6 h-6 " />
            </div>
            <span className="text-sm">Total Balance</span>
            <h2 className="h2 text-white mt-4 mb-5">$55.3k</h2>
            <p className="text-xl font-medium mb-3">1554 **** **** 9845</p>
            <div className="flex items-center justify-between">
              <span>Valid thru: 12/26</span>
              <span>CVV: ***</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-3 sm:p-4 md:px-6 lg:px-10 md:py-6 lg:py-8 rounded-2xl border bg-white mt-4 lg:mt-6">
        <h3 className="mb-4 h3">Earning Average Chart</h3>
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          <div className="col-span-12 max-h-[400px]">
            <ApexChart
              options={candlestick}
              series={candlestick.series}
              type="candlestick"
              height={400}
            />
          </div>
        </div>
      </div>
      <div className="bg-white p-3 sm:p-4  md:py-6 lg:py-8 md:px-8 lg:px-10 border rounded-2xl my-4 lg:my-6">
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
                <th className="py-3 px-2">Invoice ID</th>
                <th className="py-3 px-2">Name</th>
                <th className="py-3 px-2">Amount</th>
                <th className="py-3 px-2">Paid</th>
                <th className="py-3 px-2">Date</th>
                <th className="py-3 px-2">Time</th>
                <th className="py-3 px-2">Status</th>
                <th className="py-3 px-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map(
                ({ id, amount, date, name, paid, status, time }) => (
                  <tr key={id} className="border-b border-dashed">
                    <td className="py-3 px-2">#1034{id}</td>
                    <td className="py-3 px-2">{name}</td>
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
                          status == "Successfull" && "text-primary bg-[#EBEBFD]"
                        } ${
                          status == "Pending" && "text-[#9C742B] bg-[#FFF9ED]"
                        }`}>
                        {status}
                      </span>
                    </td>
                    <td className="py-3 px-2">
                      <Link href="#">
                        <ArrowDownTrayIcon className="w-5 h-5" />
                      </Link>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
          <Pagination />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
