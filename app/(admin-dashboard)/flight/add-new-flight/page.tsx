"use client";
import {
  ChevronDownIcon,
  CloudArrowUpIcon,
  EyeIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Footer from "@/components/vendor-dashboard/Vendor.Footer";
import CustomRangeSlider from "@/components/RangeSlider";
import Accordion from "@/components/Accordion";
import SelectUI from "@/components/SelectUI";
import CheckboxCustom from "@/components/Checkbox";
import { touramenities } from "@/public/data/touramenities";

const Page = () => {
  return (
    <div className="bg-[var(--bg-2)]">
      <div className="flex items-center justify-between flex-wrap px-3 py-5 md:p-[30px] gap-5 lg:p-[60px] bg-[var(--dark)]">
        <h2 className="h2 text-white">Add New Flight</h2>
        <Link href="/tour/all-tour" className="btn-primary">
          <EyeIcon className="w-5 h-5" /> View All Flight
        </Link>
      </div>
      {/* statisticts */}
      <section className="grid z-[1] grid-cols-12 gap-4 mb-6 lg:gap-6 px-3 md:px-6 bg-[var(--bg-2)] relative after:absolute after:bg-[var(--dark)] after:w-full after:h-[60px] after:top-0 after:left-0 after:z-[-1] pb-10 xxl:pb-0">
        <div className="col-span-12 lg:col-span-6">
          <Accordion
            buttonContent={(open) => (
              <div
                className={`${
                  open ? "rounded-t-2xl" : "rounded-2xl"
                } flex justify-between items-center p-4 md:p-6 lg:p-8 duration-500 bg-white`}>
                <h3 className="h3">Flight Content </h3>
                <ChevronDownIcon
                  className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </div>
            )}
            initialOpen={true}>
            <div className="px-4 md:px-6 lg:px-8 pb-4 md:pb-6 lg:pb-8 bg-white rounded-b-2xl">
              <div className="border-t">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 md:col-span-1">
                    <p className="mt-6 mb-4 text-xl font-medium">Name :</p>
                    <input
                      type="text"
                      className="w-full border p-2 focus:outline-none rounded-md text-base"
                      placeholder="Write Title"
                    />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <p className="mt-6 mb-4 text-xl font-medium">Code :</p>
                    <input
                      type="text"
                      className="w-full border p-2 focus:outline-none rounded-md text-base"
                      placeholder="Write Title"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Accordion>
          <Accordion
            buttonContent={(open) => (
              <div
                className={`${
                  open ? "rounded-t-2xl" : "rounded-2xl"
                } flex justify-between items-center p-4 md:p-6 lg:p-8 mt-4 lg:mt-6 duration-500 bg-white`}>
                <h3 className="h3">Extra Info </h3>
                <ChevronDownIcon
                  className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </div>
            )}
            initialOpen={true}>
            <div className="px-4 md:px-6 lg:px-8 pb-4 md:pb-6 lg:pb-8 bg-white rounded-b-2xl">
              <div className="border-t">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 md:col-span-1">
                    <p className="mt-6 mb-4 text-xl font-medium">From :</p>
                    <SelectUI
                      options={[
                        { name: "New York" },
                        { name: "Toronto" },
                        { name: "San Francisco" },
                      ]}
                    />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <p className="mt-6 mb-4 text-xl font-medium">To :</p>
                    <SelectUI
                      options={[
                        { name: "Canbera" },
                        { name: "New York" },
                        { name: "Toronto" },
                        { name: "San Francisco" },
                      ]}
                    />
                  </div>
                  <div className="col-span-2">
                    <p className="mt-3 mb-4 text-xl font-medium">Airline :</p>
                    <SelectUI
                      options={[
                        { name: "Emirates" },
                        { name: "Delta Airlines" },
                        { name: "Qatar Airways" },
                        { name: "Singapore Airlines" },
                      ]}
                    />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <p className="mt-6 mb-4 text-xl font-medium">
                      Departure Time :
                    </p>
                    <input
                      type="time"
                      className="w-full border p-2 focus:outline-none rounded-md text-base"
                      placeholder="Write Title"
                    />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <p className="mt-6 mb-4 text-xl font-medium">
                      Arrival Time :
                    </p>
                    <input
                      type="time"
                      className="w-full border p-2 focus:outline-none rounded-md text-base"
                      placeholder="Write Title"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Accordion>
          <Accordion
            buttonContent={(open) => (
              <div
                className={`${
                  open ? "rounded-t-2xl" : "rounded-2xl"
                } flex justify-between items-center p-4 md:p-6 lg:p-8 mt-4 lg:mt-6 duration-500 bg-white`}>
                <h3 className="h3">Flight Type </h3>
                <ChevronDownIcon
                  className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </div>
            )}
            initialOpen={true}>
            <div className="px-4 md:px-6 lg:px-8 pb-4 md:pb-6 lg:pb-8 bg-white rounded-b-2xl">
              <div>
                <p className="text-xl font-medium border-t pt-4 mb-2">
                  {" "}
                  Features :{" "}
                </p>
                <ul className="columns-1 sm:columns-2 md:columns-3 lg:columns-4">
                  <li className="py-2">
                    <CheckboxCustom label="Business" />
                  </li>
                  <li className="py-2">
                    <CheckboxCustom label="First Class" />
                  </li>
                  <li className="py-2">
                    <CheckboxCustom label="Economy" />
                  </li>
                  <li className="py-2 text-sm">
                    <CheckboxCustom label="Premium Economy" />
                  </li>
                </ul>
              </div>
            </div>
          </Accordion>
          <Accordion
            buttonContent={(open) => (
              <div
                className={`${
                  open ? "rounded-t-2xl" : "rounded-2xl"
                } flex justify-between items-center p-4 md:p-6 lg:p-8 mt-4 lg:mt-6 duration-500 bg-white`}>
                <h3 className="h3">Seo Content </h3>
                <ChevronDownIcon
                  className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </div>
            )}
            initialOpen={true}>
            <div className="px-4 md:px-6 lg:px-8 pb-4 md:pb-6 lg:pb-8 bg-white rounded-b-2xl">
              <div className="border-t">
                <p className="mt-6 mb-4 text-xl font-medium">Description :</p>
                <textarea
                  rows={5}
                  className="w-full border p-2 focus:outline-none rounded-md "
                  placeholder="Description.."></textarea>
                <p className="mt-6 mb-4 text-xl font-medium">Seo Title :</p>
                <input
                  type="text"
                  className="w-full border p-2 focus:outline-none rounded-md  text-base"
                  placeholder="Write tag"
                />
                <p className="mt-6 mb-4 text-xl font-medium">Tagline :</p>
                <input
                  type="text"
                  className="w-full border p-2 focus:outline-none rounded-md  text-base"
                  placeholder="Your tag line"
                />
                <p className="mt-6 mb-4 text-xl font-medium"> Tag </p>
                <SelectUI
                  options={[
                    { name: "One" },
                    { name: "Two" },
                    { name: "Three" },
                  ]}
                />
              </div>
            </div>
          </Accordion>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <div className="rounded-2xl bg-white border p-4 md:p-6 lg:p-8">
            <Accordion
              buttonContent={(open) => (
                <div className="rounded-2xl flex items-center justify-between">
                  <h3 className="h3">Images & Video with Map </h3>
                  <ChevronDownIcon
                    className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </div>
              )}
              initialOpen={true}>
              <div className="pt-6 border-t mt-6">
                <div className="flex items-center justify-center border-dashed rounded-2xl w-full">
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
                <p className="mt-6 mb-4 text-xl font-medium">Video Link :</p>
                <input
                  type="text"
                  className="w-full border p-2 focus:outline-none rounded-md text-base"
                  placeholder="Any type video link"
                />
              </div>
            </Accordion>
          </div>
          <div className="rounded-2xl bg-white border p-4 md:p-6 lg:p-8 mt-4 lg:mt-6">
            <Accordion
              buttonContent={(open) => (
                <div className="rounded-2xl flex items-center justify-between">
                  <h3 className="h3">Attribute : Inflight Experience</h3>
                  <ChevronDownIcon
                    className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </div>
              )}
              initialOpen={true}>
              <div className="pt-6">
                <p className="text-xl font-medium mb-2 border-t pt-4">
                  {" "}
                  Features :{" "}
                </p>
                <ul className="columns-1 sm:columns-2 md:columns-3 lg:columns-4">
                  <li className="py-2">
                    <CheckboxCustom label="Inflight Dining" />
                  </li>
                  <li className="py-2">
                    <CheckboxCustom label="Music" />
                  </li>
                  <li className="py-2">
                    <CheckboxCustom label="Sky Shopping" />
                  </li>
                  <li className="py-2">
                    <CheckboxCustom label="Seats & Cabin" />
                  </li>
                </ul>
              </div>
            </Accordion>
          </div>
          <div className="rounded-2xl bg-white border p-4 md:p-6 lg:p-8 mt-4 lg:mt-6">
            <Accordion
              buttonContent={(open) => (
                <div className="rounded-2xl flex justify-between">
                  <h3 className="h3">Contact Information </h3>
                  <ChevronDownIcon
                    className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </div>
              )}
              initialOpen={true}>
              <div className="pt-6 mt-6 border-t">
                <p className="mb-4 text-xl font-medium">Zip/Post Code :</p>
                <input
                  type="text"
                  className="w-full border p-2 focus:outline-none rounded-md text-base"
                  placeholder="4"
                />
                <p className="mt-6 mb-4 text-xl font-medium">Phone :</p>
                <input
                  type="text"
                  className="w-full border p-2 focus:outline-none rounded-md text-base"
                  placeholder="Enter Number"
                />
                <p className="mt-6 mb-4 text-xl font-medium"> Fax : </p>
                <input
                  type="text"
                  className="w-full border p-2 focus:outline-none rounded-md text-base"
                  placeholder="Enter Fax number"
                />
                <p className="mt-6 mb-4 text-xl font-medium">Email :</p>
                <input
                  type="text"
                  className="w-full border p-2 focus:outline-none rounded-md text-base"
                  placeholder="Enter Email"
                />
                <p className="mt-6 mb-4 text-xl font-medium">Website :</p>
                <input
                  type="text"
                  className="w-full border p-2 focus:outline-none rounded-md text-base"
                  placeholder="Enter website"
                />
                <Link
                  href="#"
                  className="link inline-flex items-center gap-2 py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold mt-6">
                  <span className="inline-block"> Add New </span>
                </Link>
              </div>
            </Accordion>
          </div>

          <div className="py-10">
            <ul className="flex flex-col gap-4">
              <li>
                <CheckboxCustom label=" I agree to the privacy & policy" />
              </li>
              <li>
                <CheckboxCustom label="I agree with all terms & conditions" />
              </li>
            </ul>
          </div>

          <Link href="#" className="btn-primary font-semibold">
            <span className="inline-block"> Save & Preview </span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
