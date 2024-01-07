import React from "react";
import { FaFly, FaPlane } from "react-icons/fa";

type Props = {};

const CouponComponent = (props: Props) => {
  return (
    <div>
      <form>
        <div className="p-2">
          <div className="relative">
            <div className="px-2 py-1 bg-yellow-400 rounded">
              <span className="font-medium">Applied Coupon OFF20</span>
            </div>

            <div>
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600 font-medium"
              >
                Coupon Code
              </label>
              <input
                type="text"
                id="coupanCode"
                name="coupanCode"
                placeholder="Enter Coupon Code"
                required={true}
                className="w-full bg-gray-100 bg-opacity-50 rounded border  border-gray-900 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />

              <button type="submit" className="absolute right-4 mt-1 py-1  ">
                <FaFly className="text-black z-20 hover:text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CouponComponent;
