import Pagination from "@/components/vendor-dashboard/Pagination";
import Footer from "@/components/vendor-dashboard/Vendor.Footer";
import { recentActivity } from "@/public/data/recentactivity";
import { ArrowRightIcon, TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <section className="bg-[var(--bg-1)] px-3 lg:px-6 py-4 lg:py-6">
        <div className="bg-white py-6 lg:py-8 px-3 md:px-8 lg:px-10 border rounded-2xl">
          <div className="flex flex-wrap justify-between pb-5 mb-5 border-b gap-3">
            <h3 className="h3">Recent Activities</h3>
            <Link
              href="/"
              className="text-primary font-semibold flex items-center gap-2">
              View All <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
          <div>
            {recentActivity.map(({ id, desc, img, time }) => (
              <div
                key={id}
                className="py-3 border-b gap-3 flex flex-wrap justify-between border-dashed">
                <div className="flex gap-3 items-center">
                  <Image
                    className="rounded-full"
                    width={60}
                    height={60}
                    src={img}
                    alt="img"
                  />
                  <div className="flex flex-col">
                    <span className="text-base md:text-xl">{desc}</span>
                    <span className="text-sm">{time}</span>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <Link href="#" className="btn-outline">
                    View
                  </Link>
                  <Link href="#" className="btn-outline">
                    <TrashIcon className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            ))}
            <Pagination />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
