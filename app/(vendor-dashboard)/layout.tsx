"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/img/logo.png";
import {
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  BellIcon,
  BuildingStorefrontIcon,
  CheckIcon,
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  CurrencyDollarIcon,
  PlusCircleIcon,
  StarIcon,
  TicketIcon,
} from "@heroicons/react/24/outline";

import { SearchIcon } from "@/public/data/icons";
import LangDropdown from "@/components/LangDropdown";
import NotificationDropdown from "@/components/NotificationDropdown";
import ProfileDropdown from "@/components/ProfileDropdown";
import { MouseEvent, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [navOpen, setNavOpen] = useState(false);
  const path = usePathname();
  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setNavOpen(!navOpen);
  };
  return (
    <>
      <section className="bg-white">
        <nav
          className={`${
            navOpen ? "ml-0" : "ml-[-312px]"
          } lg:ml-0 w-[270px] sm:w-[312px] transiton-all duration-300 ease-out z-20 fixed bg-white flex flex-col border-r p-3 md:p-10 min-h-screen shadow-lg lg:shadow-none`}>
          <div className="grow">
            <Link
              href="/"
              className="inline-flex items-center pb-4 lg:pb-9 border-b border-dashed">
              <Image src={Logo} alt="logo" />
            </Link>
            <ul className="py-5">
              <li>
                <Link
                  href="/vendor-dashboard"
                  className={`flex items-center gap-2 rounded-md px-6 py-3 duration-300 ${
                    path == "/vendor-dashboard" && "bg-primary text-white"
                  }`}>
                  <BuildingStorefrontIcon className="w-5 h-5" />
                  Dashboard
                </Link>
              </li>
            </ul>
            <span className="text-xs">Agent Pages</span>
            <ul className="py-5">
              <li>
                <Link
                  href="/vendor-listings"
                  className={`flex items-center gap-2 rounded-md px-6 py-3 duration-300 ${
                    path == "/vendor-listings" && "bg-primary text-white"
                  }`}>
                  <ClipboardDocumentListIcon className="w-5 h-5" />
                  Listings
                </Link>
              </li>
              <li>
                <Link
                  href="/vendor-bookings"
                  className={`flex items-center gap-2 rounded-md px-6 py-3 duration-300 ${
                    path == "/vendor-bookings" && "bg-primary text-white"
                  }`}>
                  <TicketIcon className="w-5 h-5" />
                  Bookings
                </Link>
              </li>
              <li>
                <Link
                  href="/vendor-activities"
                  className={`flex items-center gap-2 rounded-md px-6 py-3 duration-300 ${
                    path == "/vendor-activities" && "bg-primary text-white"
                  }`}>
                  <BellIcon className="w-5 h-5" />
                  Activities
                </Link>
              </li>
              <li>
                <Link
                  href="/vendor-earnings"
                  className={`flex items-center gap-2 rounded-md px-6 py-3 duration-300 ${
                    path == "/vendor-earnings" && "bg-primary text-white"
                  }`}>
                  <CurrencyDollarIcon className="w-5 h-5" />
                  Earnings
                </Link>
              </li>
              <li>
                <Link
                  href="/vendor-reviews"
                  className={`flex items-center gap-2 rounded-md px-6 py-3 duration-300 ${
                    path == "/vendor-reviews" && "bg-primary text-white"
                  }`}>
                  <StarIcon className="w-5 h-5" />
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/vendor-settings"
                  className={`flex items-center gap-2 rounded-md px-6 py-3 duration-300 ${
                    path == "/vendor-settings" && "bg-primary text-white"
                  }`}>
                  <Cog6ToothIcon className="w-5 h-5" />
                  Settings
                </Link>
              </li>
            </ul>
          </div>
          <ul>
            <li>
              <Link
                href="/"
                className={`flex items-center gap-2 rounded-md px-6 py-3 `}>
                <ArrowRightOnRectangleIcon className="w-5 h-5" />
                Log out
              </Link>
            </li>
          </ul>
        </nav>
        <div
          className={`lg:ml-[312px] relative ${
            navOpen &&
            "after:bg-black after:bg-opacity-70 after:absolute after:inset-0 after:z-10 after:duration-300 overflow-y-hidden"
          }`}
          onClick={() => setNavOpen(false)}>
          <header className="px-4 md:px-8 py-3 lg:py-6 flex gap-2 justify-between self-start">
            <button
              onClick={handleOpen}
              className="lg:hidden order-2 select-none">
              <Bars3Icon className="w-8 h-8" />
            </button>
            <form className="rounded-3xl hidden md:flex bg-[var(--bg-1)] xl:w-[332px] px-3 lg:px-4 py-2 justify-between border items-center">
              <input
                type="text"
                className="focus:outline-none bg-[var(--bg-1)]"
                placeholder="Search"
              />
              <SearchIcon />
            </form>
            <div className="flex gap-2 items-center order-1 lg:order-2">
              <LangDropdown />
              <NotificationDropdown />
              <ProfileDropdown />
            </div>
          </header>
          <div className="flex items-center justify-between flex-wrap px-3 py-5 md:p-[30px] gap-5 lg:p-[60px] bg-[var(--dark)]">
            <div className="flex gap-2 items-center">
              <div className="p-1 border border-[var(--primary)] rounded-full bg-white  grid place-content-center relative mx-auto">
                <Image
                  width={48}
                  height={48}
                  src="/img/team-1.jpg"
                  alt="image"
                  className="rounded-full"
                />
                <div className="w-4 h-4 grid place-content-center rounded-full border-2 white text-white bg-primary absolute bottom-2 right-0">
                  <CheckIcon className="w-3 h-3" />
                </div>
              </div>
              <div className="text-white">
                <h6 className="font-medium text-lg">Floyd Miles</h6>
                <Link href="mailto:info@example.com">info@example.com</Link>
              </div>
            </div>
            <Link href="/add-property" className="btn-primary">
              <PlusCircleIcon className="w-5 h-5" /> Add New Listing
            </Link>
          </div>
          <section>{children}</section>
        </div>
      </section>
    </>
  );
}
