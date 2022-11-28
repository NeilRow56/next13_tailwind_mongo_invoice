import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar w-[120px] h-screen fixed top-0 bottom-0 bg-gray-800 z-99">
      <div className="sidebar_container flex flex-col justify-between w-full h-full">
        <div className="sidebar_header w-full h-[100px] flex items-center justify-center rounded-r-lg bg-violet-500">
          <div className="sidebat_logo">
            <h2 className="text-white">W.I.P</h2>
          </div>
        </div>
        <div className="sidebar_bottom w-full h-[100px] flex items-center justify-center rounded-r-lg bg-gray-800 border-t solid border-gray-500 ">
          <Image
            width={9}
            height={9}
            className=" Name w-9 h-9"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
