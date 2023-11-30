"use client";
import {
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Pagination from "@/components/vendor-dashboard/Pagination";
import { StarIcon } from "@heroicons/react/20/solid";
import { venodorReviews } from "@/public/data/vendorreviews";
import Image from "next/image";
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
    name: "Good Reviews",
    data: [19, 40, 45, 30, 25, 43, 45, 62, 66, 112, 105, 100],
  },
  {
    name: "Bad Reviews",
    data: [10, 30, 32, 50, 42, 33, 36, 45, 44, 40, 66, 56],
  },
];

const page = () => {
  return (
    <>
      <div className="bg-[var(--bg-1)] px-3 lg:px-6 relative before:bg-[var(--dark)] before:w-full before:h-[70px] before:absolute before:top-0 before:left-0">
        <div className="grid grid-cols-12 gap-4 lg:gap-6 z-[1] relative">
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-4 lg:gap-6">
            {/* Review stats card */}
            <div className="bg-white border rounded-2xl p-3 md:p-5 lg:px-10 lg:py-8">
              <div className="flex flex-wrap justify-between gap-3 items-center mb-6 ">
                <h3 className="h3">Review Matrics</h3>
                <div>
                  <span>Sort By:</span>
                  <span className="p-3 border inline-block rounded-full ml-2">
                    <select className="focus:outline-none">
                      <option value="0">All</option>
                      <option value="1">Hotels</option>
                      <option value="2">Cars</option>
                      <option value="3">Property</option>
                    </select>
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4 lg:gap-6">
                <div className="col-span-12 flex justify-between items-center sm:col-span-6 rounded-2xl bg-[var(--primary-light)] p-3 sm:p-4 lg:p-8">
                  <div>
                    <span className="text-primary">Average Rating</span>
                    <h2 className="h2">
                      <CounterElement end={4.5} />
                    </h2>
                  </div>
                  <i className="las la-medal text-[60px] text-primary"></i>
                </div>
                <div className="col-span-12 flex justify-between items-center sm:col-span-6 rounded-2xl bg-[var(--secondary-light)] p-3 sm:p-4 lg:p-8">
                  <div>
                    <span className="text-primary">Total Reviews</span>
                    <h2 className="h2">
                      {" "}
                      <CounterElement end={748} />
                    </h2>
                  </div>
                  <i className="lar la-star text-[60px] text-[#22804A]"></i>
                </div>
                <div className="col-span-12 flex justify-between items-center sm:col-span-6 rounded-2xl bg-[#FFF9ED] p-3 sm:p-4 lg:p-8">
                  <div>
                    <span className="text-primary">Unaddressed Review</span>
                    <h2 className="h2">
                      {" "}
                      <CounterElement end={60} />
                    </h2>
                  </div>
                  <i className="las la-exclamation-circle text-[60px] text-[#9C742B]"></i>
                </div>
                <div className="col-span-12 flex justify-between items-center sm:col-span-6 rounded-2xl bg-[var(--primary-light)] p-3 sm:p-4 lg:p-8">
                  <div>
                    <span className="text-primary">New Reviews</span>
                    <h2 className="h2">
                      {" "}
                      <CounterElement end={145} />
                    </h2>
                  </div>
                  <i className="las la-ticket-alt text-[60px] text-primary"></i>
                </div>
              </div>
            </div>
            {/* Review Statistics chart */}
            <div className="border p-3 sm:p-4 md:px-6 lg:px-10 md:py-6 lg:py-8 bg-white rounded-2xl">
              <div className="flex justify-between flex-wrap gap-3 items-center mb-6">
                <h3 className="h3">Reviews Statistics</h3>
                <div className="flex items-center gap-3 flex-wrap">
                  <span>Sort By:</span>
                  <div className="p-3 border rounded-full ml-2">
                    <select className="focus:outline-none">
                      <option value="1">Last 7 Month</option>
                      <option value="2">Last 7 Week</option>
                      <option value="3">Last 7 Days</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <Chart
                  options={options}
                  height={350}
                  type="area"
                  series={series}
                />
              </div>
            </div>
            {/* Recent reviews */}
            <div className="bg-white p-3 sm:p-4  md:py-6 lg:py-8 md:px-8 lg:px-10 border rounded-2xl">
              <div className="flex justify-between mb-7">
                <h3 className="h3">Recent Reviews</h3>
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
                      <th className="py-3 px-2">Date</th>
                      <th className="py-3 px-2">Reviews</th>
                    </tr>
                  </thead>
                  <tbody>
                    {venodorReviews.map(({ invoiceID, date, name, review }) => (
                      <tr key={invoiceID} className="border-b border-dashed">
                        <td className="py-3 px-2">{invoiceID}</td>
                        <td className="py-3 px-2">{name}</td>
                        <td className="py-3 px-2">{date}</td>
                        <td className="py-3 px-2 flex items-center gap-2">
                          <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />{" "}
                          {review}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Pagination />
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="p-3 sm:p-4 lg:p-6 border xl:p-8 bg-white rounded-2xl mb-8">
              <div className="flex items-center gap-2">
                <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                <h4 className="mb-0 text-2xl font-semibold flex-grow">
                  {" "}
                  Average Reviews{" "}
                </h4>
              </div>
              <div className="border border-dashed my-6"></div>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-3">
                  <div className="flex items-center shrink-0">
                    <span className="inline-block"> 5 </span>
                    <i className="lar la-star"></i>
                  </div>
                  <div className="w-full bg-[#E9ECEF] rounded-3xl h-3 flex-grow">
                    <div className="rounded-s-3xl bg-[#FFC107] h-full w-[90%]"></div>
                  </div>
                  <span className="inline-block font-medium shrink-0">90%</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex items-center shrink-0">
                    <span className="inline-block"> 4 </span>
                    <i className="lar la-star"></i>
                  </div>
                  <div className="w-full bg-[#E9ECEF] rounded-3xl h-3 flex-grow">
                    <div className="rounded-s-3xl bg-[#FFC107] h-full w-[75%]"></div>
                  </div>
                  <span className="inline-block font-medium shrink-0">75%</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex items-center shrink-0">
                    <span className="inline-block"> 3 </span>
                    <i className="lar la-star"></i>
                  </div>
                  <div className="w-full bg-[#E9ECEF] rounded-3xl h-3 flex-grow">
                    <div className="rounded-s-3xl bg-[#FFC107] h-full w-[65%]"></div>
                  </div>
                  <span className="inline-block font-medium shrink-0">65%</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex items-center shrink-0">
                    <span className="inline-block"> 2 </span>
                    <i className="lar la-star"></i>
                  </div>
                  <div className="w-full bg-[#E9ECEF] rounded-3xl h-3 flex-grow">
                    <div className="rounded-s-3xl bg-[#FFC107] h-full w-[45%]"></div>
                  </div>
                  <span className="inline-block font-medium shrink-0">45%</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex items-center shrink-0">
                    <span className="inline-block"> 1 </span>
                    <i className="lar la-star"></i>
                  </div>
                  <div className="w-full bg-[#E9ECEF] rounded-3xl h-3 flex-grow">
                    <div className="rounded-s-3xl bg-[#FFC107] h-full w-[25%]"></div>
                  </div>
                  <span className="inline-block font-medium shrink-0">25%</span>
                </li>
              </ul>
              <div className="border border-dashed my-6"></div>

              <div className="bg-white rounded-2xl">
                <div className="flex items-center gap-4 justify-between flex-wrap mb-10">
                  <div className="flex items-center gap-2">
                    <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                    <h3 className="mb-0 h3"> 4.7 (21 reviews) </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="mb-0 clr-neutral-500 shrink-0"> Sort By : </p>
                    <div className="border rounded-full pr-3">
                      <select className="w-full bg-transparent px-5 py-3 focus:outline-none">
                        <option>Latest</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="bg-[var(--bg-2)] rounded-2xl p-3 sm:p-4 lg:p-6 mb-8">
                  <div className="flex items-center flex-wrap justify-between gap-4 ">
                    <div className="flex gap-5 items-center">
                      <div className="w-15 h-15 shrink-0 rounded-full overflow-hidden">
                        <Image
                          width={60}
                          height={60}
                          src="/img/user-1.jpg"
                          alt="image"
                          className=" w-full h-full object-fit-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <h5 className="mb-1 font-semibold"> Kiss Laura </h5>
                        <p className="mb-0 clr-neutral-500">
                          {" "}
                          Product Designer{" "}
                        </p>
                      </div>
                    </div>
                    <div className="text-sm-end">
                      <p className="mb-1"> 09:01 am </p>
                      <p className="mb-0"> Mar 03, 2023 </p>
                    </div>
                  </div>
                  <div className="border border-dashed my-6"></div>
                  <div className="flex gap-1 mb-3">
                    <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                    <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                    <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                    <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                    <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                  </div>
                  <p className="mb-0 clr-neutral-500">
                    I highly recommend [real estate agent&apos;s name] as a
                    professional and knowledgeable real estate agent. They
                    provided valuable guidance.
                  </p>
                  <div className="border border-dashed my-6"></div>
                  <div className="flex flex-wrap items-center gap-10 mb-6">
                    <div className="flex items-center gap-2 text-primary">
                      <HandThumbUpIcon className="w-5 h-5" />
                      <span className="inline-block"> 178 </span>
                    </div>
                    <div className="flex items-center gap-2 text-primary">
                      <ChatBubbleLeftRightIcon className="w-5 h-5" />
                      <span className="inline-block"> Reply </span>
                    </div>
                  </div>
                  <div className="flex gap-5 items-center">
                    <div className="w-15 h-15 shrink-0 rounded-full overflow-hidden">
                      <Image
                        width={60}
                        height={60}
                        src="/img/user-2.jpg"
                        alt="image"
                        className=" w-full h-full object-fit-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <input
                        className="border text-base py-4 px-5 rounded-full focus:outline-none w-full"
                        type="text"
                        placeholder="Join the discussion"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-[var(--bg-2)] rounded-2xl p-3 sm:p-4 lg:p-6 mb-8">
                  <div className="flex items-center flex-wrap justify-between gap-4">
                    <div className="flex gap-5 items-center">
                      <div className="w-15 h-15 shrink-0 rounded-full overflow-hidden">
                        <Image
                          width={60}
                          height={60}
                          src="/img/user-3.jpg"
                          alt="image"
                          className=" w-full h-full object-fit-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <h5 className="mb-1 font-semibold"> Kristin Watson </h5>
                        <p className="mb-0 clr-neutral-500">
                          {" "}
                          Product Designer{" "}
                        </p>
                      </div>
                    </div>
                    <div className="text-sm-end">
                      <p className="mb-1"> 09:01 am </p>
                      <p className="mb-0"> Mar 03, 2023 </p>
                    </div>
                  </div>
                  <div className="border border-dashed my-6"></div>
                  <div className="flex gap-1 mb-3">
                    <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                    <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                    <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                    <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                    <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                  </div>
                  <p className="mb-0 clr-neutral-500">
                    I highly recommend [real estate agent&apos;s name] as a
                    professional and knowledgeable real estate agent. They
                    provided valuable guidance.
                  </p>
                  <div className="border border-dashed my-6"></div>
                  <div className="flex flex-wrap items-center gap-10">
                    <div className="flex items-center gap-2 text-primary">
                      <HandThumbUpIcon className="w-5 h-5" />
                      <span className="inline-block"> 178 </span>
                    </div>
                    <div className="flex items-center gap-2 text-primary">
                      <ChatBubbleLeftRightIcon className="w-5 h-5" />
                      <span className="inline-block"> Reply </span>
                    </div>
                  </div>
                </div>
                <div className="bg-[var(--bg-2)] rounded-2xl p-3 sm:p-4 lg:p-6 mb-8">
                  <div className="flex items-center flex-wrap justify-between gap-4">
                    <div className="flex gap-5 items-center">
                      <div className="w-15 h-15 shrink-0 rounded-full overflow-hidden">
                        <Image
                          width={60}
                          height={60}
                          src="/img/user-4.jpg"
                          alt="image"
                          className=" w-full h-full object-fit-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <h5 className="mb-1 font-semibold">
                          {" "}
                          Marvin McKinney{" "}
                        </h5>
                        <p className="mb-0 clr-neutral-500">
                          {" "}
                          Product Designer{" "}
                        </p>
                      </div>
                    </div>
                    <div className="text-sm-end">
                      <p className="mb-1"> 09:01 am </p>
                      <p className="mb-0"> Mar 03, 2023 </p>
                    </div>
                  </div>
                  <div className="border border-dashed my-6"></div>
                  <div className="flex gap-1 mb-3">
                    <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                    <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                    <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                    <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                    <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                  </div>
                  <p className="mb-0 clr-neutral-500">
                    I highly recommend [real estate agent&apos;s name] as a
                    professional and knowledgeable real estate agent. They
                    provided valuable guidance.
                  </p>
                  <div className="border border-dashed my-6"></div>
                  <div className="flex flex-wrap items-center gap-10">
                    <div className="flex items-center gap-2 text-primary">
                      <HandThumbUpIcon className="w-5 h-5" />
                      <span className="inline-block"> 178 </span>
                    </div>
                    <div className="flex items-center gap-2 text-primary">
                      <ChatBubbleLeftRightIcon className="w-5 h-5" />
                      <span className="inline-block"> Reply </span>
                    </div>
                  </div>
                </div>
                <Link href="#" className="btn-primary">
                  See All Reviews
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
