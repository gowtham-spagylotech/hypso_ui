import Image from "next/image";
import Link from "next/link";
import compare1 from "@/public/img/compare-img-1.jpg";
import compare2 from "@/public/img/compare-img-2.jpg";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";
import { SearchIcon } from "@/public/data/icons";

const page = () => {
  return (
    <div className="py-[30px] lg:py-[60px] bg-[var(--bg-2)]">
      <div className="mb-8 lg:mb-12">
        <div className="container px-3">
          <div className="grid grid-cols-12 gap-4 lg:gap-6">
            <div className="col-span-12 lg:col-span-6 xl:col-span-4">
              <div className="p-6 bg-white rounded-2xl h-full">
                <h3 className="mb-3 h3"> Compare Listing </h3>
                <p className="mb-8"> (3 Listing ) </p>
                <ul className="flex flex-col gap-4 mb-8">
                  <li>
                    <div className="border rounded-full px-6 bg-transparent">
                      <select
                        className="w-full bg-transparent px-5 py-3 focus:outline-none clr-neutral-300"
                        aria-label="Default select example">
                        <option>Property Types</option>
                        <option value="1">New York</option>
                        <option value="2">Chicago</option>
                        <option value="3">Atlanta</option>
                      </select>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center border border-neutral-40 px-6 py-3 rounded-full">
                      <input
                        type="text"
                        className="w-full text-[var(--neutral-700)] border-0 focus:outline-none bg-transparent"
                        placeholder="Type Properties Name"
                      />
                      <SearchIcon />
                    </div>
                  </li>
                </ul>
                <div className="flex items-center gap-6 flex-wrap">
                  <Link
                    href="#"
                    className="link inline-flex items-center gap-2 py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold">
                    <span className="inline-block"> Add More </span>
                  </Link>
                  <Link
                    href="#"
                    className="btn-outline text-primary font-semibold">
                    Clear All
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 xl:col-span-4">
              <div className="relative rounded-2xl group">
                <div className="listing-card__img">
                  <Image
                    src={compare1}
                    alt="image"
                    className=" w-full rounded-2xl"
                  />
                </div>
                <div className="absolute top-0 left-0 flex h-full items-end w-full before:w-full before:absolute before:h-full before:bottom-0 before:left-0 before:bg-gradient-to-t before:rounded-b-2xl before:from-slate-800 before:to-transparent group-hover:after:w-full group-hover:after:absolute group-hover:after:h-full group-hover:after:bottom-0 group-hover:after:left-0 group-hover:after:bg-gradient-to-t group-hover:after:rounded-b-2xl group-hover:after:from-[var(--primary)] group-hover:after:to-transparent group-hover:after:opacity-60">
                  <div className="self-end px-5 pb-5 flex flex-wrap w-full z-10 gap-4 items-center justify-between">
                    <div className="flex gap-2 items-center">
                      <h4 className="text-2xl text-white font-semibold">
                        RCE Theaters Backford Dr
                      </h4>
                    </div>
                    <div className="flex justify-between w-full">
                      <span className="text-xl text-[var(--tertiary)]">
                        $5,342
                        <span className="text-base text-white">/month</span>
                      </span>
                      <Link
                        href="/hotel-listing-grid"
                        className="text-[var(--secondary)] font-semibold flex items-center gap-1">
                        Read More
                        <ArrowRightIcon className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 xl:col-span-4">
              <div className="relative rounded-2xl group">
                <div className="listing-card__img">
                  <Image
                    src={compare2}
                    alt="image"
                    className=" w-full rounded-2xl"
                  />
                </div>
                <div className="absolute top-0 left-0 flex h-full items-end w-full before:w-full before:absolute before:h-full before:bottom-0 before:left-0 before:bg-gradient-to-t before:rounded-b-2xl before:from-slate-800 before:to-transparent group-hover:after:w-full group-hover:after:absolute group-hover:after:h-full group-hover:after:bottom-0 group-hover:after:left-0 group-hover:after:bg-gradient-to-t group-hover:after:rounded-b-2xl group-hover:after:from-[var(--primary)] group-hover:after:to-transparent group-hover:after:opacity-60">
                  <div className="self-end px-5 pb-5 flex flex-wrap w-full z-10 gap-4 items-center justify-between">
                    <div className="flex gap-2 items-center">
                      <h4 className="text-2xl text-white font-semibold">
                        RCE Theaters Backford Dr
                      </h4>
                    </div>
                    <div className="flex justify-between w-full">
                      <span className="text-xl text-[var(--tertiary)]">
                        $5,342
                        <span className="text-base text-white">/month</span>
                      </span>
                      <Link
                        href="/hotel-listing-grid"
                        className="text-[var(--secondary)] font-semibold flex items-center gap-1">
                        Read More
                        <ArrowRightIcon className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-span-12 px-3">
            <div className="bg-white p-3 sm:p-4 lg:p-8 rounded-2xl">
              <div className="px-6 py-4 bg-[var(--bg-2)]">
                <h4 className="mb-0 text-2xl font-semibold">
                  {" "}
                  Additional Information{" "}
                </h4>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full whitespace-nowrap">
                  <tbody>
                    <tr className="border-b">
                      <th className="text-[var(--neutral-700)] font-medium p-5 text-start">
                        Rating
                      </th>
                      <td className="p-5">
                        <div className="flex gap-1">
                          <i className="text-[var(--tertiary)] text-xl las la-star"></i>
                          <i className="text-[var(--tertiary)] text-xl las la-star"></i>
                          <i className="text-[var(--tertiary)] text-xl las la-star"></i>
                          <i className="text-[var(--tertiary)] text-xl las la-star"></i>
                          <i className="text-[var(--tertiary)] text-xl las la-star-half-alt"></i>
                        </div>
                      </td>
                      <td className="p-5">
                        <div className="flex gap-1">
                          <i className="text-[var(--tertiary)] text-xl las la-star"></i>
                          <i className="text-[var(--tertiary)] text-xl las la-star"></i>
                          <i className="text-[var(--tertiary)] text-xl las la-star"></i>
                          <i className="text-[var(--tertiary)] text-xl las la-star"></i>
                          <i className="text-[var(--tertiary)] text-xl las la-star-half-alt"></i>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-[var(--neutral-700)] font-medium p-5 text-start">
                        Floor area
                      </th>
                      <td className="p-5">
                        <span className="block text-[var(--neutral-700)]">
                          1700 sq.ft
                        </span>
                      </td>
                      <td className="p-5">
                        <span className="block text-[var(--neutral-700)]">
                          1700 sq.ft
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-[var(--neutral-700)] font-medium p-5 text-start">
                        Bedroom
                      </th>
                      <td className="p-5">
                        <span className="block text-[var(--neutral-700)]">
                          3 Bedroom 4 Beds
                        </span>
                      </td>
                      <td className="p-5">
                        <span className="block text-[var(--neutral-700)]">
                          3 Bedroom 4 Beds
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-[var(--neutral-700)] font-medium p-5 text-start">
                        Bathroom
                      </th>
                      <td className="p-5">
                        <span className="block text-[var(--neutral-700)]">
                          2 Showers
                        </span>
                      </td>
                      <td className="p-5">
                        <span className="block text-[var(--neutral-700)]">
                          2 Showers
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-[var(--neutral-700)] font-medium p-5 text-start">
                        Total Room
                      </th>
                      <td className="p-5">
                        <span className="block text-[var(--neutral-700)]">
                          8 Room
                        </span>
                      </td>
                      <td className="p-5">
                        <span className="block text-[var(--neutral-700)]">
                          8 Room
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-[var(--neutral-700)] font-medium p-5 text-start">
                        Air conditioning
                      </th>
                      <td className="p-5">
                        <i className="las text-xl la-check text-primary"></i>
                      </td>
                      <td className="p-5">
                        <i className="las text-xl la-check text-primary"></i>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-[var(--neutral-700)] font-medium p-5 text-start">
                        Gym
                      </th>
                      <td className="p-5">
                        <i className="las la-times text-xl text-[#ffbf47]"></i>
                      </td>
                      <td className="p-5">
                        <i className="las la-times text-xl text-[#ffbf47]"></i>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-[var(--neutral-700)] font-medium p-5 text-start">
                        Swimming Pool
                      </th>
                      <td className="p-5">
                        <i className="las la-times text-xl text-[#ffbf47]"></i>
                      </td>
                      <td className="p-5">
                        <i className="las la-times text-xl text-[#ffbf47]"></i>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-[var(--neutral-700)] font-medium p-5 text-start">
                        Internet
                      </th>
                      <td className="p-5">
                        <i className="las text-xl la-check text-primary"></i>
                      </td>
                      <td className="p-5">
                        <i className="las text-xl la-check text-primary"></i>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th className="text-[var(--neutral-700)] font-medium p-5 text-start">
                        Actions
                      </th>
                      <td className="p-5">
                        <Link
                          href="#"
                          className="btn-outline  text-primary text-sm">
                          Remove
                        </Link>
                      </td>
                      <td className="p-5">
                        <Link
                          href="#"
                          className="btn-outline  text-primary text-sm">
                          Remove
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
