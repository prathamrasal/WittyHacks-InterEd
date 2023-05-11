import React from 'react'
import { MdCheck } from 'react-icons/md';

export const COURSE_ITEM_STATUSES = {
    completed : 'COMPLETED',
    ongoing : 'ONGOING',
    Upcoming : 'UPCOMING'
}

const CourseItem = ({status,title,index}) => {
    const isDone = status === COURSE_ITEM_STATUSES.completed;
    const isOngoing = status === COURSE_ITEM_STATUSES.ongoing;
  return (
    <div className={`${isDone?'':''} ${isOngoing?'bg-[#f9f9f9]':''} py-3 px-2 flex items-center cursor-pointer justify-between hover:bg-[#f9f9f9] transition-all rounded-md`}>
        <div className='flex flex-[0.7] items-center gap-5'>
            <div className={`${isDone?'opacity-40':'opacity-50'} text-base shrink-0 `}>{index}</div>
            <div className={`${isDone?'line-through opacity-40':''} ${isOngoing?'font-semibold':''}`}>{title}</div>
        </div>
        {isDone&&<div className=''><MdCheck className='text-green-500' size={20}/></div>}
    </div>
  )
}

export default CourseItem