import React from 'react'

const MyCourse = () => {
  return (
    <div className='py-2 bg-sgray rounded-lg px-3 flex gap-3 items-center '>
        <div className='w-[50px] h-[50px] shrink-0 rounded-full bg-gray-300'></div>
        <div className='w-full'>
            <div className='flex items-center justify-between w-full'>
                <div className='text-base font-[500]'>Online Marketing</div>
                <div className='text-gray-500 text-sm font-[600]'>91%</div>
            </div>
            <div className='mt-2 w-full h-[3px] bg-gray-300'>
                <div className='bg-blue-600 w-[60%] h-full'></div>
            </div>
        </div>
    </div>
  )
}

export default MyCourse