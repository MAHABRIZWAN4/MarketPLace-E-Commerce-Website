"use client";
import React, { useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Menu as LucideMenu } from "lucide-react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/fetch";
import { allproducts } from "@/sanity/lib/queries";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { CgProfile } from "react-icons/cg";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  tags: string[];
}

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
    value ? setSearchResults(products.filter(product => product.name.toLowerCase().includes(value))) : setSearchResults([]);
    setShowSearchResults(!!value);
  };

  const closeSearchResults = () => {
    setShowSearchResults(false);
    setSearchQuery("");
  };

  return (
    <div className="bg-white shadow-sm">
      <header className="max-w-7xl mx-auto relative z-20">
        <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <LucideMenu className="w-6 h-6 text-gray-700" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                <SheetHeader>
                  <SheetTitle className="text-xl font-semibold text-gray-900">Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-8 space-y-4">
                  <Link href="/" className="block text-gray-700 hover:text-blue-600 transition-colors">
                    Shop
                  </Link>
                  <Link href="/Homepage4" className="block text-gray-700 hover:text-blue-600 transition-colors">
                    On Sale
                  </Link>
                  <Link href="/Homepage3" className="block text-gray-700 hover:text-blue-600 transition-colors">
                    New Arrivals
                  </Link>
                  <Link href="/category" className="block text-gray-700 hover:text-blue-600 transition-colors">
                    Brands
                  </Link>
                  <SignedOut>
                    <li className="list-none">
                      <SignInButton>
                        <button className="w-full text-left px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                          Sign In
                        </button>
                      </SignInButton>
                    </li>
                  </SignedOut>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
            Shop.Co
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Shop
            </Link>
            <Link href="/Homepage4" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              On Sale
            </Link>
            <Link href="/Homepage3" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              New Arrivals
            </Link>
            <Link href="/category" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Brands
            </Link>
            <SignedOut>
              <SignInButton>
                <button className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            {/* Search Bar */}
            <div className="relative hidden md:block">
              <IoSearchOutline className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search products..."
                className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Cart & Profile */}
            <div className="flex items-center gap-4">
              <Link href="/cart" className="relative p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <MdOutlineShoppingCart className="w-6 h-6 text-gray-700" />
                {totalQuantity > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs min-w-[20px] h-5 flex items-center justify-center rounded-full">
                    {totalQuantity}
                  </span>
                )}
              </Link>

              <div className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <SignedIn>
                  <UserButton appearance={{
                    elements: {
                      userButtonAvatarBox: "w-8 h-8",
                    }
                  }} />
                </SignedIn>
                <SignedOut>
                  <CgProfile className="w-6 h-6 text-gray-700" />
                </SignedOut>
              </div>
            </div>
          </div>
        </div>

        {/* Search Results */}
        {showSearchResults && (
          <div className="fixed inset-0 bg-black/30 z-50 flex justify-center items-start pt-20">
            <div className="bg-white w-full max-w-2xl max-h-[60vh] rounded-xl shadow-xl overflow-hidden">
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="font-semibold text-gray-900">Search Results</h3>
                <button
                  onClick={closeSearchResults}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="overflow-y-auto">
                {searchResults.length > 0 ? (
                  searchResults.map((product) => (
                    <Link
                      key={product._id}
                      href={`/product/${product._id}`}
                      className="flex items-center p-4 hover:bg-gray-50 transition-colors border-b"
                    >
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={64}
                        height={64}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="ml-4">
                        <h4 className="font-medium text-gray-900">{product.name}</h4>
                        <p className="text-gray-600">${product.price.toFixed(2)}</p>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="p-4 text-gray-500">No products found</p>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Navbar;