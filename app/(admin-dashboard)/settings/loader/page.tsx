"use client";
import CustomSwitch from "@/components/Switch";
import Footer from "@/components/vendor-dashboard/Vendor.Footer";
import {
  CloudArrowUpIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
const Page = () => {
  return (
    <div className="bg-[var(--bg-2)]">
      <div className="flex items-center justify-between flex-wrap px-3 py-5 md:p-[30px] gap-5 lg:p-[60px] bg-[var(--dark)]">
        <h2 className="h2 text-white">Loader </h2>
      </div>
      {/* statisticts */}
      <section className="grid z-[1] grid-cols-12 gap-4 mb-6 lg:gap-6 px-3 md:px-6 bg-[var(--bg-2)] relative after:absolute after:bg-[var(--dark)] after:w-full after:h-[60px] after:top-0 after:left-0 after:z-[-1] pb-10 xxl:pb-0">
        <div className="col-span-12">
          <div className=" p-4 md:p-6 lg:p-10 rounded-2xl bg-white">
            <h3 className="border-b h3 pb-6">Loader</h3>
            <div className="py-4 ">
              <span className="flex items-center gap-2">
                Activate : <CustomSwitch />
              </span>
            </div>
            <div className="py-5">
              <Image
                src="/img/loader.png"
                width={100}
                height={100}
                alt="logo"
              />
            </div>
            <div className="flex items-center justify-center border-dashed rounded-2xl w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full cursor-pointer bg-[var(--bg-2)] rounded-2xl border border-dashed px-3">
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
