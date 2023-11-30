"use client";
import Footer from "@/components/vendor-dashboard/Vendor.Footer";
import Image from "next/image";
import Link from "next/link";
const Page = () => {
  return (
    <div className="bg-[var(--bg-2)]">
      <div className="flex items-center justify-between flex-wrap px-3 py-5 md:p-[30px] gap-5 lg:p-[60px] bg-[var(--dark)]">
        <h2 className="h2 text-white">Website Footer </h2>
      </div>
      {/* statisticts */}
      <section className="grid z-[1] grid-cols-12 gap-4 mb-6 lg:gap-6 px-3 md:px-6 bg-[var(--bg-2)] relative after:absolute after:bg-[var(--dark)] after:w-full after:h-[60px] after:top-0 after:left-0 after:z-[-1] pb-10 xxl:pb-0">
        <div className="col-span-12">
          <div className=" p-4 md:p-6 lg:p-10 rounded-2xl bg-white">
            <h3 className="border-b h3 pb-6">Website Footer</h3>
            <form className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label
                  htmlFor="footer"
                  className="py-4 inline-block text-base sm:text-lg lg:text-xl font-medium">
                  Footer Text :
                </label>
                <textarea
                  id="footer"
                  placeholder="Placewise - Booking Website"
                  rows={6}
                  className="w-full border py-3 px-3 lg:px-6 rounded-md focus:outline-none focus:border focus:border-primary outline-1"
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="copyright"
                  className="py-4 inline-block text-base sm:text-lg lg:text-xl font-medium">
                  Copyright Text :
                </label>
                <textarea
                  id="copyright"
                  placeholder="Placewise - Booking Website"
                  rows={6}
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
