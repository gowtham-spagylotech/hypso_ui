"use client";
import CustomRangeSlider from "@/components/RangeSlider";
import dynamic from "next/dynamic";
import Link from "next/link";
const Map = dynamic(() => import("../../../../components/LeafletMap"), {
  ssr: false,
});

const page = () => {
  return (
    <div className="col-span-12">
      <Map />
    </div>
  );
};

export default page;
