"use client";

import React from "react";
import { useRouter } from "next/navigation";

const InvoicePage = () => {
  const router = useRouter();
  const goBack = () => router.push("/");

  return (
    <div className="main_container absolute top-10 left-44  w-[calc(100%_-_20rem)] pl-[30px] ">
      <div
        className="back_btn h-[40px
      ] mb-6"
      >
        <h6
          onClick={goBack}
          className="text-white cursor-pointer font-semibold"
        >
          Go Back
        </h6>
      </div>

      {/* Invoice header details */}
      <div className="invoice_details_heder flex items-center justify-between p-[30px] rounded-lg mb-6 bg-gray-800">
        <div className="details_status text-white flex items-center gap-6">
          <p>Status</p>
          <button className="px-3 py-1 bg-orange-600 text-white rounded-md hover:bg-orange-300 hover:text-gray-800">
            Pending
          </button>
        </div>
        <div className="details_btns items-center space-x-4">
          <button className="edit_btn bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-300 hover:text-gray-800">
            Edit
          </button>
          <button className="delete_btn bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-300 hover:text-gray-800">
            Delete
          </button>
          <button className="mark_as_btn  px-3 py-1 rounded-md bg-violet-500 text-white hover:bg-violet-300 hover:text-gray-800">
            Mark as Paid
          </button>
        </div>
      </div>

      {/* Invoice details */}

      <div className="invoice_details p-[30px] bg-gray-800 rounded-t-lg ">
        <div className="details_box flex justify-between mb-6">
          <h4 className="text-white text-lg font-semibold">RT580G</h4>
          <p className="text-gray-400">Re-branding</p>
        </div>
        <div className="text-gray-400 mb-6">
          <p>28 Stag Road</p>
          <p>Woodland Valley</p>
          <p>Rothwell</p>
          <p>NN14 6GD</p>
        </div>
        <div>
          <p></p>
        </div>

        {/* Details box 2 */}
        <div className="details_box flex justify-between mb-8">
          <div className="text-gray-400">
            <div className="invoice_created-date mb-8">
              <p>Invoice Date</p>
              <h4 className="text-white text-lg font-semibold">29-07-2022</h4>
            </div>
            <div>
              <p className="invoice_payment">Payment Due</p>
              <h4 className="text-white text-lg font-semibold">29-07-2022</h4>
            </div>
          </div>

          {/* Invoice - client address */}
          <div className="invoice_client-address text-gray-400">
            <p>Bill to</p>
            <h4 className="text-white text-lg font-semibold mb-8">
              John Smith
            </h4>
            <div className="">
              <p>28 Stag Road</p>
              <p>Woodland Valley</p>
              <p>Rothwell</p>
              <p>NN14 6GD</p>
            </div>
          </div>
          <div className="text-gray-400">
            <p>email to:</p>
            <h4 className="text-white text-lg font-semibold">
              johnsmith@bt.com
            </h4>
          </div>
        </div>
      </div>

      {/* Invoice items */}
      <div className="invoice_item-box text-gray-400 bg-[#252949] p-7 rounded-t-md">
        <ul>
          <li className="flex items-center justify-between mb-4">
            <p className="item_name-box w-1/2 ">Item Name</p>
            <p className="list_item-box w-1/4 text-right">Qty</p>
            <p className="list_item-box w-1/4 text-right">Price</p>
            <p className="list_item-box w-1/4 text-right ">Total</p>
          </li>
          {/* Invoice Item */}
          <li className="flex items-center justify-between mb-4">
            <div className="item_name-box w-1/2">
              <h5 className="text-white text-lg font-semibold  ">
                Ecommerce Website
              </h5>
            </div>
            <div className="list_item-box w-1/4 text-right">
              <p>2</p>
            </div>
            <div className="list_item-box w-1/4 text-right">
              <p>£225</p>
            </div>
            <div className="list_item-box w-1/4 text-right">
              <h5 className="text-white text-lg font-semibold ">£450</h5>
            </div>
          </li>
          <li className="flex items-center justify-between mb-4">
            <div className="item_name-box w-1/2">
              <h5 className="text-white text-lg font-semibold  ">
                Personal Website
              </h5>
            </div>
            <div className="list_item-box w-1/4 text-right">
              <p>1</p>
            </div>
            <div className="list_item-box w-1/4 text-right">
              <p>£299</p>
            </div>
            <div className="list_item-box w-1/4 text-right">
              <h5 className="text-white text-lg font-semibold ">£299</h5>
            </div>
          </li>
        </ul>
        {/* Grand Total */}
      </div>
      <div className="grand_total bg-[#0c0e16] p-7 mt-[40px] mb-[30px] rounded-b-md items-center justify-between flex">
        <h5 className="text-white text-lg font-semibold ">Grand Total</h5>
        <h2 className="text-white text-2xl font-bold ">£749</h2>
      </div>
    </div>
  );
};

export default InvoicePage;
