import React from "react";
import { FaHome, FaUser } from "react-icons/fa";

const DashboardPage = () => {
  return (
    <div>
      <div className="bg-purple-100 py-8 border">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg w-2/5  order py-8 mx-auto h-full">
          <div className="px-4 py-5 sm:px-6 border-b flex justify-between">
            <h1 className="text-lg leading-6 font-medium text-gray-900">
              Ordered Item
            </h1>
          </div>

          <div>
            <div className="mx-auto px-8 border-b">
              <span>
                Order Status : <strong>Delivered</strong>
              </span>
            </div>

            <div className="mx-auto px-8 border-b">
              <table className="table-auto">
                <thead className="text-green-400">
                  <tr>
                    <th className="w-3/4 text-left">Product Name</th>
                    <th className="w-1/5 text-left">Qty</th>
                    <th className="w-2/5 text-left">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-emerald-200">
                    <td className="text-base">
                      Product Name <br />
                      <span className="text-xs">Price : 450</span>
                    </td>
                    <td>3</td>
                    <td>50</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mx-auto px-8 border-b my-2">
              <span className="text-green-400 font-bold text-l">
                Shipping Charge :
              </span>
              <span>40</span>
              <br />
              <span className="text-green-400 font-bold text-l">
                Total Amount :
              </span>
              <span>40</span>
            </div>

            <div className="mx-auto px-8 border-b my-2">
              <h2 className="text-green-400 font-bold text-l">Shipping To</h2>
              <p>User Name</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, sunt.{" "}
              </p>
              <p>City , State</p>
              <p>305022</p>
              <p>Mobile :524525</p>
            </div>

            <div className="mx-auto px-8">Ordered On :</div>
            <div className="mx-auto px-8">Time :</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
