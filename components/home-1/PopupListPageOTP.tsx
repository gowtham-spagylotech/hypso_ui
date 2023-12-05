"use client";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { useState } from "react";


const PopupListPageOTP = ({ item, onClose }: any) => {
    const {
        id,
        img,
    } = item;

    const [activeStep, setActiveStep] = useState("whatsappNumber");
    const [isCardOpen, setCardOpen] = useState(true);

    const handleCloseCard = () => {
        // Close the card by updating the state
        setCardOpen(false);
        // Notify the parent component (Page) to close the popup
        onClose();
    };

    const handleGenerateOTP = () => {
        // Switch to the OTP step when "Generate OTP" is clicked
        setActiveStep("otp");
    };

    return (
        <div key={id} className="bg-white rounded-2xl col-span-12 group  w-5/6">
            <button className="close-btn" onClick={handleCloseCard}>
                <i className="las la-times-circle text-3xl p-5"></i>
            </button>
            <div className=" grid grid-cols-12 rounded-2xl p-4">

                <div className=" col-span-12 md:col-span-5 relative group">


                    {img.length > 1 ? (
                        <Swiper
                            loop={true}
                            pagination={{
                                el: ".property-card-pagination",
                                clickable: true,
                            }}
                            navigation={{
                                nextEl: ".property-card-next",
                                prevEl: ".property-card-prev",
                            }}
                            modules={[Navigation, Pagination]}
                            className="h-full">
                            {img.map((img: any, i: any) => (
                                <SwiperSlide key={i} className="h-full">
                                    <Image
                                        width={270}
                                        height={280}
                                        src={img}
                                        alt="image"
                                        className="rounded-2xl object-cover w-full h-full"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <div className="h-full">
                            <Image
                                width={270}
                                height={280}
                                src={img[0]}
                                alt="image"
                                className="rounded-2xl object-cover w-full h-full"
                            />
                        </div>
                    )}
                </div>
                <div className="col-span-12 md:col-span-7">
                    <div>
                        <Link
                            href="property-details-1"
                            className="text-xl font-medium text-neutral-700 pl-4">
                            Bharath Electronics & Appliances
                        </Link>
                        <div className="flex px-1 gap-3 pt-4 pb-3">
                            <h4 className="font-medium text-neutral-700 pl-4">Address :</h4>
                            <p className="w-350">338-A, Sathy Main Road, Oppo to Prozone mall, Sivananthapuram, Saravanampatti Post,
                                Coimbatore, Tamil Nadu 641035</p>
                        </div>
                        <div className="flex px-1 gap-3 pt-4 pb-3">
                            <p className="pl-4">For More Info Please <span className="signin-link">Sign in</span></p>
                        </div>
                    </div>

                    <div className="mx-3 md:mx-5">
                        <div className=" border-t border-dash-long"></div>
                    </div>

                    {activeStep === "whatsappNumber" && (
                        <div className="searchList-whatsappNumber">
                            <div className="col-span-12 pl-4 px-1 pt-4 pb-3">
                                <label
                                    htmlFor="enter-whatsappnumber"
                                    className=" font-medium block mb-3">
                                    Enter Your WhatsApp Number
                                </label>
                                <input
                                    type="number"
                                    className="w-full bg-[var(--bg-1)] border focus:outline-none rounded-full py-3 px-5"
                                    placeholder="Enter Your WhatsApp Number"
                                    id="enter-whatsappnumber"
                                />
                            </div>

                            <div className="px-3 sm:px-4 md:px-5 pb-5 pt-4">
                                <div className="flex flex-wrap gap-3 justify-between items-center">
                                    <Link href="#" onClick={handleGenerateOTP} className="btn-outline">
                                        Generate OTP
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeStep === "otp" && (
                        <div className="searchList-otp">
                            <div className="col-span-12 pl-4 px-1 pt-4 pb-3">
                                <label
                                    htmlFor="enter-whatsappnumber"
                                    className=" font-medium block mb-3">
                                    Enter Your OTP
                                </label>
                                <input
                                    type="number"
                                    className="w-full bg-[var(--bg-1)] border focus:outline-none rounded-full py-3 px-5"
                                    placeholder="Enter Your OTP"
                                    id="enter-otp"
                                />
                            </div>

                            <div className="px-3 sm:px-4 md:px-5 pb-5 pt-4">
                                <div className="flex flex-wrap gap-3 justify-between items-center">
                                    <Link href="#" className="btn-outline ">
                                        Sign In
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};


export default PopupListPageOTP;