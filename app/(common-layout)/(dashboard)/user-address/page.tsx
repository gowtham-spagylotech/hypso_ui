import {
  MapPinIcon,
  PaintBrushIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const page = () => {
  return (
    <div className="p-3 sm:p-4 lg:p-6 p-xl-10 rounded-2xl bg-white shadow-3">
      <h3 className="mb-0 h3 flex-grow"> My Address </h3>
      <div className="border border-t my-6"></div>
      <p className="text-sm clr-neutral-500 mb-6">
        Cards will be charged either at the end of the month or whenever your
        balance exceeds the usage threshold All major credit/debit cards
        accepted.
      </p>
      <ul className="flex flex-col gap-6">
        <li className="flex flex-wrap gap-6 items-center lg:justify-between border border-dashed rounded-2xl p-4 p-xl-6">
          <div className="flex items-center gap-4">
            <input
              className="accent-[var(--primary)] scale-125"
              type="radio"
              name="select-address"
              id="billing-address-1"
            />
            <label
              className="inline-block text-lg font-medium cursor-pointer"
              htmlFor="billing-address-1">
              <span className="h5 block font-medium mb-1">
                Billing address #1
              </span>
              <span className="block text-sm clr-neutral-500">
                6391 Elgin St. Celina, Delaware 10299
              </span>
            </label>
          </div>
          <Link
            href="#"
            className="btn-outline-gray inline-flex items-center gap-1 font-semibold shrink-0">
            <PaintBrushIcon className="w-5 h-5" />
            Edit Address
          </Link>
        </li>
        <li className="flex flex-wrap gap-6 items-center lg:justify-between border border-dashed rounded-2xl p-4 p-xl-6">
          <div className="flex items-center gap-4">
            <input
              className="accent-[var(--primary)] scale-125"
              type="radio"
              name="select-address"
              id="billing-address-2"
            />
            <label
              className="inline-block text-lg font-medium cursor-pointer"
              htmlFor="billing-address-2">
              <span className="h5 block font-medium mb-1">
                Billing address #2
              </span>
              <span className="block text-sm clr-neutral-500">
                2464 Royal Ln. Mesa, New Jersey 45463
              </span>
            </label>
          </div>
          <Link
            href="#"
            className="btn-outline-gray inline-flex items-center gap-1 font-semibold shrink-0">
            <PaintBrushIcon className="w-5 h-5" />
            Edit Address
          </Link>
        </li>
        <li className="grid place-content-center text-center border border-dashed rounded-2xl p-4 p-xl-6">
          <div className="flex justify-center">
            <MapPinIcon className="w-14 h-14" />
          </div>
          <Link
            href="#"
            className="link flex items-center justify-center gap-2 mt-1 clr-neutral-400 hover:text-primary">
            <PlusCircleIcon className="w-5 h-5" />
            <span className="font-semibold inline-block">
              {" "}
              Add a new address{" "}
            </span>
          </Link>
        </li>
      </ul>
      <div className="mt-6">
        <p className="text-sm clr-neutral-500"> Tax location </p>
        <h5 className="clr-neutral-500 font-semibold text-xl">
          {" "}
          UK - 20.00% SST{" "}
        </h5>
        <Link
          href="#"
          className="link inline-block text-primary hover:text-primary font-medium">
          More Info
        </Link>
      </div>
      <div className="mt-6">
        <p className="text-sm clr-neutral-500">
          Your text location determines the taxes that are applied to your bill.
        </p>
        <Link
          href="#"
          className="link inline-block text-primary hover:text-primary font-medium">
          How do I correct my tax location?
        </Link>
      </div>
    </div>
  );
};

export default page;
