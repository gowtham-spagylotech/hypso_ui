"use client";
import CustomSwitch from "@/components/Switch";
import Link from "next/link";

const page = () => {
  return (
    <ul className="flex flex-col gap-6 pb-[30px] lg:pb-[60px]">
      <li>
        <div className="p-6 p-xl-10 rounded-2xl bg-white shadow-3">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <h3 className="mb-0 h3 flex-grow"> My Network </h3>
            <Link
              href="#"
              className="btn-outline text-primary font-semibold shrink-0">
              Toggle All
            </Link>
          </div>
          <div className="hr-line my-6"></div>
          <p className="mb-4"> SEND ME : </p>
          <div className="bg-[var(--primary-light)] py-4 px-8 rounded-lg mb-4">
            <p className="mb-0 text-[var(--neutral-700)]">
              We need permission from your browser to show notifications.
              <Link
                href="#"
                className="link inline-block font-semibold text-primary">
                Request permission
              </Link>
            </p>
          </div>
          <ul className="flex flex-col gap-6">
            <li>
              <div className="flex flex-wrap flex-sm-nowrap gap-4 items-center">
                <div className="shrink-0">
                  <CustomSwitch />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center flex-wrap gap-6 mb-1">
                    <h5 className="font-semibold mb-0"> New for you </h5>
                    <span className="inline-flex justify-center py-2 px-4 text-center text-xs bg-[#37D27A] text-[var(--neutral-700)] rounded font-semibold">
                      New
                    </span>
                  </div>
                  <p className="mb-0 clr-neutral-500">
                    A weekly email featuring shots from designers you follow
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-wrap flex-sm-nowrap gap-4 items-center">
                <div className="shrink-0">
                  <CustomSwitch />
                </div>
                <div className="flex-grow">
                  <h5 className="font-semibold mb-1"> Account activity </h5>
                  <p className="mb-0 clr-neutral-500">
                    A weekly email featuring shots from designers you follow
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-wrap flex-sm-nowrap gap-4 items-center">
                <div className="shrink-0">
                  <CustomSwitch />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center flex-wrap gap-6 mb-1">
                    <h5 className="font-semibold mb-0"> Meetups near you </h5>
                    <span className="inline-flex justify-center py-2 px-4 text-center text-xs bg-[#37D27A] text-[var(--neutral-700)] rounded font-semibold">
                      New
                    </span>
                  </div>
                  <p className="mb-0 clr-neutral-500">
                    Get an email when a Dribbble Meetup is posted close to my
                    location
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-wrap flex-sm-nowrap gap-4 items-center">
                <div className="shrink-0">
                  <CustomSwitch />
                </div>
                <div className="flex-grow">
                  <h5 className="font-semibold mb-1"> Opportunities </h5>
                  <p className="mb-0 clr-neutral-500">
                    Get a daily email when new design jobs are posted in your
                    area
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <div className="p-6 p-xl-10 rounded-2xl bg-white shadow-3">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <h3 className="mb-0 h3 flex-grow"> Placewise Emails </h3>
            <Link
              href="#"
              className="btn-outline text-primary font-semibold shrink-0">
              Toggle All
            </Link>
          </div>
          <div className="hr-line my-6"></div>
          <p className="mb-4"> SUBSCRIBE ME TO : </p>
          <ul className="flex flex-col gap-6">
            <li>
              <div className="flex flex-wrap flex-sm-nowrap gap-4 items-center">
                <div className="shrink-0">
                  <CustomSwitch />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center flex-wrap gap-6 mb-1">
                    <h5 className="font-semibold mb-0"> Company news </h5>
                    <span className="inline-flex justify-center py-2 px-4 text-center text-xs bg-[#37D27A] text-[var(--neutral-700)] rounded font-semibold">
                      New
                    </span>
                  </div>
                  <p className="mb-0 clr-neutral-500">
                    Get Placewise news, announcements, and product updates
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-wrap flex-sm-nowrap gap-4 items-center">
                <div className="shrink-0">
                  <CustomSwitch />
                </div>
                <div className="flex-grow">
                  <h5 className="font-semibold mb-1"> Replay </h5>
                  <p className="mb-0 clr-neutral-500">
                    A weekly email featuring popular shots
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-wrap flex-sm-nowrap gap-4 items-center">
                <div className="shrink-0">
                  <CustomSwitch />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center flex-wrap gap-6 mb-1">
                    <h5 className="font-semibold mb-0"> Courtside </h5>
                    <span className="inline-flex justify-center py-2 px-4 text-center text-xs bg-[#37D27A] text-[var(--neutral-700)] rounded font-semibold">
                      New
                    </span>
                  </div>
                  <p className="mb-0 clr-neutral-500">
                    A weekly email featuring the latest stories from our blog
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-wrap flex-sm-nowrap gap-4 items-center">
                <div className="shrink-0">
                  <CustomSwitch />
                </div>
                <div className="flex-grow">
                  <h5 className="font-semibold mb-1"> Weekly jobs </h5>
                  <p className="mb-0 clr-neutral-500">
                    Weekly digest of design jobs
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <div className="p-6 p-xl-10 rounded-2xl bg-white shadow-3">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <h3 className="mb-0 h3 flex-grow"> Usage </h3>
            <Link
              href="#"
              className="btn-outline text-primary font-semibold shrink-0">
              Toggle All
            </Link>
          </div>
          <div className="hr-line my-6"></div>
          <p className="mb-4"> ALLOW OTHERS TO : </p>
          <ul className="flex flex-col gap-6">
            <li>
              <div className="flex flex-wrap flex-sm-nowrap gap-4 items-center">
                <div className="shrink-0">
                  <CustomSwitch />
                </div>
                <div className="flex-grow">
                  <h5 className="font-semibold mb-1"> Encrypt data </h5>
                  <p className="mb-0 clr-neutral-500">
                    Encrypt all data associated with account
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-wrap flex-sm-nowrap gap-4 items-center">
                <div className="shrink-0">
                  <CustomSwitch />
                </div>
                <div className="flex-grow">
                  <h5 className="font-semibold mb-1"> Location services </h5>
                  <p className="mb-0 clr-neutral-500">
                    Allow third-party apps to use current location
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-wrap flex-sm-nowrap gap-4 items-center">
                <div className="shrink-0">
                  <CustomSwitch />
                </div>
                <div className="flex-grow">
                  <h5 className="font-semibold mb-1"> Allow private notes </h5>
                  <p className="mb-0 clr-neutral-500">
                    Members can send you private notes
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  );
};

export default page;
