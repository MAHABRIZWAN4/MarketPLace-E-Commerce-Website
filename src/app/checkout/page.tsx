"use client";
console.log(process.env.NEXT_STRIPE_SECRET_KEY)
import { useSelector } from "react-redux";
import Image from "next/image";
import { JSXElementConstructor, ReactElement, ReactNode, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import toast from "react-hot-toast";
import { RootState } from "@/app/(AddToCartFunctunality)/redux/store";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CheckoutPage() {
  interface CartItem {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    quantity: number;
  }
  
const cartItems = useSelector((state: RootState) => state.cart.items);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = subtotal * 0.2; // 20% discount
  const total = subtotal - discount;

  // const handlePlaceOrder = async () => {
  //   // Validate form and proceed with Stripe payment
  //   const stripe = await stripePromise;
  //   const response = await fetch('/api/create-checkout-session', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       cartItems,
  //       formValues,
  //       total,
  //     }),
  //   });

  //   if (response.ok) {
  //     const { id } = await response.json();
  //     await stripe?.redirectToCheckout({ sessionId: id });
  //   } else {
  //     toast.error('Failed to create checkout session');
  //   }
  // };




  // const handleCheckout = async () => {
  //   try {
  //       const response = await fetch('http://localhost:3000/api/checkout',{
  //         method:'POST',
  //         headers:{
  //           "Content-Type":"application/json"
  //         },
  //         body: JSON.stringify({ allproducts: cartItems }), // Change this line
  //       });
  //       const data = await response.json();
  //       if(data.url){
  //         window.location.href = data.url
  //       }
  //   } catch (error) {
  //     console.error("Error during checkout", error)
  //   }

    const handleCheckout = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ allproducts: cartItems }),
        });
    
        const data = await response.json();
    
        if (data?.url) {
          window.location.href = data.url; // Redirect to Stripe Checkout
        } else {
          console.error("Stripe session URL is missing", data);
          toast.error("Failed to create checkout session");
        }
      } catch (error) {
        console.error("Error during checkout", error);
        toast.error("Something went wrong during checkout.");
      }
    };
    





  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="border rounded-sm p-4 sm:p-6 space-y-4 w-full">
            <h2 className="text-lg sm:text-xl font-medium mb-4">Order Summary</h2>
            {cartItems.map((item, index) => (
              <div key={item.id || index} className="flex items-center gap-4 py-3 border-b">
                <div className="w-16 h-16 overflow-hidden rounded">
                  <Image
                    src={item.imageUrl}
                    alt={typeof item.name === 'string' ? item.name : ''}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium">{item.name}</h3>
                  <p className="text-xs text-[#666666]">Quantity: {item.quantity}</p>
                </div>
                <p className="text-sm">${item.price * (Number(item.quantity) ?? 0)}</p>
              </div>
            ))}
          </div>

          {/* Billing Form */}
          <div className="border rounded-sm p-4 sm:p-6 space-y-4 w-full">
            <h2 className="text-xl sm:text-2xl font-medium mb-6">Billing Information</h2>
            <div className="space-y-4">
              {/* Form fields for billing information */}
            </div>

            <div className="flex flex-col gap-6 justify-between py-3 text-sm sm:text-base">
              <div className="flex justify-between py-3 border-b text-sm sm:text-base">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-3 border-b text-sm sm:text-base">
                <span>Discount:</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-3 border-b text-sm sm:text-base">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
            
                 className="w-full h-10 sm:h-12 bg-blue-500 hover:bg-blue-800 rounded-sm mt-4 text-sm sm:text-base"
            >
              Pay With Stripe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}