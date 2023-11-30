import {
  ChatBubbleLeftRightIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="col-span-12">
      <div className="p-3 sm:p-4 lg:p-6 xl:p-8 bg-white rounded-2xl mb-8">
        <div className="flex items-center gap-2">
          <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
          <h4 className="mb-0 text-2xl font-semibold flex-grow">
            {" "}
            Average Reviews{" "}
          </h4>
        </div>
        <div className="border border-dashed my-8"></div>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-3">
            <div className="flex items-center shrink-0">
              <span className="inline-block"> 5 </span>
              <i className="lar la-star"></i>
            </div>
            <div className="w-full bg-[#E9ECEF] rounded-3xl h-3 flex-grow">
              <div className="rounded-s-3xl bg-[#FFC107] h-full w-[90%]"></div>
            </div>
            <span className="inline-block font-medium shrink-0">90%</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="flex items-center shrink-0">
              <span className="inline-block"> 4 </span>
              <i className="lar la-star"></i>
            </div>
            <div className="w-full bg-[#E9ECEF] rounded-3xl h-3 flex-grow">
              <div className="rounded-s-3xl bg-[#FFC107] h-full w-[75%]"></div>
            </div>
            <span className="inline-block font-medium shrink-0">75%</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="flex items-center shrink-0">
              <span className="inline-block"> 3 </span>
              <i className="lar la-star"></i>
            </div>
            <div className="w-full bg-[#E9ECEF] rounded-3xl h-3 flex-grow">
              <div className="rounded-s-3xl bg-[#FFC107] h-full w-[65%]"></div>
            </div>
            <span className="inline-block font-medium shrink-0">65%</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="flex items-center shrink-0">
              <span className="inline-block"> 2 </span>
              <i className="lar la-star"></i>
            </div>
            <div className="w-full bg-[#E9ECEF] rounded-3xl h-3 flex-grow">
              <div className="rounded-s-3xl bg-[#FFC107] h-full w-[45%]"></div>
            </div>
            <span className="inline-block font-medium shrink-0">45%</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="flex items-center shrink-0">
              <span className="inline-block"> 1 </span>
              <i className="lar la-star"></i>
            </div>
            <div className="w-full bg-[#E9ECEF] rounded-3xl h-3 flex-grow">
              <div className="rounded-s-3xl bg-[#FFC107] h-full w-[25%]"></div>
            </div>
            <span className="inline-block font-medium shrink-0">25%</span>
          </li>
        </ul>
        <div className="border border-dashed my-8"></div>

        <div className="bg-white rounded-2xl sm:p-4 lg:py-8 lg:px-5">
          <div className="flex items-center gap-4 justify-between flex-wrap mb-10">
            <div className="flex items-center gap-2">
              <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
              <h3 className="mb-0 h3"> 4.7 (21 reviews) </h3>
            </div>
            <div className="flex items-center gap-2">
              <p className="mb-0 clr-neutral-500 shrink-0"> Sort By : </p>
              <div className="border rounded-full pr-3">
                <select className="w-full bg-transparent px-5 py-3 focus:outline-none">
                  <option>Latest</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
          <div className="bg-[var(--bg-1)] rounded-2xl p-3 sm:p-4 lg:p-6 mb-8">
            <div className="flex items-center flex-wrap justify-between gap-4 ">
              <div className="flex gap-5 items-center">
                <div className="w-15 h-15 shrink-0 rounded-full overflow-hidden">
                  <Image
                    width={60}
                    height={60}
                    src="/img/user-1.jpg"
                    alt="image"
                    className=" w-full h-full object-fit-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h5 className="mb-1 font-semibold"> Kiss Laura </h5>
                  <p className="mb-0 clr-neutral-500"> Product Designer </p>
                </div>
              </div>
              <div className="text-sm-end">
                <p className="mb-1"> 09:01 am </p>
                <p className="mb-0"> Mar 03, 2023 </p>
              </div>
            </div>
            <div className="border border-dashed my-6"></div>
            <div className="flex gap-1 mb-3">
              <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
              <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
              <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
              <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
              <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
            </div>
            <p className="mb-0 clr-neutral-500">
              I highly recommend [real estate agent&apos;s name] as a
              professional and knowledgeable real estate agent. They provided
              valuable guidance throughout the selling process
            </p>
            <div className="border border-dashed my-6"></div>
            <div className="flex flex-wrap items-center gap-10 mb-6">
              <div className="flex items-center gap-2 text-primary">
                <HandThumbUpIcon className="w-5 h-5" />
                <span className="inline-block"> 178 </span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <ChatBubbleLeftRightIcon className="w-5 h-5" />
                <span className="inline-block"> Reply </span>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div className="w-15 h-15 shrink-0 rounded-full overflow-hidden">
                <Image
                  width={60}
                  height={60}
                  src="/img/user-2.jpg"
                  alt="image"
                  className=" w-full h-full object-fit-cover"
                />
              </div>
              <div className="flex-grow">
                <input
                  className="border text-base py-4 px-5 rounded-full focus:outline-none w-full"
                  type="text"
                  placeholder="Join the discussion"
                />
              </div>
            </div>
          </div>
          <div className="bg-[var(--bg-1)] rounded-2xl p-3 sm:p-4 lg:p-6 mb-8">
            <div className="flex items-center flex-wrap justify-between gap-4">
              <div className="flex gap-5 items-center">
                <div className="w-15 h-15 shrink-0 rounded-full overflow-hidden">
                  <Image
                    width={60}
                    height={60}
                    src="/img/user-3.jpg"
                    alt="image"
                    className=" w-full h-full object-fit-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h5 className="mb-1 font-semibold"> Kristin Watson </h5>
                  <p className="mb-0 clr-neutral-500"> Product Designer </p>
                </div>
              </div>
              <div className="text-sm-end">
                <p className="mb-1"> 09:01 am </p>
                <p className="mb-0"> Mar 03, 2023 </p>
              </div>
            </div>
            <div className="border border-dashed my-6"></div>
            <div className="flex gap-1 mb-3">
              <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
              <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
              <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
              <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
              <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
            </div>
            <p className="mb-0 clr-neutral-500">
              I highly recommend [real estate agent&apos;s name] as a
              professional and knowledgeable real estate agent. They provided
              valuable guidance throughout the selling process
            </p>
            <div className="border border-dashed my-6"></div>
            <div className="flex flex-wrap items-center gap-10">
              <div className="flex items-center gap-2 text-primary">
                <HandThumbUpIcon className="w-5 h-5" />
                <span className="inline-block"> 178 </span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <ChatBubbleLeftRightIcon className="w-5 h-5" />
                <span className="inline-block"> Reply </span>
              </div>
            </div>
          </div>
          <div className="bg-[var(--bg-1)] rounded-2xl p-3 sm:p-4 lg:p-6 mb-8">
            <div className="flex items-center flex-wrap justify-between gap-4">
              <div className="flex gap-5 items-center">
                <div className="w-15 h-15 shrink-0 rounded-full overflow-hidden">
                  <Image
                    width={60}
                    height={60}
                    src="/img/user-4.jpg"
                    alt="image"
                    className=" w-full h-full object-fit-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h5 className="mb-1 font-semibold"> Marvin McKinney </h5>
                  <p className="mb-0 clr-neutral-500"> Product Designer </p>
                </div>
              </div>
              <div className="text-sm-end">
                <p className="mb-1"> 09:01 am </p>
                <p className="mb-0"> Mar 03, 2023 </p>
              </div>
            </div>
            <div className="border border-dashed my-6"></div>
            <div className="flex gap-1 mb-3">
              <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
              <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
              <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
              <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
              <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
            </div>
            <p className="mb-0 clr-neutral-500">
              I highly recommend [real estate agent&apos;s name] as a
              professional and knowledgeable real estate agent. They provided
              valuable guidance throughout the selling process
            </p>
            <div className="border border-dashed my-6"></div>
            <div className="flex flex-wrap items-center gap-10">
              <div className="flex items-center gap-2 text-primary">
                <HandThumbUpIcon className="w-5 h-5" />
                <span className="inline-block"> 178 </span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <ChatBubbleLeftRightIcon className="w-5 h-5" />
                <span className="inline-block"> Reply </span>
              </div>
            </div>
          </div>
          <Link
            href="#"
            className="featured-tab link font-semibold clr-primary-400 inline-block py-3 px-6 bg-[var(--primary-light)] hover:bg-primary hover:text-white rounded-full active">
            See All Reviews
          </Link>
        </div>
      </div>

      <div className="section-space--sm">
        <div className="bg-white rounded-2xl p-3 sm:p-4 lg:py-8 lg:px-5">
          <h4 className="mb-0 text-2xl font-semibold">Write a review</h4>
          <div className="border border-dashed my-6"></div>
          <p className="text-xl font-medium mb-3">Rating *</p>
          <div className="flex gap-1 mb-3">
            <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
            <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
            <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
            <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
            <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
          </div>
          <form action="#">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12">
                <label
                  htmlFor="review-name"
                  className="text-xl font-medium block mb-3">
                  Name *
                </label>
                <input
                  type="text"
                  className="w-full bg-[var(--bg-1)] border border-neutral-40 rounded-full py-3 px-5 focus:outline-none"
                  placeholder="Enter Name.."
                  id="review-name"
                />
              </div>
              <div className="col-span-12">
                <label
                  htmlFor="review-email"
                  className="text-xl font-medium block mb-3">
                  Email *
                </label>
                <input
                  type="text"
                  className="w-full bg-[var(--bg-1)] border border-neutral-40 rounded-full py-3 px-5 focus:outline-none"
                  placeholder="Enter Email.."
                  id="review-email"
                />
              </div>
              <div className="col-span-12">
                <label
                  htmlFor="review-review"
                  className="text-xl font-medium block mb-3">
                  Review *
                </label>
                <textarea
                  id="review-review"
                  rows={5}
                  className="bg-[var(--bg-1)] border rounded-2xl py-3 px-5 w-full focus:outline-none"></textarea>
              </div>
              <div className="col-span-12">
                <Link href="#" className="btn-primary">
                  Submit Review
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
