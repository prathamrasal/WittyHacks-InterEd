import Layout from '@/components/common/BaseLayout';
import React, { useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { IoMdNotificationsOutline } from 'react-icons/io';
import BlogAdditionalDataModal from './BlogAdditionalDataModal';

const CreateBlog = () => {
    const [isHeaderMenu,setIsHeaderMenu] = useState(false);
    const [isAdditionalDataModal,setIsAdditionalDataModal] = useState(false);
    const [blogData,setBlogData] = useState({
      name : "",
      detail : "",
      thumbnail : "",
      type : "blog",
      category : "",
      tags : "",
    })
    const handleChange =(e)=>{
      setBlogData(prev=>({
        ...prev,[e.target.name] : e.target.value
      }))
    }
  return (
    <Layout>
      <BlogAdditionalDataModal blogData={blogData} setBlogData={setBlogData} open={isAdditionalDataModal} setOpen={setIsAdditionalDataModal}/>
      <div className="flex items-center px-12 justify-between">
        <div className="text-base flex  items-center gap-5">
          <div>
            <AiOutlineArrowLeft className="cursor-pointer" />
          </div>
          <div className="text-2xl font-[500]">Write Blog</div>
        </div>
        <div className="flex py-6 space-x-4 px items-center gap-3">
          <button onClick={()=>setIsAdditionalDataModal(true)} className="bg-primary px-5 py-1 text-white rounded-2xl">
            Publish
          </button>
          <BsThreeDots className="cursor-pointer text-lg" />
          <IoMdNotificationsOutline className="cursor-pointer text-lg" />
        </div>
      </div>
      <div className="mt-5 px-20">
        <input
          className="Appearance None text-3xl outline-none py-4 border-b w-full"
          placeholder="Title"
          value={blogData.name} 
          name='name'
          onChange={handleChange}

        />
        <div className="mt-8">
          <textarea
            rows={10}
            className="w-full outline-none appearance-none text-lg"
            placeholder="Whaat's on your mind?"
            value={blogData.detail}
            name='detail'
            onChange={handleChange}
          />
        </div>
      </div>
    </Layout>
  );
};

export default CreateBlog;
