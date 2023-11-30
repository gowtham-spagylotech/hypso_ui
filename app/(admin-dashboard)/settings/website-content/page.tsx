"use client";
import Footer from "@/components/vendor-dashboard/Vendor.Footer";
import Image from "next/image";
import Link from "next/link";
const Page = () => {
  return (
    <div className="bg-[var(--bg-2)]">
      <div className="flex items-center justify-between flex-wrap px-3 py-5 md:p-[30px] gap-5 lg:p-[60px] bg-[var(--dark)]">
        <h2 className="h2 text-white">Website Content </h2>
      </div>
      {/* statisticts */}
      <section className="grid z-[1] grid-cols-12 gap-4 mb-6 lg:gap-6 px-3 md:px-6 bg-[var(--bg-2)] relative after:absolute after:bg-[var(--dark)] after:w-full after:h-[60px] after:top-0 after:left-0 after:z-[-1] pb-10 xxl:pb-0">
        <div className="col-span-12">
          <div className=" p-4 md:p-6 lg:p-10 rounded-2xl bg-white">
            <h3 className="border-b h3 pb-6">Website Contents</h3>
            <form className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label
                  htmlFor="name"
                  className="py-4 inline-block text-base sm:text-lg lg:text-xl font-medium">
                  Website Title :
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Placewise - Booking Website"
                  className="w-full border py-3 px-3 lg:px-6 rounded-md focus:outline-none focus:border focus:border-primary outline-1"
                />
              </div>
              <div className="col-span-2 lg:col-span-1">
                <label
                  htmlFor="theme"
                  className="py-4 inline-block text-base sm:text-lg lg:text-xl font-medium">
                  Theme Color :
                </label>
                <input
                  type="text"
                  id="theme"
                  placeholder="#322ead"
                  className="w-full border py-3 px-3 lg:px-6 rounded-md focus:outline-none focus:border focus:border-primary outline-1"
                />
              </div>
              <div className="col-span-2 lg:col-span-1">
                <label
                  htmlFor="secondary"
                  className="py-4 inline-block text-base sm:text-lg lg:text-xl font-medium">
                  Secondary Color :
                </label>
                <input
                  type="text"
                  id="secondary"
                  placeholder="#322ead"
                  className="w-full border py-3 px-3 lg:px-6 rounded-md focus:outline-none focus:border focus:border-primary outline-1"
                />
              </div>
              <div className="col-span-2 lg:col-span-1">
                <p className="py-4 text-xl font-medium">
                  Sign Up Verification :
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
                  htmlFor="name"
                  className="py-4 inline-block text-base sm:text-lg lg:text-xl font-medium">
                  Discus Website Short Name :
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Text"
                  className="w-full border py-3 px-3 lg:px-6 rounded-md focus:outline-none focus:border focus:border-primary outline-1"
                />
              </div>
            </form>
            <Link href="#" className="btn-primary mt-8">
              Save
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
