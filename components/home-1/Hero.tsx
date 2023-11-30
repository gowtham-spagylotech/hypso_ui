import Image from "next/image";
import HeroDropdown1 from "./HeroDropdown1";
import HeroDropdown2 from "./HeroDropdown2";
import HeroDropdown3 from "./HeroDropdown3";
import HeroDropdown4 from "./HeroDropdown4";
import Link from "next/link";
import { DownArrow, SearchIcon } from "@/public/data/icons";

const Hero = () => {
  return (
    <section className="relative bg-[var(--bg-1)] border-t lg:border-t-0">
      
      <Image
        priority
        className="absolute hidden xl:block w-[25%] top-0 right-0"
        src="/img/primary-hero-img-1.jpg"
        width={508}
        height={642}
        alt="image"
      />
      <Image
        priority
        className="absolute hidden lg:block w-[25%] left-0 bottom-0 z-20"
        src="/img/primary-hero-img-2.jpg"
        width={508}
        height={642}
        alt="image"
      />
      <Image
        priority
        className="absolute top-24 scale-50 sm:scale-75 lg:scale-100 lg:top-20 left-2 lg:left-[16%] z-20"
        src="/img/primary-hero-el-3.png"
        width={110}
        height={106}
        alt="image"
      />
      <Image
        priority
        className="absolute top-3 lg:top-24 scale-75 lg:scale-100 right-1 sm:right-3 lg:right-[30%]"
        src="/img/primary-hero-el-4.png"
        width={109}
        height={82}
        alt="image"
      />
      <Image
        priority
        className="absolute left-0 lg:left-[25%] bottom-72"
        src="/img/primary-hero-el-5.png"
        width={41}
        height={45}
        alt="image"
      />
      <Image
        priority
        className="absolute right-2 lg:right-[27%] bottom-72"
        src="/img/primary-hero-el-6.png"
        width={105}
        height={98}
        alt="image"
      />
      <Image
        priority
        className="absolute bottom-4 lg:bottom-8 left-[10%] lg:left-[27%]"
        src="/img/primary-hero-el-7.png"
        width={67}
        height={71}
        alt="image"
      />
      <Image
        priority
        className="absolute bottom-5 scale-75 md:scale-100 lg:bottom-9 right-[3%] lg:right-[15%]"
        src="/img/primary-hero-el-8.png"
        width={183}
        height={163}
        alt="image"
      />
      <div className="pt-[70px] sm:pt-[100px] md:pt-[150px] xl:pt-[180px] pb-16 h-full px-3">
        <div className="container">
          <div className="text-center relative z-30">
            <h1 className="text-[40px] lg:text-[56px] leading-[68px] text-[var(--neutral-700)] font-semibold">
              Easy Way to Find a Perfect <br /> Property
            </h1>
            
            <p className="text-xl mx-auto max-w-[600px] text-gray-500 mt-4 md:mt-9">
              Explore vast property listings by category with our user-friendly
              search. Find your perfect match!
            </p>
            <div className="z-30 p-4 lg:p-5 rounded-xl shadow-lg bg-white flex items-center flex-wrap gap-3 relative max-w-[1060px] mx-auto mt-12">
            
                <div className="d-flex-width-100">
                  <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                  <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All categories <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                  </svg></button>
                  <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                      <li>
                        <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
                      </li>
                      <li>
                        <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
                      </li>
                      <li>
                        <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
                      </li>
                      <li>
                        <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
                      </li>
                    </ul>
                  </div>
                  <div className="relative w-full">
                    <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required />
                      <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search</span>
                      </button>
                  </div>
                </div>
            </div>
            <div className="mx-auto mt-16">
              <button className="text-white bg-primary rounded-full p-4 mb-2">
                <Link href="#">
                  <DownArrow />
                </Link>
              </button>
              <br />
              <span className="text-center">More Details</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
