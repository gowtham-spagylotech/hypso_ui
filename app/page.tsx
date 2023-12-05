"use client";
import CommonHeader from "@/components/CommonHeader";
import Footer from "@/components/Footer";
import HeaderTop from "@/components/home-1/HeaderTophome1";
import Authors from "@/components/home-1/Authors";
import Benefit from "@/components/home-1/Benefit";
import Calculate from "@/components/home-1/Calculate";
import Category from "@/components/home-1/Category";
import Faq from "@/components/home-1/Faq";
import Hero from "@/components/home-1/Hero";
import NewListing from "@/components/home-1/NewListing";
import Property from "@/components/home-1/Property";
import Services from "@/components/home-1/Services";
import StartListing from "@/components/home-1/StartListing";
import Testimonial from "@/components/home-1/Testimonial";
import MobileMenu from "@/components/MobileMenu";
import ProfileDropdown from "@/components/ProfileDropdown";

export default function Home() {
  return (
    <main>
      <HeaderTop />
      <MobileMenu />
      <Hero />
      <Category />
      <Property />
      <Footer />
    </main>
  );
}
