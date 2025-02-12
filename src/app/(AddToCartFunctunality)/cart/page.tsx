"use client";
import { FaRegTrashCan } from "react-icons/fa6";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Image from "next/image";
import Link from "next/link";

import { RootState } from "../redux/store";
import { decrementQuantity, incrementQuantity, remove } from "../redux/features/cartSlice";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

interface ReduxCartItem {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
  color: string;
  size: string;
  discountPercent?: number;
}

interface CartItem {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
  color: string;
  size: string;
  discountPercent?: number;
}

const Cartpage: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems: ReduxCartItem[] = useSelector((state: RootState) => state.cart.items as unknown as ReduxCartItem[]);

  const handleRemove = (item: ReduxCartItem) => {
    dispatch(remove({ _id: item._id, color: item.color, size: item.size }));
  };

  const handleIncrement = (item: ReduxCartItem) => {
    dispatch(incrementQuantity({ _id: item._id, color: item.color, size: item.size }));
  };

  const handleDecrement = (item: ReduxCartItem) => {
    dispatch(decrementQuantity({ _id: item._id, color: item.color, size: item.size }));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discount = cartItems.reduce(
    (total, item) => total + (item.discountPercent ? item.price * item.quantity * (item.discountPercent / 100) : 0),
    0
  );
  const deliveryFee = 15; // Fixed delivery fee
  const total = subtotal - discount + deliveryFee;

  const router = useRouter();
  const handleProceed = () => {
    Swal.fire({
      title: 'Success!',
      text: 'Please wait your moment',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'OK',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        router.push('/checkout');
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 flex flex-col items-center">
      {/* Breadcrumb */}
      <div className="flex gap-4 text-sm text-gray-500 mb-4 w-full max-w-6xl">
        <Link href="/"> <span>Home</span> </Link>
        <span>/</span>
        <span>Cart</span>
      </div>

      {/* Page Title */}
      <h3 className="text-4xl font-bold text-center mb-8">YOUR CART</h3>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Cart Items */}
        <div className="w-full lg:w-2/3 space-y-6">
          {cartItems.map((item: CartItem) => (
            <div
              key={`${item._id}-${item.color}-${item.size}`}
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
                  {item.name}
                </h5>
                <p className="text-sm text-gray-600">Size: {item.size}</p>
                <p className="text-sm text-gray-600">Color: {item.color}</p>
                <div className="flex flex-row gap-4 items-center">
                  <h5 className="text-lg font-medium text-gray-800 mt-2">
                    ${item.price * item.quantity}
                  </h5>
                  {item.discountPercent && item.discountPercent > 0 && (
                    <>
                      <h5 className="text-lg text-gray-500 font-bold line-through mt-2">
                        ${(item.price * item.quantity / (1 - item.discountPercent / 100)).toFixed(2)}
                      </h5>
                      <button className="w-[58px] h-[28px] text-red-700 bg-[#FF33331A] rounded-2xl mt-2">
                        -{item.discountPercent}%
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Quantity & Remove Section */}
              <div className="flex flex-col items-center space-y-4">
                <button
                  className="text-red-500 text-lg hover:text-red-700"
                  onClick={() => handleRemove(item)}
                >
                  <FaRegTrashCan />
                </button>
                <div className="flex flex-col md:flex md:flex-row items-center border rounded-full bg-gray-200">
                  <button
                    className="px-3 py-1 text-lg font-bold"
                    onClick={() => handleDecrement(item)}
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    className="px-3 py-1 text-lg font-bold"
                    onClick={() => handleIncrement(item)}
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
            <p>Discount</p>
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
              className="flex-grow border border-gray-300 rounded px-4 py-2"
            />
            <button className="bg-black text-white px-6 py-2 rounded">
              Apply
            </button>
          </div>
          <button className="w-full bg-black text-white py-3 rounded mt-4 flex items-center justify-center" onClick={handleProceed}>
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