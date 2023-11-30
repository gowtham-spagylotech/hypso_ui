"use client";
import { Tab } from "@headlessui/react";
import {
  CheckBadgeIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
const page = () => {
  return (
    <ul className="flex flex-col gap-6">
      <li>
        <div className="p-3 sm:p-4 lg:p-6 p-xl-10 rounded-2xl bg-white shadow-3">
          <h3 className="mb-0 h3 flex-grow"> My Bookings </h3>
          <div className="hr-line my-6"></div>
          <Tab.Group>
            <Tab.List className="col-span-12 border rounded-2xl mb-4 px-4 lg:mb-6 flex flex-wrap justify-between">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "focus:outline-none flex gap-2 items-center font-medium py-4 px-3",
                    selected ? "text-primary border-primary border-b" : ""
                  )
                }>
                <ShoppingBagIcon className="w-5 h-5" />
                <span className="inline-block"> Upcoming Booking </span>
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "focus:outline-none flex gap-2 items-center font-medium py-4 px-3",
                    selected ? "text-primary border-primary border-b" : ""
                  )
                }>
                <XMarkIcon className="w-5 h-5" />
                <span className="inline-block"> Canceled Booking </span>
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "focus:outline-none flex gap-2 items-center font-medium py-4 px-3",
                    selected ? "text-primary border-primary border-b" : ""
                  )
                }>
                <CheckBadgeIcon className="w-5 h-5" />
                <span className="inline-block"> Completed Booking </span>
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel className="tab-pane fade show active" id="upcoming">
                <h5 className="mb-4 font-medium"> Upcoming booking (2) </h5>
                <ul className="flex flex-col gap-4">
                  <li>
                    <div className="border border-neutral-40 p-4 p-sm-6 xl:p-8 rounded-2xl">
                      <div className="flex gap-4 flex-wrap items-center justify-between">
                        <div className="flex items-center gap-4 flex-wrap">
                          <div className="grid place-content-center w-12 h-12 shadow-lg rounded-full shrink-0">
                            <div className="grid place-content-center w-10 h-10 bg-[var(--primary-light)] text-primary rounded-full">
                              <i className="las la-plane-departure text-2xl"></i>
                            </div>
                          </div>
                          <div className="flex-grow">
                            <h5 className="font-medium mb-1">
                              New York To London
                            </h5>
                            <ul className="flex items-center flex-wrap list-divider-half-xs">
                              <li>
                                <span className="inline-block text-sm">
                                  <span className="inline-block clr-neutral-500">
                                    Booking ID :
                                  </span>
                                  <span className="inline-block text-[var(--neutral-700)] font-medium">
                                    AHA12548
                                  </span>
                                </span>
                              </li>
                              <li>
                                <span className="inline-block text-sm">
                                  <span className="inline-block clr-neutral-500">
                                    Travel Class :
                                  </span>
                                  <span className="inline-block text-[var(--neutral-700)] font-medium">
                                    Bussiness
                                  </span>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <Link
                          href="#"
                          className="btn-outline text-primary font-semibold shrink-0">
                          Manage Booking
                        </Link>
                      </div>
                      <div className="border border-dashed my-6"></div>
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 lg:col-span-6 xl:col-span-4">
                          <p className="clr-neutral-500"> Departure time </p>
                          <h5 className="mb-0 font-medium">
                            Tue 09 Jan 12:00 AM
                          </h5>
                        </div>
                        <div className="col-span-12 lg:col-span-6 xl:col-span-4">
                          <p className="clr-neutral-500"> Arrival time </p>
                          <h5 className="mb-0 font-medium">
                            Tue 06 Aug 4:00 PM
                          </h5>
                        </div>
                        <div className="col-span-12 lg:col-span-6 xl:col-span-4">
                          <p className="clr-neutral-500"> Booked by </p>
                          <h5 className="mb-0 font-medium"> Guy Hawkins </h5>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="border border-neutral-40 p-4 p-sm-6 xl:p-8 rounded-2xl">
                      <div className="flex gap-4 flex-wrap items-center justify-between">
                        <div className="flex items-center gap-4 flex-wrap">
                          <div className="grid place-content-center w-12 h-12 shadow-lg rounded-full shrink-0">
                            <div className="grid place-content-center w-10 h-10 bg-[var(--primary-light)] text-primary rounded-full">
                              <i className="las la-car text-2xl"></i>
                            </div>
                          </div>
                          <div className="flex-grow">
                            <h5 className="font-medium mb-1">
                              Mumbai To Chennai
                            </h5>
                            <ul className="flex items-center flex-wrap list-divider-half-xs">
                              <li>
                                <span className="inline-block text-sm">
                                  <span className="inline-block clr-neutral-500">
                                    Booking ID :
                                  </span>
                                  <span className="inline-block text-[var(--neutral-700)] font-medium">
                                    AHA12548
                                  </span>
                                </span>
                              </li>
                              <li>
                                <span className="inline-block text-sm">
                                  <span className="inline-block clr-neutral-500">
                                    Model :
                                  </span>
                                  <span className="inline-block text-[var(--neutral-700)] font-medium">
                                    Camry
                                  </span>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <Link
                          href="#"
                          className="btn-outline text-primary font-semibold shrink-0">
                          Manage Booking
                        </Link>
                      </div>
                      <div className="border border-dashed my-6"></div>
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 lg:col-span-6 xl:col-span-4">
                          <p className="clr-neutral-500"> Pickup address </p>
                          <h5 className="mb-0 font-medium">3890 Poplar Dr.</h5>
                        </div>
                        <div className="col-span-12 lg:col-span-6 xl:col-span-4">
                          <p className="clr-neutral-500"> Drop address </p>
                          <h5 className="mb-0 font-medium">3605 Parker Rd.</h5>
                        </div>
                        <div className="col-span-12 lg:col-span-6 xl:col-span-4">
                          <p className="clr-neutral-500"> Booked by </p>
                          <h5 className="mb-0 font-medium"> Peter Parker </h5>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </Tab.Panel>
              <Tab.Panel className="tab-pane fade" id="canceled">
                <h5 className="mb-4 font-medium"> Canceled booking (3) </h5>
                <ul className="flex flex-col gap-4">
                  <li>
                    <div className="border border-neutral-40 p-4 p-sm-6 xl:p-8 rounded-2xl">
                      <div className="flex gap-4 flex-wrap items-center justify-between">
                        <div className="flex items-center gap-4 flex-wrap">
                          <div className="grid place-content-center w-12 h-12 shadow-lg rounded-full shrink-0">
                            <div className="grid place-content-center w-10 h-10 bg-[var(--primary-light)] text-primary rounded-full">
                              <i className="las la-plane-departure text-2xl"></i>
                            </div>
                          </div>
                          <div className="flex-grow">
                            <h5 className="font-medium mb-1">
                              New York To London
                            </h5>
                            <ul className="flex items-center flex-wrap list-divider-half-xs">
                              <li>
                                <span className="inline-block text-sm">
                                  <span className="inline-block clr-neutral-500">
                                    Booking ID :
                                  </span>
                                  <span className="inline-block text-[var(--neutral-700)] font-medium">
                                    AHA12548
                                  </span>
                                </span>
                              </li>
                              <li>
                                <span className="inline-block text-sm">
                                  <span className="inline-block clr-neutral-500">
                                    Travel Class :
                                  </span>
                                  <span className="inline-block text-[var(--neutral-700)] font-medium">
                                    Bussiness
                                  </span>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <Link
                          href="#"
                          className="btn-outline text-primary font-semibold shrink-0">
                          Manage Booking
                        </Link>
                      </div>
                      <div className="border border-dashed my-6"></div>
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 lg:col-span-6 xl:col-span-4">
                          <p className="clr-neutral-500"> Departure time </p>
                          <h5 className="mb-0 font-medium">
                            Tue 09 Jan 12:00 AM
                          </h5>
                        </div>
                        <div className="col-span-12 lg:col-span-6 xl:col-span-4">
                          <p className="clr-neutral-500"> Arrival time </p>
                          <h5 className="mb-0 font-medium">
                            Tue 06 Aug 4:00 PM
                          </h5>
                        </div>
                        <div className="col-span-12 lg:col-span-6 xl:col-span-4">
                          <p className="clr-neutral-500"> Booked by </p>
                          <h5 className="mb-0 font-medium"> Guy Hawkins </h5>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="border border-neutral-40 p-4 p-sm-6 xl:p-8 rounded-2xl">
                      <div className="flex gap-4 flex-wrap items-center justify-between">
                        <div className="flex items-center gap-4 flex-wrap">
                          <div className="grid place-content-center w-12 h-12 shadow-lg rounded-full shrink-0">
                            <div className="grid place-content-center w-10 h-10 bg-[var(--primary-light)] text-primary rounded-full">
                              <i className="las la-car text-2xl"></i>
                            </div>
                          </div>
                          <div className="flex-grow">
                            <h5 className="font-medium mb-1">
                              Mumbai To Chennai
                            </h5>
                            <ul className="flex list-row items-center flex-wrap list-divider-half-xs">
                              <li>
                                <span className="inline-block text-sm">
                                  <span className="inline-block clr-neutral-500">
                                    Booking ID :
                                  </span>
                                  <span className="inline-block text-[var(--neutral-700)] font-medium">
                                    AHA12548
                                  </span>
                                </span>
                              </li>
                              <li>
                                <span className="inline-block text-sm">
                                  <span className="inline-block clr-neutral-500">
                                    Model :
                                  </span>
                                  <span className="inline-block text-[var(--neutral-700)] font-medium">
                                    Camry
                                  </span>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <Link
                          href="#"
                          className="btn-outline text-primary font-semibold shrink-0">
                          Manage Booking
                        </Link>
                      </div>
                      <div className="border border-dashed my-6"></div>
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 lg:col-span-6 xl:col-span-4">
                          <p className="clr-neutral-500"> Pickup address </p>
                          <h5 className="mb-0 font-medium">3890 Poplar Dr.</h5>
                        </div>
                        <div className="col-span-12 lg:col-span-6 xl:col-span-4">
                          <p className="clr-neutral-500"> Drop address </p>
                          <h5 className="mb-0 font-medium">3605 Parker Rd.</h5>
                        </div>
                        <div className="col-span-12 lg:col-span-6 xl:col-span-4">
                          <p className="clr-neutral-500"> Booked by </p>
                          <h5 className="mb-0 font-medium"> Peter Parker </h5>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </Tab.Panel>
              <Tab.Panel className="tab-pane fade" id="completed">
                <h5 className="mb-4 font-medium"> Completed booking (4) </h5>
                <ul className="flex flex-col gap-4">
                  <li>
                    <div className="border border-neutral-40 p-4 p-sm-6 xl:p-8 rounded-2xl">
                      <div className="flex gap-4 flex-wrap items-center justify-between">
                        <div className="flex items-center gap-4 flex-wrap">
                          <div className="grid place-content-center w-12 h-12 shadow-lg rounded-full shrink-0">
                            <div className="grid place-content-center w-10 h-10 bg-[var(--primary-light)] text-primary rounded-full">
                              <i className="las la-plane-departure text-2xl"></i>
                            </div>
                          </div>
                          <div className="flex-grow">
                            <h5 className="font-medium mb-1">
                              New York To London
                            </h5>
                            <ul className="flex items-center flex-wrap list-divider-half-xs">
                              <li>
                                <span className="inline-block text-sm">
                                  <span className="inline-block clr-neutral-500">
                                    Booking ID :
                                  </span>
                                  <span className="inline-block text-[var(--neutral-700)] font-medium">
                                    AHA12548
                                  </span>
                                </span>
                              </li>
                              <li>
                                <span className="inline-block text-sm">
                                  <span className="inline-block clr-neutral-500">
                                    Travel Class :
                                  </span>
                                  <span className="inline-block text-[var(--neutral-700)] font-medium">
                                    Bussiness
                                  </span>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <Link
                          href="#"
                          className="btn-outline text-primary font-semibold shrink-0">
                          Manage Booking
                        </Link>
                      </div>
                      <div className="border border-dashed my-6"></div>
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 lg:col-span-6 xl:col-span-4">
                          <p className="clr-neutral-500"> Departure time </p>
                          <h5 className="mb-0 font-medium">
                            Tue 09 Jan 12:00 AM
                          </h5>
                        </div>
                        <div className="col-span-12 lg:col-span-6 xl:col-span-4">
                          <p className="clr-neutral-500"> Arrival time </p>
                          <h5 className="mb-0 font-medium">
                            Tue 06 Aug 4:00 PM
                          </h5>
                        </div>
                        <div className="col-span-12 lg:col-span-6 xl:col-span-4">
                          <p className="clr-neutral-500"> Booked by </p>
                          <h5 className="mb-0 font-medium"> Guy Hawkins </h5>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="border border-neutral-40 p-4 p-sm-6 xl:p-8 rounded-2xl">
                      <div className="flex gap-4 flex-wrap items-center justify-between">
                        <div className="flex items-center gap-4 flex-wrap">
                          <div className="grid place-content-center w-12 h-12 shadow-lg rounded-full shrink-0">
                            <div className="grid place-content-center w-10 h-10 bg-[var(--primary-light)] text-primary rounded-full">
                              <i className="las la-car text-2xl"></i>
                            </div>
                          </div>
                          <div className="flex-grow">
                            <h5 className="font-medium mb-1">
                              Mumbai To Chennai
                            </h5>
                            <ul className="flex items-center flex-wrap list-divider-half-xs">
                              <li>
                                <span className="inline-block text-sm">
                                  <span className="inline-block clr-neutral-500">
                                    Booking ID :
                                  </span>
                                  <span className="inline-block text-[var(--neutral-700)] font-medium">
                                    AHA12548
                                  </span>
                                </span>
                              </li>
                              <li>
                                <span className="inline-block text-sm">
                                  <span className="inline-block clr-neutral-500">
                                    Model :
                                  </span>
                                  <span className="inline-block text-[var(--neutral-700)] font-medium">
                                    Camry
                                  </span>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <Link
                          href="#"
                          className="btn-outline text-primary font-semibold shrink-0">
                          Manage Booking
                        </Link>
                      </div>
                      <div className="border border-dashed my-6"></div>
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 lg:col-span-6 xl:col-span-4">
                          <p className="clr-neutral-500"> Pickup address </p>
                          <h5 className="mb-0 font-medium">3890 Poplar Dr.</h5>
                        </div>
                        <div className="col-span-12 lg:col-span-6 xl:col-span-4">
                          <p className="clr-neutral-500"> Drop address </p>
                          <h5 className="mb-0 font-medium">3605 Parker Rd.</h5>
                        </div>
                        <div className="col-span-12 lg:col-span-6 xl:col-span-4">
                          <p className="clr-neutral-500"> Booked by </p>
                          <h5 className="mb-0 font-medium"> Peter Parker </h5>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </li>
    </ul>
  );
};

export default page;
