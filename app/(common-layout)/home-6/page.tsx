"use client";
import Testimonial from "@/components/home-2/Testimonial";
import Cta from "@/components/home-6/Cta";
import DiscountCard from "@/components/home-6/DiscountCard";
import Facilities from "@/components/home-6/Facilities";
import Featured from "@/components/home-6/Featured";
import Hero from "@/components/home-6/Hero";
import Info from "@/components/home-6/Info";
import WorkingProcess from "@/components/home-6/WorkingProcess";

const page = () => {
  return (
    <main>
      <Hero />
      {/* <!-- /Hotel Booking Hero --> */}
      {/* <!-- Working Process --> */}
      <WorkingProcess />
      {/* <!-- /Working Process --> */}
      {/* <!-- Featured --> */}
      <Featured />
      {/* <!-- /Featured --> */}
      {/* <!-- Flight Facilities --> */}
      <Facilities />
      {/* <!-- /Flight Facilities --> */}
      {/* <!-- Discount Card --> */}
      <DiscountCard />
      {/* <!-- /Discount Card --> */}
      {/* <!-- Info  --> */}
      <Info />
      {/* Cta section */}
      <Cta />
      {/* Testimonial */}
      <Testimonial />
    </main>
  );
};

export default page;
