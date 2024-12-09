
import React from 'react';

import { FaStarHalf } from "react-icons/fa";
import Image from 'next/image';


import { FaStar } from "react-icons/fa";
import Link from 'next/link';
export default function Homepage3() {
  return (
    <main className="h-auto flex justify-center items-center py-8 px-4">
      <div className="w-full max-w-[1200px]">
        {/* content div */}
        <div className=" px-4 py-6">
          {/* for heading */}
          <h1 className={`flex justify-center text-[35px] sm:text-[40px] lg:text-[48px] font-extrabold`}>
            NEW ARRIVALS
          </h1>

          {/* Main card div */}
          <div className="w-full mt-6 flex flex-col md:flex md:flex-row gap-4  justify-center ">
            {/* Card 1 */}

            <div className="h-auto w-full sm:w-[48%] lg:w-[24%] flex flex-col gap-2">
              <div className="bg-gray-300 flex items-center justify-center rounded-[20px] h-[300px] w-full">
                <Image
                  src="/image7.png"
                  alt="Shirt"
                  height={400}
                  width={400}
                  className="rounded-[20px] w-[300px] h-auto"
                />
              </div>
              <h1 className="font-extrabold">T-shirt With Tape Detail</h1>
              <div className="flex justify-between items-center">
                <div className="flex gap-1">
                  <FaStar color="orange" size={20} />
                  <FaStar color="orange" size={20} />
                  <FaStar color="orange" size={20} />
                  <FaStar color="orange" size={20} />
                  <FaStarHalf size={20} color="orange" />
                </div>
                <p className="text-sm mr-32 font-medium">4.5/<span className="text-gray-600">35</span></p>
              </div>
              <h1 className="text-2xl font-semibold">$120</h1>
            </div>

            {/* Card 2 */}
            <div className="h-auto w-full sm:w-[48%] lg:w-[24%] flex flex-col gap-2">
              <div className="bg-gray-300 flex items-center justify-center rounded-[20px] h-[300px] w-full">
                <Image
                  src="/image8.png"
                  alt="Shirt"
                  height={400}
                  width={400}
                  className="rounded-[20px]  w-[250px] h-auto "
                />
              </div>
              <h1 className="font-extrabold">Skinny Fit Jeans</h1>
              <div className="flex justify-between items-center">
                <div className="flex gap-1">
                  <FaStar color="orange" size={20} />
                  <FaStar color="orange" size={20} />
                  <FaStar color="orange" size={20} />
                  <FaStarHalf size={20} color="orange" />
                </div>
                <p className="text-sm mr-44 font-medium ">3.5/<span className="text-gray-600">5</span></p>
              </div>
              <div className="flex flex-row justify-between items-center">
                <h1 className="text-2xl font-semibold">$220</h1>
                <h1 className="text-2xl text-gray-500 mr-9 font-semibold line-through">$260</h1>
                <button className="w-[58px] h-[28px] mr-24 ml-[-30px] bg-[#FF33331A] rounded-2xl ">-20%</button>
              </div>
            </div>


           













            {/* Card 3 */}

          

            <div className="h-auto w-full sm:w-[48%] lg:w-[24%] flex flex-col gap-2">
              <div className="bg-gray-300 flex items-center justify-center rounded-[20px] h-[300px] w-full">
                <Image
                  src="/image9.png"
                  alt="Shirt"
                  height={400}
                  width={400}
                  className="rounded-[20px] w-[300px] h-auto"
                />
              </div>
              <h1 className="font-extrabold">Checkered Shirt</h1>
              <div className="flex justify-between items-center">
                <div className="flex gap-1">
                  <FaStar color="orange" size={20} />
                  <FaStar color="orange" size={20} />
                  <FaStar color="orange" size={20} />
                  <FaStar color="orange" size={20} />
                  <FaStarHalf size={20} color="orange" />
                </div>
                <p className="text-sm mr-32 font-medium">4.5/<span className="text-gray-600">5</span></p>
              </div>
              <h1 className="text-2xl font-semibold">$180</h1>
            </div>









{/* Card 4 */}
<div className="h-auto w-full sm:w-[48%] lg:w-[24%] sm:flex sm:flex-col sm:gap-2   hidden">
              <div className="bg-gray-300 flex items-center justify-center rounded-[20px] h-[300px] w-full">
                <Image
                  src="/image10.png"
                  alt="Shirt"
                  height={400}
                  width={400}
                  className="rounded-[20px] w-[300px] h-auto"
                />
              </div>
              <h1 className="font-extrabold">Sleeve Stripped T-Shirt</h1>
              <div className="flex justify-between items-center">
                <div className="flex gap-1">
                  <FaStar color="orange" size={20} />
                  <FaStar color="orange" size={20} />
                  <FaStar color="orange" size={20} />
                  <FaStar color="orange" size={20} />
                  <FaStarHalf size={20} color="orange" />
                </div>
                <p className="text-sm mr-32 font-medium">4.5/<span className="text-gray-600">5</span></p>
              </div>
              <div className='sm:flex sm:flex-row sm:gap-4'>
              <h1 className="text-2xl font-semibold">$130</h1>
              <h1 className="text-2xl text-gray-500 mr-9 font-semibold line-through">$160</h1>
              <button className="w-[58px] h-[28px] mr-24 ml-[-30px] bg-[#FF33331A] rounded-2xl ">-30%</button>
              </div>
            </div>
</div>
          








          

          {/* View All Button */}
          <div className="flex justify-center mt-12">
          <Link href="/category">
            <button className='w-[218px] h-[52px] border border-gray-600 rounded-[62px] flex items-center justify-center text-[15px] font-bold hover:bg-black hover:text-white mb-12'>
              View All
            </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
