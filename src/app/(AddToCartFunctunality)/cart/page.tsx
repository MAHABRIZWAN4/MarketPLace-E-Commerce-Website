// "use client";

// import { FilePen, Minus, Plus } from "lucide-react";
// import Image, { StaticImageData } from "next/image";
// import React from "react";
// import { AiFillDelete } from "react-icons/ai";
// import { FiArrowRight, FiPenTool } from "react-icons/fi";
// import { useDispatch, useSelector } from "react-redux";
// import { addition, delItem, subtraction } from "../redux/features/cartSlice";

// export type Cart = {
//   id: number;
//   title: string;
//   src: string[] | StaticImageData | string;
//   slug: string;
//   price: number;
//   size: string[];
//   color: string[];
//   qty: number;
//   discount?: number;
//   uuid: string | number | undefined;
// };

// function Cart() {
//   const cartItems: Cart[] = useSelector((state: any) => state.cart);
//   const dispatch = useDispatch();

//   return (
//     <main className="mx-5 md:mx-10 lg:mx-20">
//       <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center md:text-left">
//         YOUR CART
//       </h1>

//       <section className="flex flex-col lg:flex-row gap-6 mt-6">
//         {/* Left Side: Cart Items */}
//         <div className="w-full lg:w-2/3 rounded-2xl border p-4">
//           {cartItems.length ? (
//             cartItems.map((items: any, i: number) => (
//               <div
//                 key={i}
//                 className="flex flex-col sm:flex-row items-center border-t gap-4 mb-6 pt-4"
//               >
//                 <Image
//                   src={items.imageUrl}
//                   alt={items.title}
//                   width={100}
//                   height={100}
//                   className="bg-gray-100 h-24 w-24 rounded-lg object-cover"
//                 />

//                 <div className="flex flex-col sm:w-2/3">
//                   <p className="text-lg font-bold">{items.name}</p>
//                   <p className="text-sm text-gray-600">Size: {items.size}</p>
//                   <p className="text-sm text-gray-600">Color: {items.color}</p>
//                   <p className="text-xl font-bold mt-2">${items.price}</p>
//                 </div>

//                 <div className="flex flex-row sm:flex-col items-center gap-4">
//                   <button
//                     className="text-red-500 text-xl"
//                     onClick={() => dispatch(delItem(items.uuid))}
//                   >
//                     <AiFillDelete />
//                   </button>

//                   <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
//                     <button onClick={() => dispatch(subtraction(items.uuid))}>
//                       <Minus />
//                     </button>
//                     <span>{items.qty}</span>
//                     <button onClick={() => dispatch(addition(items.uuid))}>
//                       <Plus />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-600">Your cart is empty.</p>
//           )}
//         </div>

//         {/* Right Side: Order Summary */}
//         <div className="w-full lg:w-1/3 bg-white rounded-2xl border p-6">
//           <h2 className="text-xl font-bold mb-4">Order Summary</h2>
//           <div className="space-y-3">
//             <p className="flex justify-between text-gray-600">
//               Subtotal
//               <span className="text-black font-bold">
//                 ${cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)}
//               </span>
//             </p>
//             <p className="flex justify-between text-gray-600">
//               Discount
//               <span className="text-red-500 font-bold">
//                 -${cartItems.reduce((acc, item) => acc + (item.discount ? (item.price * item.qty * item.discount) / 100 : 0), 0)}
//               </span>
//             </p>
//             <p className="flex justify-between text-gray-600">
//               Delivery Fee <span className="font-bold">$15</span>
//             </p>
//             <p className="flex justify-between border-t pt-2 text-lg font-medium">
//               Total
//               <span>
//                 ${(
//                   cartItems.reduce(
//                     (acc, item) => acc + item.price * item.qty - (item.discount ? (item.price * item.qty * item.discount) / 100 : 0),
//                     15
//                   )
//                 ).toFixed(2)}
//               </span>
//             </p>
//           </div>

//           <div className="flex flex-col sm:flex-row gap-2 mt-4">
//             <button className="flex-1 py-3 px-4 bg-gray-100 rounded-full flex items-center justify-center gap-2">
//               <FiPenTool /> Add promo code
//             </button>
//             <button className="py-3 px-6 bg-black text-white rounded-full">Apply</button>
//           </div>

//           <button className="w-full mt-6 py-4 bg-black text-white rounded-full flex justify-center items-center gap-2">
//             Go to Checkout <FiArrowRight />
//           </button>
//         </div>
//       </section>
//     </main>
//   );
// }

// export default Cart;





"use client";
import { FaRegTrashCan } from "react-icons/fa6";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../redux/Store";
import Image from "next/image";
import { remove, incrementQuantity, decrementQuantity } from "@/app/(AddToCartFunctunality)/redux/features/cartSlice";
import Link from "next/link";
import { RootState } from "../redux/store";

interface CartItem {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

const Cartpage: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart);

  const handleRemove = (id: number) => {
    dispatch(remove(id));
  };

  const handleIncrement = (id: number) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id: number) => {
    dispatch(decrementQuantity(id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.2; // 20% discount
  const deliveryFee = 15; // Fixed delivery fee
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 flex flex-col items-center">
      {/* Breadcrumb */}
      <div className="flex gap-4 text-sm text-gray-500 mb-4 w-full max-w-6xl">
        <Link href="/"> <span>   Home</span>   </Link>
        <span>/</span>
      <span> Cart</span>
      </div>

      {/* Page Title */}
      <h3 className="text-4xl font-bold text-center mb-8">YOUR CART</h3>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Cart Items */}
        <div className="w-full lg:w-2/3 space-y-6">
          {cartItems.map((item: CartItem) => (
            <div
              key={item.id}
              className="flex items-center bg-white shadow-md rounded-lg p-4"
            >
              {/* Image Section */}
              <div className="w-24 h-24 flex-shrink-0 relative">
                <Image
                  src={item.imageUrl}
                  alt="Product"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>

              {/* Content Section */}
              <div className="flex-grow px-4">
                <h5 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h5>
                <p className="text-sm text-gray-600">Size: Large</p>
                <p className="text-sm text-gray-600">Color: Blue</p>
                <h5 className="text-lg font-medium text-gray-800 mt-2">
                  ${item.price * item.quantity}
                </h5>
              </div>

              {/* Quantity & Remove Section */}
              <div className="flex flex-col items-center space-y-4">
                <button
                  className="text-red-500 text-lg hover:text-red-700"
                  onClick={() => handleRemove(item.id)}
                >
                  <FaRegTrashCan />
                </button>
                <div className="flex flex-col md:flex md:flex-row items-center border rounded-full bg-gray-200">
                  <button
                    className="px-3 py-1 text-lg font-bold"
                    onClick={() => handleDecrement(item.id)}
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    className="px-3 py-1 text-lg font-bold"
                    onClick={() => handleIncrement(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3 bg-white shadow-md rounded-lg p-6 space-y-6">
          <h4 className="text-2xl font-semibold">Order Summary</h4>
          <div className="flex justify-between text-gray-600">
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-gray-600">
            <p>Discount (-20%)</p>
            <p className="text-red-500 font-semibold">-${discount.toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-gray-600">
            <p>Delivery Fee</p>
            <p>${deliveryFee.toFixed(2)}</p>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <p>Total</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <div className="flex flex-col gap-4 md:flex md:flex-row items-center space-x-2">
            <input
              type="text"
              placeholder="Add promo code"
              className="flex-grow border border-gray-300 rounded px-4  py-2"
            />
            <button className="bg-black text-white px-6 py-2 rounded">
              Apply
            </button>
          </div>
          <button className="w-full bg-black text-white py-3 rounded mt-4 flex items-center justify-center">
            Go to Checkout
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cartpage;


