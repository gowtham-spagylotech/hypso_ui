"use client";
import {
  CheckIcon,
  EllipsisVerticalIcon,
  PencilSquareIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Footer from "@/components/vendor-dashboard/Vendor.Footer";
import Pagination from "@/components/vendor-dashboard/Pagination";
import { SearchIcon } from "@/public/data/icons";
import Image from "next/image";
import { guestBookingHistory } from "@/public/data/guestBookingHistory";

const Page = () => {
  return (
    <div className="bg-[var(--bg-2)]">
      <div className="flex items-center justify-between flex-wrap px-3 py-5 md:p-[30px] gap-5 lg:p-[60px] bg-[var(--dark)]">
        <div className="flex gap-2 items-center">
          <div className="p-2 border-[var(--primary)] rounded-full bg-white  grid place-content-center relative mx-auto">
            <Image
              width={48}
              height={48}
              src="/img/team-1.jpg"
              alt="image"
              className="rounded-full"
            />
            <div className="w-4 h-4 grid place-content-center rounded-full border-2 white text-white bg-primary absolute bottom-3 right-1">
              <CheckIcon className="w-3 h-3" />
            </div>
          </div>
          <div className="text-white">
            <h6 className="font-medium text-lg">Floyd Miles</h6>
            <Link href="mailto:info@example.com">info@example.com</Link>
          </div>
        </div>
        <Link href="/cab/add-new-cab" className="btn-primary">
          <PlusCircleIcon className="w-5 h-5" /> View Guests List
        </Link>
      </div>

      {/* Recent bookings */}
      <section className="bg-[var(--bg-2)] px-3 lg:px-6 pb-4 lg:pb-6 relative after:absolute after:bg-[var(--dark)] after:w-full after:h-[60px] after:top-0 after:left-0 xxl:pb-0">
        <div className=" py-6 lg:py-8 px-8 lg:px-10 border rounded-2xl bg-white relative z-[1]">
          <div className="flex flex-wrap gap-3 justify-between mb-7">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="h3">Booking History</h3>
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
              <div className="flex gap-2 items-center">
                <span>Sort By :</span>

                <div className="border rounded-full pr-3">
                  <select className="p-3 min-w-[100px] rounded-full focus:outline-none">
                    <option value="1">Hotel</option>
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
                  <th className="py-3 lg:py-4 px-2">Serial</th>
                  <th className="py-3 lg:py-4 px-2">Hotel Name</th>
                  <th className="py-3 lg:py-4 px-2">Booking Date</th>
                  <th className="py-3 lg:py-4 px-2">Bed Type</th>
                  <th className="py-3 lg:py-4 px-2">Room Floor</th>
                  <th className="py-3 lg:py-4 px-2">Room No</th>
                  <th className="py-3 lg:py-4 px-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {guestBookingHistory.map(
                  ({ id, bedType, bookingDate, floor, hotelName, roomNo }) => (
                    <tr
                      key={id}
                      className="border-b border-dashed hover:bg-[var(--bg-1)] duration-300">
                      <td className="py-3 lg:py-4 px-2">{id}</td>
                      <td className="py-3 lg:py-4 px-2">{hotelName}</td>
                      <td className="py-3 lg:py-4 px-2">{bookingDate}</td>
                      <td className="py-3 lg:py-4 px-2">{bedType}</td>
                      <td className="py-3 lg:py-4 px-2">{floor}</td>
                      <td className="py-3 lg:py-4 px-2">{roomNo}</td>
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
