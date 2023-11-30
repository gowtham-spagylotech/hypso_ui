import CardPagination from "@/components/CardPagination";
import { featuredPackage } from "@/public/data/featuredpackage";
import { StarIcon } from "@heroicons/react/20/solid";
import { ClockIcon, UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      {featuredPackage.map(
        ({ id, activity, capacity, img, place, price, rating, title }) => (
          <div key={id} className="col-span-12">
            <div className="p-2 md:p-3 rounded-2xl flex flex-col items-center md:flex-row bg-white">
              <div className="relative">
                <div className="rounded-2xl">
                  <Image
                    width={369}
                    height={282}
                    src={img[0]}
                    alt="image"
                    className="rounded-2xl w-full"
                  />
                </div>
                <div className="absolute w-[90%] top-4 left-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-block py-2 px-5 rounded-full bg-[var(--secondary)] text-neutral-900 text-sm">
                      {place} Places
                    </span>
                    <span className="inline-block py-2 px-5 rounded-full bg-[var(--tertiary)] text-neutral-900 text-sm">
                      {activity} Activities
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-grow h-full p-3 sm:p-4">
                <div className="property-card__body ">
                  <div className="flex justify-between mb-2">
                    <Link
                      href="tour-listing-details"
                      className="link block flex-grow text-[var(--neutral-700)] hover:text-primary text-xl font-medium">
                      {title}
                    </Link>
                    <div className="flex items-center shrink-0">
                      <StarIcon className="w-5 h-5 text-[var(--tertiary)]" />
                      <span className="block text-[var(--neutral-700)]">
                        {rating}
                      </span>
                    </div>
                  </div>
                  <ul className="flex gap-3">
                    <li className="col-6">
                      <div className="flex items-center gap-2">
                        <ClockIcon className="w-5 h-5 text-[var(--secondary-500)]" />
                        <span className="block text-sm"> 4 Days 5 Night </span>
                      </div>
                    </li>
                    <li className="col-6">
                      <div className="flex items-center gap-2">
                        <UserIcon className="w-5 h-5 text-[var(--secondary-500)]" />
                        <span className="block text-sm">
                          {" "}
                          Capacity {capacity}{" "}
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="my-4">
                  <div className="border border-dashed"></div>
                </div>
                <div className="py-3">
                  <div className="flex flex-wrap justify-between items-center">
                    <span className="block text-xl font-medium text-primary">
                      ${price}
                      <span className="inline-block text-gray-500 text-base font-normal">
                        /month
                      </span>
                    </span>
                    <Link
                      href="/tour-listing-details"
                      className="btn-outline py-2 text-primary font-semibold">
                      Book Now
                    </Link>
                  </div>
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
