import { useRouter } from 'next/router';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { MdStar } from 'react-icons/md';

const CourseItem = ({item}) => {
  const router = useRouter();
  return (
    <div  className=" rounded-lg bg-white w-full p-2">
      <div style={{background : `url(${item?.img}) center center/cover`}} className="h-[150px] w-full bg-gray-200 rounded-lg"></div>
      <div className="flex items-center mt-3 justify-between">
        <div className="w-[60%] text-base font-[500]">
          {item?.title}
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center  gap-[2px] text-sm text-orange-400">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div className="text-xs mt-1">3.00</div>
        </div>
      </div>
      <div className="w-full mt-4 flex items-center justify-between">
        <div className=" flex items-center gap-2">
          <div style={{background : `url(${item?.authorImg}) center center/cover`}} className="rounded-full bg-gray-200  w-[28px] h-[28px]"></div>
          <div className="text-sm">{item?.authorName}</div>
        </div>
        <button onClick={()=>router.push(`/app/course/${item?.id}`)} className='bg-primary px-5 text-white rounded-md text-sm py-1'>Enroll</button>
      </div>
    </div>
  );
};

export default CourseItem;
