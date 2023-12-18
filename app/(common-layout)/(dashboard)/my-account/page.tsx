"use client";
import Accordion from "@/components/Accordion";
import CheckboxCustom from "@/components/Checkbox";
import { ChevronDownIcon, PencilIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useRef, useState, useEffect } from "react";

const Page = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [imageSrc, setImageSrc] = useState<string>("/img/team-1.jpg");

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  const handleImageClick = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setImageSrc(reader.result.toString());
        }
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const eyeOpenIcon = <svg
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
      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
    />
  </svg>

  const eyeClosedIcon = <svg
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
      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>

  return (
    <>
      <div className="bg-white p-4 sm:p-6 md:p-8 mb-6 rounded-2xl shadow-lg">
        <Accordion
          buttonContent={(open) => (
            <div className="rounded-2xl flex justify-between items-center">
              <h3 className="h3">My Account </h3>
              <ChevronDownIcon
                className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${open ? "rotate-180" : ""
                  }`}
              />
            </div>
          )}
          initialOpen={true}
        >
          <div className="pt-4 lg:pt-6">
            <div>
              <div className="relative mx-auto ms-md-0 mb-6">
                <div className="avatar-upload__edit">
                  <input
                    type="file"
                    id="imageUpload"
                    accept=".png, .jpg, .jpeg"
                    className="hidden"
                    ref={inputFileRef}
                    onChange={handleFileChange}
                  />
                  <label
                    htmlFor="imageUpload"
                    className="avatar-upload__label"
                  ></label>
                </div>
                <div className="relative w-[180px] h-[180px]">
                  <Image
                    onClick={handleImageClick}
                    width={180}
                    height={180}
                    className="rounded-full border-[6px] border-[#F5F5FE] shadow-md"
                    src={imageSrc}
                    alt="avatar"
                  />
                  <span className="w-8 h-8 absolute cursor-pointer text-primary top-4 right-4 hover:bg-primary duration-300 hover:text-white rounded-full bg-white flex justify-center items-center border border-primary">
                    <PencilIcon className="w-5 h-5" />
                  </span>
                </div>
              </div>
              <form action="#" className="grid grid-cols-12 gap-4">
                <div className="col-span-12 lg:col-span-6 ">
                  <label
                    htmlFor="full-name"
                    className="block mb-2 font-medium clr-neutral-500"
                  >
                    Full Name:
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    className="border w-full focus:outline-none py-3 px-6 rounded-2xl"
                    placeholder="Enter name"
                  />
                </div>

                <div className="col-span-12 lg:col-span-6">
                  <label
                    htmlFor="user-phone"
                    className="block mb-2 font-medium clr-neutral-500"
                  >
                    WhatsApp Number :
                  </label>
                  <input
                    type="text"
                    id="user-phone"
                    className="border w-full focus:outline-none py-3 px-6 rounded-2xl"
                    placeholder="Enter number"
                  />
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <label
                    htmlFor="user-email"
                    className="block mb-2 font-medium clr-neutral-500"
                  >
                    Email (Optional) :
                  </label>
                  <input
                    type="text"
                    id="user-email"
                    className="border w-full focus:outline-none py-3 px-6 rounded-2xl"
                    placeholder="Enter email"
                  />
                </div>
                <div className="col-span-12 lg:col-span-6 lg:mt-">
                  <label className="block mb-2 font-medium clr-neutral-500">
                    Gender :
                  </label>
                  <ul className="flex flex-wrap items-center gap-6">
                    <li>
                      <div className="flex items-center gap-2">
                        <input
                          className="accent-[var(--primary)] scale-125"
                          type="radio"
                          name="gender"
                          id="male"
                        />
                        <label
                          className="inline-block font-medium cursor-pointer clr-neutral-500"
                          htmlFor="male"
                        >
                          Male
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center gap-2">
                        <input
                          className="accent-[var(--primary)] scale-125"
                          type="radio"
                          name="gender"
                          id="female"
                        />
                        <label
                          className="inline-block font-medium cursor-pointer clr-neutral-500"
                          htmlFor="female"
                        >
                          Female
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-span-12">
                  <div className="flex items-center gap-6 flex-wrap">
                    <Link
                      href="#"
                      className="link inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold"
                    >
                      Save
                    </Link>
                    <Link
                      href="#"
                      className="btn-outline text-primary font-semibold"
                    >
                      Cancel
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Accordion>
      </div>
      <div className="bg-white p-4 sm:p-6 md:p-8 mb-6 rounded-2xl shadow-lg">
        <Accordion
          buttonContent={(open) => (
            <div className="rounded-2xl flex justify-between items-center">
              <h3 className="h3">Change Password </h3>
              <ChevronDownIcon
                className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${open ? "rotate-180" : ""
                  }`}
              />
            </div>
          )}
          initialOpen={true}
        >
          <div className="pt-4 lg:pt-6">
            <form className="grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-6">
                <label
                  htmlFor="full-name"
                  className="block mb-2 font-medium clr-neutral-500"
                >
                  Current Password :
                </label>
                <div className="relative">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Password"
                    className="border w-full focus:outline-none py-3 px-6 rounded-2xl"
                  />
                  <span
                    className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                    onClick={togglePasswordVisibility}
                  >
                    {isPasswordVisible ? eyeOpenIcon : eyeClosedIcon}
                  </span>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <label
                  htmlFor="full-name"
                  className="block mb-2 font-medium clr-neutral-500"
                >
                  New Password :
                </label>
                <div className="relative">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Password"
                    className="border w-full focus:outline-none py-3 px-6 rounded-2xl"
                  />
                  <span
                    className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                    onClick={togglePasswordVisibility}
                  >
                    {isPasswordVisible ? eyeOpenIcon : eyeClosedIcon}
                  </span>
                </div>
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="full-name"
                  className="block mb-2 font-medium clr-neutral-500"
                >
                  Cofirm Password :
                </label>
                <div className="relative">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Password"
                    className="border w-full focus:outline-none py-3 px-6 rounded-2xl"
                  />
                  <span
                    className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                    onClick={togglePasswordVisibility}
                  >
                    {isPasswordVisible ? eyeOpenIcon : eyeClosedIcon}
                  </span>
                </div>
              </div>
              <div className="col-span-12">
                <label
                  htmlFor="full-name"
                  className="block mb-2 font-medium clr-neutral-500"
                >
                  Password Conditions :
                </label>
                <div className="flex flex-col">
                  <span>Minimum Length: 8 characters</span>
                  <span>Include at least one uppercase letter</span>
                  <span>Include at least one lowercase letter</span>
                  <span>Include at least one number</span>
                  <span>
                    Include at least one special character (e.g., !, @, #, $,
                    etc.)
                  </span>
                </div>
              </div>
              <div className="col-span-12">
                <div className="flex items-end gap-6 flex-wrap">
                  <Link
                    href="#"
                    className="link inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold"
                  >
                    Save
                  </Link>
                  <Link
                    href="#"
                    className="btn-outline text-primary font-semibold"
                  >
                    Cancel
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </Accordion>
      </div>
    </>
  );
};

export default Page;
