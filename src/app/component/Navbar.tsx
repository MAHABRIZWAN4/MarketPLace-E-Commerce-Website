"use client";
import React, { useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { Menu as LucideMenu } from "lucide-react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/fetch";
import { allproducts } from "@/sanity/lib/queries";

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
  cart: { quantity: number }[];
}

function Navbar() {
  const cartItems = useSelector((state: RootState) => state.cart);
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
          <h1 className="text-[28px] lg:text-[35px] font-extrabold">Shop.Co</h1>
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
