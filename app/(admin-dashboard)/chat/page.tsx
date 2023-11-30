"use client";
import {
  CameraIcon,
  FaceSmileIcon,
  MagnifyingGlassIcon,
  MicrophoneIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  PlusCircleIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Footer from "@/components/vendor-dashboard/Vendor.Footer";
import Image from "next/image";
import { useRef } from "react";

const Page = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <div className="bg-[var(--bg-2)]">
      <div className="flex items-center justify-between flex-wrap px-3 py-5 md:p-[30px] gap-5 lg:p-[60px] bg-[var(--dark)]">
        <h2 className="h2 text-white">Chat</h2>
      </div>

      {/* Recent bookings */}
      <section className="bg-[var(--bg-2)] px-3 lg:px-6 mb-4 lg:mb-6  relative after:absolute after:bg-[var(--dark)] after:w-full after:h-[60px] after:top-0 after:left-0 xxl:pb-0">
        <div className="border rounded-2xl bg-white z-[1] relative grid grid-cols-12">
          <div className="chat-box__nav p-4 col-span-12 min-[1024px]:col-span-6 xl:col-span-4 xxl:col-span-3">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-15 h-15 rounded-full overflow-hidden shrink-0">
                <Image
                  width={60}
                  height={60}
                  src="/img/user-1.jpg"
                  alt="image"
                  className="w-full h-full object-fit-cover"
                />
              </div>
              <div className="flex gap-3 items-center justify-content-end flex-wrap">
                <Link
                  href="#"
                  className="link inline-block shrink-0 text-[var(--neutral-700)] hover:text-primary">
                  <i className="las la-edit text-3xl"></i>
                </Link>
                <Link
                  href="#"
                  className="link inline-block shrink-0 text-[var(--neutral-700)] hover:text-primary">
                  <i className="las la-ellipsis-v text-3xl"></i>
                </Link>
              </div>
            </div>
            <div className="flex items-center p-2 border border-neutral-30 bg-[var(--bg-2)] rounded-full my-6">
              <input
                type="text"
                placeholder="Search"
                className="w-full focus:outline-none lg:pl-2 bg-transparent border-0"
              />
              <button
                type="button"
                className="grid place-content-center  w-10 h-10 rounded-full border-0 bg-primary text-white shrink-0">
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
            </div>
            <div
              className="max-h-[600px] overflow-y-auto scrollbar-hide"
              style={{ overflowY: "auto" }}>
              <ul className="flex flex-col gap-2">
                <li>
                  <div className="flex flex-wrap items-center gap-4 cursor-pointer hover:bg-slate-200 duration-300 p-2 rounded-md">
                    <div className="w-11 h-11 relative z-[1] rounded-full shrink-0">
                      <Image
                        width={44}
                        height={44}
                        src="/img/user-1.jpg"
                        alt="image"
                        className="w-full h-full object-fit-cover overflow-hidden rounded-full"
                      />
                      <span className="inline-block w-3 h-3 rounded-full bg-[#37D27A] absolute end-0 bottom-0 z-[1]"></span>
                    </div>
                    <div className="flex-grow flex items-center justify-between gap-4">
                      <div className="flex-grow">
                        <p className="font-semibold mb-1"> Theresa Webb </p>
                        <span className="block text-xs clr-neutral-500">
                          just ideas for next time
                        </span>
                      </div>
                      <div className="shrink-0 inline-block text-center">
                        <div className="grid place-content-center w-6 h-6 rounded-full bg-primary text-white">
                          <span className="text-sm lh-1">1</span>
                        </div>
                        <span className="inline-block text-primary text-xs">
                          4m
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-wrap items-center gap-4 cursor-pointer hover:bg-slate-200 duration-300 p-2 rounded-md">
                    <div className="w-11 h-11 relative z-[1] rounded-full shrink-0">
                      <Image
                        width={44}
                        height={44}
                        src="/img/user-2.jpg"
                        alt="image"
                        className="w-full h-full object-fit-cover overflow-hidden rounded-full"
                      />
                      <span className="inline-block w-3 h-3 rounded-full bg-[#37D27A] absolute end-0 bottom-0 z-[1]"></span>
                    </div>
                    <div className="flex-grow flex items-center justify-between gap-4">
                      <div className="flex-grow">
                        <p className="font-semibold mb-1"> Bessie Cooper </p>
                        <span className="block text-xs clr-neutral-500">
                          omg, this is amazing
                        </span>
                      </div>
                      <div className="shrink-0 inline-block text-center">
                        <div className="grid place-content-center w-6 h-6 rounded-full bg-primary text-white">
                          <span className="text-sm lh-1">3</span>
                        </div>
                        <span className="inline-block text-primary text-xs">
                          27m
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-wrap items-center gap-4 cursor-pointer hover:bg-slate-200 duration-300 p-2 rounded-md">
                    <div className="w-11 h-11 relative z-[1] rounded-full shrink-0">
                      <Image
                        width={44}
                        height={44}
                        src="/img/user-3.jpg"
                        alt="image"
                        className="w-full h-full object-fit-cover overflow-hidden rounded-full"
                      />
                      <span className="inline-block w-3 h-3 rounded-full bg-[#37D27A] absolute end-0 bottom-0 z-[1]"></span>
                    </div>
                    <div className="flex-grow flex items-center justify-between gap-4">
                      <div className="flex-grow">
                        <p className="font-semibold mb-1"> Ralph Edwards </p>
                        <span className="block text-xs clr-neutral-500">
                          You : perfect!
                        </span>
                      </div>
                      <div className="shrink-0 inline-block text-center">
                        <div className="grid place-content-center w-6 h-6 rounded-full bg-primary text-white">
                          <span className="text-sm lh-1">7</span>
                        </div>
                        <span className="inline-block text-primary text-xs">
                          32m
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-wrap items-center gap-4 cursor-pointer hover:bg-slate-200 duration-300 p-2 rounded-md">
                    <div className="w-11 h-11 relative z-[1] rounded-full shrink-0">
                      <Image
                        width={44}
                        height={44}
                        src="/img/user-4.jpg"
                        alt="image"
                        className="w-full h-full object-fit-cover overflow-hidden rounded-full"
                      />
                      <span className="inline-block w-3 h-3 rounded-full bg-[#37D27A] absolute end-0 bottom-0 z-[1]"></span>
                    </div>
                    <div className="flex-grow flex items-center justify-between gap-4">
                      <div className="flex-grow">
                        <p className="font-semibold mb-1"> Jerome Bell </p>
                        <span className="block text-xs clr-neutral-500">
                          woohoooo
                        </span>
                      </div>
                      <div className="shrink-0 inline-block text-center">
                        <span className="inline-block text-[var(--neutral-700)] text-xs">
                          1h
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-wrap items-center gap-4 cursor-pointer hover:bg-slate-200 duration-300 p-2 rounded-md">
                    <div className="w-11 h-11 relative z-[1] rounded-full shrink-0">
                      <Image
                        width={44}
                        height={44}
                        src="/img/user-5.jpg"
                        alt="image"
                        className="w-full h-full object-fit-cover overflow-hidden rounded-full"
                      />
                      <span className="inline-block w-3 h-3 rounded-full bg-[#37D27A] absolute end-0 bottom-0 z-[1]"></span>
                    </div>
                    <div className="flex-grow flex items-center justify-between gap-4">
                      <div className="flex-grow">
                        <p className="font-semibold mb-1"> Floyd Miles </p>
                        <span className="block text-xs clr-neutral-500">
                          You : Wow, this is really
                        </span>
                      </div>
                      <div className="shrink-0 inline-block text-center">
                        <span className="inline-block text-[var(--neutral-700)] text-xs">
                          2h
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-wrap items-center gap-4 cursor-pointer hover:bg-slate-200 duration-300 p-2 rounded-md">
                    <div className="w-11 h-11 relative z-[1] rounded-full shrink-0">
                      <Image
                        width={44}
                        height={44}
                        src="/img/user-6.jpg"
                        alt="image"
                        className="w-full h-full object-fit-cover overflow-hidden rounded-full"
                      />
                      <span className="inline-block w-3 h-3 rounded-full bg-[#37D27A] absolute end-0 bottom-0 z-[1]"></span>
                    </div>
                    <div className="flex-grow flex items-center justify-between gap-4">
                      <div className="flex-grow">
                        <p className="font-semibold mb-1"> Marvin McKinney </p>
                        <span className="block text-xs clr-neutral-500">
                          Haha oh man
                        </span>
                      </div>
                      <div className="shrink-0 inline-block text-center">
                        <span className="inline-block text-[var(--neutral-700)] text-xs">
                          4h
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-wrap items-center gap-4 cursor-pointer hover:bg-slate-200 duration-300 p-2 rounded-md">
                    <div className="w-11 h-11 relative z-[1] rounded-full shrink-0">
                      <Image
                        width={44}
                        height={44}
                        src="/img/user-1.jpg"
                        alt="image"
                        className="w-full h-full object-fit-cover overflow-hidden rounded-full"
                      />
                      <span className="inline-block w-3 h-3 rounded-full bg-[#37D27A] absolute end-0 bottom-0 z-[1]"></span>
                    </div>
                    <div className="flex-grow flex items-center justify-between gap-4">
                      <div className="flex-grow">
                        <p className="font-semibold mb-1"> Albert Flores </p>
                        <span className="block text-xs clr-neutral-500">
                          You : I&apos;ll be there
                        </span>
                      </div>
                      <div className="shrink-0 inline-block text-center">
                        <span className="inline-block text-[var(--neutral-700)] text-xs">
                          4h
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-wrap items-center gap-4 cursor-pointer hover:bg-slate-200 duration-300 p-2 rounded-md">
                    <div className="w-11 h-11 relative z-[1] rounded-full shrink-0">
                      <Image
                        width={44}
                        height={44}
                        src="/img/user-2.jpg"
                        alt="image"
                        className="w-full h-full object-fit-cover overflow-hidden rounded-full"
                      />
                      <span className="inline-block w-3 h-3 rounded-full bg-[#37D27A] absolute end-0 bottom-0 z-[1]"></span>
                    </div>
                    <div className="flex-grow flex items-center justify-between gap-4">
                      <div className="flex-grow">
                        <p className="font-semibold mb-1"> Arlene McCoy </p>
                        <span className="block text-xs clr-neutral-500">
                          You : Hey!
                        </span>
                      </div>
                      <div className="shrink-0 inline-block text-center">
                        <span className="inline-block text-[var(--neutral-700)] text-xs">
                          4h
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-wrap items-center gap-4 cursor-pointer hover:bg-slate-200 duration-300 p-2 rounded-md">
                    <div className="w-11 h-11 relative z-[1] rounded-full shrink-0">
                      <Image
                        width={44}
                        height={44}
                        src="/img/user-3.jpg"
                        alt="image"
                        className="w-full h-full object-fit-cover overflow-hidden rounded-full"
                      />
                      <span className="inline-block w-3 h-3 rounded-full bg-[#37D27A] absolute end-0 bottom-0 z-[1]"></span>
                    </div>
                    <div className="flex-grow flex items-center justify-between gap-4">
                      <div className="flex-grow">
                        <p className="font-semibold mb-1"> Arlene McCoy </p>
                        <span className="block text-xs clr-neutral-500">
                          You : Hey!
                        </span>
                      </div>
                      <div className="shrink-0 inline-block text-center">
                        <span className="inline-block text-[var(--neutral-700)] text-xs">
                          4h
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-wrap items-center gap-4 cursor-pointer hover:bg-slate-200 duration-300 p-2 rounded-md">
                    <div className="w-11 h-11 relative z-[1] rounded-full shrink-0">
                      <Image
                        width={44}
                        height={44}
                        src="/img/user-4.jpg"
                        alt="image"
                        className="w-full h-full object-fit-cover overflow-hidden rounded-full"
                      />
                      <span className="inline-block w-3 h-3 rounded-full bg-[#37D27A] absolute end-0 bottom-0 z-[1]"></span>
                    </div>
                    <div className="flex-grow flex items-center justify-between gap-4">
                      <div className="flex-grow">
                        <p className="font-semibold mb-1"> Arlene McCoy </p>
                        <span className="block text-xs clr-neutral-500">
                          You : Hey!
                        </span>
                      </div>
                      <div className="shrink-0 inline-block text-center">
                        <span className="inline-block text-[var(--neutral-700)] text-xs">
                          4h
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-wrap items-center gap-4 cursor-pointer hover:bg-slate-200 duration-300 p-2 rounded-md">
                    <div className="w-11 h-11 relative z-[1] rounded-full shrink-0">
                      <Image
                        width={44}
                        height={44}
                        src="/img/user-5.jpg"
                        alt="image"
                        className="w-full h-full object-fit-cover overflow-hidden rounded-full"
                      />
                      <span className="inline-block w-3 h-3 rounded-full bg-[#37D27A] absolute end-0 bottom-0 z-[1]"></span>
                    </div>
                    <div className="flex-grow flex items-center justify-between gap-4">
                      <div className="flex-grow">
                        <p className="font-semibold mb-1"> Arlene McCoy </p>
                        <span className="block text-xs clr-neutral-500">
                          You : Hey!
                        </span>
                      </div>
                      <div className="shrink-0 inline-block text-center">
                        <span className="inline-block text-[var(--neutral-700)] text-xs">
                          4h
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-12 min-[1024px]:col-span-6 xl:col-span-8 xxl:col-span-9">
            <div className="chat-box__content-head p-4">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-15 h-15 relative z-[1] rounded-full shrink-0">
                    <Image
                      width={60}
                      height={60}
                      src="/img/user-5.jpg"
                      alt="image"
                      className="w-full h-full object-fit-cover overflow-hidden rounded-full"
                    />
                    <span className="inline-block w-4 h-4 rounded-full bg-[#37D27A] absolute end-0 bottom-0 z-[1]"></span>
                  </div>
                  <h5 className="mb-0 flex-grow clr-neutral-500">
                    Peter Parker
                  </h5>
                </div>
                <div className="flex gap-3 items-center justify-content-end flex-wrap">
                  <Link
                    href="#"
                    className="link inline-block shrink-0 text-[var(--neutral-700)] hover:text-primary">
                    <PhoneIcon className="w-6 h-6" />
                  </Link>
                  <Link
                    href="#"
                    className="link inline-block shrink-0 text-[var(--neutral-700)] hover:text-primary">
                    <VideoCameraIcon className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="max-h-[640px] scrollbar-hide bg-[#EAEBFD] p-4 overflow-y-auto"
              style={{ overflowY: "auto" }}
              ref={scrollRef}>
              <ul className="flex flex-col gap-6">
                <li>
                  <div className="flex flex-col items-start">
                    <div className="w-12 h-12 rounded-full overflow-hidden mb-4">
                      <Image
                        width={48}
                        height={48}
                        src="/img/user-5.jpg"
                        alt="image"
                        className="w-full h-full object-fit-cover"
                      />
                    </div>
                    <div className="bg-white rounded-lg py-3 px-5 md:max-w-[45%] relative after:absolute after:top-[-12px] after:left-4 after:border-l-[12px] after:border-l-transparent after:border-r-[12px] after:border-r-transparent after:border-b-[12px] after:border-b-white">
                      <p className="inline-block mb-0 clr-neutral-500">
                        Lorem Ipsum is simply dummy text of the printing
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-col items-end">
                    <div className="bg-white rounded-lg py-3 px-5 md:max-w-[45%]  relative after:absolute after:bottom-[-12px] after:right-4 after:border-l-[12px] after:border-l-transparent after:border-r-[12px] after:border-r-transparent after:border-t-[12px] after:border-t-white">
                      <p className="inline-block mb-0 clr-neutral-500">
                        I play Stronghold Kingdoms
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-full overflow-hidden mt-4">
                      <Image
                        width={48}
                        height={48}
                        src="/img/user-2.jpg"
                        alt="image"
                        className="w-full h-full object-fit-cover"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-col items-start">
                    <div className="w-12 h-12 rounded-full overflow-hidden mb-4">
                      <Image
                        width={48}
                        height={48}
                        src="/img/user-5.jpg"
                        alt="image"
                        className="w-full h-full object-fit-cover"
                      />
                    </div>
                    <div className="bg-white rounded-lg py-3 px-5 md:max-w-[45%] relative after:absolute after:top-[-12px] after:left-4 after:border-l-[12px] after:border-l-transparent after:border-r-[12px] after:border-r-transparent after:border-b-[12px] after:border-b-white">
                      <p className="inline-block mb-0 clr-neutral-500">
                        How to make payment?
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-col items-end">
                    <div className="bg-white rounded-lg py-3 px-5 md:max-w-[45%]  relative after:absolute after:bottom-[-12px] after:right-4 after:border-l-[12px] after:border-l-transparent after:border-r-[12px] after:border-r-transparent after:border-t-[12px] after:border-t-white">
                      <p className="inline-block mb-0 clr-neutral-500">
                        Lorem Ipsum is simply dummy tex
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-full overflow-hidden mt-4">
                      <Image
                        width={48}
                        height={48}
                        src="/img/user-2.jpg"
                        alt="image"
                        className="w-full h-full object-fit-cover"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-col items-start">
                    <div className="w-12 h-12 rounded-full overflow-hidden mb-4">
                      <Image
                        width={48}
                        height={48}
                        src="/img/user-5.jpg"
                        alt="image"
                        className="w-full h-full object-fit-cover"
                      />
                    </div>
                    <div className="bg-white rounded-lg py-3 px-5 md:max-w-[45%] relative after:absolute after:top-[-12px] after:left-4 after:border-l-[12px] after:border-l-transparent after:border-r-[12px] after:border-r-transparent after:border-b-[12px] after:border-b-white">
                      <p className="inline-block mb-0 clr-neutral-500">
                        Lorem Ipsum is simply dummy text of the printing
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-col items-end">
                    <div className="bg-white rounded-lg py-3 px-5 md:max-w-[45%]  relative after:absolute after:bottom-[-12px] after:right-4 after:border-l-[12px] after:border-l-transparent after:border-r-[12px] after:border-r-transparent after:border-t-[12px] after:border-t-white">
                      <p className="inline-block mb-0 clr-neutral-500">
                        I play Stronghold Kingdoms
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-full overflow-hidden mt-4">
                      <Image
                        width={48}
                        height={48}
                        src="/img/user-2.jpg"
                        alt="image"
                        className="w-full h-full object-fit-cover"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-col align-start">
                    <div className="w-12 h-12 rounded-full overflow-hidden mb-4">
                      <Image
                        width={48}
                        height={48}
                        src="/img/user-5.jpg"
                        alt="image"
                        className="w-full h-full object-fit-cover"
                      />
                    </div>
                    <div className="bg-white rounded-lg py-3 px-5 md:max-w-[45%] relative after:absolute after:top-[-12px] after:left-4 after:border-l-[12px] after:border-l-transparent after:border-r-[12px] after:border-r-transparent after:border-b-[12px] after:border-b-white">
                      <p className="inline-block mb-0 clr-neutral-500">
                        How to make payment?
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-col items-end">
                    <div className="bg-white rounded-lg py-3 px-5 md:max-w-[45%] relative after:absolute after:bottom-[-12px] after:right-4 after:border-l-[12px] after:border-l-transparent after:border-r-[12px] after:border-r-transparent after:border-t-[12px] after:border-t-white">
                      <p className="inline-block mb-0 clr-neutral-500">
                        Lorem Ipsum is simply dummy tex
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-full overflow-hidden mt-4">
                      <Image
                        width={48}
                        height={48}
                        src="/img/user-2.jpg"
                        alt="image"
                        className="w-full h-full object-fit-cover"
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="p-4 flex items-center flex-wrap gap-4">
              <div className="flex items-center justify-between gap-4 shrink-0 max-w-[150px]">
                <div className="shrink-0">
                  <Link
                    href="#"
                    className="link inline-block clr-neutral-500 hover:text-primary">
                    <PlusCircleIcon className="w-6 h-6" />
                  </Link>
                </div>
                <div className="shrink-0">
                  <Link
                    href="#"
                    className="link inline-block clr-neutral-500 hover:text-primary">
                    <MicrophoneIcon className="w-6 h-6" />
                  </Link>
                </div>
                <div className="shrink-0">
                  <Link
                    href="#"
                    className="link inline-block clr-neutral-500 hover:text-primary">
                    <CameraIcon className="w-6 h-6" />
                  </Link>
                </div>
                <div className="shrink-0">
                  <Link
                    href="#"
                    className="link inline-block clr-neutral-500 hover:text-primary">
                    <FaceSmileIcon className="w-6 h-6" />
                  </Link>
                </div>
              </div>
              <div className="flex items-center flex-grow p-2 border border-neutral-30 bg-[var(--bg-2)] rounded-full">
                <input
                  type="text"
                  placeholder="Type message..."
                  className="w-full bg-transparent focus:outline-none border-0 flex-grow"
                />
                <button
                  type="button"
                  className="grid place-content-center w-10 h-10 rounded-full border-0 bg-primary text-white shrink-0">
                  <PaperAirplaneIcon className="w-5 h-5" />
                </button>
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
