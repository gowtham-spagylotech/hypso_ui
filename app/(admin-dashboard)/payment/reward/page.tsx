"use client";
import CustomSwitch from "@/components/Switch";
import Footer from "@/components/vendor-dashboard/Vendor.Footer";
import { Tab } from "@headlessui/react";
import {
  ArrowPathIcon,
  InformationCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Page = () => {
  return (
    <div className="bg-[var(--bg-2)]">
      <div className="flex items-center justify-between flex-wrap px-3 py-5 md:p-[30px] gap-5 lg:p-[60px] bg-[var(--dark)]">
        <h2 className="h2 text-white">Reward Info </h2>
      </div>
      {/* statisticts */}
      <section className="grid z-[1] grid-cols-12 gap-4 mb-6 lg:gap-6 px-3 md:px-6 bg-[var(--bg-2)] relative after:absolute after:bg-[var(--dark)] after:w-full after:h-[60px] after:top-0 after:left-0 after:z-[-1] pb-10 xxl:pb-0">
        <div className="col-span-12">
          <div className=" p-4 md:p-6 lg:p-10 rounded-2xl bg-white">
            <h3 className="h3">Reward Info</h3>
            <form className="grid grid-cols-12 gap-4 lg:gap-y-0">
              <div className="col-span-12 lg:col-span-4">
                <p className="py-4 text-xl font-medium">Guest Checkout :</p>
                <div className="bg-[var(--secondary)] rounded-full p-3 inline-block">
                  <select className="bg-transparent font-medium focus:outline-none">
                    <option value="active">Activated</option>
                    <option value="inactive">Deactivated</option>
                  </select>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-4">
                <label
                  htmlFor="r-point"
                  className="py-4 inline-block text-base sm:text-lg lg:text-xl font-medium">
                  Reward Point Number :
                </label>
                <input
                  type="text"
                  id="r-point"
                  placeholder="9"
                  className="w-full border py-3 px-3 lg:px-6 rounded-md focus:outline-none focus:border focus:border-primary outline-1"
                />
              </div>
              <div className="col-span-12 lg:col-span-4">
                <label
                  htmlFor="r-point"
                  className="py-4 inline-block text-base sm:text-lg lg:text-xl font-medium">
                  To (USD) Dolar ($) :
                </label>
                <input
                  type="text"
                  id="r-point"
                  placeholder="11"
                  className="w-full border py-3 px-3 lg:px-6 rounded-md focus:outline-none focus:border focus:border-primary outline-1"
                />
              </div>
              <div className="col-span-12 lg:col-span-6">
                <label
                  htmlFor="amount"
                  className="py-4 inline-block text-base sm:text-lg lg:text-xl font-medium">
                  Amount :
                </label>
                <input
                  type="text"
                  id="amount"
                  placeholder="100"
                  className="w-full border py-3 px-3 lg:px-6 rounded-md focus:outline-none focus:border focus:border-primary outline-1"
                />
              </div>
              <div className="col-span-12 lg:col-span-6">
                <label
                  htmlFor="Reward"
                  className="py-4 inline-block text-base sm:text-lg lg:text-xl font-medium">
                  Reward :
                </label>
                <input
                  type="text"
                  id="Reward"
                  placeholder="14"
                  className="w-full border py-3 px-3 lg:px-6 rounded-md focus:outline-none focus:border focus:border-primary outline-1"
                />
              </div>
              <div className="col-span-12 lg:col-span-6">
                <label
                  htmlFor="amount2"
                  className="py-4 inline-block text-base sm:text-lg lg:text-xl font-medium">
                  Amount :
                </label>
                <input
                  type="text"
                  id="amount2"
                  placeholder="80"
                  className="w-full border py-3 px-3 lg:px-6 rounded-md focus:outline-none focus:border focus:border-primary outline-1"
                />
              </div>
              <div className="col-span-12 lg:col-span-6">
                <label
                  htmlFor="Reward2"
                  className="py-4 inline-block text-base sm:text-lg lg:text-xl font-medium">
                  Reward :
                </label>
                <input
                  type="text"
                  id="Reward2"
                  placeholder="12"
                  className="w-full border py-3 px-3 lg:px-6 rounded-md focus:outline-none focus:border focus:border-primary outline-1"
                />
              </div>
              <div className="flex flex-wrap col-span-12 items-center gap-4">
                <Link href="#" className="btn-primary mt-8">
                  <PlusCircleIcon className="w-5 h-5" /> Add More Field
                </Link>
                <Link href="#" className="btn-outline mt-8">
                  <ArrowPathIcon className="w-5 h-5" /> Updated Reward
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
