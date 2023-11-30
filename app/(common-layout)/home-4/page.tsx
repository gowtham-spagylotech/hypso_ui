"use client";
import MobileApp from "@/components/home-2/MobileApp";
import Testimonial from "@/components/home-2/Testimonial";
import Counter from "@/components/home-4/Counter";
import Cta from "@/components/home-4/Cta";
import Destinations from "@/components/home-4/Destinations";
import DiscountCard from "@/components/home-4/DiscountCard";
import Facilities from "@/components/home-4/Facilities";
import Featured from "@/components/home-4/Featured";
import Hero from "@/components/home-4/Hero";
import WhyChoose from "@/components/home-4/WhyChoose";

const page = () => {
  return (
    <>
      <Hero />
      <Facilities />
      <DiscountCard />
      <Featured />
      <WhyChoose />
      <Counter />
      <MobileApp />
      <Destinations />
      <Cta />
      <Testimonial />
    </>
  );
};

export default page;
