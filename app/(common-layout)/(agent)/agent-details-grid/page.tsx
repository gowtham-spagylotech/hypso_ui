"use client";
import FeaturedCardPropertyList from "@/components/FeaturedCardPropertyList";
import { featuredItems } from "@/public/data/featured";
import CardPagination from "@/components/CardPagination";

const page = () => {
  return (
    <>
      {featuredItems["Mumbai"].map((item) => (
        <FeaturedCardPropertyList item={item} key={item.id} />
      ))}

      <CardPagination />
    </>
  );
};

export default page;
