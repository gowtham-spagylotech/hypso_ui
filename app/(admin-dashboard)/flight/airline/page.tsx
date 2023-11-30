"use client";
import {
  CloudArrowUpIcon,
  EllipsisVerticalIcon,
  EyeIcon,
  InformationCircleIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Footer from "@/components/vendor-dashboard/Vendor.Footer";
import CheckboxCustom from "@/components/Checkbox";
import { SearchIcon } from "@/public/data/icons";
import { adminRecentListings } from "@/public/data/adminrecentlisting";
import Pagination from "@/components/vendor-dashboard/Pagination";
import { allFlight } from "@/public/data/allFlight";
import { airlines } from "@/public/data/airlines";

const Page = () => {
  return (
    <div className="bg-[var(--bg-2)]">
      <div className="flex items-center justify-between flex-wrap px-3 py-5 md:p-[30px] gap-5 lg:p-[60px] bg-[var(--dark)]">
        <h2 className="h2 text-white">Airline</h2>
        <Link href="/tour/all-tour" className="btn-primary">
          <EyeIcon className="w-5 h-5" /> View Al Flight
        </Link>
      </div>
      {/* statisticts */}
      <section className="grid z-[1] grid-cols-12 gap-4 mb-6 lg:gap-6 px-3 md:px-6 bg-[var(--bg-2)] relative after:absolute after:bg-[var(--dark)] after:w-full after:h-[60px] after:top-0 after:left-0 after:z-[-1] pb-10 xxl:pb-0">
        <div className="col-span-12 lg:col-span-6">
          <div className=" p-4 md:p-6 lg:p-10 rounded-2xl bg-white">
            <h3 className="border-b h3 pb-6">Add Airline</h3>
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
              <div className="flex items-center justify-center border-dashed rounded-2xl mt-6 w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full cursor-pointer bg-[var(--bg-2)] rounded-2xl border border-dashed">
                  <span className="flex flex-col items-center justify-center py-12">
                    <CloudArrowUpIcon className="w-[60px] h-[60px]" />
                    <span className="h3 clr-neutral-500 text-center mt-4 mb-3">
                      Drag & Drop
                    </span>
                    <span className="block text-center mb-6 clr-neutral-500">
                      OR
                    </span>
                    <span className="inline-block py-3 px-6 rounded-full bg-[#354764] text-white mb-10">
                      Select Files
                    </span>
                    <span className="flex items-center justify-center flex-wrap gap-5">
                      <span className="flex items-center gap-2">
                        <InformationCircleIcon className="w-5 h-5" />
                        <span className="block mb-0 clr-neutral-500">
                          Maximum allowed file size is 9.00 MB
                        </span>
                      </span>
                      <span className="flex items-center gap-2">
                        <InformationCircleIcon className="w-5 h-5" />
                        <span className="block mb-0 clr-neutral-500">
                          Maximum 10 files are allowed
                        </span>
                      </span>
                    </span>
                  </span>
                  <input type="file" id="dropzone-file" className="hidden" />
                </label>
              </div>

              <p className="text-sm py-5">
                The position will be used to order in the Filter page search.
                The greater number is priority
              </p>
              <h5 className="text-base sm:text-lg md:text-xl font-medium pb-4">
                Tagline:
              </h5>
              <CheckboxCustom label="I agree to the privacy policy" />
              <h5 className="text-base xm:text-lg md:text-xl font-medium py-4">
                Tag
              </h5>
              <CheckboxCustom label="I agree to the Terms & Conditions" />
              <button type="submit" className="btn-primary mt-5 lg:mt-7">
                Add New
              </button>
            </form>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 p-4 md:p-6 lg:p-10 rounded-2xl bg-white">
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
                    Total Flight
                  </th>
                  <th className="py-3 font-medium lg:py-4 px-2">Date</th>
                  <th className="py-3 font-medium lg:py-4 px-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {airlines.map(({ id, name, date, flights }) => (
                  <tr
                    key={id}
                    className="border-b border-dashed hover:bg-[var(--bg-1)] duration-300">
                    <td
                      className="py-3 lg:py-4 px-2 
 lg:px-4">
                      {name}
                    </td>
                    <td className="py-3 lg:py-4 px-2">{flights}</td>
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
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
