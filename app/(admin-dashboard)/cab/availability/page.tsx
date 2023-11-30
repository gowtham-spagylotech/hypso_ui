"use client";
import React, { Fragment, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Dialog, Transition } from "@headlessui/react";
import Footer from "@/components/vendor-dashboard/Vendor.Footer";
import { PlusCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import CheckboxCustom from "@/components/Checkbox";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
import { allCabs } from "@/public/data/allcabs";

export default function DemoApp() {
  let [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(1);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;
  function handleDateClick(arg: any) {
    console.log("Clicked on date: ", arg.dateStr);
    openModal();
  }
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  function dayRender(dayRenderInfo: any) {
    return (
      <div className="flex flex-col items-center justify-center">
        <h2 className="h2 mb-7 mt-4 text-center">
          {dayRenderInfo.dayNumberText}
        </h2>
        <div className="hidden sm:block">
          <p className="py-1 text-xs md:text-base">Price: $120</p>
        </div>
      </div>
    );
  }
  const calendarOptions: any = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: "dayGridMonth",
    weekends: false,
    eventContent: renderEventContent,
    dateClick: handleDateClick,
    dayRender: dayRender,
  };

  return (
    <div className="">
      <div className="flex items-center justify-between flex-wrap px-3 py-5 md:p-[30px] gap-5 lg:p-[60px] bg-[var(--dark)]">
        <h2 className="h2 text-white">Availability</h2>
        <Link href="/cab/add-new-cab" className="btn-primary">
          <PlusCircleIcon className="w-5 h-5" /> Add New cab
        </Link>
      </div>
      <div className="relative after:absolute after:bg-[var(--dark)] after:w-full after:h-[60px] after:top-0 after:left-0">
        <div className="grid grid-cols-12 gap-6 mx-3 lg:mx-6">
          <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
            <div className="rounded-2xl relative z-[1] bg-white p-3 md:p-5 lg:p-8 border">
              <h3 className="h3 border-b pb-4 mb-4">Availablity</h3>
              {allCabs.map(({ id, name }) => (
                <button
                  onClick={() => setActive(id)}
                  className={`block w-full font-medium text-left rounded-lg p-3 lg:px-6 ${
                    active === id && "bg-[var(--primary-light)] text-primary"
                  }`}
                  key={id}>
                  {name.slice(0, 20)}
                </button>
              ))}
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-8 xl:col-span-9">
            <div className="rounded-2xl relative z-[1] bg-white p-3 md:p-5 lg:p-8 border">
              <FullCalendar {...calendarOptions} dayCellContent={dayRender} />
              <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                  as="div"
                  className="relative z-10 "
                  onClose={closeModal}>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center text-center">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95">
                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden  lg:min-w-[768px] rounded-2xl bg-white p-6 lg:p-10 text-left align-middle shadow-xl transition-all">
                          <div className="mt-2 flex justify-between items-center border-b pb-3">
                            <h3 className="h3">Date Information</h3>
                            <XMarkIcon
                              onClick={closeModal}
                              className="w-5 h-5 cursor-pointer"
                            />
                          </div>

                          <div className="mt-4 grid grid-cols-2 gap-4 lg:gap-6">
                            <div
                              className="col-span-2 lg:col-span-1 flex flex-col gap-3"
                              onClick={(e) => e.stopPropagation()}>
                              <label
                                className="text-xl font-medium"
                                htmlFor="date-range">
                                Date Ranges :{" "}
                              </label>
                              <DatePicker
                                placeholderText="03/08/2023 - 05/08/2023"
                                selectsRange={true}
                                startDate={startDate}
                                dateFormat="dd/MM/yyyy"
                                endDate={endDate}
                                onChange={(update) => setDateRange(update)}
                                className="w-full p-3 border rounded focus:outline-none"
                              />
                            </div>
                            <div className="col-span-2 lg:col-span-1 flex flex-col gap-3">
                              <label
                                className="text-xl font-medium"
                                htmlFor="date-range">
                                Status :{" "}
                              </label>
                              <CheckboxCustom label="Available for booking?" />
                            </div>
                            <div className="col-span-2 flex flex-col gap-3">
                              <label
                                className="text-xl font-medium"
                                htmlFor="date-range">
                                Price :{" "}
                              </label>
                              <input
                                type="text"
                                placeholder="$150"
                                className="border py-[10px] px-2 rounded focus:outline-none focus:border-primary focus:border"
                              />
                            </div>
                          </div>
                          <div className="flex gap-3 flex-wrap mt-6 lg:mt-10">
                            <button className="btn-primary">
                              Save Changes
                            </button>
                            <button className="btn-outline">Cancel</button>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function renderEventContent(eventInfo: any) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
