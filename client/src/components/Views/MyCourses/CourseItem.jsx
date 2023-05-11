import { useRouter } from 'next/router'
import React from 'react'

const CourseItem = ({title,img,category,status,completion,level,duration}) => {
  const router = useRouter();
  return (
    <div onClick={()=>router.push(`/app/course/12`)} className='py-4 hover:bg-gray-50 transition-all cursor-pointer border-b grid items-center px-4 grid-cols-[40%_20%_10%_10%_10%_10%]'>
        <div className='flex items-center gap-4'>
            <div style={{background : `url(${img}) center center/cover`}} className='w-[80px] h-[55px] rounded-md shrink-0 bg-gray-400'></div>
            <div className='text-base font-[600]'>{title}</div>
        </div>
        <div className='text-sm text-gray-600'>{category}</div>
        <div className='text-sm text-gray-600'>{duration}</div>
        <div className='text-sm text-gray-600'>{completion}</div>
        <div className='text-sm text-gray-600'>{level}</div>
        <div className='text-sm text-gray-600'>{status}</div>
    </div>
  )
}

export default CourseItem