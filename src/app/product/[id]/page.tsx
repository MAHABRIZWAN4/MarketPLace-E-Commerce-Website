"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { sanityFetch } from "@/sanity/lib/fetch";
import { allproducts } from "@/sanity/lib/queries";
import { addToCart } from "@/app/(AddToCartFunctunality)/redux/features/cartSlice";
import Review from "../Rating-Reviews/page";
import LikeProducts from "../Like/page";

type Product = {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
};


export default function Post() {
  const params = useParams();
  const dispatch = useDispatch(); // For dispatching Redux actions
  const [products, setProducts] = useState<Product[]>([]);
  const [post, setPost] = useState<Product | null>(null);

 
  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts: Product[] = await sanityFetch({ query: allproducts });
      setProducts(fetchedProducts);

      // Find product based on the route parameter
      const product = fetchedProducts.find((p) => p._id === params?.id);
      setPost(product || null);
    };

    fetchProducts();
  }, [params?.id]);

  // Add to Cart handler
  const handleAddToCart = () => {
    if (post) {
      dispatch(addToCart({
        id: post._id,
        name: post.name,
        price: post.price,
        imageUrl: post.imageUrl,
        quantity: 1, // Default quantity to 1
      }));
      alert(`${post.name} has been added to the cart!`);
    }
  };

  // Render paragraphs for description
  const renderParagraphs = (description: string) => {
    return description.split("/n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };

  if (!post) {
    return <h1 className="text-2xl font-bold text-center mt-10">Wait A Minute..</h1>;
  }

  return (
    <main>
    <div className="max-w-5xl mx-auto mt-11">
      <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20 justify-between">
        {/* Product Image Section */}
        {post.imageUrl && (
          <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto bg-[#F2F0F1]  md:h-[700px] flex items-center justify-center  rounded-lg">
            <Image          
              src={post.imageUrl}
              alt={post.name}
              width={500}
              height={600}
              // className="w-full h-auto rounded-md md:h-[700px]"
            />
          </div>
        )}

        {/* Product Details Section */}
        <div className="mt-6 text-lg text-slate-700 w-full max-w-[600px]">
          <h1 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[40px] font-extrabold text-black">
            {post.name}
          </h1>

          {/* Rating */}
          <div className="grid grid-cols-4 gap-2 mt-4">
            <div className="flex items-center">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStarHalf className="text-yellow-400" />

              4.5/5
            </div>

          </div>
          {/* Price */}
          <p className="font-bold text-black text-3xl">${post.price}</p>
          {/* Description */}
          <div className="mt-4 text-base md:text-lg">{renderParagraphs(post.description)}</div>

          {/* Select Colors */}
          <h1 className="text-sm mt-8">Select Colors</h1>
          <div className="flex gap-4 items-center mt-4">
            <div className="h-9 w-9 bg-[#4F4631] border-2 rounded-full flex items-center justify-center text-white">
              <Check />
            </div>
            <div className="h-9 w-9 bg-[#314F4A] rounded-full"></div>
            <div className="h-9 w-9 bg-[#31344F] rounded-full"></div>
          </div>

          {/* Choose Size */}
          <h1 className="text-sm mt-6">Choose Size</h1>
          <div className="flex gap-4 items-center mt-4">
            {["Small", "Medium", "Large", "X-Large"].map((size) => (
              <div
                key={size}
                className="h-12 w-20 flex items-center justify-center bg-[#F0F0F0] rounded-full text-sm font-medium hover:bg-black hover:text-white cursor-pointer"
              >
                {size}
              </div>
            ))}
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="px-4 py-2 mt-6 bg-black text-white rounded-[50px] md:w-[300px] hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
 

{/* Reivew */}
<div><Review/></div>
<div><LikeProducts/></div>

 </div>




     </main>
  );
}
