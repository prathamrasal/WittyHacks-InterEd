import React from 'react'
import { MdStar } from 'react-icons/md'

const SelectedTeacher = ()=>{
    return (
        <div className='h-[80px] px-7 pl-0 bg-purple-200 shadow-purple-50 shadow-xl flex items-center gap-2 rounded-xl'>
            <div className='w-[70px] h-full rounded-xl shrink-0 bg-gray-400'></div>
            <div className=''>
                <div className='font-semibold'>Jane Hawkins</div>
                <div>
                    <div className='text-xs opacity-50'>Rating</div>
                    <div className='flex mt-1 text-yellow-500 items-center gap-[3px] text-lg'>
                        <MdStar/>
                        <MdStar/>
                        <MdStar/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const TeachersCollection = () => {
  return (
    <div className='flex items-center justify-between'>
        <div className='flex items-center gap-8'>
            <SelectedTeacher/>
            <div className='flex items-center gap-6'>
                <div className='w-[80px] h-[80px] bg-yellow-400 rounded-xl'></div>
                <div className='w-[80px] h-[80px] bg-orange-400 rounded-xl'></div>
                <div className='w-[80px] h-[80px] bg-blue-400 shadow-xl shadow-blue-200 rounded-xl'></div>
                <div className='w-[80px] h-[80px] bg-orange-400 shadow-xl shadow-orange-2 rounded-xl'></div>
                <div className='w-[80px] h-[80px] bg-orange-400 shadow-xl shadow-orange-200 rounded-xl'></div>
                <div className='w-[80px] h-[80px] bg-orange-400 shadow-xl shadow-orange-200 rounded-xl'></div>
            </div>
            <div className='h-[80px] px-4 bg-red-400 rounded-xl shadow-lg shadow-red-200 flex items-center text-center text-white '>
                All
            </div>
        </div>
    </div>
  )
}

export default TeachersCollection