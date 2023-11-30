"use client";
import Footer from "@/components/Footer";
import MobileMenu from "@/components/MobileMenu";
import Category from "@/components/home-1/Category";
import Faq from "@/components/home-1/Faq";
import Agents from "@/components/home-2/Agents";
import Counter from "@/components/home-2/Counter";
import DiscoverLocation from "@/components/home-2/DiscoverLocation";
import Explore from "@/components/home-2/Explore";
import Header2 from "@/components/home-2/Header2";
import Hero from "@/components/home-2/Hero";
import HowItWork from "@/components/home-2/HowItWork";
import MobileApp from "@/components/home-2/MobileApp";
import Property from "@/components/home-2/Property";
import Testimonial from "@/components/home-2/Testimonial";

const page = () => {
  return (
    <>
      <Header2 />
      <MobileMenu />
      <main>
        <Hero />
        <Category />
        <Property />
        <HowItWork />
        <DiscoverLocation />
        <MobileApp />
        <Explore />
        <Counter />
        <Testimonial />
        <Agents />
        <Faq />
      </main>
      <Footer />
    </>
  );
};

export default page;
