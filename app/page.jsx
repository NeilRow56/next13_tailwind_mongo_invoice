"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navigatePage = () => router.push("/add-new");

  return (
    <>
      <main className="main_container absolute top-10 left-44  w-[calc(100%_-_20rem)] pl-[30px] ">
        <div className=" flex  items-center justify-between mb-[50px]">
          <div className="invoice_header_logo">
            <h3 className="text-white">Invoices</h3>
            <p className="text-gray-400">There is a total of 7 Invoices</p>
          </div>
          <button
            onClick={navigatePage}
            className="px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-300 hover:text-gray-800"
          >
            AddNew
          </button>
        </div>
        <div className="invoice_container text-white pb-[200px]">
          {/* Invoice Item */}
          <Link href={`invoices/id`} passHref>
            <div className="invoice_item flex items-center justify-between p-[30px] rounded-xl mb-8  text-white bg-gray-800 cursor-pointer hover:bg-gray-600  hover:border solid border-violet-500 focus:outline-none focus:ring focus:ring-violet-300">
              <div>
                <h5 className="invoice_id text-sm">RT59F0</h5>
              </div>
              <div>
                <h6 className="invoice_client text-sm">John Doe</h6>
              </div>
              <div>
                <p className="invoice_created text-md">29-07-2022</p>
              </div>
              <div>
                <h3 className="invoice_total text-lg">£500</h3>
              </div>
              <div>
                <button className="px-3 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-300 hover:text-gray-800">
                  pending
                </button>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}
