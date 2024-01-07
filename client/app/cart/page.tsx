"use client";
import CouponComponent from "@/components/cart/coupon.component";
import Button from "@/components/ui/button.component";
import images from "@/utils/images.service";
import Link from "next/link";
import React, { useState } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

const CartPage = () => {
  const [cartItem, setCartItem] = useState([]);
  const [totalAmount, setTotalAmount] = useState("");
  const [totalQty, setTotalQty] = useState("");
  const [shippingCharge, setShippingCharge] = useState("");
  const [couponCode, setCouponCode] = useState("");

  const reduceItem = (product: any) => {};

  /** increase no of item in cart */
  const addItem = (product: any) => {};

  /***Remove item from cart */
  const removeItem = (product: any) => {};

  const loginToContinue = () => {
    localStorage.setItem("login-button", "login-button");
  };

  return (
    <div className="bg-gray-100" id="product">
      <div className="order container mx-auto sm:w-1/2 cart-width pt-2 pb-4">
        <div className="flex items-center border-b sm:pb-4 pt-1 border-gray-300">
          <img src="" alt="" />
          <h1 className="font-semibold text-xl sm:text-2xl ml-4">
            Order Summary
          </h1>
        </div>

        <div className="border-b border-gray-300 mx-5 ">
          <div className="flex items-center my-4 sm:my-8 ">
            <img className="sm:w-24  py-2" alt="" src="" />
            <div className="flex-1">
              <h1 className="font-semibold sm:text-xl leading-none ">
                Product Name
              </h1>
              <span className="text-sm leading-none">Price: 30</span>
            </div>
            <div className="flex flex-1 justify-content items-center">
              <span className="hover:text-white hover:bg-black rounded">
                <FaMinus className="" />
              </span>
              <span className="mr-1">4 pcs </span>
              <span className="hover:text-white hover:bg-black rounded mr-2">
                <FaPlus />
              </span>
              <span className="text-sm font-bold hover:bg-black hover:text-white p-1  rounded">
                <FaTrash />
              </span>
            </div>
            <span className="text-lg font-bold mr-1">₹ 40</span>
          </div>
        </div>

        <div className="mx-5 sm:flex justify-between">
          <div className="py-1 mt-1">
            <CouponComponent />
          </div>

          <div className="py-1 mt-1 text-right">
            <div className="py-1">
              <span className="text-l">Total Quantity:</span>
              <span className="text-l ml-2"> 5 </span>
            </div>
            <div className="  py-1">
              <span className="text-l">Shipping Charge:</span>
              <span className="text-l ml-2">₹ 40 </span>
            </div>
            {couponCode && (
              <div className=" text-red-600  py-1">
                <span className="text-l">Discount Amount:</span>
                <span className="text-l ml-2">₹ 0</span>
              </div>
            )}
            <div className="py-1 border-t">
              <span className="text-l">Total Amount:</span>
              <span className="text-l  ml-2"> ₹ 80 </span>
            </div>
          </div>
        </div>

        <div className="w-1/4 flex items-center flex-col">
          <div className="text-right">
            <Link href="/checkout">
              <Button title="Proceed To Checkout" className="text-white" />
            </Link>
          </div>
          <div className="text-right my-2">
            <Link href="/login">
              <Button title="Login To Continue" className="text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
