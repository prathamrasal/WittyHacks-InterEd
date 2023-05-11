import React, { useState } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const BlogLayout = ({ children, scrollPercentage }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="w-full">
      <Header
        setSidebarOpen={setSidebarOpen}
        scrollPercentage={scrollPercentage}
      />
      <div className="grid max-s-xl:grid-cols-1 mt-[55px] max-[1370px]:grid-cols-[0.25fr_0.85fr] grid-cols-[0.18fr_0.85fr] relative">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div>
          <div className="">{children}</div>
          <div className="mt-10">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;