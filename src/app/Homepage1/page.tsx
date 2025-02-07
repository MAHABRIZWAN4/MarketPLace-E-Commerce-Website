import Image from "next/image";
import Link from "next/link";

import { useInView } from 'react-intersection-observer';
import ClientCountUp from "../component/ClientCountUp";


export default function Home() {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
      });

      const { ref: mobileRef, inView: mobileInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
        rootMargin: '-50px 0px'
      });

  return (
    <div className="bg-[#F2F0F1] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between py-12 md:py-24">
          {/* Text Content */}
          <div className="md:w-1/2 mb-12 md:mb-0 space-y-8 transform transition-all duration-500 hover:scale-105">
            <h1 className="font-extrabold text-4xl md:text-6xl leading-tight bg-gradient-to-r from-gray-700 to-gray-950 bg-clip-text text-transparent animate-slideInLeft">
              Find Clothes That Match Your Style
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed animate-fadeIn delay-100">
           <span className="inline"> Explore our curated collection of premium apparel crafted to celebrate your unique identity. Each piece combines innovative tailoring with sustainable, high-quality fabrics that adapt to modern lifestyles.</span>
            <span className=" hidden md:inline">From versatile everyday essentials to statement-making designs, discover silhouettes that flatter all body types with artisanal precision. </span> 
            </p>
            
            <Link href="/cart" className="inline-block animate-bounce">
              <button className="w-full md:w-auto px-12 py-4 bg-black hover:bg-gray-900 rounded-full text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Shop Now
              </button>
            </Link>

            {/* Mobile Stats */}
            {/* <div className="md:hidden grid grid-cols-2 gap-6 mt-12 animate-fadeInUp" ref={ref}>
  <div className="p-4 bg-white rounded-2xl shadow-md">
    <h3 className="text-2xl font-bold text-gray-800">
      {inView ? <CountUp start={0} end={200} duration={2} suffix="+" /> : '0+'}
    </h3>
    <p className="text-gray-600">International Brands</p>
  </div>
  <div className="p-4 bg-white rounded-2xl shadow-md">
    <h3 className="text-2xl font-bold text-gray-800">
      {inView ? <CountUp start={0} end={2000} duration={2} suffix="+" /> : '0+'}
    </h3>
    <p className="text-gray-600">Premium Products</p>
  </div>
  <div className="col-span-2 p-4 bg-white rounded-2xl shadow-md">
    <h3 className="text-2xl font-bold text-gray-800">
      {inView ? <CountUp start={0} end={3000} duration={2} suffix="+" /> : '0+'}
    </h3>
    <p className="text-gray-600">Happy Customers</p>
  </div>
</div> */}


<div ref={mobileRef} className="md:hidden grid grid-cols-2 gap-6 mt-12 animate-fadeInUp">
        <div className="p-4 bg-white rounded-2xl shadow-md">
          <h3 className="text-2xl font-bold text-gray-800">
            {mobileInView ? (
              <ClientCountUp start={0} end={200}  suffix="+" />
            ) : '0+'}
          </h3>
          <p className="text-gray-600">International Brands</p>
        </div>
        
        <div className="p-4 bg-white rounded-2xl shadow-md">
          <h3 className="text-2xl font-bold text-gray-800">
            {mobileInView ? (
              <ClientCountUp start={0} end={2000}  suffix="+" />
            ) : '0+'}
          </h3>
          <p className="text-gray-600">Premium Products</p>
        </div>
        
        <div className="col-span-2 p-4 bg-white rounded-2xl shadow-md">
          <h3 className="text-2xl font-bold text-gray-800">
            {mobileInView ? (
              <ClientCountUp start={0} end={3000}  suffix="+" />
            ) : '0+'}
          </h3>
          <p className="text-gray-600">Happy Customers</p>
        </div>
      </div>
          </div>

          {/* Image Container */}
          <div className="md:w-1/2 flex justify-end relative group animate-slideInRight">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-500 group-hover:scale-105">
              <Image 
                src="/home.png" 
                alt="Fashion showcase" 
                width={600}
                height={800}
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>

        {/* Desktop Stats */}
        <div className="hidden md:flex justify-center gap-12 mt-16 animate-fadeInUp delay-300" ref={ref}>
  <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
  <h3 className="text-2xl font-bold text-gray-800">
  {inView ? <ClientCountUp start={0} end={200} suffix="+" /> : '0+'}
</h3>
    <p className="text-gray-600 mt-2">International Brands</p>
  </div>
  <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-3xl font-bold text-gray-800">
    {inView ? <ClientCountUp start={0} end={2000} suffix="+" /> : '0+'}
    </h3>
    <p className="text-gray-600 mt-2">Premium Products</p>
  </div>
  <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-3xl font-bold text-gray-800">
      {inView ? <ClientCountUp start={0} end={3000} suffix="+" /> : '0+'}
    </h3>
    <p className="text-gray-600 mt-2">Happy Customers</p>
  </div>
</div>
      </div>
    </div>
  );
}