

 import React, { useState } from "react";
 import { FaStar, FaCheckCircle, FaStarHalf } from "react-icons/fa";
 import Image from "next/image"
 // Dummy Data
 interface dataType {
   star: React.ReactNode[];
   check: React.ReactNode[];
   heading: string;
   paragraph: string;
   posted: string;
 }
 const data: dataType[] = [
   {
     star: [
       <FaStar key="star1" color="orange" size={20} />,
       <FaStar key="star2" color="orange" size={20} />,
       <FaStar key="star3" color="orange" size={20} />,
       <FaStar key="star4" color="orange" size={20} />,
       <FaStarHalf key="star5" color="orange" size={20} />,
     ],
     check: [<FaCheckCircle key="check1" />],
     heading: "Samantha D.",
     paragraph:
       "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
     posted: "Posted on August 14, 2023",
   },
   {
     star: [
       <FaStar key="star1" color="orange" size={20} />,
       <FaStar key="star2" color="orange" size={20} />,
       <FaStar key="star3" color="orange" size={20} />,
       <FaStar key="star4" color="orange" size={20} />,
     ],
     check: [<FaCheckCircle key="check1" />],
     heading: "Alex M.",
     paragraph:
       "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
     posted: "Posted on August 15, 2023",
   },
   {
     star: [
       <FaStar key="star1" color="orange" size={20} />,
       <FaStar key="star2" color="orange" size={20} />,
       <FaStar key="star3" color="orange" size={20} />,
       <FaStarHalf key="star4" color="orange" size={20} />,
     ],
     check: [<FaCheckCircle key="check1" />],
     heading: "Ethan R.",
     paragraph:
       "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
     posted: "Posted on August 16, 2023",
   },
   {
     star: [
       <FaStar key="star1" color="orange" size={20} />,
       <FaStar key="star2" color="orange" size={20} />,
       <FaStar key="star3" color="orange" size={20} />,
       <FaStar key="star4" color="orange" size={20} />,
     ],
     check: [<FaCheckCircle key="check1" />],
     heading: "Olivia P.",
     paragraph:
       "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
     posted: "Posted on August 17, 2023",
   },
   {
     star: [
       <FaStar key="star1" color="orange" size={20} />,
       <FaStar key="star2" color="orange" size={20} />,
       <FaStar key="star3" color="orange" size={20} />,
       <FaStar key="star4" color="orange" size={20} />,
     ],
     check: [<FaCheckCircle key="check1" />],
     heading: "Liam K.",
     paragraph:
       "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
     posted: "Posted on August 18, 2023",
   },
   {
     star: [
       <FaStar key="star1" color="orange" size={20} />,
       <FaStar key="star2" color="orange" size={20} />,
       <FaStar key="star3" color="orange" size={20} />,
       <FaStar key="star4" color="orange" size={20} />,
       <FaStarHalf key="star5" color="orange" size={20} />,
     ],
     check: [<FaCheckCircle key="check1" />],
     heading: "Ava H.",
     paragraph:
       "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
     posted: "Posted on August 19, 2023",
   },
 ]


//  export default function Review() {
//    return (
//      <main className="mx-4 max-w-[1210px]">
//       <div className="mt-10 flex flex-col">
//         <div className="flex flex-col sm:flex-row justify-between items-center">
//           <h1 className="text-[24px] sm:text-[38px] font-bold text-center sm:text-left">
//             All Reviews{" "}
//             <span className="text-[16px] font-medium text-[#00000099]">
//               (451)
//             </span>{" "}
//           </h1>

//           <div className="flex gap-4 mt-4 sm:mt-0 ">
//             <button className="w-[48px] h-[48px] rounded-[62px] bg-[#F0F0F0] flex justify-center items-center hover:bg-[#250b0b1f]">
//               <Image src="/image36.png" alt="image" width={30} height={30} />
//             </button>
//             <button className="w-[120px] h-[48px] rounded-[62px] bg-[#F0F0F0] hover:bg-[#250b0b1f]">
//               Latest
//             </button>
//             <button className="w-[110px] text-[14px] sm:text-[16px] sm:w-[166px] h-[48px] rounded-[62px] bg-black hover:bg-[#111111e7] text-white">
//               Write a Review
//             </button>
//           </div>
//         </div>
//       </div>

//       <section className="mt-5 grid md:grid-cols-2 md:grid-rows-3 gap-5">
//         {data.map((item, index) => (
//           <div
//             key={`review-${index}`}
//             className="bg-[#0000001A] w-auto h-auto xl:w-[500px] xl:h-[241.58px] rounded-[20px] border-[1px] py-[28px] px-[32px] flex flex-col gap-3"
//           >
//             <span className="flex flex-row gap-2">
//               {item.star.map((star, starIndex) => (
//                 <React.Fragment key={`star-${index}-${starIndex}`}>
//                   {star}
//                 </React.Fragment>
//               ))}
//             </span>
//             <h1 className="flex flex-row gap-2 text-[20px] font-bold">
//               {item.heading}
//               <span className="text-[#01AB31] flex items-center justify-center">
//                 {item.check.map((check, checkIndex) => (
//                   <React.Fragment key={`check-${index}-${checkIndex}`}>
//                     {check}
//                   </React.Fragment>
//                 ))}
//               </span>
//             </h1>

//             <p className="text-[#00000099] font-normal text-[16px]">
//               {item.paragraph}
//             </p>
//             <p className="text-[#00000099] font-medium text-[16px]">
//               {item.posted}
//             </p>
//           </div>
//         ))}
//       </section>

//       <div className="flex justify-center mt-8">
//         <button className="w-[230px] h-[52px] text-[#000000] font-medium text-[16px] bg-[#0000001A] rounded-[62px] hover:bg-[#250b0b1f]">
//           Load More Reviews
//         </button>
//       </div>
//     </main>
//   );
// }



import {  FaRegStar, FaStarHalfAlt } from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";

interface ReviewData {
  star: number;
  heading: string;
  paragraph: string;
  posted: string;
}

interface FormInputs {
  name: string;
  rating: number;
  comment: string;
}

const Review = () => {
  const [reviews, setReviews] = useState(data);
  const [showForm, setShowForm] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);
  const { register, handleSubmit, reset, setValue, watch } = useForm<FormInputs>();
  
  const rating = watch("rating", 0);

  const onSubmit: SubmitHandler<FormInputs> = (data: { name: any; comment: any; rating: number; }) => {
    const newReview = {
      star: Array(5).fill(<FaRegStar />),
      check: [<FaCheckCircle key="check1" />],
      heading: data.name,
      paragraph: data.comment,
      posted: `Posted on ${new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })}`
    };

    // Update star rating display
    newReview.star = Array(5).fill(<FaRegStar />).map((_, index) => {
      if (index < Math.floor(data.rating)) return <FaStar key={index} color="orange" size={20} />;
      if (index === Math.floor(data.rating) && data.rating % 1 !== 0) return <FaStarHalfAlt key={index} color="orange" size={20} />;
      return <FaRegStar key={index} color="orange" size={20} />;
    });

    setReviews([newReview, ...reviews]);
    reset();
    setShowForm(false);
  };

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <span key={index} className="cursor-pointer"
            onMouseEnter={() => setHoverRating(index + 1)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => setValue("rating", index + 1)}
          >
            {(hoverRating || rating) > index ? 
              (hoverRating > index ? <FaStar color="#ffd700" size={24} /> : 
                (Math.ceil(rating) > index ? <FaStar color="orange" size={24} /> : 
                  <FaRegStar color="orange" size={24} />)) : 
              <FaRegStar color="orange" size={24} />}
          </span>
        ))}
      </div>
    );
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <div className="flex flex-col gap-8 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900"
          >
            Customer Reviews
            <span className="block text-lg font-medium text-gray-500 mt-2">
              {reviews.length} Verified Reviews
            </span>
          </motion.h1>

          <div className="flex gap-4">
            <motion.button whileHover={{ scale: 1.05 }} className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <Image src="/image36.png" alt="Filter" width={24} height={24} />
            </motion.button>
            
            <motion.button whileHover={{ scale: 1.05 }} className="px-6 py-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              Sort: Latest
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              onClick={() => setShowForm(true)}
              className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              Write a Review
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
            >
              <h2 className="text-2xl font-bold mb-6">Share Your Experience</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    {...register("name", { required: true })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rating
                  </label>
                  <StarRating rating={rating} />
                  <input
                    type="hidden"
                    {...register("rating", { required: true, min: 1 })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Review
                  </label>
                  <textarea
                    {...register("comment", { required: true })}
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="flex gap-4 justify-end">
                  <motion.button
                    type="button"
                    onClick={() => setShowForm(false)}
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-full"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                  >
                    Submit Review
                  </motion.button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.section 
        layout
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence>
          {reviews.map((item, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="flex items-center gap-2 mb-4">
                {item.star}
              </div>
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-lg font-semibold">{item.heading}</h3>
                <FaCheckCircle className="text-green-500" />
              </div>
              <p className="text-gray-600 mb-4">{item.paragraph}</p>
              <p className="text-sm text-gray-500">{item.posted}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.section>

      <div className="flex justify-center mt-12">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          className="px-8 py-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
        >
          Load More Reviews
        </motion.button>
      </div>
    </main>
  );
};

// Dummy Data (same structure as before)

export default Review;