"use client";
import { Tab } from "@headlessui/react";
import {
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import {
  CheckBadgeIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const page = () => {
  return (
    <ul className="flex flex-col gap-6">
      <li>
        <div className="p-3 sm:p-4 lg:p-6 p-xl-10 rounded-2xl bg-white shadow-3">
          <h3 className="mb-0 h3 flex-grow"> My Reviews </h3>
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
                  <div className="bg-[var(--bg-2)] rounded-2xl p-3 sm:p-4 lg:p-6 mb-8">
                  <div className="flex items-center flex-wrap justify-between gap-4 ">
                    <div className="flex gap-5 items-center">
                      <div className="w-15 h-15 shrink-0 rounded-full overflow-hidden">
                        <UserIcon/>
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
                      {/* <Image
                        width={60}
                        height={60}
                        src="/img/user-2.jpg"
                        alt="image"
                        className=" w-full h-full object-fit-cover"
                      /> */}
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

const UserIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>
  );
};