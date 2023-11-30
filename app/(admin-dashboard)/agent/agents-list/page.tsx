"use client";
import {
  ArrowDownTrayIcon,
  EllipsisVerticalIcon,
  MapPinIcon,
  PhoneArrowUpRightIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Footer from "@/components/vendor-dashboard/Vendor.Footer";
import Pagination from "@/components/vendor-dashboard/Pagination";
import { SearchIcon } from "@/public/data/icons";
import Image from "next/image";
import { Menu } from "@headlessui/react";
import { agentList } from "@/public/data/agentList";

const Page = () => {
  return (
    <div className="bg-[var(--bg-2)]">
      <div className="flex items-center justify-between flex-wrap px-3 py-5 md:p-[30px] gap-5 lg:p-[60px] bg-[var(--dark)]">
        <h2 className="h2 text-white">Agent List</h2>
        <Link href="/cab/add-new-cab" className="btn-primary">
          <ArrowDownTrayIcon className="w-5 h-5" /> Download List
        </Link>
      </div>

      {/* Recent bookings */}
      <section className="bg-[var(--bg-2)] px-3 lg:px-6 pb-4 lg:pb-6  relative after:absolute after:bg-[var(--dark)] after:w-full after:h-[60px] after:top-0 after:left-0 ">
        <div className=" py-4 lg:py-8 px-4 xxl:p-8 4xl:px-10 border rounded-2xl bg-white z-[1] relative ">
          <div className="flex flex-wrap gap-3 justify-between mb-7">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="h3">New Agents</h3>
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
              <div className="border rounded-full pr-3">
                <select className="p-3 min-w-[100px] rounded-full focus:outline-none">
                  <option value="1">Advanced</option>
                  <option value="2">Delete</option>
                  <option value="3">Publish</option>
                </select>
              </div>
            </form>
          </div>
          <div className="grid grid-cols-12 gap-4 lg:gap-6">
            {agentList.map(
              ({ bookings, follower, id, img, listings, location, name }) => (
                <div
                  key={id}
                  className="col-span-12 md:col-span-6  xl:col-span-4 3xl:col-span-3">
                  <div className="rounded-2xl border h-[290px] bg-[var(--bg-1)] p-4 md:p-6 lg:p-8 group duration-300 flex gap-4 flex-col justify-center items-center">
                    <div className="relative w-full flex justify-center">
                      <Image
                        width={80}
                        height={80}
                        className="rounded-full"
                        src={img}
                        alt="user"
                      />
                      <Menu>
                        <Menu.Button className="bg-[#EBEBFD] absolute top-0 right-0 p-2 rounded-full group-hover:block hidden duration-300">
                          <EllipsisVerticalIcon className="w-6 h-6 text-neutral-700" />
                        </Menu.Button>
                        <Menu.Items className="absolute text-left right-0 mt-2 top-8 min-w-[150px] bg-white rounded-md border py-1">
                          <Menu.Item>
                            <button className="w-full text-left p-2 hover:bg-primary hover:text-white duration-300">
                              Edit
                            </button>
                          </Menu.Item>
                          <Menu.Item>
                            <button className="w-full text-left p-2 hover:bg-primary hover:text-white duration-300">
                              Delete
                            </button>
                          </Menu.Item>
                          <Menu.Item>
                            <button className="w-full text-left p-2 hover:bg-primary hover:text-white duration-300">
                              Block
                            </button>
                          </Menu.Item>
                        </Menu.Items>
                      </Menu>
                    </div>
                    <div className="text-center">
                      <h5 className="text-xl font-semibold mb-2">{name}</h5>
                      <span className="flex items-center gap-1">
                        <MapPinIcon className="w-6 h-6 text-[var(--secondary-500)]" />
                        <span>{location}</span>
                      </span>
                    </div>
                    <div className="flex group-hover:hidden duration-300 divide-x divide-dashed text-center">
                      <div className="px-3 xxl:px-5">
                        <h6 className="font-semibold">{follower}</h6>
                        <span>Followrs</span>
                      </div>
                      <div className="px-3 xxl:px-5">
                        <h6 className="font-semibold">{listings}</h6>
                        <span>Listings</span>
                      </div>
                      <div className="px-3 xxl:px-5">
                        <h6 className="font-semibold">{bookings}</h6>
                        <span>Bookings</span>
                      </div>
                    </div>
                    <div className="justify-around gap-4 group-hover:flex hidden duration-300">
                      <Link
                        href="/agent/agents-details"
                        className="btn-primary">
                        <PlusCircleIcon className="w-5 h-5" />
                        View
                      </Link>
                      <Link
                        href="/agent/agents-details"
                        className="btn-outline">
                        <PhoneArrowUpRightIcon className="w-5 h-5" />
                        Contact
                      </Link>
                    </div>
                  </div>
                </div>
              )
            )}
            <div className="col-span-12">
              <Pagination />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
