import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import React, { useState } from 'react';
import { BsBookmarkDash } from 'react-icons/bs';
import { MdShare } from 'react-icons/md';
import TabPanel from './TabPanel';
import Description from './Tabs/Description';
import CourseItem, { COURSE_ITEM_STATUSES } from './CourseItem';

const Course = () => {
  const [tabValue, setTabValue] = useState(1);
  return (
    <div className="py-6  grid min-h-[100vh] grid-cols-[4fr_1.5fr]">
      <div className="border-r px-5">
        <div className="flex items-center text-sm gap-3">
          <div className="text-gray-400">My Courses / Management / </div>
          <div className="font-semibold">Project Management</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="mt-2 text-2xl font-semibold">
            React Js Introduction & State
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center cursor-pointer justify-center rounded-full w-[45px] h-[45px] border border-gray-200">
              <MdShare />
            </div>
            <div className="flex items-center cursor-pointer justify-center rounded-full w-[45px] h-[45px] border border-gray-200">
              <BsBookmarkDash />
            </div>
          </div>
        </div>
        <div className="mt-1 text-base text-gray-500">Piyush Agraawal</div>
        <div style={{background : `url(https://images.unsplash.com/photo-1605711285791-0219e80e43a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80) center center/cover`}} className="mt-5 h-[500px] rounded-md  bg-gray-200"></div>
        <div className="mt-3">
          <Tabs
            className="border-b "
            value={tabValue}
            onChange={(_, newValue) => setTabValue(newValue)}
          >
            <Tab label="Description" value={1} />
            <Tab label="Reviews" value={2} />
            <Tab label="Resources" value={4} />
            <Tab label="Instructor" value={5} />
          </Tabs>
          <TabPanel>
            <Description />
          </TabPanel>
        </div>
      </div>
      <div className="px-4">
        <div className="text-xl font-semibold">About the course</div>
        <div className="my-4 flex items-center gap-2">
          <div className="w-[45px] h-[45px] rounded-full bg-gray-300"></div>
          <div>
            <div className="font-[500]">Prof. Piyush Agrawal</div>
            <div className="text-xs opacity-50">CP Expert</div>
          </div>
        </div>
        <div className="mt-2 text-sm font-[500] text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut omnis
          adipisci nulla qui, Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet. cupiditate... <span className=" text-gray-600">read more!</span>
        </div>
        <div className='border-t mt-8 py-4'>
          <div className='text-xl font-semibold'>Course Completion</div>
          <div className='flex opacity-50 font-[600] mt-3 items-center justify-between text-sm'>
            <div className=''>33% Completed</div>
            <div className=''>5/15</div>
          </div>
          <div className='w-full h-[3px] mt-3 bg-gray-400'>
            <div className='w-[60%] bg-blue-500 h-full'></div>
          </div>
        </div>
        <div className='py-1 mt-0 space-y-2'>
          <CourseItem index='01' status={COURSE_ITEM_STATUSES.completed} title='React Introduction with assets'/>
          <CourseItem title='Project Management Processes' index={'02'} status={COURSE_ITEM_STATUSES.ongoing}/>
          <CourseItem title='Management with indexed ar..' index={'03'} status={COURSE_ITEM_STATUSES.Upcoming}/>
          <CourseItem title='Management with indexed ar..' index={'04'} status={COURSE_ITEM_STATUSES.Upcoming}/>
          <CourseItem title='Management with indexed ar..' index={'05'} status={COURSE_ITEM_STATUSES.Upcoming}/>
        </div>
      </div>
    </div>
  );
};

export default Course;
