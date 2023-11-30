"use client";
import CustomSwitch from "@/components/Switch";
import Footer from "@/components/vendor-dashboard/Vendor.Footer";
import { Tab } from "@headlessui/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Page = () => {
  return (
    <div className="bg-[var(--bg-2)]">
      <div className="flex items-center justify-between flex-wrap px-3 py-5 md:p-[30px] gap-5 lg:p-[60px] bg-[var(--dark)]">
        <h2 className="h2 text-white">Payment Info </h2>
      </div>
      {/* statisticts */}
      <section className="grid z-[1] grid-cols-12 gap-4 mb-6 lg:gap-6 px-3 md:px-6 bg-[var(--bg-2)] relative after:absolute after:bg-[var(--dark)] after:w-full after:h-[60px] after:top-0 after:left-0 after:z-[-1] pb-10 xxl:pb-0">
        <div className="col-span-12">
          <div className=" p-4 md:p-6 lg:p-10 rounded-2xl bg-white">
            <Tab.Group>
              <Tab.List className="flex flex-wrap gap-4 border rounded-2xl max-w-max p-4">
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "focus:outline-none flex items-center gap-1",
                      selected ? "text-primary" : ""
                    )
                  }>
                  <InformationCircleIcon className="w-5 h-5" />
                  Basic Information
                </Tab>{" "}
                |
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "focus:outline-none flex items-center gap-1",
                      selected ? "text-primary" : ""
                    )
                  }>
                  <InformationCircleIcon className="w-5 h-5" />
                  Agent Information
                </Tab>
              </Tab.List>
              <Tab.Panels className="mt-5">
                <Tab.Panel>
                  <form className="grid grid-cols-2 gap-4 lg:gap-y-0">
                    <div className="col-span-2 lg:col-span-1">
                      <p className="py-4 text-xl font-medium">
                        Guest Checkout :
                      </p>
                      <div className="bg-[var(--secondary)] rounded-full p-3 inline-block">
                        <select className="bg-transparent font-medium focus:outline-none">
                          <option value="active">Activated</option>
                          <option value="inactive">Deactivated</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                      <p className="py-4 text-xl font-medium">Discuss :</p>
                      <div className="bg-[var(--tertiary)] rounded-full p-3 inline-block">
                        <select className="bg-transparent font-medium focus:outline-none">
                          <option value="inactive">Deactivated</option>
                          <option value="active">Activated</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <label
                        htmlFor="currency"
                        className="py-4 inline-block text-base sm:text-lg lg:text-xl font-medium">
                        Currency Format :
                      </label>
                      <input
                        type="text"
                        id="currency"
                        placeholder="Placewise - Booking Website"
                        className="w-full border py-3 px-3 lg:px-6 rounded-md focus:outline-none focus:border focus:border-primary outline-1"
                      />
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                      <label
                        htmlFor="theme"
                        className="py-4 inline-block text-base sm:text-lg lg:text-xl font-medium">
                        Decimal Separator :
                      </label>
                      <input
                        type="text"
                        id="theme"
                        placeholder="Dot(.)"
                        className="w-full border py-3 px-3 lg:px-6 rounded-md focus:outline-none focus:border focus:border-primary outline-1"
                      />
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                      <label
                        htmlFor="secondary"
                        className="py-4 inline-block text-base sm:text-lg lg:text-xl font-medium">
                        Thousand Seperator :
                      </label>
                      <input
                        type="text"
                        id="secondary"
                        placeholder="Comma(,)"
                        className="w-full border py-3 px-3 lg:px-6 rounded-md focus:outline-none focus:border focus:border-primary outline-1"
                      />
                    </div>

                    <div className="col-span-2">
                      <label
                        htmlFor="withdraw fee"
                        className="py-4 inline-block text-base sm:text-lg lg:text-xl font-medium">
                        Withdraw Fee :
                      </label>
                      <input
                        type="text"
                        id="withdraw fee"
                        placeholder="4"
                        className="w-full border py-3 px-3 lg:px-6 rounded-md focus:outline-none focus:border focus:border-primary outline-1"
                      />
                    </div>
                    <div className="col-span-2">
                      <label
                        htmlFor="withdraw charge"
                        className="py-4 inline-block text-base sm:text-lg lg:text-xl font-medium">
                        Withdraw Charge(%) :
                      </label>
                      <input
                        type="text"
                        id="withdraw charge"
                        placeholder="3"
                        className="w-full border py-3 px-3 lg:px-6 rounded-md focus:outline-none focus:border focus:border-primary outline-1"
                      />
                    </div>
                    <div className="flex items-center gap-4">
                      <Link href="#" className="btn-primary mt-8">
                        Save
                      </Link>
                      <Link href="#" className="btn-outline mt-8">
                        Cancel
                      </Link>
                    </div>
                  </form>
                </Tab.Panel>
                <Tab.Panel className="tab-pane fade" id="enquiry-list">
                  <form className="grid grid-cols-2 gap-4 lg:gap-y-0">
                    <div className="col-span-2">
                      <label
                        htmlFor="fixed-commission"
                        className="py-4 inline-block text-base sm:text-lg lg:text-xl font-medium">
                        Fixed Commission :
                      </label>
                      <input
                        type="text"
                        id="fixed-commission"
                        placeholder="Ex : 9"
                        className="w-full border py-3 px-3 lg:px-6 rounded-md focus:outline-none focus:border focus:border-primary outline-1"
                      />
                      <p className="text-sm mt-3">
                        Fixed Commission Charge(Product Price + Commission)
                      </p>
                    </div>
                    <div className="col-span-2">
                      <label
                        htmlFor="percentage"
                        className="py-4 inline-block text-base sm:text-lg lg:text-xl font-medium">
                        Percentage Commission(%) :
                      </label>
                      <input
                        type="text"
                        id="percentage"
                        placeholder="Ex: 7"
                        className="w-full border py-3 px-3 lg:px-6 rounded-md focus:outline-none focus:border focus:border-primary outline-1"
                      />
                      <p className="text-sm mt-3">
                        Percentage Commission Charge(Product Price +
                        Commission(%)
                      </p>
                    </div>
                    <div className="mt-4 col-span-2">
                      <p className="text-xl font-medium mb-4">
                        Multiple Shipping :{" "}
                      </p>
                      <CustomSwitch />
                    </div>
                    <div className="mt-4 col-span-2">
                      <p className="text-xl font-medium mb-4">
                        Shipping Information For Vendor :{" "}
                      </p>
                      <CustomSwitch />
                    </div>
                    <div className="flex items-center gap-4">
                      <Link href="#" className="btn-primary mt-8">
                        Save
                      </Link>
                      <Link href="#" className="btn-outline mt-8">
                        Cancel
                      </Link>
                    </div>
                  </form>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
