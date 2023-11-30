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
                                    <h3 className="h3">Create Advertisement</h3>
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
                                            <p className="mt-6 mb-4 text-xl font-medium">Title :</p>
                                            <input
                                                type="text"
                                                className="w-full border p-2 focus:outline-none rounded-md  text-base"
                                                placeholder="Your title"
                                            />
                                        </div>
                                        <div className="w-1/2 w-100">
                                            <p className="mt-6 mb-4 text-xl font-medium">Description :</p>
                                            <textarea
                                                rows={8}
                                                className="w-full border p-2 focus:outline-none rounded-md "
                                                placeholder="About Your Shop Address 1"></textarea>
                                        </div>
                                    </div>

                                    <div className="parent-form">
                                        <div className="w-1/2 w-100">
                                            <p className="mt-6 mb-4 text-xl font-medium">Link :</p>
                                            <input
                                                type="text"
                                                className="w-full border p-2 focus:outline-none rounded-md  text-base"
                                                placeholder="Your email id"
                                            />
                                        </div>
                                        <div className="w-1/2 w-100">
                                            <p className="mt-6 mb-4 text-xl font-medium">From :</p>
                                            <input
                                                type="date"
                                                className="w-full border p-2 focus:outline-none rounded-md  text-base"
                                                placeholder="Your website url"
                                            />
                                            <p className="mt-6 mb-4 text-xl font-medium">To :</p>
                                            <input
                                                type="date"
                                                className="w-full border p-2 focus:outline-none rounded-md  text-base"
                                                placeholder="Your website url"
                                            />
                                        </div>
                                    </div>
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
                            </div>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
