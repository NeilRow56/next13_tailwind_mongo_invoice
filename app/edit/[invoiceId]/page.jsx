"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";

const EditItem = () => {
  const router = useRouter();
  const [items, setItems] = useState([]);

  // add product item

  const addItem = () => {
    setItems([...items, { name: "", quantity: 0, price: 0, total: 0 }]);
  };

  // delete product item

  const deleteItem = (i) => {
    const inputData = [...items];
    inputData.splice(i, 1);
    setItems(inputData);
  };

  // handler change
  const handlerChange = (event, i) => {
    const { name, value } = event.target;
    const list = [...items];
    list[i][name] = value;
    list[i]["total"] = list[i]["quantity"] * list[i]["price"];
    setItems(list);
  };

  return (
    <div className="main_container absolute top-10 left-44  w-[calc(100%_-_20rem)] pl-[30px] ">
      <div className="new_invoice w-4/6 mx-auto">
        <div className="new_invoice-header mb-7">
          <h3 className="text-white font-bold text-2xl">Edit #RT5840</h3>
        </div>

        {/* New Invoice Body */}
        <div className="new_invoice-body flex flex-col">
          {/* Bill from */}
          <div className="bill_from flex flex-col px-3 py-5 w-full rounded-md border border-violet-500 text-white">
            <p className="bill_title text-gray-400">Invoice from:</p>
            <div className="form_group ">
              <p className="text-gray-400 ">Street Address</p>
              <input
                type="text"
                className="w-full h-10 rounded-md mb-7 bg-gray-600 pl-3"
              />
            </div>
            <div className="inline_form_group flex items-center justify-between">
              <div>
                <p className="text-gray-400">City</p>
                <input
                  type="text"
                  className="w-full h-10 rounded-md mb-7 bg-gray-600 pl-3"
                />
              </div>
              <div>
                <p className="text-gray-400">Post Code</p>
                <input
                  type="text"
                  className="w-full h-10 rounded-md mb-7 bg-gray-600 pl-3 "
                />
              </div>
              <div>
                <p className="text-gray-400">Country</p>
                <input
                  type="text"
                  className="w-full h-10 rounded-md mb-7 bg-gray-600 pl-3"
                />
              </div>
            </div>
          </div>

          {/* Bill to */}
          <div className="bill_from flex flex-col px-3 py-5 w-full rounded-md border border-violet-500 text-white">
            <p className="bill_title text-gray-400">Invoice to:</p>
            <div className="form_group ">
              <p className="text-gray-400 ">Client Name</p>
              <input
                type="text"
                className="w-full h-10 rounded-md mb-7 bg-gray-600 pl-3"
              />
            </div>
            <div className="form_group ">
              <p className="text-gray-400 ">Client Email</p>
              <input
                type="email"
                className="w-full h-10 rounded-md mb-7 bg-gray-600 pl-3"
              />
            </div>
            <div className="form_group ">
              <p className="text-gray-400 ">Street Address</p>
              <input
                type="text"
                className="w-full h-10 rounded-md mb-7 bg-gray-600 pl-3"
              />
            </div>
            <div className="inline_form_group flex items-center justify-between">
              <div>
                <p className="text-gray-400">City</p>
                <input
                  type="text"
                  className="w-full h-10 rounded-md mb-7 bg-gray-600 pl-3"
                />
              </div>
              <div>
                <p className="text-gray-400">Post Code</p>
                <input
                  type="text"
                  className="w-full h-10 rounded-md mb-7 bg-gray-600 pl-3 "
                />
              </div>
              <div>
                <p className="text-gray-400">Country</p>
                <input
                  type="text"
                  className="w-full h-10 rounded-md mb-7 bg-gray-600 pl-3"
                />
              </div>
            </div>
            <div className="inline_form_group flex items-center justify-between">
              <div className="w-[48%]">
                <p className="text-gray-400">Invoice Date</p>
                <input
                  type="date"
                  className="w-full h-10 rounded-md mb-7 bg-gray-600 pl-3"
                />
              </div>
              <div className="w-[48%]">
                <p className="text-gray-400">Payment Terms</p>
                <input
                  type="text"
                  className="w-full h-10 rounded-md mb-7 bg-gray-600 pl-3 "
                />
              </div>
            </div>
            <div className="form_group ">
              <p className="text-gray-400 ">Project Description</p>
              <input
                type="text"
                className="w-full h-10 rounded-md mb-7 bg-gray-600 pl-3"
              />
            </div>
          </div>
          {/* Invoice Product Items */}

          <div className="invoice_items ">
            <h3 className="text-white text-xl font-semibold">Item List</h3>
            {items?.map((item, i) => (
              <div className="item " key={i}>
                <div className="flex flex-row w-full items-center justify-between text-white">
                  <div>
                    <p className="text-gray-400">Item Name</p>
                    <input
                      type="text"
                      name="name"
                      onChange={(e) => handlerChange(e, i)}
                      className="w-full h-10 rounded-md mb-7 mt-3 bg-gray-600 pl-3 "
                    />
                  </div>
                  <div>
                    <p className="text-gray-400">Qty</p>
                    <input
                      type="text"
                      name="quantity"
                      onChange={(e) => handlerChange(e, i)}
                      className="w-full h-10 rounded-md mb-7 mt-3 bg-gray-600 pl-3 "
                    />
                  </div>
                  <div>
                    <p className="text-gray-400">Price</p>
                    <input
                      type="number"
                      name="price"
                      onChange={(e) => handlerChange(e, i)}
                      className="w-full h-10 rounded-md mb-7 mt-3 bg-gray-600 pl-3 "
                    />
                  </div>
                  <div>
                    <p className="text-gray-400 ">Total</p>
                    <h5 className="text-white font-bold text-2xl pb-7 pt-3">
                      {item.total}
                    </h5>
                  </div>
                  <button
                    onClick={() => deleteItem(i)}
                    className="edit_btn bg-red-600 h-10 mt-2 text-white px-3 py-1 rounded-md hover:bg-red-300 hover:text-gray-800"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={addItem}
            className="px-3 py-2 bg-green-600 text-white rounded-2xl hover:bg-green-300 hover:text-gray-800"
          >
            Add New Item
          </button>
          <div className="new_invoice_btns mt-[100px] flex justify-end">
            <div>
              <button
                //  Path to change later to invoices/invoiceId
                onClick={() => router.push("/")}
                className="draft_btn bg-[#1f2c3f] h-10 mt-2 mr-[30px] w-[150px] text-white px-3 py-1 rounded-md border border-violet-600 hover:bg-blue-300 hover:text-gray-800"
              >
                Cancel
              </button>
              <button className="mark_as_btn bg-blue-600 h-10 mt-2 text-white px-3 py-1 rounded-md hover:bg-blue-300 hover:text-gray-800 w-[150px]">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditItem;
