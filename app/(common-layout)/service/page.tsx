"use client";
import SubHeadingBtn from "@/components/SubHeadingBtn";
import Faq from "@/components/home-1/Faq";
import Counter from "@/components/home-2/Counter";
import Explore from "@/components/home-2/Explore";
import { services } from "@/public/data/allservice";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Page = () => {
  return (
    <main>
      <section className="py-[60px] lg:py-[120px] overflow-hidden px-3">
        <div>
          <div className="container">
            <div className="max-w-[630px] mx-auto flex flex-col items-center text-center">
              <SubHeadingBtn
                text="Services"
                classes="bg-[var(--primary-light)]"
              />
              <h2 className="h2 mt-3">Our Services</h2>
              <p className="text-neutral-600 pt-5 pb-8 lg:pb-14">
                Real estate can be bought, sold, leased, or rented, and can be a
                valuable investment opportunity. The value of real estate can
                be...
              </p>
            </div>
            <div className="grid grid-cols-12 gap-4 lg:gap-6">
              {services.map(({ id, description, icon, title }) => (
                <div
                  key={id}
                  className="col-span-12 md:col-span-6 lg:col-span-4 group duration-300">
                  <Link
                    href="/service-details"
                    className={`duration-300 inline-block bg-white group-hover:bg-primary rounded-2xl p-6 px-xl-10 py-xl-15`}>
                    <span
                      className={`w-20 h-20 grid place-content-center rounded-full  ${
                        id == 1 || id == 6 || id == 8 ? "bg-[#EBEBFD]" : ""
                      } ${
                        id == 2 || id == 4 || id == 9 ? "bg-[#EBFBF2]" : ""
                      } ${
                        id == 3 || id == 5 || id == 7 ? "bg-[#FFF9ED]" : ""
                      }`}>
                      {icon}
                    </span>
                    <h4 className="mt-6 mb-4 duration-300 text-2xl font-semibold group-hover:text-white">
                      {" "}
                      {title}{" "}
                    </h4>
                    <p className="mb-10 duration-300 group-hover:text-white">
                      {description}{" "}
                    </p>
                    <span className="group-hover:bg-[var(--tertiary)] duration-300 grid place-content-center w-12 h-12 rounded-full border border-[var(--primary)] text-primary transition">
                      <ArrowUpRightIcon className="w-5 h-5" />
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="z-10 relative mt-[110px] after:bg-[url('/img/cta-bg.png')] after:absolute after:left-0 3xl:after:left-[12%] 4xl:after:left-[16%] after:w-[98%] after:mx-auto lg:after:w-[84%] after:h-full after:right-0 after:bottom-0 after:bg-[#c2c3f7]">
          <div className="container py-[60px] z-20 relative after:absolute lg:after:bg-[url('/img/cta-img.png')] after:bg-right-bottom after:bg-no-repeat after:w-full after:h-full after:bottom-0">
            <div className="xl:pl-[90px] px-3">
              <SubHeadingBtn text="Call To Action" classes="bg-white" />
              <h2 className="h2 mt-4 mb-8 max-w-[600px]">
                Find your dream property with our expert help
              </h2>
              <div className="max-w-max">
                <Link href="#" className="btn-primary flex items-center gap-2">
                  Contact Us{" "}
                  <i className="las la-long-arrow-alt-right text-xl"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- explore--> */}
      <Explore />
      {/* Counter */}
      <Counter />
      {/* Faq */}
      <Faq />
    </main>
  );
};

export default Page;
