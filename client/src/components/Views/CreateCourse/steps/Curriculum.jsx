import React, { useState } from 'react';
import { MdAdd, MdDelete, MdOutlineDelete } from 'react-icons/md';
import { TbEdit } from 'react-icons/tb';
import { SlArrowDown } from 'react-icons/sl';
import { RxDragHandleDots2 } from 'react-icons/rx';
import RadioSelection from '../RadioSelection';
const SectionTab = ({ title, isExpandable, handleExpandClick }) => {
  return (
    <div
      className={`${
        isExpandable ? 'py-4' : 'py-3'
      } w-full flex items-center justify-between  cursor-pointer px-6 border bg-white bg-opacity-80 hover:bg-opacity-100  rounded-md font-[500]`}
    >
      <div className="flex items-center gap-3">
        {isExpandable && <SlArrowDown />}
        <RxDragHandleDots2
          onClick={() => handleExpandClick()}
          className="cursor-move"
        />
        {title}
      </div>
      <div className="flex items-center gap-3">
        <TbEdit className="opacity-60 cursor-pointer text-lg" />
        <MdOutlineDelete className="opacity-60 cursor-pointer text-lg" />
      </div>
    </div>
  );
};

const Section = ({ title }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="min-h-[80vh]">
      <SectionTab
        handleExpandClick={() => setIsExpanded((prev) => !prev)}
        isExpandable={true}
        title="Course on React Js"
      />
      {isExpanded && (
        <div className="pl-8 mt-4 space-y-3">
          <SectionTab title="React introduction and states" />
          <SectionTab title="React introduction and states" />
          <SectionTab title="React introduction and states" />
          <SectionTab title="React introduction and states" />
        </div>
      )}
    </div>
  );
};

const Curriculum = () => {
  return (
    <div>
    <div className="mt-8 grid grid-cols-[0.55fr_0.5fr] w-full gap-16">
      <div className="w-full">
        <div className='w-full py-2 cursor-pointer rounded-md border-dashed border-2 border-black opacity-40 hover:opacity-100 mb-4 flex items-center justify-center'>
          <MdAdd/> Create
        </div>
        <Section title="Full Stack MERN" />
        
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-semibold">Edit</div>
            <div className="mt-1 text-sm">
              <span className="opacity-50">Course / Question /</span> What is
              react state
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MdDelete /> Delete
          </div>
        </div>
        <div className="mt-2">
          <input className="py-2 border w-full border-gray-400 mt-2 bg-transparent rounded-md" />
        </div>
        <div className="mt-5">
          <RadioSelection
            label="Material Type:"
            options={[
              { label: 'Video Lecture', value: 'video' },
              { label: 'Blog', value: 'blog' },
            ]}
          />
        </div>
        <div className="mt-5">
          <RadioSelection
            label="Cost Type:"
            options={[
              { label: 'Free', value: 'free' },
              { label: 'Paid', value: 'paid' },
            ]}
          />
        </div>
        <div className="mt-5">
          <div className="text-base w-full font-[500] mb-3">
            Course Asset URL:
          </div>
          <input
            placeholder="Asset URL: InterEd URL, Youtube URL"
            className="py-2 border placeholder:text-sm  px-3 outline-none w-full border-gray-400 mt-2 bg-transparent rounded-md block"
          ></input>
        </div>
        <div className="mt-5">
          <div className="text-base w-full font-[500] mb-3">
            Learning Objective / Description
          </div>
          <textarea
            placeholder="Description"
            rows={5}
            className="py-2 border placeholder:text-sm  px-3 outline-none w-full border-gray-400 mt-2 bg-transparent rounded-md block"
          ></textarea>
        </div>
      </div>
     
    </div>
    <div className='flex mt-5 items-center text-white justify-end'>
      <button className='bg-primary px-6 py-2 rounded-md'>Create Course</button>
     </div>
    </div>
  );
};

export default Curriculum;
