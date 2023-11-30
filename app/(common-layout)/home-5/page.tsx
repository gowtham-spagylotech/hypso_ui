"use client";
import Testimonial from "@/components/home-2/Testimonial";
import Counter from "@/components/home-4/Counter";
import DiscountCard from "@/components/home-5/DiscountCard";
import Featured from "@/components/home-5/Featured";
import Hero from "@/components/home-5/Hero";
import TopCategory from "@/components/home-5/TopCategory";
import TravelMemory from "@/components/home-5/TravelMemory";
import WhyChoose from "@/components/home-5/WhyChoose";

const page = () => {
  return (
    <main>
      <Hero />
      {/* <!-- /Hotel Booking Hero --> */}
      {/* <!-- Why Choose Us --> */}
      <WhyChoose />
      {/* <!-- /Why Choose Us --> */}
      {/* <!-- Featured Package --> */}
      <Featured />
      {/* <!-- /Featured Package --> */}
      {/* <!-- Discount Card --> */}
      <DiscountCard />
      {/* <!-- /Discount Card --> */}
      {/* <!-- Travel Memory --> */}
      <TravelMemory />
      {/* <!-- /Travel Memory --> */}
      {/* <!-- Counter  --> */}
      <Counter />
      {/* <!-- /Counter  --> */}
      {/* <!-- Top Category --> */}
      <TopCategory />
      {/* Testimonial */}
      <Testimonial />
    </main>
  );
};

export default page;
