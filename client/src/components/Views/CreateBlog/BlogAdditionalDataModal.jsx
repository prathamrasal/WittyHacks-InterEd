import BasicModal from '@/components/common/Modal';
import { IconButton } from '@mui/material';
import React, { useRef } from 'react';
import { BsFillImageFill } from 'react-icons/bs';
import { MdClear } from 'react-icons/md';
import Input from '../Auth/Input';

const BlogAdditionalDataModal = ({ open, setOpen, blogData,setBlogData }) => {
  const handleChange = (e)=>{
    setBlogData({...blogData,[e.target.name] : e.target.value})
  }
  const inputRef = useRef();
  return (
    <BasicModal open={open} setOpen={setOpen}>
      <div className="bg-white p-4 rounded-md w-[42vw]">
        <div className="flex items-center justify-between">
          <div className="text-lg font-[500]">Additional Information</div>
          <IconButton onClick={()=>setOpen(false)} color="primary">
            <MdClear />
          </IconButton>
        </div>
        <div className="mt-4">
          <input ref={inputRef} className='hidden'/>
          <div onClick={inputRef?.current?.click } className="w-full py-4 border-2 border-black opacity-40 transition-all hover:opacity-100 cursor-pointer border-dashed flex items-center justify-center gap-2">
            <BsFillImageFill /> Add Thumbnail
          </div>
          <div className=""></div>
        </div>
        <div className='mt-5 space-y-3'>
          <Input name='category' onChange={handleChange} value={blogData.category} label={'Category'} placeholder='category'/>
          <Input name='tags' onChange={handleChange} value={blogData.tags} label={'Tags'} placeholder='Enter Tags'/>
        </div>
        <div className='mt-6 flex justify-start'>
          <button className='px-12 text-white py-2 rounded-md bg-primary'>Save</button>
        </div>
      </div>
    </BasicModal>
  );
};

export default BlogAdditionalDataModal;
