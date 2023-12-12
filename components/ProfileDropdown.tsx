import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function ProfileDropdown() {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleCategoryHover = () => {
    setShowSubMenu(true);
  };

  const handleCategoryLeave = () => {
    setShowSubMenu(false);
  };
  return (
    <div className="text-left z-10">
      <Menu as="div" className="relative inline-block top-1 md:top-[2px]">
        <Menu.Button className="flex justify-center items-center rounded-full focus:outline-none">
          <i className="las la-user bg-[var(--tertiary)] text-[var(--neutral-700)] text-4xl p-2 rounded-full"></i>
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-300"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="z-auto absolute left-[-80px] lg:right-0 lg:left-auto mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 p-3 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <div className="flex gap-3 pb-3 items-center border-b border-dashed">
                  <Image
                    src="/img/user-1.jpg"
                    alt="profile"
                    className="rounded-full"
                    width={55}
                    height={55}
                  />

                  <div className="flex flex-col">
                    <span className="text-gray-800 text-xl font-semibold">
                      Peter Parker
                    </span>
                    <span className="text-gray-600 text-sm">
                      Los Angeles, CA
                    </span>
                  </div>
                </div>
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active ? "bg-gray-200 text-gray-800" : ""
                      } group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm mt-2`}
                  >
                    <UserIcon />
                    My Account
                  </button>
                )}
              </Menu.Item>

              <Menu.Item>
                <Menu>
                  {({ open }) => (
                    <>
                      <div className="profile-dropdown">
                        <div
                          className="category"
                          onMouseEnter={handleCategoryHover}
                          onMouseLeave={handleCategoryLeave}
                        >
                          <Menu.Button className="group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm mt-2">
                            <i className="lab la-buromobelexperte text-2xl"></i>
                            Category
                          </Menu.Button>
                          <div className={`submenu ${showSubMenu ? 'block' : 'hidden'}`}>
                            <Menu.Item>
                              {({ active }) => (
                                <Link href="/add-category" className={`${active ? "bg-gray-200 text-gray-800" : ""
                                  } group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  <i className="las la-plus-circle text-xl"></i>
                                  Create Category
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link href="/edit-category"
                                  className={`${active ? "bg-gray-200 text-gray-800" : ""
                                    } group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  <i className="las la-edit text-xl"></i>
                                  Edit Category
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </Menu>
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active ? "bg-gray-200 text-gray-800" : ""
                      } group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <ShopIcon />
                    My Shop/Business
                  </button>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active ? "bg-gray-200 text-gray-800" : ""
                      } group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <AdIcon />
                    My Ads
                  </button>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active ? "bg-gray-200 text-gray-800" : ""
                      } group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm `}
                  >
                    <ReviewIcon />
                    My Reviews
                  </button>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${active ? "bg-gray-200 text-gray-800" : ""
                      } group flex gap-2 w-full items-center rounded-md px-2 py-2 text-sm`} >
                    <LogOutIcon />
                    Log out
                  </button>
                )}
              </Menu.Item>

            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
const UserIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>
  );
};
const ShopIcon = () => {
  return (
    <svg
      version="1.1"
      id="_x32_"
      height="20px"
      width="20px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="#000000"
    >
      <g>
        <path
          className="st0"
          d="M147.238,207.793c21.254,0,38.489-17.227,38.489-38.481l14.054-147.238h-61.579l-29.444,147.238 C108.758,190.566,125.984,207.793,147.238,207.793z"
        />
        <path
          className="st0"
          d="M256.005,207.793c21.245,0,38.48-17.227,38.48-38.481l-7.7-147.238h-61.571l-7.699,147.238 C217.516,190.566,234.75,207.793,256.005,207.793z"
        />
        <path
          className="st0"
          d="M364.762,207.793c21.245,0,38.48-17.227,38.48-38.481L373.79,22.075h-61.571l14.054,147.238 C326.273,190.566,343.5,207.793,364.762,207.793z"
        />
        <path
          className="st0"
          d="M460.794,22.075h-61.571l35.807,147.238c0,18.005,12.38,33.074,29.072,37.28v251.139h-57.991V311.838 H276.564v145.893H47.898V206.592c16.694-4.205,29.064-19.282,29.064-37.28l35.815-147.238H51.198L0,169.312 c0,12.717,6.194,23.954,15.695,30.959v289.654h480.61V200.272C505.807,193.266,512,182.03,512,169.312L460.794,22.075z"
        />
        <rect
          x="99.552"
          y="271.378"
          className="st0"
          width="100.39"
          height="100.381"
        />
      </g>
    </svg>
  );
};
const AdIcon = () => {
  return (
    <svg
      fill="#000000"
      height="20px"
      width="20px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
    >
      <g>
        <path d="M214.5,188.2h0.2c-0.3-0.2-0.7-0.3-0.8-0.5C214,187.9,214.3,188.1,214.5,188.2z" />
        <path
          d="M232,84V22.5l0,0c-0.5-5.9-5.4-10.6-11.5-10.6c-4.2,0-7.9,2.4-9.9,5.7C184.2,39,151,66.5,101.3,66.5H42.7
            c-0.7,0-1.5,0-2.2,0.2c-0.2,0-0.2,0-0.3,0C21,66.6,5.5,82.1,5.5,101.3S21,136,40.2,136c0.2,0,0.2,0,0.3,0c0.7,0,1.5,0.2,2.2,0.2H50
            l16.7,109.4l49.7-6.4l-2.5-20.2l10.1-1.5l-2.9-19.2l-9.8,1.5L100.7,136c4.9,0,9.3,0.2,12.1,0.5c45.8,3.9,75.6,30.1,99.9,50
            c0.3,0.3,0.8,0.7,1.2,1c0.3,0.2,0.7,0.3,0.8,0.5c1.7,1,3.7,1.5,5.7,1.5c5.7,0,10.6-4.2,11.3-9.8l0,0h0.2v-61.1
            c9.6,0,17.3-7.7,17.3-17.3C249.4,91.7,241.6,84,232,84z M214.5,166c-35.4-27.1-61.3-42.4-95.8-46.3V83
            c34.5-3.9,60.5-19.4,95.8-46.7V166z"
        />
      </g>
    </svg>
  );
};
const RequerimentIcon = () => {
  return (
    <svg
      fill="#000000"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      width="20px"
      height="20px"
      viewBox="0 0 961.396 961.396"
    >
      <g>
        <g>
          <g>
            <path
              d="M744.49,876.396V572.694l-50,63.266v240.438c0,19.299-15.7,35-35,35H130.14c-19.299,0-35-15.701-35-35v-654.44
              c0-19.299,15.701-35,35-35h6.318v632.859c0,16.566,13.431,30,30,30h456.711c16.569,0,30-13.434,30-30V683.306
              c-22.849,20.059-50.48,34.438-80.269,41.442l-30.717,7.225l-36.785,8.652l-0.084-37.789l-0.067-31.556
              c-0.093-41.837,14.145-82.955,40.086-115.78l107.836-136.447V186.957h6.317c19.299,0,35,15.701,35,35v144.815l50-63.266v-81.549
              c0-46.869-38.131-85-85-85h-66.194c0.829,5.071,1.27,10.272,1.27,15.574v9.425v25.001v5.078v30.726h-30.727H232.626H201.9
              v-30.726v-5.078v-25.001v-9.425c0-5.302,0.439-10.503,1.269-15.574H130.14c-46.869,0-85,38.131-85,85v654.439
              c0,46.867,38.131,85,85,85h529.35C706.359,961.396,744.49,923.266,744.49,876.396z M386.748,677.104L270.644,793.207
              c-5.858,5.857-15.355,5.857-21.213,0l-34.341-34.341l-24.188-24.188c-5.858-5.856-5.858-15.354,0-21.213l23.735-23.733
              c5.858-5.857,15.355-5.857,21.213,0l24.188,24.188l81.762-81.762c5.858-5.858,15.355-5.858,21.214,0l23.733,23.732
              C392.605,661.748,392.605,671.246,386.748,677.104z M386.748,500.188L270.644,616.292c-5.858,5.858-15.355,5.858-21.213,0
              l-34.341-34.341l-24.188-24.188c-5.858-5.856-5.858-15.354,0-21.213l23.735-23.732c5.858-5.858,15.355-5.858,21.213,0
              l24.188,24.188l81.762-81.763c5.858-5.858,15.355-5.858,21.214,0l23.733,23.734C392.605,484.832,392.605,494.33,386.748,500.188z
              M214.637,335.899c5.858-5.858,15.355-5.858,21.213,0l24.188,24.188l81.762-81.763c5.858-5.858,15.355-5.858,21.214,0
              l23.733,23.734c5.858,5.858,5.858,15.355,0,21.213L270.644,439.375c-5.858,5.858-15.355,5.858-21.213,0l-34.341-34.341
              l-24.188-24.188c-5.858-5.856-5.858-15.354,0-21.213L214.637,335.899z"
            />
            <path
              d="M498.466,87.161h-13.072c0-5.242-0.465-10.376-1.352-15.363c-0.941-5.303-2.371-10.438-4.226-15.363
              C467.39,23.459,435.553,0,398.232,0c-37.321,0-69.158,23.459-81.584,56.435c-1.856,4.925-3.284,10.06-4.227,15.363
              c-0.887,4.987-1.351,10.121-1.351,15.363h-13.074c-30.734,0-56.501,21.215-63.489,49.796c-1.221,4.993-1.882,10.205-1.882,15.574
              v9.425v25.001v5.078h331.209v-5.078v-25.001v-9.425c0-5.369-0.66-10.582-1.882-15.574
              C554.966,108.376,529.201,87.161,498.466,87.161z"
            />
            <path
              d="M910.88,278.289c0.623-0.786,1.184-1.601,1.694-2.435c6.535-10.632,4.23-24.708-5.801-32.637l-10.176-8.041
              c-10.033-7.93-24.264-6.918-33.096,1.899c-0.691,0.69-1.354,1.423-1.976,2.208l-7.596,9.612l-9.525,12.052
              c-3.731-1.575-7.688-2.362-11.631-2.362c-8.858,0.001-17.635,3.908-23.557,11.399l-64.73,81.904l-50,63.266l-41.317,52.28
              L568.873,574.1c-21.851,27.647-33.699,61.875-33.623,97.113l0.069,31.555l30.718-7.225c34.301-8.067,64.864-27.506,86.715-55.153
              l0.42-0.531l41.317-52.28l50-63.268l148.607-188.036c8.557-10.825,8.447-25.715,0.666-36.327l9.531-12.059L910.88,278.289z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

const ReviewIcon = () => {
  return (
    <svg
      fill="#000000"
      width="20px"
      height="20px"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g data-name="37 rating" id="_37_rating">
        <path d="M42.83,3.5H21.17a6,6,0,0,0-6,6V28.66a6,6,0,0,0,6,6H23.4l7.84,9.23a1,1,0,0,0,1.1.29.992.992,0,0,0,.66-.94V34.66h9.83a6,6,0,0,0,6-6V9.5A6,6,0,0,0,42.83,3.5Zm4,25.16a4,4,0,0,1-4,4H32a1,1,0,0,0-1,1v6.86l-6.38-7.51a1.011,1.011,0,0,0-.76-.35H21.17a4,4,0,0,1-4-4V9.5a4,4,0,0,1,4-4H42.83a4,4,0,0,1,4,4Z" />
        <path d="M44.66,10.75a1,1,0,0,1-1,1H20.34a1,1,0,0,1,0-2H43.66A1,1,0,0,1,44.66,10.75Z" />
        <path d="M44.66,14.92a1,1,0,0,1-1,1H20.34a1,1,0,0,1,0-2H43.66A.99.99,0,0,1,44.66,14.92Z" />
        <path d="M44.66,19.08a1,1,0,0,1-1,1H20.34a1,1,0,0,1,0-2H43.66A1,1,0,0,1,44.66,19.08Z" />
        <path d="M44.66,23.25a1,1,0,0,1-1,1H28.67a1,1,0,0,1,0-2H43.66A.99.99,0,0,1,44.66,23.25Z" />
        <path d="M44.66,27.41a1,1,0,0,1-1,1H28.67a1,1,0,0,1,0-2H43.66A1,1,0,0,1,44.66,27.41Z" />
        <path d="M18.65,46.55a1.009,1.009,0,0,0-.95-.69H13.57l-1.28-3.93a1,1,0,0,0-1.9,0L9.11,45.86H4.98a1,1,0,0,0-.59,1.81L7.73,50.1,6.46,54.02a1,1,0,0,0,.95,1.31A1.01,1.01,0,0,0,8,55.14l3.34-2.43,3.34,2.43a1,1,0,0,0,1.54-1.11L14.94,50.1l3.35-2.43A1.012,1.012,0,0,0,18.65,46.55Zm-5.83,3.47.55,1.7-1.44-1.05a.99.99,0,0,0-1.18,0L9.31,51.72l.55-1.7a.992.992,0,0,0-.36-1.11L8.06,47.86H9.84a1.009,1.009,0,0,0,.95-.69l.55-1.7.55,1.7a1,1,0,0,0,.95.69h1.78l-1.44,1.05A.977.977,0,0,0,12.82,50.02Z" />
        <path d="M39.31,51.71a1,1,0,0,0-.95-.69H34.23l-1.28-3.93a1,1,0,0,0-1.9,0l-1.28,3.93H25.64a1,1,0,0,0-.59,1.81l3.35,2.43-1.28,3.93a1.012,1.012,0,0,0,.36,1.12,1.022,1.022,0,0,0,1.18,0L32,57.88l3.34,2.43a1.011,1.011,0,0,0,1.18,0,1.012,1.012,0,0,0,.36-1.12L35.6,55.26l3.35-2.43A1,1,0,0,0,39.31,51.71Zm-5.83,3.48.55,1.69-1.44-1.05a1.011,1.011,0,0,0-1.18,0l-1.44,1.05.55-1.69a.992.992,0,0,0-.36-1.12l-1.44-1.05H30.5a1,1,0,0,0,.95-.69L32,50.64l.55,1.69a1,1,0,0,0,.95.69h1.78l-1.44,1.05A.992.992,0,0,0,33.48,55.19Z" />
        <path d="M59.97,46.55a.991.991,0,0,0-.95-.69H54.89l-1.28-3.93a1,1,0,0,0-1.9,0l-1.28,3.93H46.3a1,1,0,0,0-.59,1.81l3.35,2.43-1.28,3.93a1,1,0,0,0,1.54,1.11l3.34-2.43L56,55.14a1.01,1.01,0,0,0,.59.19.967.967,0,0,0,.59-.19.987.987,0,0,0,.36-1.12L56.27,50.1l3.34-2.43A1,1,0,0,0,59.97,46.55Zm-5.83,3.47.55,1.7-1.44-1.05a.988.988,0,0,0-.59-.19,1.01,1.01,0,0,0-.59.19l-1.44,1.05.55-1.7a.977.977,0,0,0-.36-1.11l-1.44-1.05h1.78a1,1,0,0,0,.95-.69l.55-1.7.55,1.7a1.009,1.009,0,0,0,.95.69h1.78L54.5,48.91A.992.992,0,0,0,54.14,50.02Z" />
      </g>
    </svg>
  );
};

const LogOutIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
      />
    </svg>
  );
};
