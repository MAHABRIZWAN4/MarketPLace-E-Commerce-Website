
// import React from "react";
// import { FaStarHalf, FaStar } from "react-icons/fa";
// import Image from "next/image";
// import Link from "next/link";

// import { sanityFetch } from "@/sanity/lib/fetch";
// import { allproducts, arrival_fourproducts } from "@/sanity/lib/queries";









// type Product = {
//   _id:string,
//   name:string,
//   price:number,
//   description:string,
//   imageUrl:string,
//   discountPercent?:number
// }





























// export default async function Homepage3() {
 




// // Sanity 
// const arrivalProducts:Product[] = await sanityFetch({query:arrival_fourproducts}) 

  



//   return (
//     <main className="h-auto flex justify-center items-center py-8 px-4 animate-fade-in">
//       <div className="w-full max-w-[1200px]">
//         {/* Content Section */}
//         <div className="px-4 py-6">
//           {/* Heading */}
//           <h1 className="flex justify-center text-[48px] sm:text-[40px] lg:text-[48px] font-extrabold animate-zoom-in">
//             NEW ARRIVALS
//           </h1>

//           {/* Cards Container */}
//           <div className="w-full mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" >
//             {/* Card */}
//             {arrivalProducts.map((item: any, index: any) => (
//               <div key={item._id} className="flex flex-col gap-2 card-container">
//                 <Link href={`/product/${item._id}`}>
//                   <div className="bg-gray-30 flex items-center justify-center rounded-[20px] h-[300px] w-full overflow-hidden card">
//                     <Image
//                       src={item.imageUrl}
//                       alt={item.name}
//                       height={400}
//                       width={400}
//                       className="rounded-[20px] w-[300px] h-auto hover-zoom"
//                     />
//                   </div>
//                 </Link>
//                 <h1 className="font-bold text-[20px] ">{item.name}</h1>
//                 <div className="flex justify-between items-center">


     
     
    
     
//                   <div className="flex gap-1 rating">




//                     {[...Array(4)].map((_, index) => (
//                       <span key={index} className="text-[#FFC633]"><FaStar className="w-[18.49px] h-[18.49px]"/></span>
//                     ))}
//                       <span key={index} className="text-[#FFC633]"><FaStarHalf className="w-[18.49px] h-[18.49px]"/></span>
                   
//                     <span className=" text-[14px] font-medium text-black ">4.5/</span>
//                     <span className="text-gray-600 text-[14px] font-medium">5</span>

//                   </div> 


















//                 </div>












                
//                 <div className="flex flex-row gap-4 items-center">
//                   <h1 className="text-2xl font-bold">${item.price}</h1>
                  
                  

// {item.discountPercent > 0 && ( 
//   <h1 className="text-2xl text-gray-500 font-bold line-through">
//     $202 {/* Yahan hardcoded original price */}
//   </h1>
// )} 


//  {item.discountPercent > 0  && (
// <button className="w-[58px] h-[28px] text-red-700 bg-[#FF33331A] rounded-2xl">
// -{item.discountPercent}%
// </button>)}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* View All Button */}
//           <div className="flex justify-center mt-12">
//             <Link href="/category">
//               <button className="w-[218px] h-[52px] border border-gray-600 bg-black text-white rounded-[62px] flex items-center justify-center text-[15px] font-bold hover:bg-gray-900 hover:text-white mb-12 transition-all duration-300 transform hover:scale-110">
//                 View All
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }




"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { addToCart } from "@/redux/cartSlice"; // Assuming you have a cartSlice for Redux
import { sanityFetch } from "@/sanity/lib/fetch";
import { allproducts } from "@/sanity/lib/queries";
import { addToCart } from "@/app/(AddToCartFunctunality)/redux/features/cartSlice";
import Review from "../Rating-Reviews/page";
import LikeProducts from "../Like/page";

// import { AddtoCart } from "@/app/(AddToCartFunctunality)/redux/features/cartSlice";
// import { AddtoCart } from "@/app/(AddToCartFunctunality)/redux/features/cartSlice";

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

  // Fetch products on mount
  // Fetch products on mount
  // Fetch products on mount
  // Fetch products on mount
  // Fetch products on mount
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
            className="px-4 py-2 mt-6 bg-black text-white rounded-[50px] hover:bg-gray-800 transition"
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
