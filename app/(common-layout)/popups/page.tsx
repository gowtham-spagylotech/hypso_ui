"use client";
import PopupListPageOTP from "@/components/home-1/PopupListPageOTP";
import PopupContact from "@/components/home-1/PopupContact";
import PopupMap from "@/components/home-1/PopupMap";
import { useState } from "react";

const Page = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [isListPageOTPOpen, setListPageOTPOpen] = useState(false);
    const [isMapPopupOpen, setMapPopupOpen] = useState(false);

    const handlePhoneIconClick = () => {
        setPopupOpen(true);
    };

    const handleMobileIconClick = () => {
        setListPageOTPOpen(true);
    };

    const handleMapMarkerClick = () => {
        setMapPopupOpen(true);
    };

    const handleClosePopup = () => {
        setPopupOpen(false);
    };

    const handleMapPopupClose = () => {
        setMapPopupOpen(false);
    };

    const item = {
        id: 1,
        img: ['/img/featured-img-2.jpg', '/img/featured-img-3.jpg', '/img/featured-img-4.jpg', '/img/featured-img-5.jpg',],
    };

    return (
        <div className="signup-section">
            <div className="w-full md:w-1/2">
                {/* Phone Icon */}
                <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 text-center">
                    <i className="las la-phone text-2xl" onClick={handlePhoneIconClick}></i>
                </div>

                {/* Mobile Icon */}
                <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 text-center">
                    <i className="las la-mobile text-2xl" onClick={handleMobileIconClick}></i>
                </div>

                {/* Map Marker Icon */}
                <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8 text-center">
                    <i className="las la-map-marker text-2xl" onClick={handleMapMarkerClick}></i>
                </div>

                {/* Render Popups based on state */}
                {isPopupOpen && (
                    <div className="z-9999 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                <PopupContact onClose={handleClosePopup} />
                </div>
                )}

                {isListPageOTPOpen && (
                <div className="z-9999 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                <PopupListPageOTP item={item} onClose={() => setListPageOTPOpen(false)} />
                </div>
                )}

                {isMapPopupOpen && (
                <div className="z-9999 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                <PopupMap onClose={handleMapPopupClose} />
                </div>
                )}
            </div>
        </div>
    );
};

export default Page;