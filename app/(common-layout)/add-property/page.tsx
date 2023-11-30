"use client";
import Accordion from "@/components/Accordion";
import CheckboxCustom from "@/components/Checkbox";
import CustomRangeSlider from "@/components/RangeSlider";
import { propertyAmenities } from "@/public/data/addpropertyAmenities";
import {
  ChevronDownIcon,
  CloudArrowUpIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const page = () => {
  return (
    <div className="py-[30px] lg:py-[60px] bg-[var(--bg-2)] px-3">
      <div className="container">
        <div className="w-full xl:w-[83.33%] xxl:w-[100%] mx-auto">
          {/* Item 1 */}
          <div className="bg-white p-4 sm:p-6 md:p-10 mb-5 sm:mb-8 md:mb-12 rounded-2xl">
            <Accordion
              buttonContent={(open) => (
                <div className="rounded-2xl flex justify-between items-center">
                  <h3 className="h3">Create Shop/Business</h3>
                  <ChevronDownIcon
                    className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${open ? "rotate-180" : ""
                      }`}
                  />
                </div>
              )}
              initialOpen={true}>

              <div className="pt-4">
                <div className="border-t pt-4">
                  <div className="parent-form">
                    <div className="w-1/2 w-100">
                      <p className="mt-6 mb-4 text-xl font-medium">Category :</p>
                      <select className="w-full bg-transparent px-5 py-3 focus:outline-none border rounded-md text-base pr-3">
                        <option>Choice</option>
                        <option value="1">Real estate</option>
                        <option value="2">Used for sale</option>
                        <option value="3">Rental</option>
                        <option value="3">Jobs</option>
                        <option value="3">Event managements</option>
                        <option value="3">Service managements</option>
                        <option value="3">Products</option>
                      </select>
                    </div>
                    <div className="w-1/2 w-100">
                      <p className="mt-6 mb-4 text-xl font-medium">Sub Category :</p>
                      <select className="w-full bg-transparent px-5 py-3 focus:outline-none border rounded-md text-base pr-3">
                        <option>Choice</option>
                        <option value="1">Home</option>
                        <option value="2">Land</option>
                        <option value="3">Apartment</option>
                        <option value="3">Mobile</option>
                        <option value="3">Car</option>
                        <option value="3">Bike</option>
                        <option value="3">Camera</option>
                      </select>
                    </div>
                  </div>
                  <div className="parent-form">
                    <div className="w-1/2 w-100">
                      <p className="mt-6 mb-4 text-xl font-medium">Shop/Business type :</p>
                      <select className="w-full bg-transparent px-5 py-3 focus:outline-none border rounded-md text-base pr-3">
                        <option>Choice</option>
                        <option value="1">Home</option>
                        <option value="2">Land</option>
                        <option value="3">Apartment</option>
                        <option value="3">Mobile</option>
                        <option value="3">Car</option>
                        <option value="3">Bike</option>
                        <option value="3">Camera</option>
                      </select>
                    </div>
                    <div className="w-1/2 w-100">
                      <p className="mt-6 mb-4 text-xl font-medium">Shop name :</p>
                      <input
                        type="text"
                        className="w-full border p-2 focus:outline-none rounded-md  text-base"
                        placeholder="Your shop name"
                      />
                    </div>
                  </div>

                  <div className="parent-form">
                    <div className="w-1/2 w-100">
                      <p className="mt-6 mb-4 text-xl font-medium">Email id :</p>
                      <input
                        type="text"
                        className="w-full border p-2 focus:outline-none rounded-md  text-base"
                        placeholder="Your email id"
                      />
                    </div>
                    <div className="w-1/2 w-100">
                      <p className="mt-6 mb-4 text-xl font-medium">Website URL :</p>
                      <input
                        type="text"
                        className="w-full border p-2 focus:outline-none rounded-md  text-base"
                        placeholder="Your website url"
                      />
                    </div>
                  </div>
                  <div className="parent-form">
                    <div className="w-1/2 w-100">
                      <p className="mt-6 mb-4 text-xl font-medium">Phone/Landline-1 :</p>
                      <input
                        type="text"
                        className="w-full border p-2 focus:outline-none rounded-md  text-base"
                        placeholder="Phone/Landline-1"
                      />
                    </div>
                    <div className="w-1/2 w-100">
                      <p className="mt-6 mb-4 text-xl font-medium">Phone/Landline-2 :</p>
                      <input
                        type="text"
                        className="w-full border p-2 focus:outline-none rounded-md  text-base"
                        placeholder="Your Phone/Landline-2"
                      />
                    </div>
                  </div>
                  <div className="parent-form">
                    <div className="w-1/2 w-100">
                      <p className="mt-6 mb-4 text-xl font-medium">Phone/Landline-3 :</p>
                      <input
                        type="text"
                        className="w-full border p-2 focus:outline-none rounded-md  text-base"
                        placeholder="Your Phone/Landline-3"
                      />
                    </div>
                    <div className="w-1/2 w-100">
                      <p className="mt-6 mb-4 text-xl font-medium">Whatsapp number :</p>
                      <input
                        type="text"
                        className="w-full border p-2 focus:outline-none rounded-md  text-base"
                        placeholder="Your whatsapp number"
                      />
                    </div>
                  </div>
                  <div className="parent-form">
                    <div className="w-1/2 w-100">
                      <p className="mt-6 mb-4 text-xl font-medium">Address line 1 :</p>
                      <textarea
                        rows={8}
                        className="w-full border p-2 focus:outline-none rounded-md "
                        placeholder="About Your Shop Address 1"></textarea>
                    </div>
                    <div className="w-1/2 w-100">
                      <p className="mt-6 mb-4 text-xl font-medium">Address line 2 :</p>
                      <textarea
                        rows={8}
                        className="w-full border p-2 focus:outline-none rounded-md "
                        placeholder="About Your Shop Address 2"></textarea>
                    </div>
                  </div>
                  <div className="parent-form">
                    <div className="w-1/2 w-100">
                      <p className="mt-6 mb-4 text-xl font-medium">City/Town</p>
                      <input
                        type="text"
                        className="w-full border p-2 focus:outline-none rounded-md  text-base"
                        placeholder="Your City/Town"
                      />
                    </div>
                    <div className="w-1/2 w-100">
                      <p className="mt-6 mb-4 text-xl font-medium">State</p>
                      <input
                        type="text"
                        className="w-full border p-2 focus:outline-none rounded-md  text-base"
                        placeholder="Your State"
                      />
                    </div>
                  </div>
                  <div className="parent-form">
                    <div className="w-1/2 w-100">
                      <p className="mt-6 mb-4 text-xl font-medium">Zip Code</p>
                      <input
                        type="text"
                        className="w-full border p-2 focus:outline-none rounded-md  text-base"
                        placeholder="Your zip code"
                      />
                    </div>
                    <div className="w-1/2 w-100">
                      <p className="mt-6 mb-4 text-xl font-medium">Country</p>
                      <input
                        type="text"
                        className="w-full border p-2 focus:outline-none rounded-md  text-base"
                        placeholder="Your country"
                      />
                    </div>
                  </div>
                  {/* <div className="parent-form"> */}
                  {/* <div className="w-1/2 w-100"> */}
                  <div className="mt-6">
                    <div className="h-[400px]">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2233.5934788396344!2d89.78232001463437!3d23.836268639364576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1688381345276!5m2!1sen!2sbd"></iframe>
                    </div>
                  </div>
                  {/* </div> */}
                  {/* <div className="w-1/2 w-100"> */}
                  <p className="mt-6 mb-4 text-xl font-medium">About Your Shop/Business</p>
                  <textarea
                    rows={8}
                    className="w-full border p-2 focus:outline-none rounded-md "
                    placeholder="About Your Shop/Business"></textarea>
                  {/* </div> */}
                  {/* </div> */}

                  <h6 className="mt-6 mb-4 text-xl w-full font-medium">Images</h6>
                  <div className="parent-form">
                    <div className="w-1/2 w-100">
                      <p className="mt-6 mb-4 text-xl font-medium">Feature image</p>
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

                    <div className="w-1/2 w-100">
                      <p className="mt-6 mb-4 text-xl font-medium">Gallery images</p>
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
                <div className="parent-form">
                  <div className="w-1/2 w-100">
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
            </Accordion>
          </div>

          <div className="bg-white p-4 sm:p-6 md:p-10 mb-5 sm:mb-8 md:mb-12 rounded-2xl">
            <Accordion
              buttonContent={(open) => (
                <div className="rounded-2xl flex justify-between items-center">
                  <h3 className="h3">Seller Informations</h3>
                  <ChevronDownIcon
                    className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${open ? "rotate-180" : ""
                      }`}
                  />
                </div>
              )}
              initialOpen={true}>

              <div className="pt-4">
                <div className="border-t pt-4">
                  <div className="parent-form">
                    <div className="w-1/2 w-100">
                      <p className="mt-6 mb-4 text-xl font-medium">Seller name :</p>
                      <input
                        type="text"
                        className="w-full border p-2 focus:outline-none rounded-md  text-base"
                        placeholder="Seller name"
                      />
                    </div>
                    <div className="w-1/2 w-100">
                      <p className="mt-6 mb-4 text-xl font-medium">Seller mobile number :</p>
                      <input
                        type="text"
                        className="w-full border p-2 focus:outline-none rounded-md  text-base"
                        placeholder="Seller mobile number"
                      />
                    </div>
                  </div>
                  <div className="parent-form">
                    <div className="w-1/2 w-100">
                      <p className="mt-6 mb-4 text-xl font-medium">ID proof(Aadhar name) :</p>
                      <input
                        type="text"
                        className="w-full border p-2 focus:outline-none rounded-md  text-base"
                        placeholder="Your Aadhar name"
                      />
                    </div>
                    <div className="w-1/2 w-100">
                      <p className="mt-6 mb-4 text-xl font-medium">ID proof number(Aadhar number) :</p>
                      <input
                        type="text"
                        className="w-full border p-2 focus:outline-none rounded-md  text-base"
                        placeholder="Your Aadhar number"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Accordion>
          </div>

          <div className="bg-white p-4 sm:p-6 md:p-10 mb-5 sm:mb-8 md:mb-12 rounded-2xl">
            <Accordion
              buttonContent={(open) => (
                <div className="rounded-2xl flex justify-between items-center">
                  <h3 className="h3">Additional Informations</h3>
                  <ChevronDownIcon
                    className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${open ? "rotate-180" : ""
                      }`}
                  />
                </div>
              )}
              initialOpen={true}>

              <div className="pt-4">
                <div className="border-t pt-4">
                  <div className="parent-form">
                    <div className="w-1/2 w-100">
                      <p className="mt-6 mb-4 text-xl font-medium">
                        Parking available :
                      </p>
                      <ul className="flex gap-6 flex-wrap">
                        <li>
                          <div className="flex items-center gap-2">
                            <input
                              className="accent-[var(--primary)] scale-125"
                              type="radio"
                              name="property-type"
                              id="general-settings"
                            />
                            <label
                              className="inline-block text-lg font-medium cursor-pointer"
                              htmlFor="general-settings">
                              Yes
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center gap-2">
                            <input
                              className="accent-[var(--primary)] scale-125"
                              type="radio"
                              name="property-type"
                              id="featured-settings"
                            />
                            <label
                              className="inline-block text-lg font-medium cursor-pointer"
                              htmlFor="featured-settings">
                              No
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="w-1/2 w-100">
                      <p className="mt-6 mb-4 text-xl font-medium">
                        Restroom available :
                      </p>
                      <ul className="flex gap-6 flex-wrap">
                        <li>
                          <div className="flex items-center gap-2">
                            <input
                              className="accent-[var(--primary)] scale-125"
                              type="radio"
                              name="property-type"
                              id="general-settings"
                            />
                            <label
                              className="inline-block text-lg font-medium cursor-pointer"
                              htmlFor="general-settings">
                              Yes
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center gap-2">
                            <input
                              className="accent-[var(--primary)] scale-125"
                              type="radio"
                              name="property-type"
                              id="featured-settings"
                            />
                            <label
                              className="inline-block text-lg font-medium cursor-pointer"
                              htmlFor="featured-settings">
                              No
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="parent-form">
                    <div className="w-1/2 w-100">
                      <p className="mt-6 mb-4 text-xl font-medium ">
                        Parking available :
                      </p>
                      <ul className="flex gap-6 flex-wrap">
                        <li>
                          <div className="flex items-center gap-2">
                            <input
                              className="accent-[var(--primary)] scale-125"
                              type="radio"
                              name="property-type"
                              id="general-settings"
                            />
                            <label
                              className="inline-block text-lg font-medium cursor-pointer"
                              htmlFor="general-settings">
                              Yes
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center gap-2">
                            <input
                              className="accent-[var(--primary)] scale-125"
                              type="radio"
                              name="property-type"
                              id="featured-settings"
                            />
                            <label
                              className="inline-block text-lg font-medium cursor-pointer"
                              htmlFor="featured-settings">
                              No
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="w-1/2 w-100">
                      <p className="mt-6 mb-4 text-xl font-medium">GST no. :</p>
                      <input
                        type="text"
                        className="w-full border p-2 focus:outline-none rounded-md  text-base"
                        placeholder="Your shop GST no."
                      />
                    </div>
                  </div>
                  <div className="w-1/2 w-100">
                    <p className="mt-6 mb-4 text-xl font-medium">Shop Establishment date  :</p>
                    <input
                      type="date"
                      className="w-full border p-2 focus:outline-none rounded-md  text-base"
                      placeholder="Your Shop Establishment date"
                    />
                  </div>
                </div>
              </div>
            </Accordion>
          </div>

          <div className="bg-white p-4 sm:p-6 md:p-10 mb-5 sm:mb-8 md:mb-12 rounded-2xl">
            <Accordion
              buttonContent={(open) => (
                <div className="rounded-2xl flex justify-between items-center">
                  <h3 className="h3">Social Media Links</h3>
                  <ChevronDownIcon
                    className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${open ? "rotate-180" : ""
                      }`}
                  />
                </div>
              )}
              initialOpen={true}>
              <div className="pt-4">
                <div className="border-t pt-4">
                  <div className="parent-form">
                    <div className="w-1/2 w-100">
                      <i className="lab la-facebook mt-6 mb-4 text-4xl font-medium"></i>
                      <input
                        type="text"
                        className="w-full border p-2 focus:outline-none rounded-md  text-base"
                        placeholder="Your shop facebook id link"
                      />
                    </div>
                    <div className="w-1/2 w-100">
                      <i className="lab la-twitter mt-6 mb-4 text-4xl font-medium"></i>
                      <input
                        type="text"
                        className="w-full border p-2 focus:outline-none rounded-md  text-base"
                        placeholder="Your shop twitter id link"
                      />
                    </div>
                  </div>
                  <div className="parent-form">
                    <div className="w-1/2 w-100">
                      <i className="lab la-instagram mt-6 mb-4 text-4xl font-medium"></i>
                      <input
                        type="text"
                        className="w-full border p-2 focus:outline-none rounded-md  text-base"
                        placeholder="Your shop instagram id link"
                      />
                    </div>
                    <div className="w-1/2 w-100">
                      <i className="lab la-youtube mt-6 mb-4 text-4xl font-medium"></i>
                      <input
                        type="text"
                        className="w-full border p-2 focus:outline-none rounded-md  text-base"
                        placeholder="Your shop youtube channel link"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Accordion>
          </div>

        </div>
      </div>
    </div>
  );
};

export default page;
