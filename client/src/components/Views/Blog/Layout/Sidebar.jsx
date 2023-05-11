import { Drawer } from "@mui/material";
import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import SocialIconsGroup from "../SocialIconsGroup";

export const SidebarContents = () => {
  return (
    <div className="px-4 pt-8 max-h-[calc(100vh-55px)] no-scrollbar max-w-[250px] pb-10 h-full overflow-y-auto max-s-xl:relative fixed">
      <div className="text-xl">Latest Articles</div>
      <div className="mt-6 font-light text-lg space-y-1">
        <div className="">Education</div>
        <div className="">Web Development</div>
        <div className="">Object Oriented Programming</div>
        <div className="">Web Assembly</div>
      </div>
      <div className="mt-6 font-light text-lg space-y-1">
        <div className="">Product & Design</div>
        <div className="">Engineering</div>
        <div className="">News & Updates</div>
      </div>
      <div className="mt-6 font-light text-lg space-y-1">
        <div className="">Live Lectures</div>
      </div>
      <div className="mt-8 py-8 px-3 bg-[#f4f2f0]">
        <div className="grid grid-cols-[auto_36px] h-[36px]">
          <input
            className="px-2 w-full h-full bg-white outline-none rounded-l-md"
            placeholder="Search"
          />
          <button className="h-full shrink-0 text-white rounded-r-md w-[36px] bg-black flex items-center justify-center">
            <MdSearch size={22} />
          </button>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-gray-400 uppercase text-sm">Explore more</p>
        <div className="mt-1 font-light text-lg space-y-1">
          <div className="">Books & Guides</div>
          <div className="">Course Curation</div>
          <div className="">Course Creation</div>
          
        </div>
      </div>
      <div className="mt-6">
        <div className="text-sm font-[600] text-gray-400 uppercase">
          Follow us
        </div>
        <SocialIconsGroup className={"mt-3"} />
      </div>
      <div className="mt-10 text-sm opacity-60 font-light">About InterEd</div>
    </div>
  );
};

const Sidebar = ({sidebarOpen,setSidebarOpen}) => {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full">
      <div className="w-full max-s-xl:hidden relative">
        <SidebarContents />
      </div>
      <div className="hidden max-s-xl:block">
        <Drawer sx={{top : 300}} open={sidebarOpen} onClose={() => setSidebarOpen(false)}>
          <SidebarContents />
        </Drawer>
      </div>
    </div>
  );
};

export default Sidebar;