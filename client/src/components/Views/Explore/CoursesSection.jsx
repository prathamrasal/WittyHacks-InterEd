import React from 'react'
import CourseItem from './CourseItem'
import { CourseData } from '@/utils/data/CourseData'

const CoursesSection = () => {
  return (
    <div className='grid w-full gap-5 grid-cols-3'>
        {CourseData.map((item,idx)=>(
          <CourseItem key={idx} item={item}/>
        ))}
    </div>
  )
}

export default CoursesSection