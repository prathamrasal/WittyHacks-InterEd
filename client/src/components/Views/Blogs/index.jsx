import React from 'react';
import BlogLayout from '../Blog/Layout';
import FeaturedBlog from './FeaturedBlog';
import PopularBlogComponent from '../Blog/PopularBlogComponent';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Blogs = () => {
  return (
    <BlogLayout>
      <div className="px-4 py-8 border-b border-black">
        <div className="text-3xl font-semibold ">The Inter-Ed Curation</div>
        <div className="mt-2 font-[400] text-xl">
          Articles, Lectures on various technical and non-technical topics
        </div>
      </div>
      <div className='mt-6 px-5'>
        <FeaturedBlog/>
        <div className='mt-12 grid grid-cols-3 gap-8'>
            <PopularBlogComponent/>
            <PopularBlogComponent/>
            <PopularBlogComponent/>
            <PopularBlogComponent/>
            <PopularBlogComponent/>
            <PopularBlogComponent/> 
        </div>
        <div className='flex items-center mt-8 opacity-60 gap-4 hover:underline cursor-pointer justify-center'>
            See More Blogs <AiOutlineArrowRight/>
        </div>
      </div>
    </BlogLayout>
  );
};

export default Blogs;
