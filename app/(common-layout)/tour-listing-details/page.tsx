"use client";
import { Tab } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import "react-datepicker/dist/react-datepicker.css";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  ArrowRightIcon,
  ArrowsRightLeftIcon,
  ChatBubbleLeftRightIcon,
  HandThumbUpIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "react-tooltip";
import DatePicker from "react-datepicker";
import { useState } from "react";
import CheckboxCustom from "@/components/Checkbox";
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const itineraryData = [
  {
    id: 1,
    name: "Burj Khalifa",
    location: "Dubai",
    title: "Discover the Tallest building int the world",
    desc: "Burj Khalifa is a spectacular skyscraper located in Dubai, United Arab Emirates.",
    day: "01",
    img: "/img/itinerary-img-1.jpg",
  },
  {
    id: 2,
    name: "Dubai Mall",
    location: "Dubai",
    title: "Experience Luxury Shopping and Entertainment at Dubai",
    desc: "Dubai Mall is a premier shopping and entertainment destination located in the heart of Dubai, UAE",
    day: "02",
    img: "/img/itinerary-img-2.jpg",
  },
  {
    id: 3,
    name: "Dubai Fountain",
    location: "Dubai",
    title: "Experience the Spectacular Dubai Fountain Show",
    desc: "The Dubai Fountain is a spectacular water feature located at the base of the iconic Burj Khalifa in Dubai",
    day: "03",
    img: "/img/itinerary-img-3.jpg",
  },
  {
    id: 4,
    name: "Jumerah Beach",
    location: "Dubai",
    title: "Relax and Unwind at Jumeirah Beach in Dubai",
    desc: "Jumeirah Beach is a pristine stretch of white sand located in the heart of Dubai, United Arab Emirates",
    day: "04",
    img: "/img/itinerary-img-4.jpg",
  },
  {
    id: 5,
    name: "Dubai Museum",
    location: "Dubai",
    title: "Discover the Rich History of Dubai at Dubai Museum",
    desc: "Dubai Museum is a must-visit destination for anyone interested in the history and culture of Dubai, UAE",
    day: "05",
    img: "/img/itinerary-img-5.jpg",
  },
];
const tooltipStyle = {
  backgroundColor: "#3539E9",
  color: "#fff",
  borderRadius: "10px",
};
const Page = () => {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;
  return (
    <main>
      <div className="bg-[var(--bg-2)]">
        <div className="py-4">
          <div className="px-3">
            <div className="grid grid-cols-12 gap-4 lg:gap-6">
              <div className="col-span-12 xl:col-span-4">
                <div className="grid grid-cols-12 gap-4 lg:gap-6">
                  <div className="col-span-12 sm:col-span-6 xl:col-span-12">
                    <Link
                      href="/img/tour-details-img-1.jpg"
                      className="link property-gallery">
                      <Image
                        width={610}
                        height={288}
                        src="/img/tour-details-img-1.jpg"
                        alt="image"
                        className=" w-full rounded-2xl"
                      />
                    </Link>
                  </div>
                  <div className="col-span-12 sm:col-span-6 xl:col-span-12">
                    <Link
                      href="/img/tour-details-img-2.jpg"
                      className="link property-gallery">
                      <Image
                        width={610}
                        height={681}
                        src="/img/tour-details-img-2.jpg"
                        alt="image"
                        className=" w-full rounded-2xl"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <Link
                  href="/img/tour-details-img-3.jpg"
                  className="link block property-gallery h-full">
                  <Image
                    width={610}
                    height={288}
                    src="/img/tour-details-img-3.jpg"
                    alt="image"
                    className=" w-full h-full object-fit-cover rounded-2xl"
                  />
                </Link>
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <div className="grid grid-cols-12 gap-4 lg:gap-6">
                  <div className="col-span-12">
                    <Link
                      href="/img/tour-details-img-4.jpg"
                      className="link property-gallery">
                      <Image
                        width={610}
                        height={288}
                        src="/img/tour-details-img-4.jpg"
                        alt="image"
                        className=" w-full rounded-2xl"
                      />
                    </Link>
                  </div>
                  <div className="col-span-12 sm:col-span-6">
                    <Link
                      href="/img/tour-details-img-5.jpg"
                      className="link property-gallery">
                      <Image
                        width={293}
                        height={284}
                        src="/img/tour-details-img-5.jpg"
                        alt="image"
                        className=" w-full rounded-2xl"
                      />
                    </Link>
                  </div>
                  <div className="col-span-12 sm:col-span-6">
                    <Link
                      href="/img/tour-details-img-6.jpg"
                      className="link property-gallery">
                      <Image
                        width={293}
                        height={284}
                        src="/img/tour-details-img-6.jpg"
                        alt="image"
                        className=" w-full rounded-2xl"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-[30px] lg:py-[60px] px-3">
          <div className="grid grid-cols-12 gap-4 lg:gap-6">
            <div className="col-span-12 xl:col-span-8">
              <div>
                <div className="bg-white rounded-2xl p-3 sm:p-4 lg:py-8 lg:px-5">
                  <div className="p-3 sm:p-4 lg:p-6 bg-[var(--bg-1)] rounded-2xl border border-neutral-40 mb-6 lg:mb-10">
                    <div className="flex items-center justify-between flex-wrap gap-3 mb-8">
                      <h2 className="h2 m-0"> Dubai, UAE </h2>
                      <ul className="flex gap-3 items-center">
                        <li>
                          <span className="inline-block clr-neutral-600">
                            Share
                          </span>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="link w-8 h-8 grid place-content-center bg-[var(--primary-light)] text-primary rounded-full hover:bg-primary hover:text-white">
                            <i className="lab text-xl la-facebook-f"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="link w-8 h-8 grid place-content-center bg-[var(--primary-light)] text-primary rounded-full hover:bg-primary hover:text-white">
                            <i className="lab text-xl la-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="link w-8 h-8 grid place-content-center bg-[var(--primary-light)] text-primary rounded-full hover:bg-primary hover:text-white">
                            <i className="lab text-xl la-instagram"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="link w-8 h-8 grid place-content-center bg-[var(--primary-light)] text-primary rounded-full hover:bg-primary hover:text-white">
                            <i className="lab text-xl la-linkedin-in"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <ul className="columns-1 md:columns-2 lg:columns-3 pt-4 border-t border-dashed gap-md-0">
                      <li className="py-2">
                        <p className="mb-0">
                          ID:
                          <span className="text-primary">12546</span>
                        </p>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center gap-1">
                          <span>
                            Place Covered:{" "}
                            <span className="text-primary">Desert</span>
                          </span>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center gap-1">
                          <span>
                            Start Point:{" "}
                            <span className="text-primary">Desert</span>
                          </span>
                        </div>
                      </li>
                    </ul>
                    <ul className="columns-1 md:columns-2 lg:columns-3">
                      <li className="py-2">
                        <p className="mb-0">
                          Duration:
                          <span className="text-primary">5 Days, 4 Nights</span>
                        </p>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center gap-1">
                          <span>
                            End Point:{" "}
                            <span className="text-primary">Dubai Airport</span>
                          </span>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center gap-1">
                          <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                          <span className="font-semibold">4.9</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="p-3 sm:p-4 lg:p-6 bg-[var(--bg-1)] rounded-2xl border border-neutral-40 mb-6 lg:mb-10">
                    <h4 className="mb-5 text-2xl font-semibold"> Overview </h4>
                    <p className="mb-5 clr-neutral-500">
                      Dubai is a popular tourist destination located in the
                      United Arab Emirates (UAE). It is known for its luxurious
                      shopping, stunning beaches, impressive architecture, and
                      vibrant nightlife. The city has become a hub for
                      international travel and offers a wide range of
                      attractions and activities for tourists.
                    </p>
                    <Link
                      href="#"
                      className="link flex items-center gap-2 text-primary">
                      <span className="font-semibold inline-block">
                        Read More
                      </span>
                      <ArrowRightIcon className="w-5 h-5" />
                    </Link>
                  </div>
                  <div className="p-3 sm:p-4 lg:p-6 bg-[var(--bg-1)] rounded-2xl border border-neutral-40 mb-6 lg:mb-10">
                    <h4 className="mb-5 text-2xl font-semibold">
                      {" "}
                      Tour Highlights{" "}
                    </h4>
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-12 md:col-span-4 lg:col-span-3">
                        <ul className="flex flex-col gap-4">
                          <li>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                                <i className="las la-check text-lg text-primary"></i>
                              </div>
                              <span className="inline-block">Burj Khalifa</span>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                                <i className="las la-check text-lg text-primary"></i>
                              </div>
                              <span className="inline-block"> Dubai Mall </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="col-span-12 md:col-span-4 lg:col-span-3">
                        <ul className="flex flex-col gap-4">
                          <li>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                                <i className="las la-check text-lg text-primary"></i>
                              </div>
                              <span className="inline-block">
                                Dubai Fountain
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                                <i className="las la-check text-lg text-primary"></i>
                              </div>
                              <span className="inline-block">
                                Jumeirah Beach
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="col-span-12 md:col-span-4 lg:col-span-3">
                        <ul className="flex flex-col gap-4">
                          <li>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                                <i className="las la-check text-lg text-primary"></i>
                              </div>
                              <span className="inline-block">Dubai Museum</span>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                                <i className="las la-check text-lg text-primary"></i>
                              </div>
                              <span className="inline-block">Dubai Creek</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="col-span-12 md:col-span-4 lg:col-span-3">
                        <ul className="flex flex-col gap-4">
                          <li>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                                <i className="las la-check text-lg text-primary"></i>
                              </div>
                              <span className="inline-block">
                                Palm Jumeirah
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                                <i className="las la-check text-lg text-primary"></i>
                              </div>
                              <span className="inline-block">
                                Miracle Garden
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 lg:p-6 bg-[var(--bg-1)] rounded-2xl border border-neutral-40 mb-6 lg:mb-10">
                    <h4 className="mb-6 text-2xl font-semibold"> Itinerary </h4>
                    <ul className="flex flex-col gap-6">
                      {itineraryData.map(
                        ({ id, day, desc, img, location, name, title }) => (
                          <li
                            key={id}
                            className="relative md:before:absolute before:top-[120px] before:bottom-[-14px] before:left-[52px] before:w-[1px] md:before:border-l before:border-dashed before:border-[var(--primary)]">
                            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                              <div className="grid place-content-center ml-3 md:ml-0 relative w-28 h-28 rounded-full bg-primary after:scale-[1.18] text-white shrink-0 after:w-full after:h-full after:absolute after:border-dashed after:border after:border-[var(--primary)] after:rounded-full">
                                <div className="text-center">
                                  <p className="text-lg mb-0"> Day </p>
                                  <h2 className="mb-0 text-white"> {day} </h2>
                                </div>
                              </div>
                              <div className="flex-grow rounded-2xl bg-white shadow-lg p-3 sm:p-4 lg:p-6">
                                <h5 className="font-semibold text-xl">
                                  {" "}
                                  {name}
                                </h5>
                                <p className="mb-0 clr-neutral-500">
                                  {location}
                                </p>
                                <div className="border border-dashed my-6"></div>
                                <div className="flex flex-col lg:flex-row md:items-center gap-5">
                                  <Link
                                    href="tour-listing-details"
                                    className="link block shrink-0 w-full lg:w-auto">
                                    <Image
                                      width={241}
                                      height={153}
                                      src={img}
                                      alt="image"
                                      className=" rounded-2xl w-full object-fit-cover"
                                    />
                                  </Link>
                                  <div className="flex-grow">
                                    <Link
                                      href="tour-listing-details"
                                      className="link block text-lg text-[var(--neutral-700)] hover:text-primary mb-2">
                                      {title}
                                    </Link>
                                    <p className="mb-0 clr-neutral-500 text-sm">
                                      {desc}
                                    </p>
                                  </div>
                                </div>
                                <div className="border border-dashed my-6"></div>
                                <div className="flex items-center flex-wrap gap-4">
                                  <p className="mb-0 text-lg clr-neutral-500 font-medium">
                                    Include Service -
                                  </p>
                                  <ul className="flex items-center flex-wrap gap-3">
                                    <li>
                                      <div
                                        data-tooltip-id="parking"
                                        className="grid place-content-center w-10 h-10 rounded-full bg-[var(--bg-2)] text-primary">
                                        <Image
                                          width={28}
                                          height={28}
                                          src="/img/icon-car-parking.png"
                                          alt="image"
                                          className=" w-7 h-7 object-fit-contain"
                                        />
                                      </div>
                                    </li>
                                    <li>
                                      <div
                                        data-tooltip-id="restaurent"
                                        className="grid place-content-center w-10 h-10 rounded-full bg-[var(--bg-2)] text-primary">
                                        <Image
                                          width={28}
                                          height={28}
                                          src="/img/icon-breakfast.png"
                                          alt="image"
                                          className=" w-7 h-7 object-fit-contain"
                                        />
                                      </div>
                                    </li>
                                    <li>
                                      <div
                                        data-tooltip-id="room"
                                        className="grid place-content-center w-10 h-10 rounded-full bg-[var(--bg-2)] text-primary">
                                        <Image
                                          width={28}
                                          height={28}
                                          src="/img/icon-room-service.png"
                                          alt="image"
                                          className=" w-7 h-7 object-fit-contain"
                                        />
                                      </div>
                                    </li>
                                    <li>
                                      <div
                                        data-tooltip-id="fitness"
                                        className="grid place-content-center w-10 h-10 rounded-full bg-[var(--bg-2)] text-primary">
                                        <Image
                                          width={28}
                                          height={28}
                                          src="/img/icon-fitness.png"
                                          alt="image"
                                          className=" w-7 h-7 object-fit-contain"
                                        />
                                      </div>
                                    </li>
                                    <Tooltip
                                      id="parking"
                                      style={tooltipStyle}
                                      offset={7}
                                      content="Parking"
                                    />
                                    <Tooltip
                                      id="restaurent"
                                      style={tooltipStyle}
                                      offset={7}
                                      content="Restaurent"
                                    />
                                    <Tooltip
                                      id="room"
                                      style={tooltipStyle}
                                      offset={7}
                                      content="Room Service"
                                    />
                                    <Tooltip
                                      id="fitness"
                                      style={tooltipStyle}
                                      offset={7}
                                      content="Fitness"
                                    />
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                        )
                      )}
                    </ul>
                    <Link
                      href="#"
                      className="link flex items-center gap-2 text-primary mt-8">
                      <span className="font-semibold inline-block">
                        Book Now
                      </span>
                      <ArrowRightIcon className="w-5 h-5" />
                    </Link>
                  </div>
                  <div className="p-3 sm:p-4 lg:p-6 bg-[var(--bg-1)] rounded-2xl border border-neutral-40 mb-6 lg:mb-10">
                    <h4 className="mb-0 text-2xl font-semibold">
                      {" "}
                      Inclusions & Exclusions{" "}
                    </h4>
                    <div className="border border-dashed my-5"></div>
                    <h6 className="mb-4 font-semibold"> Inclusions </h6>
                    <ul className="flex flex-col gap-4 mb-10">
                      <li>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                            <i className="las la-check text-lg text-primary"></i>
                          </div>
                          <span className="inline-block">
                            Comfortable stay for 4 nights in your preferred
                            category Hotels
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                            <i className="las la-check text-lg text-primary"></i>
                          </div>
                          <span className="inline-block">
                            Professional English speaking guide to help you
                            explore the cities
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                            <i className="las la-check text-lg text-primary"></i>
                          </div>
                          <span className="inline-block">
                            Breakfast is included as mentioned in Itinerary.
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                            <i className="las la-check text-lg text-primary"></i>
                          </div>
                          <span className="inline-block">
                            Per Peron rate on twin sharing basis
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                            <i className="las la-check text-lg text-primary"></i>
                          </div>
                          <span className="inline-block">
                            Entrance Tickets to Genting Indoor Theme Park
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[var(--primary-light)]">
                            <i className="las la-check text-lg text-primary"></i>
                          </div>
                          <span className="inline-block">
                            All Tours & Transfers on Seat In Coach Basis
                          </span>
                        </div>
                      </li>
                    </ul>
                    <h6 className="mb-4 font-semibold"> Exclusions </h6>
                    <ul className="flex flex-col gap-4 mb-10">
                      <li>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[#FFF9ED]">
                            <i className="las la-times text-xl text-[#9C742B]"></i>
                          </div>
                          <span className="inline-block">
                            Lunch and dinner are not included in plans
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[#FFF9ED]">
                            <i className="las la-times text-xl text-[#9C742B]"></i>
                          </div>
                          <span className="inline-block">
                            Any other services not specifically mentioned in the
                            inclusions
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[#FFF9ED]">
                            <i className="las la-times text-xl text-[#9C742B]"></i>
                          </div>
                          <span className="inline-block">
                            Medical and Travel insurance
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[#FFF9ED]">
                            <i className="las la-times text-xl text-[#9C742B]"></i>
                          </div>
                          <span className="inline-block">
                            Airfare is not included
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[#FFF9ED]">
                            <i className="las la-times text-xl text-[#9C742B]"></i>
                          </div>
                          <span className="inline-block">
                            Early Check-In & Late Check-Out
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 grid place-content-center rounded-full shrink-0 bg-[#FFF9ED]">
                            <i className="las la-times text-xl text-[#9C742B]"></i>
                          </div>
                          <span className="inline-block">
                            Anything which is not specified in Inclusions
                          </span>
                        </div>
                      </li>
                    </ul>
                    <Link
                      href="#"
                      className="link flex items-center gap-2 text-primary mt-8">
                      <span className="font-semibold inline-block">
                        Read More
                      </span>
                      <ArrowRightIcon className="w-5 h-5" />
                    </Link>
                  </div>
                  <div className="p-3 sm:p-4 lg:p-6 bg-[var(--bg-1)] rounded-2xl border border-neutral-40 mb-6 lg:mb-10">
                    <h4 className="mb-0 text-2xl font-semibold">
                      {" "}
                      Tour Policy{" "}
                    </h4>
                    <div className="hr-dashed my-5"></div>
                    <h6 className="mb-4 font-semibold">
                      {" "}
                      Confirmation Policy :{" "}
                    </h6>
                    <p className="mb-4">
                      The customer receives a confirmation voucher via email
                      within 24 hours of successful booking.
                    </p>
                    <p className="mb-4">
                      In case the preferred slots are unavailable, an alternate
                      schedule of the customer’s preference will be arranged and
                      a new confirmation voucher will be sent via email.
                    </p>
                    <p className="mb-10">
                      Alternatively, the customer may choose to cancel their
                      booking before confirmation and a full refund will be
                      processed.
                    </p>
                    <h6 className="mb-4 font-semibold">
                      {" "}
                      Cancellation Policy :{" "}
                    </h6>
                    <p className="mb-4">
                      <span className="font-medium clr-neutral-900">
                        10 days :
                      </span>
                      100%
                    </p>
                    <p className="mb-4">
                      <span className="font-medium clr-neutral-900">
                        10 to 15 days :
                      </span>
                      75% + Non Refundable Component
                    </p>
                    <p className="mb-4">
                      <span className="font-medium clr-neutral-900">
                        15 to 30 days :
                      </span>
                      30% + Non Refundable Component
                    </p>
                    <p className="mb-4">
                      <span className="font-medium clr-neutral-900">
                        10Hotel / Air :
                      </span>
                      100% in case of non-refundable ticket / Hotel Room
                    </p>
                    <p className="mb-10">
                      <span className="font-medium clr-neutral-900">
                        10Cruise / Visa :
                      </span>
                      On Actuals
                    </p>
                    <h6 className="mb-4 font-semibold"> Refund Policy : </h6>
                    <p className="mb-0">
                      The applicable refund amount will be processed within 10
                      business days. All applicable refunds will be done in the
                      traveler&apos;s banks wallet as E-cash.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white rounded-2xl my-10">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <Link
                    href="#"
                    className="link flex items-center clr-neutral-500 hover:text-primary gap-1 order-1">
                    <ArrowLongLeftIcon className="w-5 h-5" />
                    <span className="inline-block font-semibold">
                      Prev Tour
                    </span>
                  </Link>
                  <ul className="flex flex-wrap gap-3 justify-center order-3 flex-grow md:order-2">
                    <li>
                      <Link
                        href="#"
                        className="link grid place-content-center w-9 h-9 rounded-full bg-[var(--primary-light)] text-primary hover:bg-primary hover:text-white">
                        <i className="lab text-xl la-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="link grid place-content-center w-9 h-9 rounded-full bg-[var(--primary-light)] text-primary hover:bg-primary hover:text-white">
                        <i className="lab text-xl la-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="link grid place-content-center w-9 h-9 rounded-full bg-[var(--primary-light)] text-primary hover:bg-primary hover:text-white">
                        <i className="lab text-xl la-linkedin-in"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="link grid place-content-center w-9 h-9 rounded-full bg-[var(--primary-light)] text-primary hover:bg-primary hover:text-white">
                        <i className="lab text-xl la-dribbble"></i>
                      </Link>
                    </li>
                  </ul>
                  <Link
                    href="#"
                    className="link flex items-center clr-neutral-500 hover:text-primary gap-1 order-2">
                    <span className="inline-block font-semibold">
                      Next Tour
                    </span>
                    <ArrowLongRightIcon className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-3 sm:p-4 lg:py-8 lg:px-5 mb-10 lg:mb-14">
                <div className="flex items-center gap-4 justify-between flex-wrap mb-10">
                  <div className="flex items-center gap-2">
                    <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                    <h3 className="mb-0 h3"> 4.7 (21 reviews) </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="mb-0 clr-neutral-500 shrink-0"> Sort By : </p>
                    <select className="w-full border bg-transparent px-5 py-3 focus:outline-none rounded-full">
                      <option>Latest</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <div className="bg-[var(--bg-)] rounded-2xl p-3 sm:p-4 lg:p-6 mb-8">
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
                        <p className="mb-0 clr-neutral-500">
                          {" "}
                          Product Designer{" "}
                        </p>
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
                <div className="bg-[var(--bg-)] rounded-2xl p-3 sm:p-4 lg:p-6 mb-8">
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
                        <p className="mb-0 clr-neutral-500">
                          {" "}
                          Product Designer{" "}
                        </p>
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
                <div className="bg-[var(--bg-)] rounded-2xl p-3 sm:p-4 lg:p-6 mb-8">
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
                        <h5 className="mb-1 font-semibold">
                          {" "}
                          Marvin McKinney{" "}
                        </h5>
                        <p className="mb-0 clr-neutral-500">
                          {" "}
                          Product Designer{" "}
                        </p>
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

              <div className="mb-10 lg:mb-14">
                <div className="bg-white rounded-2xl p-3 sm:p-4 lg:py-8 lg:px-5">
                  <h4 className="mb-0 text-2xl font-semibold">
                    Write a review
                  </h4>
                  <div className="border border-dashed my-6"></div>
                  <p className="text-xl font-medium mb-2">Rating *</p>
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

            <div className="col-span-12 xl:col-span-4">
              <div className="pb-0 mb-6 relative">
                <div className="bg-white rounded-2xl p-3 sm:p-4 lg:py-8 lg:px-6">
                  <p className="mb-3 text-lg font-medium"> Price </p>
                  <div className="flex items-start gap-2 mb-6">
                    <div className="flex gap-3 items-center">
                      <i className="las la-tag text-2xl"></i>
                      <p className="mb-0"> From </p>
                      <h3 className="h3 mb-0"> $399 </h3>
                    </div>
                    <i className="las la-info-circle text-2xl"></i>
                  </div>

                  <Tab.Group>
                    <Tab.List className="flex gap-3 about-tab mb-7">
                      <Tab
                        className={({ selected }) =>
                          classNames(
                            "focus:outline-none",
                            selected ? "text-primary font-medium" : ""
                          )
                        }>
                        Booking Form
                      </Tab>{" "}
                      <span>|</span>
                      <Tab
                        className={({ selected }) =>
                          classNames(
                            "focus:outline-none",
                            selected ? "text-primary font-medium" : ""
                          )
                        }>
                        Enquiry Form
                      </Tab>
                    </Tab.List>
                    <Tab.Panels className="tab-content mb-8">
                      <Tab.Panel>
                        <div className="grid grid-cols-1 gap-3">
                          <div className="col-span-1">
                            <div className="w-full flex">
                              <input
                                type="text"
                                className="w-[83%] min-[400px]:w-full focus:outline-none bg-[var(--bg-2)] border border-r-0 border-neutral-40 rounded-s-full rounded-end-0 py-3 px-5"
                                placeholder="Location"
                              />
                              <span className="bg-[var(--bg-2)] border border-l-0 border-neutral-40 rounded-e-full py-[14px] text-gray-500 pe-4 ps-0">
                                <i className="las text-2xl la-map-marker-alt"></i>
                              </span>
                            </div>
                          </div>
                          <div className="col-span-1">
                            <div className="w-full flex">
                              <DatePicker
                                placeholderText="Check In - Check Out"
                                selectsRange={true}
                                startDate={startDate}
                                dateFormat="dd-MM-yyyy"
                                endDate={endDate}
                                onChange={(update) => setDateRange(update)}
                                className="bg-[var(--bg-2)] w-full border border-r-0 border-neutral-40 rounded-s-full py-[14px] text-gray-500  ps-4 focus:outline-none"
                              />
                              <span className="bg-[var(--bg-2)] border border-l-0 border-neutral-40 rounded-e-full py-3 text-gray-500 pe-4 ps-0">
                                <i className="las text-2xl la-calendar-alt"></i>
                              </span>
                            </div>
                          </div>
                          <div className="col-span-1">
                            <div className="w-full flex">
                              <input
                                type="text"
                                className="w-[83%] min-[400px]:w-full focus:outline-none bg-[var(--bg-2)] border border-r-0 border-neutral-40 rounded-s-full rounded-end-0 py-3 px-5"
                                placeholder="Guest"
                              />
                              <span className="bg-[var(--bg-2)] border border-l-0 border-neutral-40 rounded-e-full py-[14px] text-gray-500 pe-4 ps-0">
                                <i className="las la-user-friends text-2xl"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <p className="mb-0 clr-neutral-500"> Base Price </p>
                          <p className="mb-0 font-medium"> $360 </p>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <p className="mb-0 clr-neutral-500"> State Tax </p>
                          <p className="mb-0 font-medium"> $70 </p>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <p className="mb-0 clr-neutral-500"> Night Charge </p>
                          <p className="mb-0 font-medium"> $170 </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="mb-0 clr-neutral-500">
                            {" "}
                            Convenience Fee{" "}
                          </p>
                          <p className="mb-0 font-medium"> $15 </p>
                        </div>
                        <div className="hr-dashed my-4"></div>
                        <div className="flex items-center justify-between ">
                          <p className="mb-0 clr-neutral-500"> Total </p>
                          <p className="mb-0 font-medium"> $1025 </p>
                        </div>
                      </Tab.Panel>
                      <Tab.Panel>
                        <form className="flex flex-col gap-5">
                          <input
                            type="text"
                            placeholder="Name..."
                            className="w-full rounded-full bg-[var(--bg-1)] border focus:outline-none py-2 px-3 md:py-3 md:px-4"
                            required
                          />
                          <input
                            type="email"
                            placeholder="Email..."
                            className="w-full rounded-full bg-[var(--bg-1)] border focus:outline-none py-2 px-3 md:py-3 md:px-4"
                            required
                          />
                          <textarea
                            rows={6}
                            placeholder="Message..."
                            className="w-full rounded-3xl bg-[var(--bg-1)] border focus:outline-none py-2 px-3 md:py-3 md:px-4"></textarea>
                          <CheckboxCustom label="I agree with Terms of Service and Privacy Statement" />
                        </form>
                      </Tab.Panel>
                    </Tab.Panels>
                  </Tab.Group>

                  <Link
                    href="#"
                    className="link inline-flex items-center gap-2 py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-medium w-full justify-center mb-6">
                    <span className="inline-block"> Proceed Booking </span>
                  </Link>
                  <ul className="flex justify-center gap-6">
                    <li>
                      <div className="flex items-center gap-2">
                        <button className="w-7 h-7 rounded-full bg-[var(--primary-light)] text-primary grid place-content-center">
                          <HeartIcon className="w-5 h-5" />
                        </button>
                        <span className="inline-block text-sm clr-neutral-500">
                          Save To Wish List
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center gap-2">
                        <button className="w-7 h-7 rounded-full bg-[var(--primary-light)] text-primary grid place-content-center">
                          <ArrowsRightLeftIcon className="w-5 h-5" />
                        </button>
                        <span className="inline-block text-sm clr-neutral-500">
                          Compare
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
