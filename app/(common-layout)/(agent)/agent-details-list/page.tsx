import { featuredItems } from "@/public/data/featured";
import FeaturedItemListCard from "@/components/FeaturedItemListCard";
import CardPagination from "@/components/CardPagination";

const Page = () => {
  return (
    <>
      {featuredItems.Mumbai.map((item) => (
        <FeaturedItemListCard item={item} key={item.id} />
      ))}
      <CardPagination />
    </>
  );
};

export default Page;
