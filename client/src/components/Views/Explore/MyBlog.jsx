import React from 'react'

const MyBlog = () => {
  return (
    <div className='bg-sgray rounded-lg py-2 w-full px-2'>
        <div className='flex items-center gap-3'>
            <div className='rounded-md bg-gray-300 w-[40px] h-[40px]'></div>
            <div>
                <div className=''>Multiple ratios of maths</div>
                <div className='text-xs text-gray-400'>Viewed 3h ago</div>
            </div>
        </div>
        <div className='mt-2 text-gray-400 text-xs'>Lorem ipsum dolor sit amet Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, rerum? ... </div>
    </div>
  )
}

export default MyBlog