"use client";
import React, { useEffect, useState } from "react";
import { FaStarHalf, FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/fetch";
import { selling_fourproducts } from "@/sanity/lib/queries";

type Product = {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  discountPercent?: number;
};

export default function Homepage4() {
  const [sellingProducts, setSellingProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products: Product[] = await sanityFetch({ query: selling_fourproducts });
      setSellingProducts(products);
    };
    fetchProducts();
  }, []);

  return (
    <main className="h-auto flex justify-center items-center py-8 px-4 animate-fade-in">
      <div className="w-full max-w-[1200px]">
        {/* Content Section */}
        <div className="px-4 py-6">
          {/* Heading */}
          <h1 className="flex justify-center text-[48px] sm:text-[40px] lg:text-[48px] font-extrabold animate-zoom-in">
            TOP SELLING
          </h1>
          {/* Cards Container */}
          <div className="w-full mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card */}
            {sellingProducts.map((item: Product) => (
              <div key={item._id} className="flex flex-col gap-2 card-container">
                <Link href={`/product/${item._id}`}>
                  <div className="bg-gray-30 flex items-center justify-center rounded-[20px] h-[300px] w-full overflow-hidden card">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      height={400}
                      width={400}
                      className="rounded-[20px] w-[300px] h-auto hover-zoom"
                    />
                  </div>
                </Link>
                <h1 className="font-bold text-[20px]">{item.name}</h1>
                <div className="flex justify-between items-center">
                  <div className="flex gap-1 rating">
                    {[...Array(4)].map((_, index) => (
                      <span key={index} className="text-[#FFC633]">
                        <FaStar className="w-[18.49px] h-[18.49px]" />
                      </span>
                    ))}
                    <span className="text-[#FFC633]">
                      <FaStarHalf className="w-[18.49px] h-[18.49px]" />
                    </span>
                    <span className="text-[14px] font-medium text-black">4.5/</span>
                    <span className="text-gray-600 text-[14px] font-medium">5</span>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <h1 className="text-2xl font-bold">${item.price}</h1>
                  {item.discountPercent && item.discountPercent > 0 && (
                    <>
                      <h1 className="text-2xl text-gray-500 font-bold line-through">
                        $298
                      </h1>
                      <button className="w-[58px] h-[28px] text-red-700 bg-[#FF33331A] rounded-2xl">
                        -{item.discountPercent}%
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* View All Button */}
          <div className="flex justify-center mt-12">
            <Link href="/category">
              <button className="w-[218px] h-[52px] border border-gray-600 bg-black text-white rounded-[62px] flex items-center justify-center text-[15px] font-bold hover:bg-gray-900 hover:text-white mb-12 transition-all duration-300 transform hover:scale-110">
                View All
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

