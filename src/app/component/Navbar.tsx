"use client";
import React, { useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardArrowDown, MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { Menu as LucideMenu } from "lucide-react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/fetch";
import { allproducts } from "@/sanity/lib/queries";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

// Define Product type
interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string; // Add your image property here
  tags: string[];
}

// Redux state type
interface RootState {
  cart: { items: { quantity: number }[] };
}

function Navbar() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts: Product[] = await sanityFetch({ query: allproducts });
      setProducts(fetchedProducts);
    };
    fetchProducts();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchQuery(value);

    if (value) {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(value)
      );
      setSearchResults(filteredProducts);
      setShowSearchResults(true);
    } else {
      setShowSearchResults(false);
    }
  };

  const closeSearchResults = () => {
    setShowSearchResults(false);
    setSearchQuery("");
  };

  return (
    <div>
      <header className="max-w-7xl mx-auto body-font relative z-20">
        <div className="flex items-center justify-between h-20 mx-5 lg:mx-8">
          {/* Move SheetTrigger (Menu Bar) here */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger>
                <LucideMenu className="mt-2" />
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
          
            <SignedOut>
            <SignInButton />
          </SignedOut>
            
          </nav>

          <div className="flex items-center relative">
            <IoSearchOutline className="w-6 h-6 text-gray-600 absolute left-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for products..."
              className="hidden md:block md:w-[300px] lg:w-[400px] h-[40px] rounded-full pl-10 pr-4 bg-gray-100 border border-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
            />
            <div className="flex items-center gap-4 ml-4">
            <Link href="/cart" className="relative">
  <MdOutlineShoppingCart className="w-8 h-10" />
  {totalQuantity > 0 && (
    <span
      className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full flex items-center justify-center"
      style={{
        width: totalQuantity > 99 ? '1.2rem' : '1rem',
        height: totalQuantity > 99 ? '1.2rem' : '1rem',
        fontSize: totalQuantity > 99 ? '0.75rem' : '0.5rem',
      }}
    >
      {totalQuantity}
    </span>
  )}
</Link>

              <CiHeart className="w-6 h-6" />
              <SignedIn>
            <UserButton />
          </SignedIn>
            </div>
          </div>
        </div>

      </header>

      {/* Overlay Search Results */}
      {showSearchResults && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-30 flex items-start justify-center mt-8 ">
          <div className="bg-white w-[90%] md:w-[70%] lg:w-[50%] max-h-[70%] mt-20 rounded-lg shadow-lg overflow-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-bold">Search Results</h2>
              <button
                onClick={closeSearchResults}
                className="text-gray-500 hover:text-gray-700"
              >
                Close
              </button>
            </div>
            <ul className="p-4">
              {searchResults.length > 0 ? (
                searchResults.map((product) => (
                  <li key={product._id} className="flex items-center gap-4 py-2 border-b">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <Link
                        href={`/product/${product._id}`}
                        className="text-blue-500 hover:underline font-medium"
                      >
                        {product.name}
                      </Link>
                      <p className="text-gray-600">${product.price}</p>
                    </div>
                  </li>
                ))
              ) : (
                <p className="text-gray-500 text-center">No results found.</p>
              )}
            </ul>
          </div>
        </div>
      )}

    </div>
   
  );
}

export default Navbar;