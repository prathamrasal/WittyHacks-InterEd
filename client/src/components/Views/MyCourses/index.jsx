import Layout from '@/components/common/BaseLayout'
import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import CourseItem from './CourseItem'

const MyCourses = () => {
    const [courseView,setCourseView] = useState(0);
  return (
    <Layout>
        <div className='py-8'>
            <div className='text-3xl'>My Courses</div>
            <div className='flex items-center pb-3 mt-10 border-b justify-between'>
                <div className='flex gap-5 items-center'>
                    <div onClick={()=>setCourseView(0)} className={`px-6 ${courseView === 0?'font-[600]':'opacity-70 hover:opacity-100'} cursor-pointer`}>Enrolled Courses</div>
                    <div onClick={()=>setCourseView(1)} className={`px-6 ${courseView === 1?'font-[600]':'opacity-70 hover:opacity-100'} cursor-pointer`}>Created Courses</div>
                </div>
                <div className='flex items-center gap-10'>
                    <select className='bg-transparent'>
                        <option value="">All</option>
                    </select>
                    <CiSearch size={20}/>
                </div>
            </div>
            <div className='w-full mt-5 border rounded-sm'>
                <div className='py-4 grid border-b px-5 grid-cols-[40%_20%_10%_10%_10%_10%]'>
                    <div className='w-full'>Course Name</div>
                    <div className='w-full'>Category</div>
                    <div className='w-full'>Duration</div>
                    <div className='w-full'>Completion</div>
                    <div className='w-full'>Level</div>
                    <div className='w-full'>Status</div>
                </div>
                <div>
                    <CourseItem category={'UI/UX'} completion={'90%'} img={'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} level={'Beginner'} status={'Ongoing'} title={'Mastering Figma with sets'} duration='2h 30min'/>
                    <CourseItem category={'Git'} completion={'90%'} img={'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} level={'Beginner'} status={'Ongoing'} title={'Git Expert in 24 hours'} duration='24h 30min'/>
                    <CourseItem category={'UI/UX'} completion={'90%'} img={'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} level={'Beginner'} status={'Ongoing'} title={'Mastering Figma with sets'} duration='2h 30min'/>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default MyCourses