import React from 'react';
import ProfileCategory from './ProfileCategory';
import MyCourse from './MyCourse';
import { BsDot } from 'react-icons/bs';
import MyBlog from './MyBlog';
import { useAppStore } from '@/hooks/useAppStore';

let P_IMG = 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80'

const ProfileSection = () => {
  const user = useAppStore(state=>state.user);
  return (
    <div className="rounded-md bg-white p-6 px-4">
      <div className="flex items-center justify-center flex-col">
        <div style={{background : `url(${P_IMG}) center center/cover`}} className="w-[80px] h-[80px] rounded-full bg-gray-200"></div>
        <div className="text-center text-lg font-semibold mt-3">
          {user?.fullName}
        </div>
        <div className="flex items-center gap-1 font-semibold bg-green-100 text-green-600 border-green-600 rounded-md px-3 py-1 mt-2">
          <BsDot />
          <div className="text-xs">Active</div>
        </div>
      </div>
      <div className="mt-8 space-y-6">
        <ProfileCategory options={['Latest', 'Older']} title="Ongoing Courses">
          <div className=" space-y-3">
            {
              user?.courses?.length>0?
              user?.courses?.map((course, index)=>(
                <MyCourse key={index} course={course} />
              )):(
                <div className='opacity-60'>No Courses Enrolled.</div>
              )
            }
            {user?.courses?.length>0&&<div className="pt-2 flex justify-end items-center">
              <div className="text-sm cursor-pointer underline text-blue-600 font-[500]">
                View All
              </div>
            </div>}
          </div>
        </ProfileCategory>
        <ProfileCategory
          options={['Blogs', 'Courses']}
          title="Previously Viewed"
        >
          <div className=" space-y-3">
            <MyBlog />
            <MyBlog />
          </div>
        </ProfileCategory>
      </div>
    </div>
  );
};

export default ProfileSection;
