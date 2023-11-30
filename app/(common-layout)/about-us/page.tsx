"use client";
import aboutel1 from "@/public/img/about-el-1.png";
import aboutel2 from "@/public/img/about-el-2.png";
import Image from "next/image";
import WorkingProcess from "@/components/home-6/WorkingProcess";
import Explore from "@/components/home-2/Explore";
import Counter from "@/components/home-2/Counter";
import Author from "@/components/home-1/Authors";
import Benefit from "@/components/home-1/Benefit";
import Testimonial from "@/components/home-2/Testimonial";
import MobileApp from "@/components/home-2/MobileApp";
import Faq from "@/components/home-1/Faq";
import Link from "next/link";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import SubHeadingBtn from "@/components/SubHeadingBtn";
import { Tab } from "@headlessui/react";

const page = () => {
  return (
    <main>
      <section className="py-[60px] lg:py-[120px] bg-[var(--bg-2)] relative z-[1] px-3">
        <Image
          src={aboutel1}
          alt="image"
          className="absolute hidden xl:block top-20 right-20"
        />
        <Image
          src={aboutel2}
          alt="image"
          className="absolute hidden xl:block left-20 bottom-20"
        />
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6">
              <div className="relative text-center  pb-lg-0">
                <Image
                  width={526}
                  height={499}
                  src="/img/about-img.png"
                  alt="image"
                  className=""
                />
                <div className="grid place-content-center w-[200px] h-[200px] rounded-full bg-white shadow-lg absolute top-[30%] left-[25%]">
                  <div className="w-10 h-10 rounded bg-[var(--primary-light)] grid place-content-center text-primary mx-auto">
                    <HandThumbUpIcon className="h-5 w-5" />
                  </div>
                  <h3 className="text-center text-primary mt-3 h3 mb-1">
                    7.5K+
                  </h3>
                  <p className="mb-0 text-sm text-center">
                    {" "}
                    Clients Satisfied{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-10 lg:col-span-6 mx-auto lg:ml-0">
              <SubHeadingBtn
                text="Category"
                classes="bg-[var(--primary-light)]"
              />
              <h2 className="mt-4 mb-10 h2">
                We build modern spaces and Apartment property
              </h2>
              <Tab.Group>
                <Tab.List className="flex gap-3 about-tab mb-7">
                  <Tab>Residential</Tab> |<Tab>Apartment</Tab> |
                  <Tab>Commercial</Tab>
                </Tab.List>

                <Tab.Panels className="mb-8">
                  <Tab.Panel>
                    <p className="mb-0">
                      If you&apos;re interested in buying a residential
                      property, you may want to consider factors such as
                      location, price of the home.
                    </p>
                  </Tab.Panel>
                  <Tab.Panel>
                    <p className="mb-0">
                      If you&apos;re interested in buying a residential
                      property, you may want to consider factors such as
                      location, price of the home.
                    </p>
                  </Tab.Panel>
                  <Tab.Panel>
                    <p className="mb-0">
                      If you&apos;re interested in buying a residential
                      property, you may want to consider factors such as
                      location, price of the home.
                    </p>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
              <ul className="columns-1 md:columns-2 flex-wrap mb-10">
                <li className="py-2">
                  <div className="flex items-center gap-2">
                    <i className="text-2xl text-primary las la-check-square"></i>
                    <p className="mb-0"> Find your dream home </p>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center gap-2">
                    <i className="text-2xl text-[var(--secondary-500)] las la-check-square"></i>
                    <p className="mb-0"> 100% Safe transactions </p>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center gap-2">
                    <i className="text-2xl text-[var(--tertiary)] las la-check-square"></i>
                    <p className="mb-0"> Best quality guarantee </p>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center gap-2">
                    <i className="text-2xl text-primary las la-check-square"></i>
                    <p className="mb-0"> Very low cost on taxes </p>
                  </div>
                </li>
              </ul>
              <div className="flex flex-wrap items-center gap-4 gap-md-10">
                <Link
                  href="service"
                  className="link inline-flex items-center gap-2 py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-medium">
                  <span className="inline-block"> Read More </span>
                  <span className="material-symbols-outlined mat-icon font-200">
                    trending_flat
                  </span>
                </Link>
                <div className="flex items-center gap-2 gap-md-4">
                  <div className="grid place-content-center w-12 h-12 rounded-full bg-[var(--primary-light)] text-primary shrink-0">
                    <i className="las la-headset text-2xl"></i>
                  </div>
                  <div className="flex-grow">
                    <p className="mb-1"> Support us </p>
                    <p className="mb-0 text-lg font-medium"> (704) 555-0127 </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How it work section */}
      <WorkingProcess />

      {/* Why choose us */}
      <div className="py-[60px] md:py-[120px] bg-[var(--bg-2)] relative z-[1] px-3">
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6">
              <div className="relative z-[1] text-center text-xxl-start  pb-lg-0">
                <Image
                  width={526}
                  height={633}
                  src="/img/why-choose-img.png"
                  alt="image"
                  className="z-[1] relative"
                />
                <Image
                  width={62}
                  height={62}
                  src="/img/why-choose-el-1.png"
                  alt="image"
                  className="absolute top-[35%] -left-10 hidden xl:block"
                />
                <Image
                  width={201}
                  height={227}
                  src="/img/why-choose-el-2.png"
                  alt="image"
                  className="absolute -left-28 -bottom-28 hidden xl:block"
                />
                <div className="inline-flex items-center gap-4 rounded p-8 bg-primary z-10 absolute top-12 left-0 xxl:-left-24">
                  <div className="w-12 h-12 rounded bg-white grid place-content-center text-primary shrink-0">
                    <i className="las la-thumbs-up text-[32px]"></i>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-white mb-0 h3 text-start">25+</h3>
                    <p className="mb-0 text-sm text-white text-start">
                      years experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <SubHeadingBtn text="Why choose us" classes="bg-white" />
              <h2 className="mt-4 h2 mb-6">
                Elevate Your Living Experience with Our Best Properties
              </h2>
              <p className="mb-10 clr-neutral-500">
                Real estate can be bought, sold, leased, or rented, and can be a
                valuable investment opportunity. The value of real estate can
                be...
              </p>
              <ul className="flex flex-col gap-6 mb-10">
                <li>
                  <div className="flex gap-6 align-items-start">
                    <div className="shrink-0">
                      <i className="las text-[40px] la-building text-primary"></i>
                    </div>
                    <div className="flex-grow">
                      <h4 className="mb-3 text-2xl font-semibold">
                        {" "}
                        Buy a Property{" "}
                      </h4>
                      <p className="mb-0 clr-neutral-500">
                        Selling a property&quot; refers to the process of
                        transferring the ownership
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-6 align-items-start">
                    <div className="shrink-0">
                      <i className="las text-[40px] la-store text-[var(--secondary-500)]"></i>
                    </div>
                    <div className="flex-grow">
                      <h4 className="mb-3 text-2xl font-semibold">
                        {" "}
                        Rent a Property{" "}
                      </h4>
                      <p className="mb-0 clr-neutral-500">
                        Renting a property typically refers to the process of
                        paying a landlord
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-6 align-items-start">
                    <div className="shrink-0">
                      <i className="las text-[40px] la-city text-[#9C742B]"></i>
                    </div>
                    <div className="flex-grow">
                      <h4 className="mb-3 text-2xl font-semibold">
                        {" "}
                        Sell a Property{" "}
                      </h4>
                      <p className="mb-0 clr-neutral-500">
                        Selling a property typically refers to the process of
                        transferring
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <Link
                href="service"
                className="link inline-flex items-center gap-2 py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-medium">
                <span className="inline-block"> Read More </span>
                <span className="material-symbols-outlined mat-icon font-200">
                  trending_flat
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Explore properties */}
      <Explore />
      {/* Counter */}
      <Counter />
      {/* Authors */}
      <Author />
      {/* Explore section */}
      <div className="pt-120">
        <Benefit />
      </div>
      {/* Testimonail */}
      <Testimonial />
      {/* Mobile app */}
      <MobileApp />
      {/* Faq  */}
      <Faq />
    </main>
  );
};

export default page;
