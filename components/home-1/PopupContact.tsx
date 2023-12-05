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


const PopupContact = ({ onClose }) => {


    const [activeStep, setActiveStep] = useState("whatsappNumber");
    const [isCardOpen, setCardOpen] = useState(true);

    const handleCloseCard = () => {
        // Close the card by updating the state
        setActiveStep("whatsappNumber");
        // Notify the parent component (Page) to close the popup
        onClose();
    };

    const handleGenerateOTP = () => {
        // Switch to the OTP step when "Generate OTP" is clicked
        setActiveStep("otp");
    };

    return (
        <div className="col-span-12 group">
        <div className="bg-white rounded-2xl col-span-12 group">
            <button className="close-btn" onClick={handleCloseCard}>
                <i className="las la-times-circle text-3xl p-5"></i>
            </button>
            <div className=" grid grid-cols-12 rounded-2xl p-4">


                <div className="col-span-12">
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
                    <div className="flex px-1 pt-4 pb-3">
                        <i className="las la-phone text-3xl pr-3 pl-4"></i>
                        <p className="text-xl font-medium text-neutral-700 pl-4">+91-9876543210</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};


export default PopupContact;