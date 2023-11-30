import CardPagination from "@/components/CardPagination";
import { carlistings } from "@/public/data/carlisting";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      {carlistings.map(({ id, img, price, title }) => (
        <div key={id} className="col-span-12">
          <div className="flex flex-col md:flex-row rounded-2xl p-2 bg-white">
            <div className="bg-[#F5F6FF] rounded-2xl shrink">
              <Image
                width={200}
                height={260}
                src={img}
                alt="image"
                className="rounded-2xl w-full h-auto"
              />
            </div>

            <div className="p-3 overflow-hidden flex-grow">
              <div className="property-card__body">
                <div className="grid grid-cols-12 gap-4 lg:gap-6 justify-between">
                  <div className="col-span-12 xl:col-span-8">
                    <div className="flex gap-6 mb-2">
                      <Link
                        href="/cab-listing-details"
                        className="link block text-[var(--neutral-700)] hover:text-primary text-xl font-medium">
                        {title}
                      </Link>
                      <div className="flex items-center shrink-0">
                        <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                        <span className="block text-[var(--neutral-700)]">
                          4.5
                        </span>
                      </div>
                    </div>
                    <ul className="columns-1 lg:columns-2 ml-4 list-disc flex-wrap gap-3 md:ps-2">
                      <li className="py-2"> Cancel anytime </li>
                      <li className="py-2"> Discount Price </li>
                      <li className="py-2"> Confirmation </li>
                      <li className="py-2"> Liability Insured </li>
                    </ul>
                  </div>
                  <div className="col-span-12 xl:col-span-4 xl:text-end">
                    <span className="block mb-1">
                      <span className="clr-tertiary-500">20% off</span>
                      <span className="clr-neutral-500">Par day</span>
                    </span>
                    <span className="block mb-5">
                      <span className="text-gray-700 font-medium text-xl">
                        ${price}
                      </span>{" "}
                      <span className="text-gray-400">$332</span>
                    </span>
                    <Link
                      href="cab-listing-details"
                      className="btn-outline  font-semibold">
                      Book Now
                    </Link>
                  </div>
                </div>
                <ul className="flex divide-x divide-dashed mt-8 bg-[#F5FCF8] overflow-x-auto">
                  <li className="p-6 m-0 text-center flex-grow">
                    <i className="las text-[#279155] la-user-friends text-[32px] inline-block mb-1"></i>
                    <span className="block text-sm max-width mx-auto">
                      8 Pass
                    </span>
                  </li>
                  <li className="p-6 m-0 text-center flex-grow">
                    <i className="las text-[#279155] la-shopping-bag text-[32px] inline-block mb-1"></i>
                    <span className="block text-sm max-width mx-auto">
                      {" "}
                      5 Bag{" "}
                    </span>
                  </li>
                  <li className="p-6 m-0 text-center flex-grow">
                    <i className="las text-[#279155] la-tachometer-alt text-[32px] inline-block mb-1"></i>
                    <span className="block text-sm max-width mx-auto">
                      {" "}
                      100km{" "}
                    </span>
                  </li>
                  <li className="p-6 m-0 text-center flex-grow">
                    <i className="las text-[#279155] la-gas-pump text-[32px] inline-block mb-1"></i>
                    <span className="block text-sm max-width mx-auto">
                      Petrol
                    </span>
                  </li>
                  <li className="p-6 m-0 text-center flex-grow">
                    <i className="las text-[#279155] la-cog text-[32px] inline-block mb-1"></i>
                    <span className="block text-sm max-width mx-auto">
                      {" "}
                      Auto{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}

      <CardPagination />
    </>
  );
};

export default page;
