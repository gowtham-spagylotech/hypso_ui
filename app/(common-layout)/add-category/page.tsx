"use client"
import React, { useState } from 'react';
import Image from "next/image";
import categoryEl from "@/public/img/category-section-el.png";
import SubHeadingBtn from "@/components/SubHeadingBtn";
import { categoryData } from "@/public/data/category";
import Link from "next/link";

const Category = () => {
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const cardHeight = 200;
    console.log("hoveredCategory", hoveredCategory)
    return (
        <section className="bg-white py-[60px] lg:py-[120px] relative px-3">
            <Image
                className="absolute hidden lg:block top-12 left-12"
                src={categoryEl}
                alt="img"
            />
            <div className="container">
                <div className="max-w-[570px] mx-auto flex flex-col items-center text-center">
                    <SubHeadingBtn text="Category" classes="bg-[var(--primary-light)]" />
                    <h2 className="h2 mt-3">Choose Our Category</h2>
                    <p className="text-neutral-600 pt-5 pb-8 lg:pb-14">
                        Real estate can be bought, sold, leased, or rented, and can be a
                        valuable investment opportunity. The value of real estate can be...
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-6">
                    {categoryData.map(({ id, desc, icon, title, color, subcategories }, index) => (
                        <div
                            key={id}
                            className={`border rounded-xl max-w-[306px] cursor-pointer group duration-300 card ${hoveredCategory === id ? 'hovered' : ''}`}
                            onMouseEnter={() => setHoveredCategory(id)}
                            onMouseLeave={() => setHoveredCategory(null)}
                            style={{ marginBottom: index < categoryData.length - 1 && hoveredCategory === id ? cardHeight : 0 }}
                        >
                            <div className={`p-8 bg-white group-hover:bg-${color} rounded-t-xl group-hover:text-black duration-300 transition-all`}>
                                <i
                                    className={`${icon} text-7xl group-hover:text-blue duration-300 ${color === "blue" && "text-primary"
                                        } ${color === "green" && "text-[#22814B]"} ${color === "brown" && "text-[#9C742B]"
                                        }`}></i>
                                <h4 className="font-semibold text-xl pt-2 pb-3 text-neutral-700 group-hover:text-#404040">
                                    {title}
                                </h4>
                                <p>{desc}</p>
                            </div>
                            {hoveredCategory == id ?
                                <div className="bg-[var(--bg-1)] p-8 rounded-b-xl group-hover:bg-[#212391] group-hover:text-white duration-600 transition-all relative z-30 ">
                                    {subcategories.map((subcategory) => (
                                        <Link
                                            key={subcategory.id}
                                            href={{
                                                pathname: "/add-post",
                                                query: { category: title, subcategory: subcategory.title },
                                            }}
                                        >
                                            <ul>
                                                <li>{subcategory.title}</li>
                                            </ul>
                                        </Link>
                                    ))}
                                    <Link href="#">
                                        Read More <i className="las la-arrow-right"></i>
                                    </Link>
                                </div> :
                                ""
                            }
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Category;
