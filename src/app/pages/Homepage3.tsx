import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa"
import { FaStarHalf } from "react-icons/fa";
import { Anton } from 'next/font/google';
import Image from 'next/image';
const anton = Anton({ subsets: ['latin'], weight: ["400","400"] });


import { FaStar } from "react-icons/fa";
export default function Homepage3() {
  return (
   <main className='h-[650px] flex justify-center  items-center'>
    <div className=' h-[550px] w-[1100px]  '>
{/* content div */}
<div>
{/* for heading */}
<h1 className={`flex justify-center text-[48px] font-bold ${anton.className}`} >NEW ARRIVALS</h1>

{/* for Card */}
{/* main card div */}
 <div className='w-[1100px] h-[370px]  mt-4 flex flex-row gap-6'>


{/* card 1*/}
<div className=' h-[390px] w-[255px] flex flex-col gap-4'>

{/* card div */}
<div className='flex flex-col gap-2'>


<div className='w-[255px] bg-gray-300 h-[300px] rounded-[20px]'>
  <Image src="/image7.png" alt='Shirt' height={400} width={400} ></Image>
  </div>


{/* card content */}
<div>
<h1 className='font-extrabold'>T-shirt With Tape Detail</h1>
{/* star div */}

<div className="flex flex-row gap-4">
     
     <div className="flex flex-row gap-1">
       <div className="flex flex-row gap-1">
          <FaStar color="orange" size={20} />
         <FaStar color="orange" size={20} />
         <FaStar color="orange" size={20} />
         <FaStar color="orange" size={20} />
         <FaStarHalf  size={20} color='orange' />
         </div>
   
         <p className='text-sm' style={{ fontWeight: 400 }}>4.5/<span className='text-gray-600'>35</span></p>
   </div>
   {/* end of star div */}
         </div>

         
{/* Number */}
<div><h1 className='text-2xl font-semibold'>$120</h1></div>


    {/* end of card content */}
</div>


    {/* end of card div */}
</div>
    {/* end of card 1 */}
</div>















{/* card 2*/}
<div className=' h-[390px] w-[255px] flex flex-col gap-3'>

{/* card div */}
<div className='flex flex-col gap-2'>


<div className='w-[255px] bg-gray-300 h-[300px] rounded-[20px]'>
  <Image src="/image8.png" alt='Shirt' height={400} width={400} ></Image>
  </div>


{/* card content */}
<div>
<h1 className='font-extrabold'>Skinny Fit Jeans</h1>
{/* star div */}

<div className="flex flex-row gap-4">
     
     <div className="flex flex-row gap-1">
       <div className="flex flex-row gap-1">
          <FaStar color="orange" size={20} />
         <FaStar color="orange" size={20} />
         <FaStar color="orange" size={20} />
        
         <FaStarHalf  size={20} color='orange' />
         </div>
   
         <p className='text-sm' style={{ fontWeight: 400 }}>3.5/<span className='text-gray-600'>5</span></p>
   </div>
   {/* end of star div */}
         </div>

         
{/* Number */}
<div className=' flex flex-row gap-4'>
    <h1 className='text-2xl font-semibold'>$220</h1>
    <h1 className='text-2xl text-gray-500 font-semibold line-through'>$260</h1>
    <button className='w-[58px] h-[28px] bg-[#FF33331A] rounded-2xl'>-20%</button>
</div>


    {/* end of card content */}
</div>


    {/* end of card div */}
</div>
    {/* end of card 1 */}
</div>


















{/* card 3*/}
<div className=' h-[390px] w-[255px] flex flex-col gap-3'>

{/* card div */}
<div className='flex flex-col gap-2'>


<div className='w-[255px] bg-gray-300 h-[300px] rounded-[20px]'>
  <Image src="/image9.png" alt='Shirt' height={800} width={900} ></Image>
  </div>


{/* card content */}
<div>
<h1 className='font-extrabold'>Checkered Shirt</h1>
{/* star div */}

<div className="flex flex-row gap-4">
     
     <div className="flex flex-row gap-1">
       <div className="flex flex-row gap-1">
          <FaStar color="orange" size={20} />
         <FaStar color="orange" size={20} />
         <FaStar color="orange" size={20} />
         <FaStar color="orange" size={20} />
         <FaStarHalf  size={20} color='orange' />
         </div>
   
         <p className='text-sm' style={{ fontWeight: 400 }}>4.5/<span className='text-gray-600'>5</span></p>
   </div>
   {/* end of star div */}
         </div>

         
{/* Number */}
<div><h1 className='text-2xl font-semibold'>$180</h1></div>


    {/* end of card content */}
</div>


    {/* end of card div */}
</div>
    {/* end of card 1 */}
</div>

















{/* card 4*/}
<div className=' h-[390px] w-[255px] flex flex-col gap-3'>

{/* card div */}
<div className='flex flex-col gap-2'>


<div className='w-[255px] bg-gray-300 h-[300px] rounded-[20px]'>
  <Image src="/image10.png" alt='Shirt' height={400} width={400} ></Image>
  </div>


{/* card content */}
<div>
<h1 className='font-extrabold'>Sleeve Striped T-Shirt</h1>
{/* star div */}

<div className="flex flex-row gap-4">
     
     <div className="flex flex-row gap-1">
       <div className="flex flex-row gap-1">
          <FaStar color="orange" size={20} />
         <FaStar color="orange" size={20} />
         <FaStar color="orange" size={20} />
         <FaStar color="orange" size={20} />
         <FaStarHalf  size={20} color='orange' />
         </div>
   
         <p className='text-sm' style={{ fontWeight: 400 }}>4.5/<span className='text-gray-600'>5</span></p>
   </div>
   {/* end of star div */}
         </div>

         
{/* Number */}
<div className=' flex flex-row gap-4'>
    <h1 className='text-2xl font-semibold'>$130</h1>
    <h1 className='text-2xl text-gray-500 font-semibold line-through'>$160</h1>
    <button className='w-[58px] h-[28px] bg-[#FF33331A] rounded-2xl'>-30%</button>
</div>
    {/* end of card content */}
</div>


    {/* end of card div */}
</div>
    {/* end of card 1 */}
</div>

  {/* End of main card div */}  
 </div>


   {/* End of content div */}



</div>

<div className='flex justify-center'>
<button className='w-[218px] h-[52px] border border-1px border-gray-600 mt-12 rounded-[62px] py-[16px] px-[54px]'>View All</button>
</div>
{/* end of main div */}
</div>


   </main>
  )
}
