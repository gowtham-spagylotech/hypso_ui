"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { featuredPackage } from "@/public/data/featuredpackage";
import CardPagination from "@/components/CardPagination";

const page = () => {
  return (
    <>
      {featuredPackage.map(
        ({ id, activity, capacity, img, place, price, rating, title }) => (
          <div key={id} className="col-span-12 md:col-span-6 group">
            <div className="bg-white rounded-2xl p-3">
              <div className="relative">
                <div className="rounded-2xl">
                  {img.length > 1 ? (
                    <Swiper
                      loop={true}
                      pagination={{
                        el: ".property-card-pagination",
                      }}
                      navigation={{
                        nextEl: ".property-card-next",
                        prevEl: ".property-card-prev",
                      }}
                      modules={[Navigation, Pagination]}
                      className="swiper property-card-slider">
                      {img.map((item) => (
                        <SwiperSlide key={item}>
                          <Image
                            width={400}
                            height={306}
                            src={item}
                            alt="image"
                            className="w-full rounded-2xl"
                          />
                        </SwiperSlide>
                      ))}

                      <div className="swiper-pagination property-card-pagination"></div>
                      <div className="swiper-button-prev !opacity-0 group-hover:!opacity-100 duration-300 property-card-prev"></div>
                      <div className="swiper-button-next !opacity-0 group-hover:!opacity-100 duration-300 property-card-next"></div>
                    </Swiper>
                  ) : (
                    <Image
                      width={400}
                      height={306}
                      src="/img/featured-package-1.jpg"
                      alt="image"
                      className="w-full rounded-2xl"
                    />
                  )}
                </div>
                <div className="flex items-center justify-between p-4 absolute top-0 w-full">
                  <span className="inline-block py-2 px-5 rounded-full bg-[#58DA90]">
                    {place} Places
                  </span>
                  <span className="inline-block py-2 px-5 rounded-full bg-[#FFBF47]">
                    {activity} Activities
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between mb-2">
                  <Link
                    href="tour-listing-details"
                    className="link block flex-grow text-xl font-medium">
                    {title}
                  </Link>
                  <div className="flex gap-1 items-center shrink-0">
                    <i className="las la-star text-[var(--tertiary)]"></i>
                    <span className="block"> {rating} </span>
                  </div>
                </div>
                <ul className="grid grid-cols-2 gap-3">
                  <li className="col-span-1">
                    <div className="flex items-center gap-2">
                      <i className="las la-clock text-xl text-[#22804A]"></i>
                      <span className="block"> 4 Days 5 Night </span>
                    </div>
                  </li>
                  <li className="col-span-1">
                    <div className="flex items-center gap-2">
                      <i className="las la-user-friends text-xl text-[#22804A]"></i>
                      <span className="block"> Capacity {capacity} </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="border-b border-dash-long my-3 mx-4"></div>

              <div className="p-4">
                <div className="flex flex-wrap justify-between items-center">
                  <span className="block text-xl font-medium text-primary">
                    ${price}
                    <span className="inline-block font-normal text-base">
                      /month
                    </span>
                  </span>
                  <Link
                    href="/tour-listing-details"
                    className="btn-outline  font-semibold">
                    Rent Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
      )}
      <CardPagination />
    </>
  );
};

export default page;
