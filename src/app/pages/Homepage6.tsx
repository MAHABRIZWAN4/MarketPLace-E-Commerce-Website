import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { FaStarHalfAlt } from "react-icons/fa"
import { FaStarHalf } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

import { Anton } from 'next/font/google';
import { Check, CheckCircle } from 'lucide-react';

const anton = Anton({ subsets: ['latin'], weight: ["400","400"] });

export default function Homepage6() {
  return (
    <main  className='  h-[480px] flex justify-center items-center '>
    <div className='w-[1100px] mb-12 h-[300px] flex flex-col gap-7'>


{/* heading div */}
<div className='flex justify-between   h-[58px]  '>
    <h1 className="text-[48px] font-extrabold ">OUR HAPPY CUSTOMERS</h1>
<div className='font-bold flex  flex-row gap-4 mt-6'>
    <div><GoArrowLeft className='h-[24px] text-2xl ' /></div>
    <div><GoArrowRight className='h-[24px] text-2xl '/></div>
</div>
</div>



{/* div for boxes  */}
<div className='flex flex-row gap-8 '>


<div className='w-[400px]  h-[260px] py-[28px] px-[32px] border-[1px] border-gray-700 rounded-[20px] flex flex-col gap-2'>
    <div className='flex flex-row gap-1 '>   <FaStar color="orange" size={20} />
         <FaStar color="orange" size={20} />
         <FaStar color="orange" size={20} />
         <FaStar color="orange" size={20} />
         <FaStar size={20} color='orange' /></div>
    <div className='flex flex-row gap-2 '>
        <h1 className='font-bold'>Sarah M.</h1>
        <FaCheckCircle color="#01AB31" size={20}  className='mt-[2px]'/>
    </div>
    <div><p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p></div>
</div>





<div className='w-[400px]  h-[260px] py-[28px] px-[32px] border-[1px] border-gray-700 rounded-[20px] flex flex-col gap-2'>
    <div className='flex flex-row gap-1 '>   <FaStar color="orange" size={20} />
         <FaStar color="orange" size={20} />
         <FaStar color="orange" size={20} />
         <FaStar color="orange" size={20} />
         <FaStar size={20} color='orange' /></div>
    <div className='flex flex-row gap-2 '>
        <h1 className='font-bold'>Alex K.</h1>
        <FaCheckCircle color="#01AB31" size={20}  className='mt-[2px]'/>
    </div>
    <div><p>"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p></div>
</div>






<div className='w-[400px]  h-[260px] py-[28px] px-[32px] border-[1px] border-gray-700 rounded-[20px] flex flex-col gap-2'>
    <div className='flex flex-row gap-1 '>   <FaStar color="orange" size={20} />
         <FaStar color="orange" size={20} />
         <FaStar color="orange" size={20} />
         <FaStar color="orange" size={20} />
         <FaStar size={20} color='orange' /></div>
    <div className='flex flex-row gap-2 '>
        <h1 className='font-bold'>James L.</h1>
        <FaCheckCircle color="#01AB31" size={20}  className='mt-[2px]'/>
    </div>
    <div><p>"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p></div>
</div>

{/*  End Of div for boxes  */}

</div>
    </div>
    </main>
  )
}
