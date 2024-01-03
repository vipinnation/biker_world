"use client";
import images from "@/utils/images.service";
import Link from "next/link";
import React, { useState } from "react";

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
      {cartItem && cartItem.length > 0 ? (
        <div className="order container mx-auto w-1/2 cart-width pt-2 pb-8">
          <div className="flex  items-center border-b pb-4 pt-1 border-gray-300">
            <img src="" alt="" />
            <h1 className="font-bold text-2xl ml-4 h-primary">Order Summary</h1>
          </div>
          <div className="pizza-list border-b border-gray-300 mx-5 ">
            {cartItem.map((data: any) => (
              <div className="flex items-center my-8 " key={data.items._id}>
                <img
                  className="w-24  py-2 mobile-image"
                  alt=""
                  src={data.items.productImage}
                />
                <div className="flex-1 ml-4">
                  <h1 className="font-bold text-xl ">
                    {data.items.productName}
                  </h1>
                  <span>
                    <strong></strong>
                  </span>
                  <br></br>
                  <span>Price :- {data.items.productPrice}</span>
                </div>
                <div className="flex-1 justify-content align-items">
                  <span className="hover:text-white hover:bg-black rounded">
                    <i
                      className="fa fa-minus"
                      aria-hidden="true"
                      onClick={(e) => {
                        reduceItem(data.items);
                      }}
                    ></i>
                  </span>
                  <span className="mr-1">{data.qty} pcs </span>
                  <span className="hover:text-white hover:bg-black rounded">
                    <i
                      className="fa fa-plus"
                      aria-hidden="true"
                      onClick={(f) => {
                        addItem(data.items);
                      }}
                    ></i>
                  </span>
                  <span className="text-lg font-bold hover:bg-black hover:text-white  rounded mx-2">
                    <i
                      className="fa fa-trash "
                      onClick={(g) => {
                        removeItem(data.items);
                      }}
                    ></i>
                  </span>
                </div>
                <span className="text-lg font-bold mr-1">
                  ₹ {Number(data.items.productPrice) * data.qty}
                </span>
              </div>
            ))}
          </div>
          <div className="mx-5 flex justify-between m-d-block">
            <div className="py-1 mt-1">
              {/* <CouponComponent couponCode={couponCode} /> */}
            </div>

            <div className="py-1 mt-1 text-right">
              <div className="py-1">
                <span className="text-l">Total Quantity:</span>
                <span className="text-l ml-2"> {totalQty} </span>
              </div>
              <div className="  py-1">
                <span className="text-l">Shipping Charge:</span>
                <span className="text-l ml-2">₹ {shippingCharge} </span>
              </div>
              {couponCode && (
                <div className=" text-red-600  py-1">
                  <span className="text-l">Discount Amount:</span>
                  <span className="text-l ml-2">₹ 0</span>
                </div>
              )}
              <div className="  py-1">
                <span className="text-l">Total Amount:</span>
                <span className="text-l  ml-2"> ₹ {totalAmount} </span>
              </div>
            </div>
          </div>
          {true ? (
            <div className="text-right">
              <Link href="/checkout">
                <button className="inline-block btn-primary py-1 px-4 rounded-full mt-4 text-white font-bold outline-none ">
                  Proceed To CheckOut
                </button>
              </Link>
            </div>
          ) : (
            <div className="text-right">
              <Link href="/login">
                <button
                  className="inline-block btn-primary py-1 px-4 rounded-full mt-4 text-white font-bold outline-none "
                  onClick={loginToContinue}
                >
                  Login To Continue
                </button>
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="empty-cart text-center py-2">
            <h1 className="text-3xl font-semibold">Cart is Empty</h1>
            <p className="mb-5 text-gray-500 text-lg">
              You probably haven`t ordered yet .
            </p>

            <img
              className="w-2/5 mx-auto mb-3 rounded-md"
              src={images.cart.emptycart.src}
              alt=""
            />

            <Link href="/" className="inline-block mx-auto">
              <button className="bg-primary py-1 px-6 rounded-full text-center text-white font-semibold">
                Go Back
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
