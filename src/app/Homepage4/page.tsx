
import { FaStarHalf } from "react-icons/fa";
import Image from 'next/image';


import { FaStar } from "react-icons/fa";
import Link from "next/link";



export default function Homepage4() {
  return (
    <main className='px-10 h-auto flex justify-center items-center'>
      <div className='h-auto w-full max-w-7xl   px-4 '>
        {/* Content div */}
        <div>
          {/* Heading */}
          <h1
            className={`flex justify-center text-[45px] font-bold sm:text-[55px] `}
          >
            TOP SELLING
          </h1>

          {/* Cards container */}
          <div className='w-full  mt-4 flex flex-col md:flex md:flex-row  gap-10 justify-center  '>
            {/* Card 1 */}
          
          
            <div className='flex flex-col gap-4 w-[295px]'>
              <div className='bg-gray-300 h-[300px] rounded-[20px] flex items-center justify-center'>
                <Image src="/image11.png" alt='Jeans' height={400} width={400} className="w-[300px] h-auto" />
              </div>
              <div>
                <h1 className='font-extrabold'>Vertical Stripped Shirt</h1>
                <div className="flex flex-row gap-2">
                  <div className="flex flex-row gap-1">
                    {[...Array(4)].map((_, i) => (
                      <FaStar key={i} color="orange" size={20} />
                    ))}
                    <FaStarHalf color="orange" size={20} />
                  </div>
                  <p className='text-sm' style={{ fontWeight: 400 }}>
                    5.0/<span className='text-gray-600'>5</span>
                  </p>
                </div>
                <div className='flex flex-row gap-4'>
                  <h1 className='text-2xl font-semibold'>$212</h1>
                </div>
              </div>
            </div>



            <div className='flex flex-col gap-4 w-[295px]'>
              <div className='bg-gray-300 h-[300px] rounded-[20px] flex items-center justify-center'>
                <Image src="/image12.png" alt='Jeans' height={400} width={400} className="w-[300px] h-auto" />
              </div>
              <div>
                <h1 className='font-extrabold'>Courage Graphic T-Shirt</h1>
                <div className="flex flex-row gap-2">
                  <div className="flex flex-row gap-1">
                    {[...Array(4)].map((_, i) => (
                      <FaStar key={i} color="orange" size={20} />
                    ))}
                    <FaStarHalf color="orange" size={20} />
                  </div>
                  <p className='text-sm' style={{ fontWeight: 400 }}>
                    4.0/<span className='text-gray-600'>5</span>
                  </p>
                </div>
                <div className='flex flex-row gap-4'>
                  <h1 className='text-2xl font-semibold'>$145</h1>
                </div>
              </div>
            </div>




            <div className='flex flex-col gap-4 w-[295px]'>
              <div className='bg-gray-300 h-[300px] rounded-[20px] flex items-center justify-center'>
                <Image src="/image13.png" alt='Jeans' height={400} width={400} className="w-[300px] h-auto" />
              </div>
              <div>
                <h1 className='font-extrabold'>Loose Fit  Bermuda Shorts </h1>
                <div className="flex flex-row gap-2">
                  <div className="flex flex-row gap-1">
                    {[...Array(4)].map((_, i) => (
                      <FaStar key={i} color="orange" size={20} />
                    ))}
                    <FaStarHalf color="orange" size={20} />
                  </div>
                  <p className='text-sm' style={{ fontWeight: 400 }}>
                    3.0/<span className='text-gray-600'>5</span>
                  </p>
                </div>
                <div className='flex flex-row gap-4'>
                  <h1 className='text-2xl font-semibold'>$80</h1>
                </div>
              </div>
            </div>




            <div className='flex flex-col gap-4 w-[295px]'>
              <div className='bg-gray-300 h-[300px] rounded-[20px] flex items-center justify-center'>
                <Image src="/image14.png" alt='Jeans' height={400} width={400} className="w-[300px] h-auto" />
              </div>
              <div>
                <h1 className='font-extrabold'>Faded Skinny Jeans</h1>
                <div className="flex flex-row gap-2">
                  <div className="flex flex-row gap-1">
                    {[...Array(4)].map((_, i) => (
                      <FaStar key={i} color="orange" size={20} />
                    ))}
                    <FaStarHalf color="orange" size={20} />
                  </div>
                  <p className='text-sm' style={{ fontWeight: 400 }}>
                    4.5/<span className='text-gray-600'>5</span>
                  </p>
                </div>
                <div className='flex flex-row gap-4'>
                  <h1 className='text-2xl font-semibold'>$212</h1>
                </div>
              </div>
            </div>




            </div>

     

            {/* Card 4 */}
       

          {/* Button */}
          <div className='flex justify-center items-center  mt-12'>
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
