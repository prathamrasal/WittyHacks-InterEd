import React from 'react';
import MyCourse from './MyCourse';

const ProfileCategory = ({title,options,children}) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div className="text-base font-semibold">{title}</div>
        <select className="px-4 outline-none py-1 rounded-md bg-gray-100 flex items-center text-gray-600">
         {options?.map(item=><option>{item}</option>)}
        </select>
      </div>
      <div className='mt-6'>
        {children}
      </div>
    </div>
  );
};

export default ProfileCategory;
