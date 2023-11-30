"use client";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import PieChart from "@/components/vendor-dashboard/PieChart";
import { recentBookings } from "@/public/data/recentbookings";
import Footer from "@/components/vendor-dashboard/Vendor.Footer";
import Pagination from "@/components/vendor-dashboard/Pagination";
import CounterElement from "@/components/CounterElement";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
var options: ApexOptions = {
  chart: {
    type: "area",
    toolbar: {
      show: false,
    },
  },
  colors: ["#363AED"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
};
var series = [
  {
    name: "Booking States",
    data: [190, 400, 405, 450, 420, 430, 425, 425, 404, 400, 666, 1109],
  },
];

const Page = () => {
  return (
    <div>
      {/* statisticts */}
      <div className="grid z-[1] grid-cols-12 gap-4 lg:gap-6 px-6 bg-[var(--dark)] relative after:absolute xxl:after:bg-white after:w-full after:h-[50%] after:bottom-0 after:left-0 after:z-[-1] pb-10 xxl:pb-0">
        <div className="col-span-12 sm:col-span-6 xl:col-span-4 xxl:col-span-3 p-4 sm:p-6 lg:p-8 rounded-2xl flex gap-4 bg-[#EBEBFD]">
          <i className="las self-center la-file-alt rounded-full bg-primary text-white text-3xl p-4"></i>
          <div>
            <h2 className="h2">
              {" "}
              <CounterElement end={66} />
            </h2>
            <p>Total Listings</p>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 xl:col-span-4 xxl:col-span-3 p-4 sm:p-6 lg:p-8 rounded-2xl flex gap-4 bg-[#EBFBF2]">
          <i className="las self-center la-chart-area rounded-full bg-[var(--secondary-500)] text-white text-3xl p-4"></i>
          <div>
            <h2 className="h2">
              $ <CounterElement end={256} />k
            </h2>
            <p>Earning</p>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 xl:col-span-4 xxl:col-span-3 p-4 sm:p-6 lg:p-8 rounded-2xl flex gap-4 bg-[#FFF9ED]">
          <i className="las self-center la-chart-bar rounded-full bg-[#9C742B] text-white text-3xl p-4"></i>
          <div>
            <h2 className="h2">
              {" "}
              <CounterElement end={6.4} decimals={1} />k
            </h2>
            <p>Visitors</p>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 xl:col-span-4 xxl:col-span-3 p-4 sm:p-6 lg:p-8 rounded-2xl flex gap-4 bg-[#EBEBFD]">
          <i className="lar self-center la-star rounded-full bg-primary text-white text-3xl p-4"></i>
          <div>
            <h2 className="h2">
              {" "}
              <CounterElement end={7.6} decimals={1} />k
            </h2>
            <p>Reviews</p>
          </div>
        </div>
      </div>
      {/* Charts */}
      <section className="bg-white px-3 lg:px-6 grid grid-cols-12 gap-4 lg:gap-6 pt-6">
        <div className="col-span-12 lg:col-span-6 p-3 sm:p-4 md:py-6 lg:py-8 md:px-8 lg:px-10 border rounded-2xl">
          <h3 className="h3 mb-4">Booking Stats</h3>
          <Chart options={options} height={350} type="area" series={series} />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <div className=" p-3 sm:p-4 md:py-6 lg:py-8 md:px-8 lg:px-10 border rounded-2xl">
            <div className="flex justify-between mb-7">
              <h3 className="h3">Booking Traffic</h3>
              <Link
                href="/"
                className="text-primary font-semibold flex items-center gap-2">
                View All <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-5 lg:gap-12">
              <div className="col-span-2 md:col-span-1">
                <PieChart />
              </div>
              <div className="col-span-2 md:col-span-1 flex items-center">
                <ul className="w-full flex-wrap flex flex-col gap-4">
                  <li className="flex justify-between items-center">
                    <span className="flex gap-2 items-center">
                      <span className="w-2 h-2 rounded-full bg-[#585BF0]"></span>
                      Organic
                    </span>
                    <span>64%</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="flex gap-2 items-center">
                      <span className="w-2 h-2 rounded-full bg-[#FFBE46]"></span>
                      Google
                    </span>
                    <span>12%</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="flex gap-2 items-center">
                      <span className="w-2 h-2 rounded-full bg-[#37D279]"></span>
                      Social Media
                    </span>
                    <span>13%</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="flex gap-2 items-center">
                      <span className="w-2 h-2 rounded-full bg-[#8A8DF5]"></span>
                      Referral program
                    </span>
                    <span>11%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Recent bookings */}
      <section className="bg-white px-3 lg:px-6 mt-4 lg:mt-6 pb-5">
        <div className=" p-3 sm:p-4 md:py-6 lg:py-8 md:px-8 lg:px-10 border rounded-2xl">
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
                  ({ id, amount, date, item, paid, status, time }) => (
                    <tr key={id} className="border-b border-dashed">
                      <td className="py-3 px-2">{id}</td>
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
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
