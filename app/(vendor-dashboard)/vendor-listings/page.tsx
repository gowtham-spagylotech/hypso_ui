"use client";
import {
  BoltIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { featuredHotels } from "@/public/data/featuredhotel";
import { Tooltip } from "react-tooltip";
import VendorListingList from "@/components/vendor-dashboard/VendorListingList";
import Link from "next/link";
import Footer from "@/components/vendor-dashboard/Vendor.Footer";
import CounterElement from "@/components/CounterElement";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { ApexOptions } from "apexcharts";
var options: ApexOptions = {
  chart: {
    type: "area",
    toolbar: {
      show: false,
    },
  },
  colors: ["#363AED", "#37D279"],
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
    name: "Check Out",
    data: [19, 40, 45, 30, 25, 43, 45, 62, 66, 112, 105, 100],
  },
  {
    name: "Check In",
    data: [10, 30, 32, 50, 42, 33, 36, 45, 44, 40, 66, 56],
  },
];
const page = () => {
  const tooltipStyle = {
    backgroundColor: "#3539E9",
    color: "#fff",
    borderRadius: "10px",
  };
  return (
    <div className="relative bg-[var(--bg-1)] after:absolute after:w-full after:h-[60px] after:bg-[var(--dark)] after:top-0 after:left-0">
      <div className="grid grid-cols-12 gap-4 lg:gap-6 px-3 lg:px-6 z-[2] relative">
        <div className="col-span-12 lg:col-span-6 border p-3 sm:p-4 md:px-6 lg:px-10 md:py-6 lg:py-8 bg-white rounded-2xl">
          <div className="flex justify-between flex-wrap gap-2 items-center mb-6">
            <h3 className="h3">Listings Info</h3>
            <div>
              <span>Sort By:</span>
              <span className="p-3 border inline-block rounded-full ml-2">
                <select className="focus:outline-none">
                  <option value="1">Hotels</option>
                  <option value="2">Cars</option>
                  <option value="3">Property</option>
                </select>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 lg:gap-6">
            <div className="col-span-12 sm:col-span-6 p-6 lg:p-8 rounded-2xl bg-[var(--primary-light)] flex items-center justify-between">
              <div>
                <span className="text-primary">Earning</span>
                <h2 className="h2 my-2">
                  $ <CounterElement end={35.5} decimals={1} />k
                </h2>
                <span>0.20% last month</span>
              </div>
              <i className="las la-chart-area text-[60px] lg:text-[72px] text-primary"></i>
            </div>
            <div className="col-span-12 sm:col-span-6 p-6 lg:p-8 rounded-2xl bg-[var(--secondary-light)] flex items-center justify-between">
              <div>
                <span className="text-primary">Booked Hotels</span>
                <h2 className="h2 my-2">
                  <CounterElement end={65} />
                </h2>
                <span>0.20% last month</span>
              </div>
              <i className="las la-city text-[60px] lg:text-[72px] text-[var(--secondary-500)]"></i>
            </div>
            <div className="col-span-12 sm:col-span-6 p-6 lg:p-8 rounded-2xl bg-[#FFF9ED] flex items-center justify-between">
              <div>
                <span className="text-primary">Available Hotels</span>
                <h2 className="h2 my-2">
                  <CounterElement end={55} />
                </h2>
                <span>0.20% last month</span>
              </div>
              <i className="las la-home text-[60px] lg:text-[72px] text-[#9C742B]"></i>
            </div>
            <div className="col-span-12 sm:col-span-6 p-6 lg:p-8 rounded-2xl bg-[var(--primary-light)] flex items-center justify-between">
              <div>
                <span className="text-primary">Services</span>
                <h2 className="h2 my-2">
                  {" "}
                  <CounterElement end={22.9} decimals={1} />k
                </h2>
                <span>0.20% last month</span>
              </div>
              <BoltIcon className="w-12 lg:w-20 h-12 lg:h-20 text-primary" />
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 border px-6 lg:px-10 py-6 lg:py-8 bg-white rounded-2xl">
          <div className="flex justify-between flex-wrap gap-3 items-center mb-6">
            <h3 className="h3">Earning Statistics</h3>
            <div>
              <span>Sort By:</span>
              <span className="p-3 border rounded-full inline-block ml-2">
                <select className="focus:outline-none">
                  <option value="1">Last 7 Month</option>
                  <option value="2">Last 7 Week</option>
                  <option value="3">Last 7 Days</option>
                </select>
              </span>
            </div>
          </div>
          <div>
            <Chart options={options} height={350} type="area" series={series} />
          </div>
        </div>
      </div>
      {/* My listings */}
      <div className="px-3 lg:px-6 mt-4 lg:mt-6">
        <div className="bg-white border rounded-2xl p-4 lg:py-8 lg:px-10">
          <div className="flex justify-between flex-wrap gap-2 items-center mb-6">
            <h3 className="h3">Listings Info</h3>
            <div>
              <span>Sort By:</span>
              <span className="p-3 border inline-block rounded-full ml-2">
                <select className="focus:outline-none">
                  <option value="1">Hotels</option>
                  <option value="2">Cars</option>
                  <option value="3">Property</option>
                </select>
              </span>
            </div>
          </div>
          <span>4 Items</span>
          <div className="flex mt-4 flex-col gap-4 lg:gap-6">
            {featuredHotels.map((item) => (
              <VendorListingList key={item.id} item={item} />
            ))}
            <div className="flex justify-between flex-wrap items-center gap-3 py-5">
              <span>Showing 1 to 7 of 20 entries</span>
              <ul className="flex gap-2">
                <li className="border border-primary w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white duration-300">
                  <Link href="#">
                    <ChevronLeftIcon className="w-5 h-5" />
                  </Link>
                </li>
                <li className="border border-primary w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white duration-300">
                  <Link href="#">1</Link>
                </li>
                <li className="border border-primary w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white duration-300">
                  <Link href="#">2</Link>
                </li>
                <li className="border border-primary w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white duration-300">
                  <Link href="#">3</Link>
                </li>
                <li className="border border-primary w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white duration-300">
                  <Link href="#">...</Link>
                </li>
                <li className="border border-primary w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white duration-300">
                  <Link href="#">
                    <ChevronRightIcon className="w-5 h-5" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Tooltip
            id="parking"
            style={tooltipStyle}
            offset={10}
            content="Parking"
          />
          <Tooltip
            id="restaurent"
            style={tooltipStyle}
            offset={10}
            content="Restaurent"
          />
          <Tooltip
            id="room"
            style={tooltipStyle}
            offset={10}
            content="Room Service"
          />
          <Tooltip
            id="fitness"
            style={tooltipStyle}
            offset={10}
            content="Fitness"
          />
          <Tooltip
            id="swimming"
            style={tooltipStyle}
            offset={10}
            content="Swimming"
          />
          <Tooltip
            id="laundry"
            style={tooltipStyle}
            offset={10}
            content="Laundry"
          />
          <Tooltip
            id="free"
            style={tooltipStyle}
            offset={10}
            content="Free Internet"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
