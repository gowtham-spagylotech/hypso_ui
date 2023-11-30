"use client";
import Footer from "@/components/vendor-dashboard/Vendor.Footer";
import { ChangeEvent, useRef, useState } from "react";
import {
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import iconGoogle from "@/public/img/icon-google.png";
import iconDropbox from "@/public/img/icon-dropbox.png";
import iconSlack from "@/public/img/icon-slack.png";
import iconMailChimp from "@/public/img/icon-mailchimp.png";
import iconJira from "@/public/img/icon-jira.png";
import Accordion from "@/components/Accordion";
import CheckboxCustom from "@/components/Checkbox";
import { ChevronDownIcon, PencilIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import CustomSwitch from "@/components/Switch";
import { candlestick } from "@/public/data/candlestick";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Page = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [imageSrc, setImageSrc] = useState<string>("/img/team-1.jpg");

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
  return (
    <div className="bg-[var(--bg-2)]">
      <div className="flex items-center justify-between flex-wrap px-3 py-5 md:p-[30px] gap-5 lg:p-[60px] bg-[var(--dark)]">
        <h2 className="h2 text-white">Admin Settings </h2>
      </div>
      {/* statisticts */}
      <section className="z-[1] gap-4 mb-6 lg:gap-6 px-3 sm:px-5 bg-[var(--bg-2)] relative after:absolute after:bg-[var(--dark)] after:w-full after:h-[60px] after:top-0 after:left-0 after:z-[-1] pb-10 xxl:pb-0">
        <div className=" p-4 md:p-6 lg:p-10 rounded-2xl bg-white">
          <h3 className="h3">Profile Settings</h3>
          <div className="grid grid-cols-12 gap-4 lg:gap-6 mt-6">
            <div className="col-span-12 xl:col-span-6">
              <div className="bg-[#FBFBFF] border rounded-2xl p-3 md:p-5 lg:py-8 lg:px-10 mb-6">
                <Accordion
                  buttonContent={(open) => (
                    <div className="rounded-2xl flex justify-between items-center">
                      <h3 className="h3">Basic Info </h3>
                      <ChevronDownIcon
                        className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  )}
                  initialOpen={true}>
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
                            className="avatar-upload__label"></label>
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
                        <div className="col-span-12 lg:col-span-6">
                          <label
                            htmlFor="full-name"
                            className="block mb-2 font-medium clr-neutral-500">
                            Full name :
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
                            htmlFor="user-email"
                            className="block mb-2 font-medium clr-neutral-500">
                            Email :
                          </label>
                          <input
                            type="text"
                            id="user-email"
                            className="border w-full focus:outline-none py-3 px-6 rounded-2xl"
                            placeholder="Enter email"
                          />
                        </div>
                        <div className="col-span-12 lg:col-span-12">
                          <label
                            htmlFor="user-phone"
                            className="block mb-2 font-medium clr-neutral-500">
                            Phone (Optional) :
                          </label>
                          <input
                            type="text"
                            id="user-phone"
                            className="border w-full focus:outline-none py-3 px-6 rounded-2xl"
                            placeholder="Enter number"
                          />
                        </div>
                        <div className="col-span-12 lg:col-span-12">
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
                                  htmlFor="male">
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
                                  htmlFor="female">
                                  Female
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="col-span-12">
                          <label className="block mb-2 font-medium clr-neutral-500">
                            BIO :
                          </label>
                          <textarea
                            rows={4}
                            placeholder="Write your bio"
                            className="border w-full focus:outline-none py-3 px-6 rounded-2xl"></textarea>
                        </div>

                        <div className="col-span-12 lg:col-span-12">
                          <label
                            htmlFor="user-phone"
                            className="block mb-2 font-medium clr-neutral-500">
                            Link Title :
                          </label>
                          <input
                            type="text"
                            id="user-link"
                            className="border w-full focus:outline-none py-3 px-6 rounded-2xl"
                            placeholder="Enter Link Title"
                          />
                        </div>

                        <div className="col-span-12 lg:col-span-12">
                          <label
                            htmlFor="user-phone"
                            className="block mb-2 font-medium clr-neutral-500">
                            URL :
                          </label>
                          <input
                            type="text"
                            id="user-url"
                            className="border w-full focus:outline-none py-3 px-6 rounded-2xl"
                            placeholder="Enter URL"
                          />
                        </div>

                        <div className="col-span-12">
                          <div className="flex flex-col gap-3">
                            <CheckboxCustom label="I agree to the privacy & policy" />
                            <CheckboxCustom label="I agree with all terms & conditions" />
                          </div>
                        </div>

                        <div className="col-span-12">
                          <div className="flex items-center gap-6 flex-wrap">
                            <Link
                              href="#"
                              className="link inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold">
                              Save Changes
                            </Link>
                            <Link
                              href="#"
                              className="btn-outline text-primary font-semibold">
                              Cancel
                            </Link>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </Accordion>
              </div>
              <div className="p-3 sm:p-4 md:p-6 xl:p-10 border rounded-2xl bg-[#FBFBFF] shadow-3 mb-6">
                <div className="flex flex-wrap justify-between items-center gap-4">
                  <h3 className="mb-0 h3 flex-grow"> My Network </h3>
                  <Link
                    href="#"
                    className="btn-outline text-primary font-semibold shrink-0">
                    Toggle All
                  </Link>
                </div>
                <div className="hr-line my-6"></div>
                <p className="mb-4"> SEND ME : </p>
                <div className="bg-[var(--primary-light)] py-4 px-8 rounded-lg mb-4">
                  <p className="mb-0 text-[var(--neutral-700)]">
                    We need permission from your browser to show notifications.
                    <Link
                      href="#"
                      className="link inline-block font-semibold text-primary">
                      Request permission
                    </Link>
                  </p>
                </div>
                <ul className="flex flex-col gap-6">
                  <li>
                    <div className="flex flex-wrap flex-sm-nowrap gap-4 items-center">
                      <div className="shrink-0">
                        <CustomSwitch />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center flex-wrap gap-6 mb-1">
                          <h5 className="font-semibold mb-0"> New for you </h5>
                          <span className="inline-flex justify-center py-2 px-4 text-center text-xs bg-[#37D27A] text-[var(--neutral-700)] rounded font-semibold">
                            New
                          </span>
                        </div>
                        <p className="mb-0 clr-neutral-500">
                          A weekly email featuring shots from designers you
                          follow
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-wrap flex-sm-nowrap gap-4 items-center">
                      <div className="shrink-0">
                        <CustomSwitch />
                      </div>
                      <div className="flex-grow">
                        <h5 className="font-semibold mb-1">
                          {" "}
                          Account activity{" "}
                        </h5>
                        <p className="mb-0 clr-neutral-500">
                          A weekly email featuring shots from designers you
                          follow
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-wrap flex-sm-nowrap gap-4 items-center">
                      <div className="shrink-0">
                        <CustomSwitch />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center flex-wrap gap-6 mb-1">
                          <h5 className="font-semibold mb-0">
                            {" "}
                            Meetups near you{" "}
                          </h5>
                          <span className="inline-flex justify-center py-2 px-4 text-center text-xs bg-[#37D27A] text-[var(--neutral-700)] rounded font-semibold">
                            New
                          </span>
                        </div>
                        <p className="mb-0 clr-neutral-500">
                          Get an email when a Dribbble Meetup is posted close to
                          my location
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-wrap flex-sm-nowrap gap-4 items-center">
                      <div className="shrink-0">
                        <CustomSwitch />
                      </div>
                      <div className="flex-grow">
                        <h5 className="font-semibold mb-1"> Opportunities </h5>
                        <p className="mb-0 clr-neutral-500">
                          Get a daily email when new design jobs are posted in
                          your area
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="p-3 sm:p-4 md:p-6 border xl:p-10 rounded-2xl bg-[#FBFBFF] shadow-3 mb-6">
                <div className="flex flex-wrap justify-between items-center gap-4">
                  <h3 className="mb-0 h3 flex-grow"> Usage </h3>
                  <Link
                    href="#"
                    className="btn-outline text-primary font-semibold shrink-0">
                    Toggle All
                  </Link>
                </div>
                <div className="hr-line my-6"></div>
                <p className="mb-4"> ALLOW OTHERS TO : </p>
                <ul className="flex flex-col gap-6">
                  <li>
                    <div className="flex flex-wrap flex-sm-nowrap gap-4 items-center">
                      <div className="shrink-0">
                        <CustomSwitch />
                      </div>
                      <div className="flex-grow">
                        <h5 className="font-semibold mb-1"> Encrypt data </h5>
                        <p className="mb-0 clr-neutral-500">
                          Encrypt all data associated with account
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-wrap flex-sm-nowrap gap-4 items-center">
                      <div className="shrink-0">
                        <CustomSwitch />
                      </div>
                      <div className="flex-grow">
                        <h5 className="font-semibold mb-1">
                          {" "}
                          Location services{" "}
                        </h5>
                        <p className="mb-0 clr-neutral-500">
                          Allow third-party apps to use current location
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-wrap flex-sm-nowrap gap-4 items-center">
                      <div className="shrink-0">
                        <CustomSwitch />
                      </div>
                      <div className="flex-grow">
                        <h5 className="font-semibold mb-1">
                          {" "}
                          Allow private notes{" "}
                        </h5>
                        <p className="mb-0 clr-neutral-500">
                          Members can send you private notes
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-[#FBFBFF] p-4 sm:p-6 md:p-8  rounded-2xl border mb-6">
                <Accordion
                  buttonContent={(open) => (
                    <div className="rounded-2xl flex justify-between items-center">
                      <h3 className="h3">Two-step verification</h3>
                      <ChevronDownIcon
                        className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  )}
                  initialOpen={true}>
                  <div className="pt-4 lg:pt-6">
                    <p className="mb-4">
                      Start by entering your password so that we know it&apos;s
                      you. Then we&apos;ll walk you through two more simple
                      steps.
                    </p>
                    <form action="#" className="grid grid-cols-12 gap-4">
                      <div className="col-span-12">
                        <label
                          htmlFor="account-password"
                          className="block mb-2 font-medium clr-neutral-500">
                          Account password :
                        </label>
                        <input
                          type="password"
                          id="account-password"
                          className="py-3 px-6 border w-full focus:outline-none rounded-lg"
                          placeholder="Enter current password"
                        />
                      </div>
                      <div className="col-span-12">
                        <Link
                          href="#"
                          className="link inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold">
                          Set Up
                        </Link>
                      </div>
                    </form>
                  </div>
                </Accordion>
              </div>
              <div className="bg-[#FBFBFF] p-4 sm:p-6 md:p-8  rounded-2xl border ">
                <Accordion
                  buttonContent={(open) => (
                    <div className="rounded-2xl flex justify-between items-center">
                      <h3 className="h3">Password </h3>
                      <ChevronDownIcon
                        className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  )}
                  initialOpen={true}>
                  <div className="pt-4 lg:pt-6">
                    <form action="#" className="grid grid-cols-12 gap-4">
                      <div className="col-span-12">
                        <label
                          htmlFor="current-password-setup"
                          className="block mb-2 font-medium clr-neutral-500">
                          Current password :
                        </label>
                        <input
                          type="password"
                          id="current-password-setup"
                          className="w-full focus:outline-none border py-3 px-6 rounded-lg"
                          placeholder="Enter current password"
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6">
                        <label
                          htmlFor="new-password"
                          className="block mb-2 font-medium clr-neutral-500">
                          New password :
                        </label>
                        <input
                          type="password"
                          id="new-password"
                          className="w-full focus:outline-none border py-3 px-6 rounded-lg"
                          placeholder="Enter new password"
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6">
                        <label
                          htmlFor="confirm-password"
                          className="block mb-2 font-medium clr-neutral-500">
                          Confirm password :
                        </label>
                        <input
                          type="password"
                          id="confirm-password"
                          className="w-full focus:outline-none border py-3 px-6 rounded-lg"
                          placeholder="Confirm your new password"
                        />
                      </div>
                      <div className="col-span-12">
                        <h5 className="font-medium mb-4">
                          {" "}
                          Password requirements :{" "}
                        </h5>
                        <ul className=" list-disc pl-4 gap-3">
                          <li>
                            {" "}
                            Minimum 8 characters long - the more, the better{" "}
                          </li>
                          <li> At least one lowercase character </li>
                          <li> At least one uppercase character </li>
                          <li>
                            At least one number, symbol, or whitespace character
                          </li>
                        </ul>
                      </div>
                      <div className="col-span-12">
                        <div className="flex items-center gap-6 flex-wrap">
                          <Link
                            href="#"
                            className="link inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold">
                            Update Password
                          </Link>
                          <Link
                            href="#"
                            className="btn-outline text-primary font-semibold">
                            Cancel
                          </Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </Accordion>
              </div>
            </div>
            <div className="col-span-12 xl:col-span-6">
              <div className="bg-[#FBFBFF] border rounded-2xl p-3 md:p-5 lg:py-8 lg:px-10 mb-6">
                <Accordion
                  buttonContent={(open) => (
                    <div className="rounded-2xl flex justify-between items-center">
                      <h3 className="h3">Address </h3>
                      <ChevronDownIcon
                        className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  )}
                  initialOpen={true}>
                  <div className="pt-4 lg:pt-6">
                    <form action="#" className="grid grid-cols-12 gap-4">
                      <div className="col-span-12 ">
                        <label className="block mb-2 font-medium clr-neutral-500">
                          Location :
                        </label>
                        <div className="border rounded-lg px-4 bg-transparent">
                          <select
                            className="w-full bg-transparent px-5 py-3 focus:outline-none"
                            aria-label="Default select example">
                            <option>Property Types</option>
                            <option value="1">New York</option>
                            <option value="2">Chicago</option>
                            <option value="3">Atlanta</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-span-12 lg:col-span-6">
                        <label
                          id="address-line-1"
                          className="block mb-2 font-medium clr-neutral-500">
                          Address line 1 :
                        </label>
                        <input
                          type="text"
                          id="address-line-1"
                          className="border w-full focus:outline-none py-3 px-6 rounded-lg"
                          placeholder="Enter address 1"
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6">
                        <label
                          id="address-line-2"
                          className="block mb-2 font-medium clr-neutral-500">
                          Address line 2:
                        </label>
                        <input
                          type="text"
                          id="address-line-2"
                          className="border w-full focus:outline-none py-3 px-6 rounded-lg"
                          placeholder="Enter address 2"
                        />
                      </div>
                      <div className="col-span-12">
                        <label
                          id="enter-code"
                          className="block mb-2 font-medium clr-neutral-500">
                          Zip code :
                        </label>
                        <input
                          type="text"
                          id="enter-code"
                          className="border w-full focus:outline-none py-3 px-6 rounded-lg"
                          placeholder="Enter code"
                        />
                      </div>
                      <div className="col-span-12">
                        <div className="flex items-center gap-6 flex-wrap">
                          <Link
                            href="#"
                            className="link inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold">
                            Save Changes
                          </Link>
                          <Link
                            href="#"
                            className="btn-outline text-primary font-semibold">
                            Cancel
                          </Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </Accordion>
              </div>
              <div className="bg-[#FBFBFF] border rounded-2xl p-3 md:p-5 lg:py-8 lg:px-10 mb-6">
                <Accordion
                  buttonContent={(open) => (
                    <div className="rounded-2xl flex justify-between items-center">
                      <h3 className="h3">Privacy </h3>
                      <ChevronDownIcon
                        className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  )}
                  initialOpen={true}>
                  <div className="pt-4 lg:pt-6">
                    <form action="#" className="grid grid-cols-12 gap-4">
                      <div className="col-span-12 -12">
                        <label className="block mb-2 font-medium clr-neutral-500 text-xl">
                          Who can see your profile photo?
                        </label>
                        <div className="border rounded-lg px-4 bg-transparent">
                          <select
                            className="w-full bg-transparent px-5 py-3 focus:outline-none"
                            aria-label="Default select example">
                            <option>Anyone</option>
                            <option value="1">New York</option>
                            <option value="2">Chicago</option>
                            <option value="3">Atlanta</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
                </Accordion>
              </div>
              <div className="bg-[#FBFBFF] border rounded-2xl p-3 md:p-5 lg:py-8 lg:px-10 mb-6">
                <Accordion
                  buttonContent={(open) => (
                    <div className="rounded-2xl flex justify-between items-center">
                      <h3 className="h3">Delete Your Account </h3>
                      <ChevronDownIcon
                        className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  )}
                  initialOpen={true}>
                  <div className="pt-4 lg:pt-6">
                    <p className="clr-neutral-500 mb-4">
                      When you delete your account, you lose access to Front
                      account services, and we permanently delete your personal
                      data. You can cancel the deletion for 14 days.
                    </p>
                    <div className="mb-8">
                      <CheckboxCustom label="Confirm that I want to delete my account." />
                    </div>
                    <Link
                      href="#"
                      className="btn-outline bg-[var(--tertiary)] border-[var(--tertiary)] text-[var(--neutral-700)] hover:bg-[var(--tertiary)] hover:text-neutral-700 font-semibold">
                      Delete
                    </Link>
                  </div>
                </Accordion>
              </div>
              <div className="p-3 sm:p-4 md:p-6 border xl:p-10 rounded-2xl bg-[#FBFBFF] shadow-3 mb-6">
                <div className="flex flex-wrap justify-between items-center gap-4">
                  <h3 className="mb-0 h3 flex-grow"> Placewise Emails </h3>
                  <Link
                    href="#"
                    className="btn-outline text-primary font-semibold shrink-0">
                    Toggle All
                  </Link>
                </div>
                <div className="hr-line my-6"></div>
                <p className="mb-4"> SUBSCRIBE ME TO : </p>
                <ul className="flex flex-col gap-6">
                  <li>
                    <div className="flex flex-wrap flex-sm-nowrap gap-4 items-center">
                      <div className="shrink-0">
                        <CustomSwitch />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center flex-wrap gap-6 mb-1">
                          <h5 className="font-semibold mb-0"> Company news </h5>
                          <span className="inline-flex justify-center py-2 px-4 text-center text-xs bg-[#37D27A] text-[var(--neutral-700)] rounded font-semibold">
                            New
                          </span>
                        </div>
                        <p className="mb-0 clr-neutral-500">
                          Get Placewise news, announcements, and product updates
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-wrap flex-sm-nowrap gap-4 items-center">
                      <div className="shrink-0">
                        <CustomSwitch />
                      </div>
                      <div className="flex-grow">
                        <h5 className="font-semibold mb-1"> Replay </h5>
                        <p className="mb-0 clr-neutral-500">
                          A weekly email featuring popular shots
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-wrap flex-sm-nowrap gap-4 items-center">
                      <div className="shrink-0">
                        <CustomSwitch />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center flex-wrap gap-6 mb-1">
                          <h5 className="font-semibold mb-0"> Courtside </h5>
                          <span className="inline-flex justify-center py-2 px-4 text-center text-xs bg-[#37D27A] text-[var(--neutral-700)] rounded font-semibold">
                            New
                          </span>
                        </div>
                        <p className="mb-0 clr-neutral-500">
                          A weekly email featuring the latest stories from our
                          blog
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-wrap flex-sm-nowrap gap-4 items-center">
                      <div className="shrink-0">
                        <CustomSwitch />
                      </div>
                      <div className="flex-grow">
                        <h5 className="font-semibold mb-1"> Weekly jobs </h5>
                        <p className="mb-0 clr-neutral-500">
                          Weekly digest of design jobs
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-wrap flex-sm-nowrap gap-4 items-center">
                      <div className="shrink-0">
                        <CustomSwitch />
                      </div>
                      <div className="flex-grow">
                        <h5 className="font-semibold mb-1"> Monthly jobs </h5>
                        <p className="mb-0 clr-neutral-500">
                          Monthly digest of design jobs
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="px-3 md:px-6 lg:px-10 py-6 lg:py-8 rounded-2xl border bg-[#FBFBFF] mb-6">
                <h3 className="h3">Notification Statistics</h3>
                <div className="grid grid-cols-12 gap-4 lg:gap-6">
                  <div className="col-span-12 max-h-[400px]">
                    <ApexChart
                      options={candlestick}
                      series={candlestick.series}
                      type="candlestick"
                      height={250}
                    />
                  </div>
                </div>
              </div>
              <div className="bg-[#FBFBFF] p-4 sm:p-6 md:p-8  rounded-2xl border mb-6">
                <Accordion
                  buttonContent={(open) => (
                    <div className="rounded-2xl flex justify-between items-center">
                      <h3 className="h3">Device history </h3>
                      <ChevronDownIcon
                        className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  )}
                  initialOpen={true}>
                  <div className="pt-4 lg:pt-6">
                    <ul className="flex flex-col gap-6">
                      <li>
                        <div className="flex flex-wrap items-center justify-between gap-4 text-">
                          <div className="flex gap-6 items-center">
                            <div className="shrink-0">
                              <ComputerDesktopIcon className="w-8 h-8" />
                            </div>
                            <div className="flex-grow">
                              <h5 className="font-medium mb-1">
                                {" "}
                                Dell XPS 20{" "}
                              </h5>
                              <ul className="flex flex-wrap items-center list-divider-half-xs">
                                <li>
                                  <span className="inline-block text-sm">
                                    IP : 213.230.93.79
                                  </span>
                                </li>
                                <li>
                                  <span className="inline-block text-sm">
                                    active : Now
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="shrink-0">
                            <Link
                              href="#"
                              className="btn-outline text-primary font-semibold">
                              Log out
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div className="flex gap-6 items-center">
                            <div className="shrink-0">
                              <ComputerDesktopIcon className="w-8 h-8" />
                            </div>
                            <div className="flex-grow">
                              <h5 className="font-medium mb-1">
                                {" "}
                                Microsoft Studio{" "}
                              </h5>
                              <ul className="flex flex-wrap items-center list-divider-half-xs">
                                <li>
                                  <span className="inline-block text-sm">
                                    IP : 213.230.93.79
                                  </span>
                                </li>
                                <li>
                                  <span className="inline-block text-sm">
                                    active : 3 days ago
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="shrink-0">
                            <Link
                              href="#"
                              className="btn-outline text-primary font-semibold">
                              Log out
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div className="flex gap-6 items-center">
                            <div className="shrink-0">
                              <DevicePhoneMobileIcon className="w-8 h-8" />
                            </div>
                            <div className="flex-grow">
                              <h5 className="font-medium mb-1"> GitHub </h5>
                              <ul className="flex flex-wrap items-center list-divider-half-xs">
                                <li>
                                  <span className="inline-block text-sm">
                                    IP : 213.230.93.79
                                  </span>
                                </li>
                                <li>
                                  <span className="inline-block text-sm">
                                    active : 22 min ago
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="shrink-0">
                            <Link
                              href="#"
                              className="btn-outline text-primary font-semibold">
                              Log out
                            </Link>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Accordion>
              </div>
              <div className="bg-[#FBFBFF] p-4 sm:p-6 md:p-8  rounded-2xl border ">
                <Accordion
                  buttonContent={(open) => (
                    <div className="rounded-2xl flex justify-between items-center">
                      <h3 className="h3">Connected accounts </h3>
                      <ChevronDownIcon
                        className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  )}
                  initialOpen={true}>
                  <div className="pt-4 lg:pt-6">
                    <p className="mb-4">
                      Integrated features from these accounts make it easier to
                      collaborate with people you know on Placewise
                    </p>
                    <ul className="flex flex-col gap-6">
                      <li>
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div className="flex gap-6 items-center">
                            <div className="grid place-content-center w-15 h-15 rounded-full shadow-lg bg-white shrink-0 overflow-hidden">
                              <Image
                                src={iconGoogle}
                                alt="image"
                                className="w-full focus:outline-none h-full object-fit-contain"
                              />
                            </div>
                            <div className="flex-grow">
                              <h5 className="font-semibold mb-1"> Google </h5>
                              <p className="mb-0 clr-neutral-500"> Calendar </p>
                            </div>
                          </div>
                          <div className="shrink-0">
                            <CustomSwitch />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div className="flex gap-6 items-center">
                            <div className="grid place-content-center w-15 h-15 rounded-full shadow-lg bg-white shrink-0 overflow-hidden p-3">
                              <Image
                                src={iconDropbox}
                                alt="image"
                                className="w-full focus:outline-none h-full object-fit-contain"
                              />
                            </div>
                            <div className="flex-grow">
                              <h5 className="font-semibold mb-1"> Dropbox </h5>
                              <p className="mb-0 clr-neutral-500">
                                {" "}
                                File hosting{" "}
                              </p>
                            </div>
                          </div>
                          <div className="shrink-0">
                            <CustomSwitch />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div className="flex gap-6 items-center">
                            <div className="grid place-content-center w-15 h-15 rounded-full shadow-lg bg-white shrink-0 overflow-hidden p-3">
                              <Image
                                src={iconSlack}
                                alt="image"
                                className="w-full focus:outline-none h-full object-fit-contain"
                              />
                            </div>
                            <div className="flex-grow">
                              <h5 className="font-semibold mb-1"> Slack </h5>
                              <p className="mb-0 clr-neutral-500">
                                {" "}
                                Communication{" "}
                              </p>
                            </div>
                          </div>
                          <div className="shrink-0">
                            <CustomSwitch />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div className="flex gap-6 items-center">
                            <div className="grid place-content-center w-15 h-15 rounded-full shadow-lg bg-white shrink-0 overflow-hidden p-3">
                              <Image
                                src={iconMailChimp}
                                alt="image"
                                className="w-full focus:outline-none h-full object-fit-contain"
                              />
                            </div>
                            <div className="flex-grow">
                              <h5 className="font-semibold mb-1">
                                {" "}
                                Mailchimp{" "}
                              </h5>
                              <p className="mb-0 clr-neutral-500">
                                {" "}
                                Email marketing{" "}
                              </p>
                            </div>
                          </div>
                          <div className="shrink-0">
                            <CustomSwitch />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div className="flex gap-6 items-center">
                            <div className="grid place-content-center w-15 h-15 rounded-full shadow-lg bg-white shrink-0 overflow-hidden p-3">
                              <Image
                                src={iconJira}
                                alt="image"
                                className="w-full focus:outline-none h-full object-fit-contain"
                              />
                            </div>
                            <div className="flex-grow">
                              <h5 className="font-semibold mb-1"> Jira </h5>
                              <p className="mb-0 clr-neutral-500">
                                {" "}
                                Issue tracking{" "}
                              </p>
                            </div>
                          </div>
                          <div className="shrink-0">
                            <CustomSwitch />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Accordion>
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
