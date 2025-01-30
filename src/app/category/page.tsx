"use client";
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/fetch";
import { allproducts } from "@/sanity/lib/queries";

type Product = {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  color: string;
  size: string;
  style: string;
};

export default function Home() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const productsPerPage = 9;

  // Filters
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<number>(500); // Default max price
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<string[]>([]);
  const [selectedStyle, setSelectedStyle] = useState<string[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products: Product[] = await sanityFetch({ query: allproducts });
        setAllProducts(products);
        setFilteredProducts(products); // Initialize with all products
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToDisplay = filteredProducts.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const handleApplyFilter = () => {
    const filtered = allProducts.filter((product) => {
      const matchesCategory =
        selectedCategory.length === 0 || selectedCategory.includes(product.category);
      const matchesPrice = product.price <= selectedPrice;
      const matchesColor = selectedColors.length === 0 || selectedColors.includes(product.color);
      const matchesSize = selectedSize.length === 0 || selectedSize.includes(product.size);
      const matchesStyle = selectedStyle.length === 0 || selectedStyle.includes(product.style);

      return matchesCategory && matchesPrice && matchesColor && matchesSize && matchesStyle;
    });

    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page
  };

  const handleCheckboxChange = (value: string, setState: React.Dispatch<React.SetStateAction<string[]>>) => {
    setState((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row bg-red-60 px-4 md:px-14">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 p-4 border-r bg-gray-100 mb-6 md:mb-0">
        <h2 className="text-lg font-bold mb-4">Filters</h2>

        {/* Category Filter */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Category</h3>
          <ul className="space-y-2">
            {["T-Shirts", "Shorts", "Jeans", "Hoodies"].map((category) => (
              <li key={category}>
                <input
                  type="checkbox"
                  id={category.toLowerCase()}
                  className="mr-2"
                  onChange={() => handleCheckboxChange(category, setSelectedCategory)}
                />
                <label htmlFor={category.toLowerCase()}>{category}</label>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Filter */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Price</h3>
          <div className="flex items-center space-x-2">
            <span>$50</span>
            <input
              type="range"
              min="50"
              max="500"
              className="w-full"
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(Number(e.target.value))}
            />
            <span>${selectedPrice}</span>
          </div>
        </div>

        {/* Colors Filter */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Colors</h3>
          <div className="flex flex-wrap gap-2">
            {["green", "blue", "pink", "red", "purple", "white", "black"].map((color) => (
              <div
                key={color}
                className={`w-6 h-6 rounded-full cursor-pointer ${
                  selectedColors.includes(color) ? "ring-2 ring-black" : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => handleCheckboxChange(color, setSelectedColors)}
              ></div>
            ))}
          </div>
        </div>

        {/* Size Filter */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Size</h3>
          <div className="flex flex-wrap gap-3">
            {["Small", "Medium", "Large", "X-Large", "3XL Large", "4XL Large"].map((size) => (
              <button
                key={size}
                onClick={() => handleCheckboxChange(size, setSelectedSize)}
                className={`px-4 py-2 border rounded-md transition-all duration-300 ${
                  selectedSize.includes(size) ? "bg-black text-white" : "hover:bg-black hover:text-white"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Dress Style Filter */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Dress Style</h3>
          <ul className="space-y-2">
            {["Casual", "Formal", "Party", "Gym"].map((style) => (
              <li key={style}>
                <input
                  type="checkbox"
                  id={style.toLowerCase()}
                  className="mr-2"
                  onChange={() => handleCheckboxChange(style, setSelectedStyle)}
                />
                <label htmlFor={style.toLowerCase()}>{style}</label>
              </li>
            ))}
          </ul>
        </div>

        {/* Apply Filter Button */}
        <button
          className="mt-4 bg-black text-white px-4 py-2 rounded"
          onClick={handleApplyFilter}
        >
          Apply Filter
        </button>
      </aside>

      {/* Product Grid */}
      <main className="w-full md:w-3/4 p-4">
        <h1 className="text-[32px] font-bold mb-4">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {productsToDisplay.map((item) => (
            <div key={item._id} className="border p-4 rounded">
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={200}
                height={200}
                className="h-[298px] w-full rounded-[20px] bg-[#F0EEED] object-cover mb-4"
              />
              <h3 className="font-bold mt-2">{item.name}</h3>
              <div className="flex items-center">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              </div>
              <p className="text-[24px] font-bold">${item.price}</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 space-x-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index + 1)}
              className={`px-4 py-2 border rounded ${
                currentPage === index + 1 ? "bg-black text-white" : "bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}