"use client";
import { featuredItems } from "@/public/data/featured";
import PropertyListCard from "@/components/PropertyListCard";
import PopupListPageOTP from "@/components/home-1/PopupListPageOTP";
import CardPagination from "@/components/CardPagination";

const Page = () => {
  return (
    <>
      {featuredItems.Mumbai.map((item) => (
        <PropertyListCard item={item} key={item.id} />
      ))}

      {featuredItems.Mumbai.map((item) => (
        <PopupListPageOTP item={item} key={item.id} />
      ))}

      <CardPagination />
    </>
  );
};

export default Page;
