import Button from "@/components/ui/button.component";
import React from "react";
import { FaForward } from "react-icons/fa";

type Props = {};

const CheckoutPage = (props: Props) => {
  return (
    <div className="flex flex-col lg:flex-row border-4 justify-content align-items bg-gray-100 px-3">
      <div className="w-full    ">
        <div className="mx-auto">
          <h1 className="text-xl font-bold py-4">Product in Cart</h1>
          <table className="table-auto">
            <thead className="text-green-400">
              <tr>
                <th className="w-3/4 text-left">Product Name</th>
                <th className="w-1/5 text-left">Qty</th>
                <th className="w-2/5 text-left">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-200 rounded p-2 my-8 rounded-full">
                <td className="p-4">Product Name</td>
                <td className="p-4">4</td>
                <td className="p-4">Total Price</td>
              </tr>
            </tbody>
          </table>
          <h3 className="text-l font-bold py-4 text-right mx-4">
            Total Amount + Shipping Charge : 50
          </h3>
        </div>
      </div>
      <div className="w-full  ">
        <h1 className="text-xl font-bold pt-4 px-2">Shipping Address</h1>
        <div className="">
          <form className="pt-4 pb-8 px-8">
            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                name="name"
                placeholder=" "
                className="pt-3 pb-2 block w-full bg-clip-text px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="password"
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              >
                Enter Full Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                name="streetAddress"
                placeholder=" "
                className="pt-3 pb-2 block w-full bg-clip-text px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="password"
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              >
                Street Address
              </label>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                name="city"
                placeholder=" "
                className="pt-3 pb-2 block w-full bg-clip-text px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="password"
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              >
                Town / City
              </label>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                name="State"
                placeholder=" "
                className="pt-3 pb-2 block w-full bg-clip-text px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="password"
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              >
                State
              </label>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                type="number"
                name="pinCode"
                placeholder=" "
                className="pt-3 pb-2 block w-full bg-clip-text px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="password"
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              >
                Pin Code
              </label>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                type="number"
                name="mobile"
                placeholder=" "
                className="pt-3 pb-2 block w-full bg-clip-text px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="password"
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              >
                Mobile Number
              </label>
            </div>

            <div>
              <Button
                title="Proceed to payment"
                className="w-1/2 text-white font-normal"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
