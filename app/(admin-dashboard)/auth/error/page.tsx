"use client";
import Footer from "@/components/vendor-dashboard/Vendor.Footer";
import Image from "next/image";
import Link from "next/link";
import errorImg from "@/public/img/error-img.png";

const Page = () => {
  return (
    <div className="bg-[var(--bg-2)]">
      <div className="flex items-center justify-between flex-wrap px-3 py-5 md:p-[30px] gap-5 lg:p-[60px] bg-[var(--dark)]">
        <h2 className="h2 text-white">404 Error </h2>
      </div>
      {/* statisticts */}
      <section className="grid z-[1] grid-cols-12 gap-4 mb-6 lg:gap-6 px-3 md:px-6 bg-[var(--bg-2)] relative after:absolute after:bg-[var(--dark)] after:w-full after:h-[60px] after:top-0 after:left-0 after:z-[-1] pb-10 xxl:pb-0">
        <div className="col-span-12">
          <div className="py-3 md:p-6 lg:p-10 rounded-2xl bg-white">
            <div className="grid grid-cols-12 gap-6 mx-3">
              <div className="col-span-12 lg:col-span-6">
                <div className="bg-[var(--bg-1)] text-center py-20 md:py-28 px-4 md:px-10 xl:px-14 flex flex-col items-center justify-center border rounded-2xl">
                  <h2 className="h2 mb-7">Oops! Page Not Found</h2>
                  <p className="mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Link href="/" className="btn-primary">
                    Back To Home
                  </Link>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <Image
                  src={errorImg}
                  className="w-full xxl:mr-[-200px]"
                  alt=""
                />
              </div>
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
