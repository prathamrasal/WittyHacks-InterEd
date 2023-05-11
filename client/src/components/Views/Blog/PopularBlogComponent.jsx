import React from 'react'

const BLOG_IMG = 'https://blog.intercomassets.com/blog/wp-content/uploads/2018/01/RICE_Simple_Prioritization-530x240.jpg.optimal.jpg'

const PopularBlogComponent = () => {
  return (
    <div className='w-full h-auto relative pb-5 min-h-[580px] border-b-[2px]'>
        <div className='h-[250px] w-full max-xs:h-[200px]'><img src={BLOG_IMG} className='w-full h-full'/></div>
        <div className='mt-3 text-sm  uppercase font-light'>Front-end development - 5 Min READ</div>
        <div className='mt-4 text-2xl max-md:text-xl font-semibold'>What makes javascript great for beginners?</div>
        <div className='mt-5 text-lg max-md:text-base text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dicta, minima cum tempore autem dolore excepturi porro....</div>
        <div className='absolute left-0 bottom-3 flex items-center gap-3'>
            <div className='w-[40px] h-[40px] rounded-full bg-gray-400'></div>
            <div>
                <div className='font-[500] uppercase'>Kunal Sangtiani </div>
                <div className='text-sm font-light text-gray-600'>Former Senior SDE, InterEd</div>
            </div>
        </div>
    </div>
  )
}

export default PopularBlogComponent