"use client";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Menu } from "lucide-react";
import { MdKeyboardArrowDown } from "react-icons/md";

import { useSelector } from "react-redux";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";

// Define the type of the Redux state (adjust as per your state structure)
interface RootState {
  cart: { length: number }[];
}

function Navbar() {
  // Use `const` for cartItems and specify its type
  const cartItems = useSelector((state: RootState) => state.cart);

  return (
    <div>
      <header className="max-w-7xl mx-auto body-font">
        <div className="flex items-center justify-between h-20 mx-5 lg:mx-8">
          {/* Move SheetTrigger (Menu Bar) here */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu className="mt-2" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>MENU</SheetTitle>
                  <SheetDescription>Click outside to close</SheetDescription>
                </SheetHeader>
                <ul className="flex flex-col gap-10 mt-14">
                  <li>
                    <Link
                      href="/"
                      className="gap-1 hover:text-gray-900 hover:cursor-pointer hover:underline"
                    >
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="hover:text-gray-900 hover:cursor-pointer hover:underline"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Homepage3"
                      className="mr-5 hover:text-gray-900 hover:cursor-pointer hover:underline"
                    >
                      New Arrival
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/category"
                      className="mr-5 hover:text-gray-900 hover:cursor-pointer hover:underline"
                    >
                      Brands
                    </Link>
                  </li>
                </ul>
              </SheetContent>
            </Sheet>
          </div>
          <h1 className="text-[28px] lg:text-[35px] sm:text-[35px] ml-6 sm:text-center font-extrabold">
            Shop.Co
          </h1>
          {/* Navigation for Larger Screens */}
          <nav className="hidden lg:flex gap-[20px] ml-6 lg:text-lg">
            <Link
              href="/"
              className="mr-5 flex items-center justify-center gap-1 hover:text-gray-900 hover:cursor-pointer hover:underline"
            >
              Shop
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <MdKeyboardArrowDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/category">Category</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Link>
            <Link
              href="/Homepage4"
              className="mr-5 hover:text-gray-900 hover:cursor-pointer hover:underline"
            >
              On Sale
            </Link>
            <Link
              href="/Homepage3"
              className="mr-5 hover:text-gray-900 hover:cursor-pointer hover:underline"
            >
              New Arrival
            </Link>
            <Link
              href="/category"
              className="mr-5 hover:text-gray-900 hover:cursor-pointer hover:underline"
            >
              Brands
            </Link>
          </nav>

          <div className="flex items-center">
            <IoSearchOutline className="w-[22.13px] h-[20.25px] relative left-3 md:left-8" />
            <input
              type="text"
              placeholder="Search for products..."
              className="hidden md:block md:w-[300px] w-[500] lg:w-[300px] h-[38px] rounded-[50px] bg-[#F5F5F5] placeholder:pl-11"
            />
            <div className="flex gap-1 ml-4">
              <Link href="/cart">
                <button className="relative text-[25px]">
                  <MdOutlineShoppingCart />
                  {cartItems.length > 0 && (
                    <span className="absolute text-[12px] top-0 right-[-5px] bg-red-500 w-[18px] h-[15px] rounded-3xl text-center text-white font-bold">
                      {cartItems.length}
                    </span>
                  )}
                </button>
              </Link>

              <CiHeart className="w-[22.13px] h-[20.25px]" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
