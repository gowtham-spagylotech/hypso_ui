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
          <h3 className="mb-0 h3 flex-grow"> My Shop/Business list </h3>
          <div className="hr-line my-6"></div>
          <Tab.Group>
            <Tab.List className="col-span-12 border rounded-2xl mb-4 px-4 lg:mb-6 flex flex-wrap justify-between">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "focus:outline-none flex gap-2 items-center font-medium py-4 px-3",
                    selected ? "text-primary border-primary border-b" : ""
                  )
                }
              >
                <span className="inline-block"> All </span>
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "focus:outline-none flex gap-2 items-center font-medium py-4 px-3",
                    selected ? "text-primary border-primary border-b" : ""
                  )
                }
              >
                <span className="inline-block"> Pending </span>
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "focus:outline-none flex gap-2 items-center font-medium py-4 px-3",
                    selected ? "text-primary border-primary border-b" : ""
                  )
                }
              >
                <span className="inline-block"> Approved </span>
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "focus:outline-none flex gap-2 items-center font-medium py-4 px-3",
                    selected ? "text-primary border-primary border-b" : ""
                  )
                }
              >
                <span className="inline-block"> Rejected </span>
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "focus:outline-none flex gap-2 items-center font-medium py-4 px-3",
                    selected ? "text-primary border-primary border-b" : ""
                  )
                }
              >
                <span className="inline-block"> Delete requests/ Deleted </span>
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel className="tab-pane fade show active" id="upcoming">
                <ul className="flex flex-col gap-4">
                  <li>
                    <div className="border border-neutral-40 p-4 p-sm-6 xl:p-8 rounded-2xl">
                      <div className="flex flex-wrap items-center relative">
                        <div className="absolute top-0 right-0 mt-2 mr-2">
                          <span className="btn-outline text-primary font-semibold shrink-0 ml-2 absolute top-0 right-0">
                            Pending
                          </span>
                        </div>
                        <div className="flex flex-row gap-4 flex-wrap w-full lg:w-1/3">
                          <div className="grid place-content-center w-40 h-40 shadow-lg shrink-0 font-medium rounded-2xl">
                            No Image
                          </div>
                        </div>
                        <div className="flex-grow w-full lg:w-1/3 mt-4 lg:mt-0">
                          <h5 className="font-medium">New York To London</h5>
                          <ul className="flex flex-wrap list-divider-half-xs w-full">
                            <li className="w-full lg:w-1/2">
                              <div className="flex flex-row text-sm">
                                <p className="font-semibold">Address:</p>
                                <p className="inline-block clr-neutral-500 lg:ml-2">
                                  338-A, Sathy Main Road, Oppo to Prozone mall,
                                  <br />
                                  Sivananthapuram, Saravanampatti Post,
                                  <br />
                                  Coimbatore, Tamil Nadu 641035
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="border border-dashed my-6"></div>
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 flex flex-row items-end justify-end">
                          <span className="inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold cursor-pointe ml-2">
                            View
                          </span>
                          <span className="inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold cursor-pointe ml-2" >
                            Edit
                          </span>
                          <span className="inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold cursor-pointe ml-2">
                            Delete
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="border border-neutral-40 p-4 p-sm-6 xl:p-8 rounded-2xl">
                      <div className="flex flex-wrap items-center relative">
                        <div className="absolute top-0 right-0 mt-2 mr-2">
                          <span className="btn-outline text-primary font-semibold shrink-0 ml-2 absolute top-0 right-0">
                            Pending
                          </span>
                        </div>
                        <div className="flex flex-row gap-4 flex-wrap w-full lg:w-1/3">
                          <div className="grid place-content-center w-40 h-40 shadow-lg shrink-0 font-medium rounded-2xl">
                            No Image
                          </div>
                        </div>
                        <div className="flex-grow w-full lg:w-1/3 mt-4 lg:mt-0">
                          <h5 className="font-medium">New York To London</h5>
                          <ul className="flex flex-wrap list-divider-half-xs w-full">
                            <li className="w-full lg:w-1/2">
                              <div className="flex flex-row text-sm">
                                <p className="font-semibold">Address:</p>
                                <p className="inline-block clr-neutral-500 lg:ml-2">
                                  338-A, Sathy Main Road, Oppo to Prozone mall,
                                  <br />
                                  Sivananthapuram, Saravanampatti Post,
                                  <br />
                                  Coimbatore, Tamil Nadu 641035
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="border border-dashed my-6"></div>
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 flex flex-row items-end justify-end">
                          <span className="inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold cursor-pointe ml-2">
                            View
                          </span>
                          <span className="inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold cursor-pointe ml-2" >
                            Edit
                          </span>
                          <span className="inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold cursor-pointe ml-2">
                            Delete
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </Tab.Panel>
              <Tab.Panel className="tab-pane fade show active" id="upcoming">
                <ul className="flex flex-col gap-4">
                  <li>
                    <div className="border border-neutral-40 p-4 p-sm-6 xl:p-8 rounded-2xl">
                      <div className="flex flex-wrap items-center relative">
                        <div className="absolute top-0 right-0 mt-2 mr-2">
                          <span className="btn-outline text-primary font-semibold shrink-0 ml-2 absolute top-0 right-0">
                            Pending
                          </span>
                        </div>
                        <div className="flex flex-row gap-4 flex-wrap w-full lg:w-1/3">
                          <div className="grid place-content-center w-40 h-40 shadow-lg shrink-0 font-medium rounded-2xl">
                            No Image
                          </div>
                        </div>
                        <div className="flex-grow w-full lg:w-1/3 mt-4 lg:mt-0">
                          <h5 className="font-medium">New York To London</h5>
                          <ul className="flex flex-wrap list-divider-half-xs w-full">
                            <li className="w-full lg:w-1/2">
                              <div className="flex flex-row text-sm">
                                <p className="font-semibold">Address:</p>
                                <p className="inline-block clr-neutral-500 lg:ml-2">
                                  338-A, Sathy Main Road, Oppo to Prozone mall,
                                  <br />
                                  Sivananthapuram, Saravanampatti Post,
                                  <br />
                                  Coimbatore, Tamil Nadu 641035
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="border border-dashed my-6"></div>
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 flex flex-row items-end justify-end">
                          <span className="inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold cursor-pointe ml-2">
                            View
                          </span>
                          <span className="inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold cursor-pointe ml-2" >
                            Edit
                          </span>
                          <span className="inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold cursor-pointe ml-2">
                            Delete
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="border border-neutral-40 p-4 p-sm-6 xl:p-8 rounded-2xl">
                      <div className="flex flex-wrap items-center relative">
                        <div className="absolute top-0 right-0 mt-2 mr-2">
                          <span className="btn-outline text-primary font-semibold shrink-0 ml-2 absolute top-0 right-0">
                            Pending
                          </span>
                        </div>
                        <div className="flex flex-row gap-4 flex-wrap w-full lg:w-1/3">
                          <div className="grid place-content-center w-40 h-40 shadow-lg shrink-0 font-medium rounded-2xl">
                            No Image
                          </div>
                        </div>
                        <div className="flex-grow w-full lg:w-1/3 mt-4 lg:mt-0">
                          <h5 className="font-medium">New York To London</h5>
                          <ul className="flex flex-wrap list-divider-half-xs w-full">
                            <li className="w-full lg:w-1/2">
                              <div className="flex flex-row text-sm">
                                <p className="font-semibold">Address:</p>
                                <p className="inline-block clr-neutral-500 lg:ml-2">
                                  338-A, Sathy Main Road, Oppo to Prozone mall,
                                  <br />
                                  Sivananthapuram, Saravanampatti Post,
                                  <br />
                                  Coimbatore, Tamil Nadu 641035
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="border border-dashed my-6"></div>
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 flex flex-row items-end justify-end">
                          <span className="inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold cursor-pointe ml-2">
                            View
                          </span>
                          <span className="inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold cursor-pointe ml-2" >
                            Edit
                          </span>
                          <span className="inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold cursor-pointe ml-2">
                            Delete
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </Tab.Panel>
              <Tab.Panel className="tab-pane fade show active" id="upcoming">
                <ul className="flex flex-col gap-4">
                  <li>
                    <div className="border border-neutral-40 p-4 p-sm-6 xl:p-8 rounded-2xl">
                      <div className="flex flex-wrap items-center relative">
                        <div className="absolute top-0 right-0 mt-2 mr-2">
                          <span className="btn-outline text-primary font-semibold shrink-0 ml-2 absolute top-0 right-0">
                            Pending
                          </span>
                        </div>
                        <div className="flex flex-row gap-4 flex-wrap w-full lg:w-1/3">
                          <div className="grid place-content-center w-40 h-40 shadow-lg shrink-0 font-medium rounded-2xl">
                            No Image
                          </div>
                        </div>
                        <div className="flex-grow w-full lg:w-1/3 mt-4 lg:mt-0">
                          <h5 className="font-medium">New York To London</h5>
                          <ul className="flex flex-wrap list-divider-half-xs w-full">
                            <li className="w-full lg:w-1/2">
                              <div className="flex flex-row text-sm">
                                <p className="font-semibold">Address:</p>
                                <p className="inline-block clr-neutral-500 lg:ml-2">
                                  338-A, Sathy Main Road, Oppo to Prozone mall,
                                  <br />
                                  Sivananthapuram, Saravanampatti Post,
                                  <br />
                                  Coimbatore, Tamil Nadu 641035
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="border border-dashed my-6"></div>
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 flex flex-row items-end justify-end">
                          <span className="inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold cursor-pointe ml-2">
                            View
                          </span>
                          <span className="inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold cursor-pointe ml-2" >
                            Edit
                          </span>
                          <span className="inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold cursor-pointe ml-2">
                            Delete
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="border border-neutral-40 p-4 p-sm-6 xl:p-8 rounded-2xl">
                      <div className="flex flex-wrap items-center relative">
                        <div className="absolute top-0 right-0 mt-2 mr-2">
                          <span className="btn-outline text-primary font-semibold shrink-0 ml-2 absolute top-0 right-0">
                            Pending
                          </span>
                        </div>
                        <div className="flex flex-row gap-4 flex-wrap w-full lg:w-1/3">
                          <div className="grid place-content-center w-40 h-40 shadow-lg shrink-0 font-medium rounded-2xl">
                            No Image
                          </div>
                        </div>
                        <div className="flex-grow w-full lg:w-1/3 mt-4 lg:mt-0">
                          <h5 className="font-medium">New York To London</h5>
                          <ul className="flex flex-wrap list-divider-half-xs w-full">
                            <li className="w-full lg:w-1/2">
                              <div className="flex flex-row text-sm">
                                <p className="font-semibold">Address:</p>
                                <p className="inline-block clr-neutral-500 lg:ml-2">
                                  338-A, Sathy Main Road, Oppo to Prozone mall,
                                  <br />
                                  Sivananthapuram, Saravanampatti Post,
                                  <br />
                                  Coimbatore, Tamil Nadu 641035
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="border border-dashed my-6"></div>
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 flex flex-row items-end justify-end">
                          <span className="inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold cursor-pointe ml-2">
                            View
                          </span>
                          <span className="inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold cursor-pointe ml-2" >
                            Edit
                          </span>
                          <span className="inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold cursor-pointe ml-2">
                            Delete
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </Tab.Panel>
              <Tab.Panel className="tab-pane fade show active" id="upcoming">
                <ul className="flex flex-col gap-4">
                  <li>
                    <div className="border border-neutral-40 p-4 p-sm-6 xl:p-8 rounded-2xl">
                      <div className="flex flex-wrap items-center relative">
                        <div className="absolute top-0 right-0 mt-2 mr-2">
                          <span className="btn-outline text-primary font-semibold shrink-0 ml-2 absolute top-0 right-0">
                            Pending
                          </span>
                        </div>
                        <div className="flex flex-row gap-4 flex-wrap w-full lg:w-1/3">
                          <div className="grid place-content-center w-40 h-40 shadow-lg shrink-0 font-medium rounded-2xl">
                            No Image
                          </div>
                        </div>
                        <div className="flex-grow w-full lg:w-1/3 mt-4 lg:mt-0">
                          <h5 className="font-medium">New York To London</h5>
                          <ul className="flex flex-wrap list-divider-half-xs w-full">
                            <li className="w-full lg:w-1/2">
                              <div className="flex flex-row text-sm">
                                <p className="font-semibold">Address:</p>
                                <p className="inline-block clr-neutral-500 lg:ml-2">
                                  338-A, Sathy Main Road, Oppo to Prozone mall,
                                  <br />
                                  Sivananthapuram, Saravanampatti Post,
                                  <br />
                                  Coimbatore, Tamil Nadu 641035
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="border border-dashed my-6"></div>
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 flex flex-row items-end justify-end">
                          <span className="inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold cursor-pointe ml-2">
                            View
                          </span>
                          <span className="inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold cursor-pointe ml-2" >
                            Edit
                          </span>
                          <span className="inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold cursor-pointe ml-2">
                            Delete
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="border border-neutral-40 p-4 p-sm-6 xl:p-8 rounded-2xl">
                      <div className="flex flex-wrap items-center relative">
                        <div className="absolute top-0 right-0 mt-2 mr-2">
                          <span className="btn-outline text-primary font-semibold shrink-0 ml-2 absolute top-0 right-0">
                            Pending
                          </span>
                        </div>
                        <div className="flex flex-row gap-4 flex-wrap w-full lg:w-1/3">
                          <div className="grid place-content-center w-40 h-40 shadow-lg shrink-0 font-medium rounded-2xl">
                            No Image
                          </div>
                        </div>
                        <div className="flex-grow w-full lg:w-1/3 mt-4 lg:mt-0">
                          <h5 className="font-medium">New York To London</h5>
                          <ul className="flex flex-wrap list-divider-half-xs w-full">
                            <li className="w-full lg:w-1/2">
                              <div className="flex flex-row text-sm">
                                <p className="font-semibold">Address:</p>
                                <p className="inline-block clr-neutral-500 lg:ml-2">
                                  338-A, Sathy Main Road, Oppo to Prozone mall,
                                  <br />
                                  Sivananthapuram, Saravanampatti Post,
                                  <br />
                                  Coimbatore, Tamil Nadu 641035
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="border border-dashed my-6"></div>
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 flex flex-row items-end justify-end">
                          <span className="inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold cursor-pointe ml-2">
                            View
                          </span>
                          <span className="inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold cursor-pointe ml-2" >
                            Edit
                          </span>
                          <span className="inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold cursor-pointe ml-2">
                            Delete
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </Tab.Panel>
              <Tab.Panel className="tab-pane fade show active" id="upcoming">
                <ul className="flex flex-col gap-4">
                  <li>
                    <div className="border border-neutral-40 p-4 p-sm-6 xl:p-8 rounded-2xl">
                      <div className="flex flex-wrap items-center relative">
                        <div className="absolute top-0 right-0 mt-2 mr-2">
                          <span className="btn-outline text-primary font-semibold shrink-0 ml-2 absolute top-0 right-0">
                            Pending
                          </span>
                        </div>
                        <div className="flex flex-row gap-4 flex-wrap w-full lg:w-1/3">
                          <div className="grid place-content-center w-40 h-40 shadow-lg shrink-0 font-medium rounded-2xl">
                            No Image
                          </div>
                        </div>
                        <div className="flex-grow w-full lg:w-1/3 mt-4 lg:mt-0">
                          <h5 className="font-medium">New York To London</h5>
                          <ul className="flex flex-wrap list-divider-half-xs w-full">
                            <li className="w-full lg:w-1/2">
                              <div className="flex flex-row text-sm">
                                <p className="font-semibold">Address:</p>
                                <p className="inline-block clr-neutral-500 lg:ml-2">
                                  338-A, Sathy Main Road, Oppo to Prozone mall,
                                  <br />
                                  Sivananthapuram, Saravanampatti Post,
                                  <br />
                                  Coimbatore, Tamil Nadu 641035
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="border border-dashed my-6"></div>
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 flex flex-row items-end justify-end">
                          <span className="inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold cursor-pointe ml-2">
                            View
                          </span>
                          <span className="inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold cursor-pointe ml-2" >
                            Edit
                          </span>
                          <span className="inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold cursor-pointe ml-2">
                            Delete
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="border border-neutral-40 p-4 p-sm-6 xl:p-8 rounded-2xl">
                      <div className="flex flex-wrap items-center relative">
                        <div className="absolute top-0 right-0 mt-2 mr-2">
                          <span className="btn-outline text-primary font-semibold shrink-0 ml-2 absolute top-0 right-0">
                            Pending
                          </span>
                        </div>
                        <div className="flex flex-row gap-4 flex-wrap w-full lg:w-1/3">
                          <div className="grid place-content-center w-40 h-40 shadow-lg shrink-0 font-medium rounded-2xl">
                            No Image
                          </div>
                        </div>
                        <div className="flex-grow w-full lg:w-1/3 mt-4 lg:mt-0">
                          <h5 className="font-medium">New York To London</h5>
                          <ul className="flex flex-wrap list-divider-half-xs w-full">
                            <li className="w-full lg:w-1/2">
                              <div className="flex flex-row text-sm">
                                <p className="font-semibold">Address:</p>
                                <p className="inline-block clr-neutral-500 lg:ml-2">
                                  338-A, Sathy Main Road, Oppo to Prozone mall,
                                  <br />
                                  Sivananthapuram, Saravanampatti Post,
                                  <br />
                                  Coimbatore, Tamil Nadu 641035
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="border border-dashed my-6"></div>
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 flex flex-row items-end justify-end">
                          <span className="inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold cursor-pointe ml-2">
                            View
                          </span>
                          <span className="inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold cursor-pointe ml-2" >
                            Edit
                          </span>
                          <span className="inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold cursor-pointe ml-2">
                            Delete
                          </span>
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
