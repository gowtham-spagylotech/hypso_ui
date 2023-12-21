"use client";
import RecentlyViewed from "@/components/RecentlyViewed";
import { StarIcon } from "@heroicons/react/20/solid";
import {
    ArrowLongLeftIcon,
    ArrowLongRightIcon,
    ArrowsPointingOutIcon,
    ArrowsRightLeftIcon,
    CalendarDaysIcon,
    ChatBubbleLeftEllipsisIcon,
    ChatBubbleLeftRightIcon,
    CheckIcon,
    ClockIcon,
    HandThumbUpIcon,
    HeartIcon,
    MapIcon,
    Squares2X2Icon,
} from "@heroicons/react/24/outline";
import {
    ChevronDownIcon,
    CloudArrowUpIcon,
    InformationCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PlayIcon } from "@/public/data/icons";
import ReactPlayer from "react-player";
import { Tab } from "@headlessui/react";
import CheckboxCustom from "@/components/Checkbox";

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
}

const Page = () => {
    const [playing, setPlaying] = useState(false);

    const Play = () => {
        return (
            <span
                onClick={() => setPlaying(true)}
                className="bg-[var(--tertiary)] w-14 grid place-items-center h-14 rounded-full z-50 cursor-pointer relative">
                <PlayIcon />
            </span>
        );
    };

    return (
        <div className="bg-[var(--bg-2)]">
            <div className="py-4">
                <div className="container-fluid">
                    <div className="grid grid-cols-12 gap-4 lg:gap-6 px-3 lg:px-4 mt-300">
                        <div className="col-span-12 lg:col-span-4">
                            <div className="grid grid-cols-12 gap-4 lg:gap-6">
                                <div className="col-span-12 md:col-span-6">
                                    <Link
                                        href="/img/property-details-img-1.jpg"
                                        className="link property-gallery">
                                        <Image
                                            width={294}
                                            height={287}
                                            src="/img/property-details-img-1.jpg"
                                            alt="image"
                                            className=" g-img w-full"
                                        />
                                    </Link>
                                </div>
                                <div className="col-span-12 md:col-span-6">
                                    <Link
                                        href="/img/property-details-img-2.jpg"
                                        className="link property-gallery">
                                        <Image
                                            width={294}
                                            height={287}
                                            src="/img/property-details-img-2.jpg"
                                            alt="image"
                                            className=" g-img w-full"
                                        />
                                    </Link>
                                </div>
                                <div className="col-span-12">
                                    <Link
                                        href="/img/property-details-img-3.jpg"
                                        className="link property-gallery">
                                        <Image
                                            width={610}
                                            height={593}
                                            src="/img/property-details-img-3.jpg"
                                            alt="image"
                                            className=" g-img w-full"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-4">
                            <Link
                                href="/img/property-details-img-4.jpg"
                                className="link property-gallery">
                                <Image
                                    width={610}
                                    height={288}
                                    src="/img/property-details-img-4.jpg"
                                    alt="image"
                                    className=" g-img w-full"
                                />
                            </Link>
                        </div>
                        <div className="col-span-12 lg:col-span-4">
                            <div className="grid grid-cols-12 gap-4 lg:gap-6">
                                <div className="col-span-12">
                                    <Link
                                        href="/img/property-details-img-5.jpg"
                                        className="link property-gallery">
                                        <Image
                                            width={610}
                                            height={288}
                                            src="/img/property-details-img-5.jpg"
                                            alt="image"
                                            className=" g-img w-full"
                                        />
                                    </Link>
                                </div>
                                <div className="col-span-12 md:col-span-6">
                                    <Link
                                        href="/img/property-details-img-6.jpg"
                                        className="link property-gallery">
                                        <Image
                                            width={294}
                                            height={287}
                                            src="/img/property-details-img-6.jpg"
                                            alt="image"
                                            className=" g-img w-full"
                                        />
                                    </Link>
                                </div>
                                <div className="col-span-12 md:col-span-6">
                                    <Link
                                        href="/img/property-details-img-7.jpg"
                                        className="link property-gallery">
                                        <Image
                                            width={294}
                                            height={287}
                                            src="/img/property-details-img-7.jpg"
                                            alt="image"
                                            className=" g-img w-full"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="grid grid-cols-12 gap-4 lg:gap-6 mt-10 lg:mt-14 px-3">
                    <div className="col-span-12 md:col-span-8">
                        <div className="mb-6 md:mb-10 lg:mb-14">
                            <div className="bg-white rounded-2xl p-3 sm:p-4 lg:py-8 lg:px-5">
                                <div className="p-3 sm:p-4 lg:p-6 bg-[var(--bg-1)] rounded-2xl border mb-10">
                                    <div className="flex items-center justify-end flex-wrap gap-3">
                                        <ul className="flex gap-3 items-center pb-6">
                                            <li>
                                                <span className="inline-block clr-neutral-600">
                                                    Share
                                                </span>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    className="link w-8 h-8 grid place-content-center bg-[var(--primary-light)] text-primary rounded-full hover:bg-primary hover:text-white text-xl duration-300">
                                                    <i className="lab la-facebook-f"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    className="link w-8 h-8 grid place-content-center bg-[var(--primary-light)] text-primary rounded-full hover:bg-primary hover:text-white text-xl duration-300">
                                                    <i className="lab la-twitter"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    className="link w-8 h-8 grid place-content-center bg-[var(--primary-light)] text-primary rounded-full hover:bg-primary hover:text-white text-xl duration-300">
                                                    <i className="lab la-instagram"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="#"
                                                    className="link w-8 h-8 grid place-content-center bg-[var(--primary-light)] text-primary rounded-full hover:bg-primary hover:text-white text-xl duration-300">
                                                    <i className="lab la-linkedin-in"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <p className="mb-3 text-xl font-medium"> Post </p>
                                    <div className="flex items-start gap-2 mb-6">
                                        <div className="flex gap-3 items-center">
                                            <p className="mb-0 text-lg"> Company/Business Name : </p>
                                            <h6 className="h6 mb-0"> IIT </h6>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2 mb-6">
                                        <div className="flex gap-3 items-center">
                                            <p className="mb-0 text-lg"> Title : </p>
                                            <h6 className="h6 mb-0"> Sales Executive </h6>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2 mb-6">
                                        <div className="flex gap-3 items-center">
                                            <p className="mb-0 text-lg"> Salary : </p>
                                            <h6 className="h6 mb-0"> 15000 </h6>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2 mb-6">
                                        <div className="flex gap-3 items-center">
                                            <p className="mb-0 text-lg"> Type : </p>
                                            <h6 className="h6 mb-0"> Full Time </h6>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2 mb-6">
                                        <div className="flex gap-3 items-center">
                                            <p className="mb-0 text-lg"> Posted Date : </p>
                                            <h6 className="h6 mb-0"> 01-09-2023 </h6>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2 mb-6">
                                        <div className="flex gap-3 items-center">
                                            <p className="mb-0 text-lg"> Expiry Date : </p>
                                            <h6 className="h6 mb-0"> 01-01-2024 </h6>
                                        </div>
                                    </div>


                                    <ul className="flex flex-wrap items-center justify-end gap-4 gap-md-0">
                                        <li>
                                            <div className="flex items-center gap-2">
                                                <MapIcon className="w-5 h-5 text-[var(--secondary)]" />
                                                <p className="mb-0"> 3890 Poplar Dr. </p>
                                            </div>
                                        </li>
                                        <li>
                                            <p className="mb-0">
                                                ID: <span className="text-primary">12546</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="mb-0">
                                                <span className="clr-neutral-500">Published:</span> Feb
                                                9, 23
                                            </p>
                                        </li>
                                    </ul>
                                </div>

                                <div className="p-3 sm:p-4 md:p-6 bg-[var(--bg-1)] rounded-2xl border border-neutral-40 mb-6 md:mb-10">
                                    <h4 className="mb-5 text-2xl font-semibold"> Description </h4>
                                    <p className="mb-5 clr-neutral-500">
                                        Real estate is typically bought and sold through real estate
                                        agents or brokers, who act as intermediaries between buyers
                                        and sellers. The real estate industry also includes such as
                                        appraisers, inspectors, and attorneys who provide various
                                        services related.
                                    </p>
                                    <Link
                                        href="#"
                                        className="link flex items-center gap-2 text-primary">
                                        <span className="font-semibold inline-block">
                                            Read More
                                        </span>
                                        <i className="las la-long-arrow-alt-right text-xl"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-4">
                        <div className="mb-10 lg:mb-14">
                            <div className="bg-white rounded-2xl py-8 px-6">
                                <h6 className="mb-4 text-xl font-medium">Catalogue</h6>
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

                                <p className="mb-3 text-lg font-medium pt-6 pb-3">Social Media</p>
                                <ul className="flex flex-wrap gap-3">
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
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            {/* Recently viewed  */}
            <RecentlyViewed />
        </div>
    );
};

export default Page;
