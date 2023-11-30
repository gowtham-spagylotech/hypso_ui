"use client";
import CheckboxCustom from "@/components/Checkbox";
import CustomRangeSlider from "@/components/RangeSlider";
import { cabdeparturetimes } from "@/public/data/cabdeparturetime";
import { cabtypes } from "@/public/data/cablistingcartypes";
import {
  ArrowPathIcon,
  ListBulletIcon,
  MapPinIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
type RadioOption = "rent" | "buy" | "sell";
export default function Layout({ children }: { children: React.ReactNode }) {
  const [Option, setOption] = useState<RadioOption>("rent");
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOption(event.target.value as RadioOption);
  };
  const path = usePathname();
  return (
    <>
      <div className="py-[30px] lg:py-[60px] bg-[var(--bg-2)] px-3">
        <div className="container">
          <div className="grid grid-cols-12 gap-4 lg:gap-6">
            <div className="col-span-12 lg:col-span-4 order-2 lg:order-1">
              <div className="p-4 lg:py-6 lg:px-8 bg-white rounded-2xl shadow-lg">
                <h4 className="mb-0 text-2xl font-semibold"> Filter </h4>
                <div className="border-t border-dashed my-6"></div>
                <div className="flex items-center justify-between rounded-full border border-neutral-40 bg-[var(--bg-2)] px-5 py-2">
                  <input
                    type="text"
                    className="w-full bg-transparent border-0 focus:outline-none"
                    placeholder="Search by car name"
                  />
                  <button
                    type="button"
                    className="border-0 bg-transparent p-0 lh-1">
                    <span className="material-symbols-outlined mat-icon clr-neutral-600">
                      search
                    </span>
                  </button>
                </div>
                <div className="border-t border-dashed my-6"></div>
                <p className="mb-4 text-[var(--neutral-700)] text-xl font-medium">
                  Category
                </p>
                <ul className="flex flex-wrap items-center gap-6">
                  <li>
                    <div className="flex items-center gap-2">
                      <input
                        className="accent-[var(--primary)] scale-125"
                        type="radio"
                        name="property-type"
                        id="rent-category"
                        value={"rent"}
                        onChange={handleOptionChange}
                        checked={Option === "rent"}
                      />
                      <label
                        className="inline-block text-lg font-medium cursor-pointer"
                        htmlFor="rent-category">
                        Rent
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <input
                        className="accent-[var(--primary)] scale-125"
                        type="radio"
                        name="property-type"
                        id="buy-category"
                        value={"buy"}
                        onChange={handleOptionChange}
                        checked={Option === "buy"}
                      />
                      <label
                        className="inline-block text-lg font-medium cursor-pointer"
                        htmlFor="buy-category">
                        Buy
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2">
                      <input
                        className="accent-[var(--primary)] scale-125"
                        type="radio"
                        name="property-type"
                        id="sell-category"
                        value={"sell"}
                        onChange={handleOptionChange}
                        checked={Option === "sell"}
                      />
                      <label
                        className="inline-block text-lg font-medium cursor-pointer"
                        htmlFor="sell-category">
                        Sell
                      </label>
                    </div>
                  </li>
                </ul>
                <div className="border-t border-dashed my-6"></div>
                <p className="mb-4 text-[var(--neutral-700)] text-xl font-medium shrink-0">
                  Car Types
                </p>
                <ul className="flex flex-col gap-3">
                  {cabtypes.map(({ id, number, title }) => (
                    <li key={id} className="flex justify-between items-center">
                      <CheckboxCustom label={title} />
                      <span>{number}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-dashed my-6"></div>
                <p className="mb-4 text-[var(--neutral-700)] text-xl font-medium">
                  Pricing scale
                </p>
                <CustomRangeSlider />
                <div className="border-t border-dashed my-6"></div>
                <p className="mb-4 text-[var(--neutral-700)] text-xl font-medium">
                  Departure Time
                </p>
                <ul className="flex flex-col gap-3">
                  {cabdeparturetimes.map(({ id, time, title }) => (
                    <li key={id} className="flex justify-between items-center">
                      <CheckboxCustom label={title} />
                      <span>{time}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-dashed my-6"></div>
                <p className="mb-4 text-[var(--neutral-700)] text-xl font-medium">
                  Bags
                </p>
                <ul className="flex flex-col gap-3">
                  <li className="flex justify-between items-center gap-3">
                    <CheckboxCustom label="1 to 2 bags" />
                    <span>122</span>
                  </li>
                  <li className="flex justify-between items-center gap-3">
                    <CheckboxCustom label="3 to 4 bags" />
                    <span>65</span>
                  </li>
                  <li className="flex justify-between items-center gap-3">
                    <CheckboxCustom label="5 or more" />
                    <span>147</span>
                  </li>
                </ul>
                <div className="border-t border-dashed my-6"></div>
                <p className="mb-4 text-[var(--neutral-700)] text-xl font-medium">
                  Payment type
                </p>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12">
                    <ul className="flex flex-col gap-4">
                      <li className="flex items-center justify-between">
                        <CheckboxCustom label="Pay Now" />
                      </li>
                      <li className="flex items-center justify-between">
                        <CheckboxCustom label="Pay at Counter" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-dashed my-6"></div>
                <Link
                  href="#"
                  className="btn-outline flex justify-center gap-2 items-center text-primary font-semibold">
                  <ArrowPathIcon className="w-5 h-5" />
                  Reset Filters
                </Link>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-8 order-1 lg:order-2">
              <div className="grid grid-cols-12 gap-4 lg:gap-6">
                <div className="col-span-12">
                  <div className="bg-white rounded-lg py-2 px-6 shadow-lg">
                    <ul className="flex justify-between items-center flex-wrap gap-3 ">
                      <li className="hidden xl:block">
                        <p className="mb-0 clr-neutral-500">
                          Showing 5 of 20 Results
                        </p>
                      </li>
                      <li className="flex-grow">
                        <ul className="flex flex-wrap justify-center justify-content-lg-start justify-content-xl-center gap-4">
                          <li>
                            <Link
                              href="/cab-listing-grid"
                              className={`link flex items-center gap-2 clr-neutral-500 hover:text-primary ${
                                path === "/cab-listing-grid" && "text-primary"
                              }`}>
                              <Squares2X2Icon className="w-5 h-5" />
                              <span className="inline-block font-medium">
                                Grid
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/cab-listing"
                              className={`link flex items-center gap-2 clr-neutral-500 hover:text-primary ${
                                path === "/cab-listing" && "text-primary"
                              }`}>
                              <ListBulletIcon className="w-5 h-5" />
                              <span className="inline-block font-medium">
                                List
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="cab-listing-map"
                              className={`link flex items-center gap-2 clr-neutral-500 hover:text-primary ${
                                path === "/cab-listing-map" && "text-primary"
                              }`}>
                              <MapPinIcon className="w-5 h-5" />
                              <span className="inline-block font-medium">
                                Map
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="hidden lg:flex items-center">
                        <p className="mb-0 clr-neutral-500 flex-grow whitespace-nowrap">
                          Sort By :
                        </p>
                        <select className="w-full bg-transparent px-5 py-2 focus:outline-none border-0">
                          <option>latest</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </li>
                    </ul>
                  </div>
                </div>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
