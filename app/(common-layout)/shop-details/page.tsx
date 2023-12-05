"use client";
import RecentlyViewed from "@/components/RecentlyViewed";
import { StarIcon } from "@heroicons/react/20/solid";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  ArrowsPointingOutIcon,
  ArrowsRightLeftIcon,
  CalendarDaysIcon,
  ChatBubbleLeftEllipsisIcon,
  ChatBubbleLeftRightIcon,
  CheckIcon,
  ClockIcon,
  HandThumbUpIcon,
  HeartIcon,
  MapIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  CloudArrowUpIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PlayIcon } from "@/public/data/icons";
import ReactPlayer from "react-player";
import { Tab } from "@headlessui/react";
import CheckboxCustom from "@/components/Checkbox";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Page = () => {
  const [playing, setPlaying] = useState(false);

  const Play = () => {
    return (
      <span
        onClick={() => setPlaying(true)}
        className="bg-[var(--tertiary)] w-14 grid place-items-center h-14 rounded-full z-50 cursor-pointer relative">
        <PlayIcon />
      </span>
    );
  };

  return (
    <div className="bg-[var(--bg-2)]">
      <div className="py-4">
        <div className="container-fluid">
          <div className="grid grid-cols-12 gap-4 lg:gap-6 px-3 lg:px-4">
            <div className="col-span-12 lg:col-span-4">
              <div className="grid grid-cols-12 gap-4 lg:gap-6">
                <div className="col-span-12 md:col-span-6">
                  <Link
                    href="/img/property-details-img-1.jpg"
                    className="link property-gallery">
                    <Image
                      width={294}
                      height={287}
                      src="/img/property-details-img-1.jpg"
                      alt="image"
                      className=" g-img w-full"
                    />
                  </Link>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <Link
                    href="/img/property-details-img-2.jpg"
                    className="link property-gallery">
                    <Image
                      width={294}
                      height={287}
                      src="/img/property-details-img-2.jpg"
                      alt="image"
                      className=" g-img w-full"
                    />
                  </Link>
                </div>
                <div className="col-span-12">
                  <Link
                    href="/img/property-details-img-3.jpg"
                    className="link property-gallery">
                    <Image
                      width={610}
                      height={593}
                      src="/img/property-details-img-3.jpg"
                      alt="image"
                      className=" g-img w-full"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <Link
                href="/img/property-details-img-4.jpg"
                className="link property-gallery">
                <Image
                  width={610}
                  height={288}
                  src="/img/property-details-img-4.jpg"
                  alt="image"
                  className=" g-img w-full"
                />
              </Link>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <div className="grid grid-cols-12 gap-4 lg:gap-6">
                <div className="col-span-12">
                  <Link
                    href="/img/property-details-img-5.jpg"
                    className="link property-gallery">
                    <Image
                      width={610}
                      height={288}
                      src="/img/property-details-img-5.jpg"
                      alt="image"
                      className=" g-img w-full"
                    />
                  </Link>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <Link
                    href="/img/property-details-img-6.jpg"
                    className="link property-gallery">
                    <Image
                      width={294}
                      height={287}
                      src="/img/property-details-img-6.jpg"
                      alt="image"
                      className=" g-img w-full"
                    />
                  </Link>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <Link
                    href="/img/property-details-img-7.jpg"
                    className="link property-gallery">
                    <Image
                      width={294}
                      height={287}
                      src="/img/property-details-img-7.jpg"
                      alt="image"
                      className=" g-img w-full"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="grid grid-cols-12 gap-4 lg:gap-6 mt-10 lg:mt-14 px-3">
          <div className="col-span-12 md:col-span-8">
            <div className="mb-6 md:mb-10 lg:mb-14">
              <div className="bg-white rounded-2xl p-3 sm:p-4 lg:py-8 lg:px-5">
                <div className="p-3 sm:p-4 lg:p-6 bg-[var(--bg-1)] rounded-2xl border mb-10">
                  <div className="flex items-center justify-end flex-wrap gap-3">
                    <ul className="flex gap-3 items-center pb-6">
                      <li>
                        <span className="inline-block clr-neutral-600">
                          Share
                        </span>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="link w-8 h-8 grid place-content-center bg-[var(--primary-light)] text-primary rounded-full hover:bg-primary hover:text-white text-xl duration-300">
                          <i className="lab la-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="link w-8 h-8 grid place-content-center bg-[var(--primary-light)] text-primary rounded-full hover:bg-primary hover:text-white text-xl duration-300">
                          <i className="lab la-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="link w-8 h-8 grid place-content-center bg-[var(--primary-light)] text-primary rounded-full hover:bg-primary hover:text-white text-xl duration-300">
                          <i className="lab la-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="link w-8 h-8 grid place-content-center bg-[var(--primary-light)] text-primary rounded-full hover:bg-primary hover:text-white text-xl duration-300">
                          <i className="lab la-linkedin-in"></i>
                        </Link>
                      </li>
                    </ul>
                    <h2 className="mt-4 h2 mb-8 leading-snug">
                      RCE Theaters - 907 S Beckford Dr, Henderson, NC 27536
                    </h2>

                    <ul className="flex flex-wrap items-center gap-4 gap-md-0">
                      <li>
                        <div className="flex items-center gap-2">
                          <MapIcon className="w-5 h-5 text-[var(--secondary)]" />
                          <p className="mb-0"> 3890 Poplar Dr. </p>
                        </div>
                      </li>
                      <li>
                        <p className="mb-0">
                          ID: <span className="text-primary">12546</span>
                        </p>
                      </li>
                      <li>
                        <div className="flex items-center gap-1">
                          <StarIcon className="h-5 w-5 text-[var(--tertiary)]" />
                          <p className="mb-0"> 4.5(66) </p>
                        </div>
                      </li>
                      <li>
                        <p className="mb-0">
                          <span className="clr-neutral-500">Published:</span> Feb
                          9, 23
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="p-3 sm:p-4 md:p-6 bg-[var(--bg-1)] rounded-2xl border border-neutral-40 mb-6 md:mb-10">
                  <h4 className="mb-5 text-2xl font-semibold"> Description </h4>
                  <p className="mb-5 clr-neutral-500">
                    Real estate is typically bought and sold through real estate
                    agents or brokers, who act as intermediaries between buyers
                    and sellers. The real estate industry also includes such as
                    appraisers, inspectors, and attorneys who provide various
                    services related.
                  </p>
                  <Link
                    href="#"
                    className="link flex items-center gap-2 text-primary">
                    <span className="font-semibold inline-block">
                      Read More
                    </span>
                    <i className="las la-long-arrow-alt-right text-xl"></i>
                  </Link>
                </div>
                <div className="p-3 sm:p-4 md:p-6 bg-[var(--bg-1)] rounded-2xl border border-neutral-40 mb-6 md:mb-10">
                  <h4 className="mb-5 text-2xl font-semibold"> Amenities </h4>
                  <div className="mb-10">
                    <div className="grid grid-cols-12">
                      <div className="col-span-12 md:col-span-4 lg:col-span-3">
                        <ul className="flex flex-col gap-2">
                          <li>
                            <div className="flex items-center gap-2">
                              <i className="las la-city text-xl"></i>
                              <span className="inline-block">
                                Air Condition
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-2">
                              <i className="las la-broom text-xl"></i>
                              <span className="inline-block">Laundry Room</span>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-2">
                              <Squares2X2Icon className="w-5 h-5" />
                              <span className="inline-block">Window Cover</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="col-span-12 md:col-span-4 lg:col-span-3">
                        <ul className="flex flex-col gap-2">
                          <li>
                            <div className="flex items-center gap-2">
                              <i className="las la-wifi text-2xl"></i>
                              <span className="inline-block"> Free WiFi </span>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-2">
                              <i className="las la-swimmer text-2xl"></i>
                              <span className="inline-block"> Pool </span>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-2">
                              <i className="las la-dumbbell text-2xl"></i>
                              <span className="inline-block"> Gym </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="col-span-12 md:col-span-4 lg:col-span-3">
                        <ul className="flex flex-col gap-2">
                          <li>
                            <div className="flex items-center gap-2">
                              <i className="lab la-internet-explorer text-2xl"></i>
                              <span className="inline-block"> Internet </span>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-2">
                              <i className="las la-car-side text-2xl"></i>
                              <span className="inline-block">Car Parking</span>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-2">
                              <i className="las la-fire text-2xl"></i>
                              <span className="inline-block"> Heating </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4 col-lg-3">
                        <ul className="flex flex-col gap-2">
                          <li>
                            <div className="flex items-center gap-2">
                              <i className="las la-clock text-2xl"></i>
                              <span className="inline-block whitespace-nowrap">
                                {" "}
                                Alarm{" "}
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-2">
                              <i className="las la-paw text-2xl"></i>
                              <span className="inline-block whitespace-nowrap">
                                {" "}
                                Pets Allow{" "}
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-2">
                              <i className="las la-spa text-2xl"></i>
                              <span className="inline-block whitespace-nowrap">
                                Spa Massage
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <Link href="#" className="btn-outline  font-semibold">
                    Read More
                  </Link>
                </div>

                <div className="p-3 sm:p-4 md:p-6 bg-[var(--bg-1)] rounded-2xl border border-neutral-40 mb-6 md:mb-10">
                  <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
                    <h4 className="mb-0 text-2xl font-semibold"> Location </h4>
                    <Link
                      href="#"
                      className="btn-outline  font-semibold flex gap-2 items-center">
                      View All
                      <ArrowLongRightIcon className="w-5 h-5" />
                    </Link>
                  </div>
                  <div className="w-full">
                    <iframe
                      className="w-full h-[400px] rounded-2xl"
                      src="https://maps.google.com/maps?q=california&t=&z=10&ie=UTF8&iwloc=&output=embed"></iframe>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl py-8 px-5 mb-10 lg:mb-14">
              <div className="flex items-center gap-4 justify-between flex-wrap mb-6 md:mb-10">
                <div className="flex items-center gap-2">
                  <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                  <h3 className="mb-0 h3"> 4.7 (21 reviews) </h3>
                </div>
                <div className="flex items-center gap-2">
                  <p className="mb-0 clr-neutral-500 shrink-0"> Sort By : </p>
                  <div className="border rounded-full pr-3">
                    <select className="w-full bg-transparent px-5 py-3 focus:outline-none">
                      <option>Latest</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--bg-2)] rounded-2xl p-6 mb-8">
                <div className="flex items-center flex-wrap justify-between gap-4 ">
                  <div className="flex gap-5 items-center">
                    <div className="w-15 h-15 shrink-0 rounded-full overflow-hidden">
                      <Image
                        width={60}
                        height={60}
                        src="/img/user-1.jpg"
                        alt="image"
                        className=" w-full h-full object-fit-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <h5 className="mb-1 font-semibold"> Kiss Laura </h5>
                      <p className="mb-0 clr-neutral-500"> Product Designer </p>
                    </div>
                  </div>
                  <div className="text-sm-end">
                    <p className="mb-1"> 09:01 am </p>
                    <p className="mb-0"> Mar 03, 2023 </p>
                  </div>
                </div>
                <div className="border border-dashed my-6"></div>
                <div className="flex gap-1 mb-3">
                  <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                  <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                  <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                  <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                  <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                </div>
                <p className="mb-0 clr-neutral-500">
                  I highly recommend [real estate agent&apos;s name] as a
                  professional and knowledgeable real estate agent. They
                  provided valuable guidance throughout the selling process
                </p>
                <div className="border border-dashed my-6"></div>
                <div className="flex flex-wrap items-center gap-10 mb-6">
                  <div className="flex items-center gap-2 text-primary">
                    <HandThumbUpIcon className="w-5 h-5" />
                    <span className="inline-block"> 178 </span>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <ChatBubbleLeftRightIcon className="w-5 h-5" />
                    <span className="inline-block"> Reply </span>
                  </div>
                </div>
                <div className="flex gap-5 items-center">
                  <div className="w-15 h-15 shrink-0 rounded-full overflow-hidden">
                    <Image
                      width={60}
                      height={60}
                      src="/img/user-2.jpg"
                      alt="image"
                      className=" w-full h-full object-fit-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <input
                      className="border text-base py-4 px-5 rounded-full focus:outline-none w-full"
                      type="text"
                      placeholder="Join the discussion"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-[var(--bg-2)] rounded-2xl p-6 mb-8">
                <div className="flex items-center flex-wrap justify-between gap-4">
                  <div className="flex gap-5 items-center">
                    <div className="w-15 h-15 shrink-0 rounded-full overflow-hidden">
                      <Image
                        width={60}
                        height={60}
                        src="/img/user-3.jpg"
                        alt="image"
                        className=" w-full h-full object-fit-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <h5 className="mb-1 font-semibold"> Kristin Watson </h5>
                      <p className="mb-0 clr-neutral-500"> Product Designer </p>
                    </div>
                  </div>
                  <div className="text-sm-end">
                    <p className="mb-1"> 09:01 am </p>
                    <p className="mb-0"> Mar 03, 2023 </p>
                  </div>
                </div>
                <div className="border border-dashed my-6"></div>
                <div className="flex gap-1 mb-3">
                  <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                  <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                  <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                  <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                  <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                </div>
                <p className="mb-0 clr-neutral-500">
                  I highly recommend [real estate agent&apos;s name] as a
                  professional and knowledgeable real estate agent. They
                  provided valuable guidance throughout the selling process
                </p>
                <div className="border border-dashed my-6"></div>
                <div className="flex flex-wrap items-center gap-10">
                  <div className="flex items-center gap-2 text-primary">
                    <HandThumbUpIcon className="w-5 h-5" />
                    <span className="inline-block"> 178 </span>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <ChatBubbleLeftRightIcon className="w-5 h-5" />
                    <span className="inline-block"> Reply </span>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--bg-2)] rounded-2xl p-6 mb-8">
                <div className="flex items-center flex-wrap justify-between gap-4">
                  <div className="flex gap-5 items-center">
                    <div className="w-15 h-15 shrink-0 rounded-full overflow-hidden">
                      <Image
                        width={60}
                        height={60}
                        src="/img/user-4.jpg"
                        alt="image"
                        className=" w-full h-full object-fit-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <h5 className="mb-1 font-semibold"> Marvin McKinney </h5>
                      <p className="mb-0 clr-neutral-500"> Product Designer </p>
                    </div>
                  </div>
                  <div className="text-sm-end">
                    <p className="mb-1"> 09:01 am </p>
                    <p className="mb-0"> Mar 03, 2023 </p>
                  </div>
                </div>
                <div className="border border-dashed my-6"></div>
                <div className="flex gap-1 mb-3">
                  <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                  <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                  <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                  <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                  <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                </div>
                <p className="mb-0 clr-neutral-500">
                  I highly recommend [real estate agent&apos;s name] as a
                  professional and knowledgeable real estate agent. They
                  provided valuable guidance throughout the selling process
                </p>
                <div className="border border-dashed my-6"></div>
                <div className="flex flex-wrap items-center gap-10">
                  <div className="flex items-center gap-2 text-primary">
                    <HandThumbUpIcon className="w-5 h-5" />
                    <span className="inline-block"> 178 </span>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <ChatBubbleLeftRightIcon className="w-5 h-5" />
                    <span className="inline-block"> Reply </span>
                  </div>
                </div>
              </div>
              <Link
                href="#"
                className="featured-tab link font-semibold clr-primary-400 inline-block py-3 px-6 bg-[var(--primary-light)] hover:bg-primary hover:text-white rounded-full active">
                See All Reviews
              </Link>
            </div>

            <div>
              <div className="bg-white rounded-2xl py-8 px-5">
                <h4 className="mb-0 text-2xl font-semibold">Write a review</h4>
                <div className="border border-dashed my-6"></div>
                <p className="text-xl font-medium mb-3">Rating *</p>
                <div className="flex gap-1 mb-3">
                  <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                  <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                  <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                  <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                  <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                </div>
                <form action="#">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12">
                      <label
                        htmlFor="review-name"
                        className="text-xl font-medium block mb-3">
                        Name *
                      </label>
                      <input
                        type="text"
                        className="w-full bg-[var(--bg-1)] border border-neutral-40 rounded-full py-3 px-5 focus:outline-none"
                        placeholder="Enter Name.."
                        id="review-name"
                      />
                    </div>
                    <div className="col-span-12">
                      <label
                        htmlFor="review-email"
                        className="text-xl font-medium block mb-3">
                        Email *
                      </label>
                      <input
                        type="text"
                        className="w-full bg-[var(--bg-1)] border border-neutral-40 rounded-full py-3 px-5 focus:outline-none"
                        placeholder="Enter Email.."
                        id="review-email"
                      />
                    </div>
                    <div className="col-span-12">
                      <label
                        htmlFor="review-review"
                        className="text-xl font-medium block mb-3">
                        Review *
                      </label>
                      <textarea
                        id="review-review"
                        rows={5}
                        className="bg-[var(--bg-1)] border rounded-2xl py-3 px-5 w-full focus:outline-none"></textarea>
                    </div>
                    <div className="col-span-12">
                      <Link href="#" className="btn-primary">
                        Submit Review
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4">
            <div className="mb-10 lg:mb-14">
              <div className="bg-white rounded-2xl py-8 px-6">
                <p className="mb-3 text-lg font-medium"> Timing </p>
                <div className="flex items-start gap-2 mb-6">
                  <div className="flex gap-3 items-center">
                    <p className="mb-0"> Monday </p>
                    <h6 className="h6 mb-0"> 9.30am - 9.30pm </h6>
                  </div>
                  <i className="las la-info-circle text-2xl"></i>
                </div>
                <div className="flex items-start gap-2 mb-6">
                  <div className="flex gap-3 items-center">
                    <p className="mb-0"> Tuesday </p>
                    <h6 className="h6 mb-0"> 9.30am - 9.30pm </h6>
                  </div>
                  <i className="las la-info-circle text-2xl"></i>
                </div>
                <div className="flex items-start gap-2 mb-6">
                  <div className="flex gap-3 items-center">
                    <p className="mb-0"> Wednesday </p>
                    <h6 className="h6 mb-0"> 9.30am - 9.30pm </h6>
                  </div>
                  <i className="las la-info-circle text-2xl"></i>
                </div>
                <div className="flex items-start gap-2 mb-6">
                  <div className="flex gap-3 items-center">
                    <p className="mb-0"> Thrusday </p>
                    <h6 className="h6 mb-0"> 9.30am - 9.30pm </h6>
                  </div>
                  <i className="las la-info-circle text-2xl"></i>
                </div>
                <div className="flex items-start gap-2 mb-6">
                  <div className="flex gap-3 items-center">
                    <p className="mb-0"> Friday </p>
                    <h6 className="h6 mb-0"> 9.30am - 9.30pm </h6>
                  </div>
                  <i className="las la-info-circle text-2xl"></i>
                </div>
                <div className="flex items-start gap-2 mb-6">
                  <div className="flex gap-3 items-center">
                    <p className="mb-0"> Saturday </p>
                    <h6 className="h6 mb-0"> 9.30am - 9.30pm </h6>
                  </div>
                  <i className="las la-info-circle text-2xl"></i>
                </div>
                <div className="flex items-start gap-2 mb-6">
                  <div className="flex gap-3 items-center">
                    <p className="mb-0"> Sunday </p>
                    <h6 className="h6 mb-0"> Hoilday </h6>
                  </div>
                  <i className="las la-info-circle text-2xl"></i>
                </div>

                <p className="mb-3 text-lg font-medium pt-6 pb-3">Social Media</p>
                <ul className="flex flex-wrap gap-3">
                  <li>
                    <Link
                      href="#"
                      className="link grid place-content-center duration-300 w-9 h-9 rounded-full bg-[var(--primary-light)] text-primary hover:bg-primary hover:text-white">
                      <i className="lab la-facebook-f text-xl"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="link grid place-content-center duration-300 w-9 h-9 rounded-full bg-[var(--primary-light)] text-primary hover:bg-primary hover:text-white">
                      <i className="lab la-twitter text-xl"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="link grid place-content-center duration-300 w-9 h-9 rounded-full bg-[var(--primary-light)] text-primary hover:bg-primary hover:text-white">
                      <i className="lab la-instagram text-xl"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="link grid place-content-center duration-300 w-9 h-9 rounded-full bg-[var(--primary-light)] text-primary hover:bg-primary hover:text-white">
                      <i className="lab la-linkedin-in text-xl"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="link grid place-content-center duration-300 w-9 h-9 rounded-full bg-[var(--primary-light)] text-primary hover:bg-primary hover:text-white">
                      <i className="lab la-dribbble text-xl"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl py-8 px-6">
              <h6 className="mt-6 mb-4 text-xl font-medium">Catalogue</h6>
              <div className="flex items-center justify-center border-dashed rounded-2xl w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full cursor-pointer bg-[var(--bg-2)] rounded-2xl border border-dashed">
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
            </div>
          </div>
        </div>
      </div>

      {/* Recently viewed  */}
      <RecentlyViewed />
    </div>
  );
};

export default Page;
