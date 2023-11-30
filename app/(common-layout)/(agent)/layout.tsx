"use client";
import {
  CalendarDaysIcon,
  ChatBubbleLeftEllipsisIcon,
  CheckIcon,
  ClockIcon,
  EnvelopeIcon,
  ListBulletIcon,
  MapPinIcon,
  PlusCircleIcon,
  Squares2X2Icon,
  StarIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  return (
    <div className="py-[30px] lg:py-[60px] bg-[var(--bg-2)] px-3">
      <div className="container">
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          <div className="col-span-12 xl:col-span-4">
            <div className="bg-white rounded-2xl p-3 sm:p-4 lg:py-8 lg:px-6 mb-6">
              <div className="w-32 h-32 border border-[var(--primary)] rounded-full bg-white p-4 grid place-content-center relative mx-auto mb-10">
                <Image
                  width={96}
                  height={96}
                  src="/img/team-1.jpg"
                  alt="image"
                  className="rounded-full"
                />
                <div className="w-8 h-8 grid place-content-center rounded-full border-2 white text-white bg-primary absolute bottom-0 right-0">
                  <CheckIcon className="w-5 h-5" />
                </div>
              </div>
              <h4 className="text-center text-2xl font-semibold mb-4">
                {" "}
                Savannah Nguyen{" "}
              </h4>
              <ul className="flex items-center gap-3 justify-center flex-wrap mb-7">
                <li>
                  <p className="mb-0">
                    ID: <span className="text-primary">235</span>
                  </p>
                </li>
                <li className="text-primary text-lg">•</li>
                <li>
                  <p className="mb-0"> Property: 24 </p>
                </li>
                <li className="text-primary text-lg">•</li>
                <li>
                  <div className="flex gap-1 items-center">
                    <i className="las la-star text-[var(--tertiary)]"></i>
                    <p className="mb-0"> 4.8 </p>
                  </div>
                </li>
              </ul>
              <ul className="flex justify-center flex-wrap gap-3">
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
              <div className="border border-dashed my-7"></div>
              <ul className="flex flex-col gap-4 mb-10 max-text-30 mx-auto">
                <li>
                  <div className="flex items-center gap-2">
                    <CalendarDaysIcon className="w-5 h-5 text-primary" />
                    <p className="mb-0"> Joined in June 2018 </p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <ChatBubbleLeftEllipsisIcon className="w-5 h-5 text-[var(--secondary)]" />
                    <p className="mb-0"> Response rate - 100% </p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-5 h-5 text-[var(--tertiary)]" />
                    <p className="mb-0"> Fast response </p>
                  </div>
                </li>
              </ul>

              <div className="flex items-center flex-wrap gap-4 justify-center max-text-35 mx-auto">
                <Link href="#" className="btn-primary flex items-center gap-1">
                  <PlusCircleIcon className="w-6 h-6" />
                  Follow
                </Link>
                <Link
                  href="#"
                  className="btn-outline flex items-center text-primary gap-1">
                  <EnvelopeIcon className="w-6 h-6" />
                  Message
                </Link>
              </div>
              <div className="border border-dashed my-6"></div>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center justify-between flex-wrap">
                  <p className="mb-0">Properties Views</p>
                  <p className="mb-0 font-medium">56k</p>
                </li>
                <li className="flex items-center justify-between flex-wrap">
                  <p className="mb-0">Properties Sale</p>
                  <p className="mb-0 font-medium">1.5k</p>
                </li>
                <li className="flex items-center justify-between flex-wrap">
                  <p className="mb-0">Properties Rent</p>
                  <p className="mb-0 font-medium">956</p>
                </li>
                <li className="flex items-center justify-between flex-wrap">
                  <p className="mb-0">Total Properties</p>
                  <p className="mb-0 font-medium">3.1k</p>
                </li>
                <li className="flex items-center justify-between flex-wrap">
                  <p className="mb-0">Followers</p>
                  <p className="mb-0 font-medium">2.2k</p>
                </li>
                <li className="flex items-center justify-between flex-wrap">
                  <p className="mb-0">Following</p>
                  <p className="mb-0 font-medium">671</p>
                </li>
              </ul>
              <div className="border border-dashed my-6"></div>
              <span className="block text-2xl font-semibold clr-neutral-600 mb-4">
                Details
              </span>
              <p className="mb-0">
                Hi, this is Nema Mustafa. A specialist agent. You can call me
                any property to buy or rent! I have very unique design stylist
                features. My work attribution is Minimalist/Flat/Simple.
              </p>
              <div className="border border-dashed my-6"></div>
              <div className="flex items-center justify-between flex-wrap">
                <p className="mb-0">Member since: Oct 27, 2021</p>
                <p className="mb-0 font-medium">Report</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-3 sm:p-4 lg:py-8 lg:px-6">
              <span className="block font-medium text-2xl text-[var(--neutral-700)] mb-6">
                Contact Agents
              </span>
              <ul className="flex flex-col gap-4">
                <li>
                  <input
                    type="text"
                    className="w-full focus:outline-none bg-[var(--bg-2)] border border-neutral-40 rounded-full py-3 px-5"
                    placeholder="Enter Name"
                  />
                </li>
                <li>
                  <input
                    type="email"
                    className="w-full focus:outline-none bg-[var(--bg-2)] border border-neutral-40 rounded-full py-3 px-5"
                    placeholder="Email"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    className="w-full focus:outline-none bg-[var(--bg-2)] border border-neutral-40 rounded-full py-3 px-5"
                    placeholder="Phone"
                  />
                </li>
                <li>
                  <textarea
                    rows={3}
                    className="w-full focus:outline-none rounded-3xl bg-[var(--bg-2)] border border-neutral-40 py-3 px-4"
                    placeholder="Message"></textarea>
                </li>
              </ul>
              <Link
                href="#"
                className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-medium mt-8">
                <span className="inline-block"> Send Request </span>
              </Link>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-8">
            <div className="grid grid-cols-12 gap-4 align-items-start">
              <div className="col-span-12">
                <div className="bg-white rounded-2xl py-3 px-6 shadow-lg">
                  <ul className="flex items-center flex-wrap gap-3">
                    <li className="flex-grow">
                      <ul className="flex flex-wrap justify-center lg:justify-start gap-4">
                        <li>
                          <Link
                            href="/agent-details-grid"
                            className={`link flex items-center gap-2 clr-neutral-500 hover:text-primary ${
                              path === "/agent-details-grid" && "text-primary"
                            }`}>
                            <Squares2X2Icon className="w-5 h-5" />
                            <span className="inline-block font-medium">
                              Grid
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/agent-details-list"
                            className={`link flex items-center gap-2 clr-neutral-500 hover:text-primary ${
                              path === "/agent-details-list" && "text-primary"
                            }`}>
                            <ListBulletIcon className="w-5 h-5" />
                            <span className="inline-block font-medium">
                              List
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/agent-details-review"
                            className={`link flex items-center gap-2 clr-neutral-500 hover:text-primary ${
                              path === "/agent-details-review" && "text-primary"
                            }`}>
                            <StarIcon className="w-5 h-5" />
                            <span className="inline-block font-medium">
                              Reviews
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="hidden lg:flex items-center">
                      <p className="mb-0 clr-neutral-500 flex-grow whitespace-nowrap">
                        Sort By :
                      </p>
                      <select className="w-full bg-transparent px-5 py-3 focus:outline-none border-0">
                        <option>latest</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </li>
                  </ul>
                </div>
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
