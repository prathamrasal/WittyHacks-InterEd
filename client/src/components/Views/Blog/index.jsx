import React, { useEffect, useState } from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import Author from './Author';
import BlogLayout from './Layout';
import PopularBlogComponent from './PopularBlogComponent';

const TEST_BLOG_IMG =
  'https://blog.intercomassets.com/blog/wp-content/uploads/2021/12/real-time-reporting-dashboard-1-1800x840.jpg.optimal.jpg';

const TEST_BLOG_CONTENT_IMG =
  'https://blog.intercomassets.com/blog/wp-content/uploads/2021/12/Dashboard-overview.jpg.optimal.jpg';

export const getScrollPercentage = () => {
  let scrollTop = window.scrollY;
  let docHeight = document.body.offsetHeight;
  let winHeight = window.innerHeight;
  let scrollPercent = scrollTop / (docHeight - winHeight);
  let scrollPercentRounded = Math.round(scrollPercent * 100);
  console.log(scrollPercentRounded, 'Scroll Perecntage 344');
  return Math.min(scrollPercentRounded, 100);
};

const Blog = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPercentage(getScrollPercentage());
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BlogLayout scrollPercentage={scrollPercentage}>
      <div className="relative">
        <div className="items-center z-[100000] w-full justify-center max-xs:gap-3 gap-5 bg-white hidden max-md:flex border-black border-t-[2px] py-3 px-3 fixed bottom-0">
          <div className="uppercase font-[600]  text-lg">
            SHARE THIS ARTICLE
          </div>
          <div className="flex items-center text-xl max-xs:text-lg gap-3">
            <AiOutlineTwitter />
            <FaLinkedinIn />
            <BsFacebook />
          </div>
        </div>
        {scrollPercentage > 10 && scrollPercentage < 60 && (
          <div className="opacity-50 max-md:hidden fixed z-[1000] bottom-[10%] right-[6%] transition-all">
            <div className="uppercase font-[600]">SHARE THIS ARTICLE</div>
            <div className="flex items-center mt-1 gap-4 text-3xl">
              <AiOutlineTwitter />
              <FaLinkedinIn />
              <BsFacebook />
            </div>
          </div>
        )}
        <div className="w-full h-auto">
          <img src={TEST_BLOG_IMG} className="w-full  h-full block" />
        </div>
        <div className="px-16 max-sm:px-3 max-md:grid-cols-1 max-md:px-8 mt-16 max-md:mt-7 lg:px-10 max-lg:mt-12 grid gap-5 grid-cols-[0.75fr_0.25fr]">
          <div>
            <h1 className="text-6xl max-xs:text-xl max-lg:text-5xl max-md:text-3xl max-sm:text-2xl max-[850px]:text-4xl font-bold">
              Deploy a React Vite app using GitHub Actions and GitHub Pages
            </h1>
            <Author className={'hidden mt-10 max-md:block'} />
            <div className="pr-8 max-sm:pr-0">
              <h3 className="mt-10 pr-8 max-sm:text-xl text-3xl max-md:text-2xl max-md:mt-7 text-black">
                Node.js is a popular runtime environment for building web
                applications. One of the most common features of web
                applications is the ability to upload files. In Node.js, one of
                the best libraries for handling file uploads is Multer.
              </h3>
              <p className="mt-8  font-[400]  max-sm:text-lg opacity-80 text-xl">
                When configuring Multer, we need to create a storage object that
                specifies the destination and filename of the uploaded file. The
                destination property is a function that takes the request (req),
                the uploaded file (file), and a callback function (cb). The
                callback function is called with an error object (err) and the
                destination folder path as its parameters.
              </p>
              <div className="w-full mt-8 h-auto">
                <img className="w-full h-full" src={TEST_BLOG_CONTENT_IMG} />
              </div>
            </div>
          </div>
          <Author className={'max-md:hidden'} />
        </div>
        <div className="mt-16 text-2xl font-semibold text-center py-4 border-b-[1px]">
          Most Popular
        </div>
        <div className="mt-8 grid max-xs:px-2 max-sm:px-3 max-lg:grid-cols-2 max-md:grid-cols-1 grid-cols-3 px-10 gap-7">
          <PopularBlogComponent />
          <PopularBlogComponent />
          <PopularBlogComponent />
        </div>
        <div className="mt-16 flex max-s-xl:px-6 max-lg:flex-col max-lg:items-start max-lg:gap-3 items-center gap-8 px-2">
          <div className="text-2xl max-s-xl:text-xl max-xs:text-base max-md:text-lg ">
            Sign up for our newsletter
          </div>
          <div className="flex items-center h-[48px] max-md:h-[40px]">
            <input
              placeholder="Your email address"
              className="w-[270px]  max-xs:w-[160px] rounded-l-md h-full max-md:text-base px-3 text-lg bg-[#f4f2f0] "
            />
            <button className="h-full px-5 bg-black text-xl max-xs:text-sm max-xs:px-2 max-md:text-base rounded-r-md text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
};

export default Blog;
