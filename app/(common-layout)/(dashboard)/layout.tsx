"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  AdjustmentsHorizontalIcon,
  ArrowRightOnRectangleIcon,
  BellAlertIcon,
  ChatBubbleLeftRightIcon,
  CheckIcon,
  ClipboardDocumentCheckIcon,
  CreditCardIcon,
  HeartIcon,
  MapPinIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const convertToTitleCase = (str: string) => {
    // Remove leading slash
    str = str.slice(1);

    // Split the string into words
    const words = str.split("-");

    // Capitalize the first letter of each word
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );

    // Join the words with a space
    const result = capitalizedWords.join(" ");

    return result;
  };

  const heading = convertToTitleCase(path);

  return (
    <>
      <div className="py-[30px] lg:py-[60px] bg-[#091E43] px-3">
        <div className="container">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-12 md:col-span-6">
              <h1 className="h2 text-white mb-3"> {heading} </h1>
              <ul className="flex items-center gap-2">
                <li>
                  <Link
                    href="#"
                    className="link inline-block text-white :clr-tertiary-300">
                    Account
                  </Link>
                </li>
                <li>
                  <i className="las text-white la-angle-right"></i>
                </li>
                <li>
                  <Link
                    href="#"
                    className="link inline-block text-[var(--tertiary)]">
                    {heading}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="flex md:justify-end">
                <Link
                  href="#"
                  className="link inline-flex items-center gap-2 py-3 px-6 rounded-full bg-[#243756] hover:bg-primary">
                  <ArrowRightOnRectangleIcon className="w-5 h-5 text-white" />
                  <span className="inline-block text-white font-semibold">
                    Logout
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-[30px] lg:pb-[60px] pt-0 relative z-[1] px-3">
        <span className="w-full h-[7.5rem] absolute start-0 end-0 top-0 z-[-1] bg-[#091E43]"></span>
        <div className="container">
          <div className="grid grid-cols-12 gap-4 lg:gap-6">
            <div
              style={{ zIndex: 2 }}
              className="col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-3">
              <div className="p-3 sm:p-4 lg:p-6 rounded-2xl bg-white shadow-lg">
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
                <div className="text-center mb-10">
                  <h4 className="text-2xl font-semibold"> Savannah Nguyen </h4>
                  <p className="mb-0"> info@example.com </p>
                </div>
                <div className="mb-10">
                  <span className="block clr-neutral-400 text-xs mb-4">
                    Account
                  </span>
                  <ul className="flex flex-col gap-3">
                    <li>
                      <Link
                        href="/personal-info"
                        className={`link flex items-center gap-2 clr-neutral-500 hover:text-primary ${
                          path === "/personal-info" && "text-primary"
                        }`}>
                        <i className="las la-user-circle text-xl"></i>
                        <span className="block font-medium">Personal info</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/user-security"
                        className={`link flex items-center gap-2 clr-neutral-500 hover:text-primary ${
                          path === "/user-security" && "text-primary"
                        }`}>
                        <ShieldCheckIcon className="w-5 h-5" />
                        <span className="block font-medium"> Security </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/user-notification"
                        className={`link flex items-center justify-between gap-2 clr-neutral-500 hover:text-primary ${
                          path === "/user-notification" && "text-primary"
                        }`}>
                        <span className="flex items-center gap-2">
                          <BellAlertIcon className="w-5 h-5" />
                          <span className="block font-medium">
                            Notifications
                          </span>
                        </span>
                        <span className="grid place-content-center w-6 h-6 rounded-full bg-[var(--secondary-500)] text-white text-sm">
                          1
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/user-preference"
                        className={`link flex items-center gap-2 clr-neutral-500 hover:text-primary ${
                          path === "/user-preference" && "text-primary"
                        }`}>
                        <AdjustmentsHorizontalIcon className="w-5 h-5" />
                        <span className="block font-medium"> Preferences </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/user-chat"
                        className={`link flex items-center gap-2 clr-neutral-500 hover:text-primary ${
                          path === "/user-chat" && "text-primary"
                        }`}>
                        <ChatBubbleLeftRightIcon className="w-5 h-5" />
                        <span className="block font-medium"> Chat </span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mb-10">
                  <span className="block clr-neutral-400 text-xs mb-4">
                    SHOPPING
                  </span>
                  <ul className="flex flex-col gap-3">
                    <li>
                      <Link
                        href="/user-booking"
                        className={`link flex items-center gap-2 clr-neutral-500 hover:text-primary ${
                          path === "/user-booking" && "text-primary"
                        }`}>
                        <ClipboardDocumentCheckIcon className="w-5 h-5" />
                        <span className="block font-medium"> My Bookings </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/user-wishlist"
                        className={`link flex items-center justify-between gap-2 clr-neutral-500 hover:text-primary ${
                          path === "/user-wishlist" && "text-primary"
                        }`}>
                        <span className="flex items-center gap-2">
                          <HeartIcon className="w-5 h-5" />
                          <span className="block font-medium">My Wishlist</span>
                        </span>
                        <span className="grid place-content-center w-6 h-6 rounded-full bg-[var(--secondary-500)] text-white text-sm">
                          4
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <span className="block clr-neutral-400 text-xs mb-4">
                    BILLING
                  </span>
                  <ul className="flex flex-col gap-3">
                    <li>
                      <Link
                        href="/user-payment"
                        className={`link flex items-center gap-2 clr-neutral-500 hover:text-primary ${
                          path === "/user-payment" && "text-primary"
                        }`}>
                        <CreditCardIcon className="w-5 h-5" />
                        <span className="block font-medium"> Payments </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/user-address"
                        className={`link flex items-center gap-2 clr-neutral-500 hover:text-primary ${
                          path === "/user-address" && "text-primary"
                        }`}>
                        <MapPinIcon className="w-5 h-5" />
                        <span className="block font-medium"> Address </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/user-team"
                        className={`link flex items-center gap-2 clr-neutral-500 hover:text-primary ${
                          path === "/user-team" && "text-primary"
                        }`}>
                        <UserGroupIcon className="w-5 h-5" />
                        <span className="block font-medium"> Teams </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              style={{ zIndex: 2 }}
              className="col-span-12 md:col-span-7 lg:col-span-8 xl:col-span-9">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
