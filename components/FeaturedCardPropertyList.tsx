'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { HeartIconOutline } from "@/public/data/icons";
import Image from "next/image";
import { useState } from "react";
import { HeartIcon } from "@heroicons/react/20/solid";
import toast, { Toaster } from "react-hot-toast";
const notifyAdd = () => toast.success("Added to Wishlist.");
const notifyRemove = () => toast.error("Removed From Wishlist.");
import PopupListPageOTP from "@/components/home-1/PopupListPageOTP";
import PopupContact from "@/components/home-1/PopupContact";
import PopupMap from "@/components/home-1/PopupMap";

const FeaturedCardPropertyList = ({ item }: any) => {

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

  const [favourite, setFavourite] = useState(false);
  const {
    id,
    address,
    area,
    bath,
    bed,
    img,
    popular,
    price,
    rooms,
    title,
    type,
  } = item;
  const handleFavorite = () => {
    setFavourite(!favourite);
    favourite ? notifyRemove() : notifyAdd();
  };
  return (
    <div key={id} className="col-span-12 xl:col-span-6 group">
      <div className="bg-white shadow-xl rounded-2xl p-2">
        <div className="rounded-2xl relative group">
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
              className="swiper property-card-slider">
              {img.map((img: any, i: any) => (
                <SwiperSlide key={i} className="swiper-slide">
                  <div className="property-card__img">
                    <Image
                      width={400}
                      height={280}
                      src={img}
                      alt="image"
                      className="rounded-2xl w-full"
                    />
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-pagination property-card-pagination"></div>
              <div className="swiper-button-prev !opacity-0 group-hover:!opacity-100 duration-300 property-card-prev"></div>
              <div className="swiper-button-next !opacity-0 group-hover:!opacity-100 duration-300 property-card-next"></div>
            </Swiper>
          ) : (
            <div className="property-card__img">
              <Image
                width={400}
                height={280}
                src={img[0]}
                alt="image"
                className="rounded-2xl w-full"
              />
            </div>
          )}

          {popular && (
            <span className="absolute">
              <span className="inline-block py-2.5 px-9 text-sm font-medium rounded-t rounded-br bg-primary relative -left-4 bottom-5 text-white z-10 before:bg-[#2628A6] before:absolute before:w-2 before:h-2 before:rounded-bl-md before:-bottom-2 before:left-0 ">
                Popular
              </span>
            </span>
          )}
        </div>

        <div className="p-2 sm:p-5 mt-6">
          <Link
            href="property-details-1"
            className="texttext-xl font-medium text-neutral-700 mb-4">
            {title}
          </Link>
          <div className="flex items-center gap-1 mb-4 mt-5 sm:mt-3">
            <i className="las la-map-marker-alt text-lg text-[#9C742B]"></i>
            <span className="inline-block">{address} </span>
          </div>
          <div className="mx-3 md:mx-5">
            <div className=" border-t border-dash-long"></div>
          </div>
          <ul className="flex flex-wrap justify-between items-center mt-6">
            <li className="flex flex-col px-1 sm:px-4 gap-2">
              <Link href={""}>
                <i className="las la-map-marker text-4xl" onClick={handleMapMarkerClick}></i>
              </Link>
            </li>
            <li className="flex flex-col px-1 sm:px-4 gap-2">
              <Link href={""}>
                <i className="las la-phone text-5xl" onClick={handlePhoneIconClick}></i>
              </Link>
            </li>
            <li className="flex flex-col px-1 sm:px-4 gap-2">
              <Link href={""}>
                <i className="las la-comment text-4xl" onClick={handleMobileIconClick}></i>
              </Link>
            </li>
          </ul>
        </div>

        <div className="mx-3 md:mx-5">
          <div className=" border-t border-dash-long"></div>
        </div>
        <div className="px-2 sm:px-5 pb-5 pt-3">
          <div className="flex flex-wrap justify-between items-center">

            <Link href="property-details-1" className="btn-outline">
              Read More
            </Link>
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
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
  );
};

export default FeaturedCardPropertyList;
