"use client";
import CabListingGridCard from "@/components/CablistingGridCard";
import CardPagination from "@/components/CardPagination";
const featuredItemData = [
  {
    id: 1,
    title: "Toyota Corolla",
    people: 8,
    type: "Hybrid",
    milage: "6.1",
    gear: "automatic",
    price: "5,256",
    favourite: false,
    img: ["/img/featured-img-7.jpg"],
  },
  {
    id: 2,
    people: 8,
    title: "Tesla Model 10",
    type: "Hybrid",
    milage: "6.1",
    gear: "automatic",
    price: "5,256",
    favourite: false,
    img: [
      "/img/featured-img-8.jpg",
      "/img/featured-img-9.jpg",
      "/img/featured-img-10.jpg",
      "/img/featured-img-11.jpg",
    ],
  },
  {
    id: 3,
    title: "Honda Civic",
    people: 8,
    type: "Hybrid",
    milage: "6.1",
    gear: "automatic",
    price: "5,256",
    favourite: false,
    img: ["/img/featured-img-9.jpg"],
  },
  {
    id: 4,
    title: "BMW 3 Series",
    people: 8,
    type: "Hybrid",
    milage: "6.1",
    gear: "automatic",
    price: "5,256",
    favourite: false,
    img: [
      "/img/featured-img-10.jpg",
      "/img/featured-img-11.jpg",
      "/img/featured-img-7.jpg",
      "/img/featured-img-8.jpg",
    ],
  },
  {
    id: 5,
    title: "Chevrolet Camaro",
    people: 8,
    type: "Hybrid",
    milage: "6.1",
    gear: "automatic",
    price: "5,256",
    favourite: false,
    img: ["/img/featured-img-11.jpg"],
  },
  {
    id: 6,
    title: "Tesla Model S",
    people: 8,
    type: "Hybrid",
    milage: "6.1",
    gear: "automatic",
    price: "5,256",
    favourite: false,
    img: ["/img/featured-img-12.jpg"],
  },
];

const Page = () => {
  return (
    <>
      {featuredItemData.map((item) => (
        <CabListingGridCard key={item.id} item={item} />
      ))}
      <CardPagination />
    </>
  );
};

export default Page;
