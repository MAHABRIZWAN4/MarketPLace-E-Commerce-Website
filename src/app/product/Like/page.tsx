// import React from "react";
// import { FaStar, FaStarHalf } from "react-icons/fa";
// import Image from "next/image";
// import Link from "next/link";

// export default function Like() {
//   return (
//     <main className="h-auto flex justify-center items-center py-8 px-4 animate-fade-in ">
//       <div className="w-full max-w-[1200px]">
//         {/* Content Section */}
//         <div className="px-4 py-6">
//           {/* Heading */}
//           <h1 className="flex justify-center text-[35px] sm:text-[40px] lg:text-[48px] font-extrabold animate-zoom-in">
//           YOU MIGHT ALSO LIKE
//           </h1>

//           {/* Cards Container */}
//           <div className="w-full mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 " >
//             {/* Card */}
//             {[
//               { src: "/image11.png", title: "Polo with Contrast Trims", price: "$212", originalPrice: "$232", discount: "-20%", rating: 4.0, reviews: "5", star: 4 },
//               { src: "/image19.png", title: "Gradient Graphic T-shirt", price: "$145", rating: 3.5, reviews: "5", star: 3,  HalfStar: 1   },
//               { src: "/image20.png", title: "Polo with Tipping Details", price: "$180", rating: 4.5, reviews: "5", star: 4, HalfStar: 1 },
//               { src: "/image21.png", title: "Black Striped T-shirt", price: "$120", originalPrice: "$150", discount: "-30%", rating: 5.0, reviews: "5", star: 5 },
//             ].map((item, index) => (
//               <div key={index} className="flex flex-col gap-2 card-container">
                
//                 <div className="bg-gray-300 flex items-center justify-center rounded-[20px] h-[300px] w-full overflow-hidden card">
//                   <Image
//                     src={item.src}
//                     alt={item.title}
//                     height={400}
//                     width={400}
//                     className="rounded-[20px] w-[300px] h-auto hover-zoom"
//                   />
//                 </div>
//                 <h1 className="font-extrabold">{item.title}</h1>
//                 <div className="flex justify-between items-center">
//                   <div className="flex gap-1 rating">
//                     {/* Rendering only the filled stars based on the rating */}
//                     {[...Array(item.star)].map((_, starIndex) => (
//                       <FaStar
//                         key={starIndex}
//                         color="orange"
//                         size={20}
//                       />
//                     ))}
//                     {/* Render half star for the last card if HalfStar property exists */}
//                     {item.HalfStar && (
//                       <FaStarHalf color="orange" size={20} />
//                     )}
//                   </div>
//                   <p className="text-sm font-medium">
//                     {item.rating}/<span className="text-gray-600">{item.reviews}</span>
//                   </p>
//                 </div>
//                 <div className="flex flex-row gap-4 items-center">
//                   <h1 className="text-2xl font-semibold">{item.price}</h1>
//                   {item.originalPrice && (
//                     <h1 className="text-2xl text-gray-500 font-semibold line-through">
//                       {item.originalPrice}
//                     </h1>
//                   )}
//                   {item.discount && (
//                     <button className="w-[58px] h-[28px] text-red-700 bg-[#FF33331A] rounded-2xl">
//                       {item.discount}
//                     </button>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>

    
//         </div>
//       </div>
//     </main>
//   );
// }



import React, { useEffect, useState } from "react";
import { FaStarHalf, FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/fetch";
import { like_fourproducts } from "@/sanity/lib/queries";

type Product = {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  discountPercent?: number;
};

export default function LikeProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts: Product[] = await sanityFetch({ query: like_fourproducts });
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <main className="h-auto flex justify-center items-center py-8 px-4 animate-fade-in">
      <div className="w-full max-w-[1200px]">
        <div className="px-4 py-6">
          <h1 className="flex justify-center text-[48px] sm:text-[40px] lg:text-[48px] font-extrabold animate-zoom-in">
            NEW ARRIVALS
          </h1>

          <div className="w-full mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((item) => (
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
                      <h1 className="text-2xl text-gray-500 font-bold line-through">$202</h1>
                      <button className="w-[58px] h-[28px] text-red-700 bg-[#FF33331A] rounded-2xl">
                        -{item.discountPercent}%
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

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
