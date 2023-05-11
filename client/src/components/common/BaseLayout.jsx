import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const noBgPaths = ['/app/blog/create','/app/content/create', '/app/course/[id]', '/app/my-courses'];
  const router = useRouter();
  console.log(router.pathname)
  const isBg = noBgPaths.includes(router.pathname);
  return (
    <>
      <Sidebar></Sidebar>
      <div className={`pl-32 pr-9  ${!isBg?'bg-sgray':''}`}>
        {children}
      </div>
    </>
  );
};

export default Layout;
