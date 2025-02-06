"use client";
import { useSelector } from "react-redux";
import Image from "next/image";
import toast from "react-hot-toast";
import { RootState } from "@/app/(AddToCartFunctunality)/redux/store";
import { useState } from "react";
import Link from "next/link";

import Swal from "sweetalert2";

export default function CheckoutPage() {



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

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = cartItems.reduce(
    (total, item) => total + (item.discountPercent ? item.price * item.quantity * (item.discountPercent / 100) : 0),
    0
  );
  const deliveryFee = 15; // Fixed delivery fee
  const total = subtotal - discount + deliveryFee;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const errors = {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      zipCode: "",
      phone: "",
      email: "",
    };

    let isValid = true;

    if (!formValues.firstName) {
      errors.firstName = "First Name is required";
      isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(formValues.firstName)) {
      errors.firstName = "First Name must contain only letters";
      isValid = false;
    }

    if (!formValues.lastName) {
      errors.lastName = "Last Name is required";
      isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(formValues.lastName)) {
      errors.lastName = "Last Name must contain only letters";
      isValid = false;
    }

    if (!formValues.address) {
      errors.address = "Address is required";
      isValid = false;
    }

    if (!formValues.city) {
      errors.city = "City is required";
      isValid = false;
    }

    if (!formValues.zipCode) {
      errors.zipCode = "Zip Code is required";
      isValid = false;
    } else if (!/^\d{5}(-\d{4})?$/.test(formValues.zipCode)) {
      errors.zipCode = "Invalid Zip Code format";
      isValid = false;
    }

    if (!formValues.phone) {
      errors.phone = "Phone Number is required";
      isValid = false;
    } else if (!/^\d+$/.test(formValues.phone)) {
      errors.phone = "Phone Number must contain only numbers";
      isValid = false;
    }

    if (!formValues.email) {
      errors.email = "Email is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleCheckout = async () => {
    if (!validateForm()) {
      toast.error("Please fill out all required fields.");
      return;
    }

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ allproducts: cartItems }),
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error("Error during checkout", err);
      toast.error('Failed to create checkout session');
    }

  };







// *************************** HANDLE PLACE ORDER ***************************

 

const handlePlaceOrder = async () => {
  Swal.fire({
    title: "Processing Your Order",
    text: "Please wait a moment",
    icon: "info",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Proceed",
  }).then(async (result) => {
    if (result.isConfirmed) {
      if (validateForm()) {
        const orderData = {
          _type: "order",
          firstName: formValues.firstName,
          lastName: formValues.lastName,
          address: formValues.address,
          email: formValues.email,
          phone: formValues.phone,
          zipcode: formValues.zipCode,
          city: formValues.city,
          total: total,
          discount: discount,
          cartItems: cartItems.map((item) => ({
            _key: item._id,
            _type: "reference",
            _ref: item.id,
          })),
        };

        try {
          const response = await fetch('/api/createorder', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
          });

          if (response.ok) {
            localStorage.removeItem("appliedDiscount");

            // New SweetAlert for Pay With Stripe
            Swal.fire({
              title: "Order Ready!",
              text: "Click below to pay with Stripe",
              icon: "success",
              confirmButtonColor: "#3085d6",
              confirmButtonText: "Pay With Stripe",
            }).then((stripeResult) => {
              if (stripeResult.isConfirmed) {
                handleCheckout();
              }
            });

          } else {
            throw new Error('Failed to create order');
          }
        } catch (err) {
          console.error(err); // Error console me print hoga
          Swal.fire(
            "Error!",
            "Please fill all fields correctly.",
            "error"
          );
        }
      }
    }
  });
};

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        {/* Breadcrumb */}
        <div className="flex gap-4 text-sm text-gray-500 mb-4 w-full max-w-6xl">
          <Link href="/cart"> <span>Cart</span> </Link>
          <span>/</span>
          <span>Checkout</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="border">
            {/* Order Summary */}
            <div className=" rounded-sm p-4 sm:p-6 space-y-4 w-full">
              <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-4 ">Order Summary</h2>
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

            <div className="flex flex-col gap-3 items-end mr-2 py-3 text-sm sm:text-base">
              <div className="flex flex-row gap-1 text-sm sm:text-base">
                <span className="font-bold">Subtotal :</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex flex-row gap-1 text-sm sm:text-base">
                <span className="font-bold">Discount :</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
              <div className="flex flex-row gap-1 text-sm sm:text-base">
                <span className="font-bold">Delivery Fee :</span>
                <span>${deliveryFee}</span>
              </div>
              <div className="flex flex-row gap-1 text-sm sm:text-base">
                <span className="font-bold text-xl">Total :</span>
                <span className="text-xl">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Billing Form */}
          <div className="border rounded-lg p-6 sm:p-8 space-y-6 w-full shadow-lg bg-white animate-fade-in">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 text-center animate-slide-in">
              🛒 Billing Information
            </h2>

            <div className="space-y-5">
              {/* FIRST NAME */}
              <div className="flex flex-col">
                <label htmlFor="firstName" className="font-medium text-gray-700">First Name</label>
                <input 
                  type="text"
                  id="firstName"
                  placeholder="Enter Your First Name"
                  value={formValues.firstName}
                  onChange={handleInputChange}
                  className="border-2 border-blue-300 focus:ring focus:ring-blue-400 w-full text-center rounded-lg px-4 py-2 transition-all duration-300 outline-none focus:scale-105"
                />
                {formErrors.firstName && <p className="text-red-500 text-xs">{formErrors.firstName}</p>}
              </div>

              {/* LAST NAME */}
              <div className="flex flex-col">
                <label htmlFor="lastName" className="font-medium text-gray-700">Last Name</label>
                <input 
                  type="text"
                  id="lastName"
                  placeholder="Enter Your Last Name"
                  value={formValues.lastName}
                  onChange={handleInputChange}
                  className="border-2 border-gray-300 focus:ring focus:ring-blue-400 w-full text-center rounded-lg px-4 py-2 transition-all duration-300 outline-none focus:scale-105"
                />
                {formErrors.lastName && <p className="text-red-500 text-xs">{formErrors.lastName}</p>}
              </div>

              {/* ADDRESS */}
              <div className="flex flex-col">
                <label htmlFor="address" className="font-medium text-gray-700">Address</label>
                <input 
                  type="text"
                  id="address"
                  placeholder="Enter Your Complete Address"
                  value={formValues.address}
                  onChange={handleInputChange}
                  className="border-2 border-gray-300 focus:ring focus:ring-blue-400 w-full text-center rounded-lg px-4 py-2 transition-all duration-300 outline-none focus:scale-105"
                />
                {formErrors.address && <p className="text-red-500 text-xs">{formErrors.address}</p>}
              </div>

              {/* EMAIL */}
              <div className="flex flex-col">
                <label htmlFor="email" className="font-medium text-gray-700">Email</label>
                <input 
                  type="email"
                  id="email"
                  placeholder="abc@gmail.com"
                  value={formValues.email}
                  onChange={handleInputChange}
                  className="border-2 border-gray-300 focus:ring focus:ring-blue-400 w-full text-center rounded-lg px-4 py-2 transition-all duration-300 outline-none focus:scale-105"
                />
                {formErrors.email && <p className="text-red-500 text-xs">{formErrors.email}</p>}
              </div>

              {/* PHONE */}
              <div className="flex flex-col">
                <label htmlFor="phone" className="font-medium text-gray-700">Phone</label>
                <input 
                  type="text" // Change input type to text
                  id="phone"
                  placeholder="Enter Your Phone"
                  value={formValues.phone}
                  onChange={handleInputChange}
                  className="border-2 border-gray-300 focus:ring focus:ring-blue-400 w-full text-center rounded-lg px-4 py-2 transition-all duration-300 outline-none focus:scale-105"
                />
                {formErrors.phone && <p className="text-red-500 text-xs">{formErrors.phone}</p>}
              </div>

              {/* ZIP CODE */}
              <div className="flex flex-col">
                <label htmlFor="zipCode" className="font-medium text-gray-700">Zip-Code</label>
                <input 
                  type="text" // Change input type to text
                  id="zipCode"
                  placeholder="Enter Your Zip-Code"
                  value={formValues.zipCode}
                  onChange={handleInputChange}
                  className="border-2 border-gray-300 focus:ring focus:ring-blue-400 w-full text-center rounded-lg px-4 py-2 transition-all duration-300 outline-none focus:scale-105"
                />
                {formErrors.zipCode && <p className="text-red-500 text-xs">{formErrors.zipCode}</p>}
              </div>

              {/* CITY */}
              <div className="flex flex-col">
                <label htmlFor="city" className="font-medium text-gray-700">City</label>
                <input 
                  type="text"
                  id="city"
                  placeholder="Enter Your City Name"
                  value={formValues.city}
                  onChange={handleInputChange}
                  className="border-2 border-gray-300 focus:ring focus:ring-blue-400 w-full text-center rounded-lg px-4 py-2 transition-all duration-300 outline-none focus:scale-105"
                />
                {formErrors.city && <p className="text-red-500 text-xs">{formErrors.city}</p>}
              </div>
            </div>

            {/* PAYMENT BUTTON */}
            <button
              onClick={handlePlaceOrder}
              className="w-full h-12 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white font-semibold rounded-lg mt-4 text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
            >
              💳 Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}




