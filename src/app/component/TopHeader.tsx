import Link from 'next/link';
import React, { useState } from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { RiCloseLargeFill } from "react-icons/ri";

function TopHeader() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null; // Agar hidden hai to kuch return mat karo

  return (
    <div className='bg-black h-[58px] p-0 m-0 overflow-x-hidden'>
      <div className="max-w-7xl mx-auto h-[48px] text-white bg-black flex items-center justify-between px-4 relative">
        {/* Centered Text with ShopNow */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-sm md:text-base">
          <p className="text-[12px] sm:block md:text-[15px]  sm:tex-[12] truncate">
            SignIn and get 20% off to your first order. 
            <span className='text-[14px] sm:text-[18px]' onClick={() => setIsVisible(false)}>  
              <SignedOut>
                <SignInButton />
              </SignedOut>
            </span>
          </p>
          <Link href="/" className=" hidden sm:hidden font-bold underline">ShopNow</Link>
        </div>

        {/* Right Section */}
        <div className="ml-auto hidden md:block items-center text-sm md:text-base">
          <h1 className="flex items-center gap-2">
            <RiCloseLargeFill className='md:mr-10 cursor-pointer' onClick={() => setIsVisible(false)} />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
