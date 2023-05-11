import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
const Header = ({ scrollPercentage, setSidebarOpen }) => {
  return (
    <div className="top-0 left-0 max-s-xl:flex items-center fixed z-[1000] w-full grid max-[1370px]:grid-cols-[0.25fr_0.85fr] grid-cols-[0.18fr_0.85fr] ">
      <div className="h-[55px] text-white max-s-xl:w-fit px-6 max-s-xl:px-3 flex items-center justify-start  w-full bg-[#242424] ">
        <div onClick={()=>setSidebarOpen(true)} className="hidden max-s-xl:block max-md:space-y-1 space-y-2">
          <div className="max-md:w-[25px] w-[32px] h-[2px] bg-white"></div>
          <div className="max-md:w-[25px] w-[32px] h-[2px] bg-white"></div>
          <div className="max-md:w-[25px] w-[32px] h-[2px] bg-white"></div>
        </div>
        <div className="flex max-s-xl:hidden text-white text-lg font-[700] items-center gap-2">
          <div className="logo"></div>
          <div className="max-s-xl:hidden">Inter Ed</div>
        </div>
      </div>
      <div className="h-[55px] relative w-full px-12 max-s-xl:justify-center  bg-primary flex justify-between items-center">
        <div className="max-s-xl:flex items-center max-sm:gap-1 text-white hidden gap-3">
        <div className="logo"></div>
          <div className="font-[600]">Inter Ed</div>
        </div>
        <div
          style={{ width: `${scrollPercentage}%` }}
          className="left-0 absolute h-[4px] bg-black bottom-0"
        ></div>
        <div
          className={`${
            scrollPercentage > 2 ? "opacity-90" : "opacity-0"
          }  transition-all text-base text-white max-s-xl:hidden`}
        >
          New course analytics features for students
        </div>
        <div className="flex max-s-xl:hidden items-center h-[36px]">
          <input
            placeholder="Your email address"
            className="outline-none text-lg font-[600] rounded-l-md px-3 w-[270px] h-full bg-white"
          />
          <button className="h-full px-4 rounded-r-md bg-[#242424] text-white">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;