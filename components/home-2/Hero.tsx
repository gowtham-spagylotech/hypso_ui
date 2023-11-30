"use client";
import Link from "next/link";
import { useState } from "react";
import LocationDropdown from "./LocationDropdown";
import HeroDropdown3 from "./HeroDropdown3";
import HeroDropdown4 from "./HeroDropdown4";

const Hero = () => {
  const [active, setActive] = useState("rent");

  return (
    <section className="bg-[url('/img/secondary-hero-bg.jpg')] bg-cover bg-no-repeat relative isolate bg-[50%] top-0 min-h-screen after:w-full after:absolute after:h-full after:bottom-0 after:left-0 after:bg-gradient-to-t after:rounded-b-2xl after:from-[#04052f5b] after:to-[#04052f5b]">
      <div className="container grid place-items-center py-20 lg:pb-[180px] lg:pt-[260px]">
        <div className="max-w-[856px] mx-auto z-10 relative px-3 xl:px-0">
          <h1 className="h1 text-white font-semibold mb-10 lg:mr-36">
            Easy Way to Find a Perfect Property
          </h1>
          <div className="flex flex-wrap gap-4 xl:gap-8">
            <div className="p-2 border border-white rounded-full flex gap-3">
              <button
                onClick={() => setActive("rent")}
                className={`btn py-3 text-white duration-500 font-semibold px-6 ${
                  active === "rent" && "bg-primary"
                }`}>
                Rent
              </button>
              <button
                onClick={() => setActive("buy")}
                className={`btn py-3 text-white duration-500 font-semibold px-6 ${
                  active === "buy" && "bg-primary"
                }`}>
                Buy
              </button>
              <button
                onClick={() => setActive("sell")}
                className={`btn py-3 text-white duration-500 font-semibold px-6 ${
                  active === "sell" && "bg-primary"
                }`}>
                Sell
              </button>
            </div>
            <div className="max-w-max">
              <Link
                href="#"
                className="btn-primary-lg flex items-center gap-2 py-5 font-semibold">
                Calculate
                <i className="las la-long-arrow-alt-right text-xl"></i>
              </Link>
            </div>
          </div>

          <div className="w-full flex flex-wrap mt-10">
            <LocationDropdown />

            <HeroDropdown3 />

            <HeroDropdown4 />
            <Link
              href="/payment-method"
              className="bg-primary w-full py-8 md:w-1/2 xl:w-[10%] grid place-items-center">
              <i className="text-white text-2xl las la-long-arrow-alt-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
