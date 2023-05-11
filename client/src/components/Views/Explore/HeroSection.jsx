import { Splide, SplideSlide } from '@splidejs/react-splide'
import React from 'react'

const BG_IMG = 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'

const HeroSection = () => {
  return (
    <div className='my-5 relative z-[1]'>
        <div style={{background : `url(${BG_IMG}) center center/cover`}} className='h-[250px] flex items-center py-4 px-6 relative bg-gray-300 rounded-xl w-full'>
          <div className='bg-black/40 absolute top-0 left-0 z-[1] w-full h-full'></div>
          <div className='relative z-[2]'>
            <div className='text-3xl text-white font-bold'>Learn the way that suits you!</div>
            <div className='mt-3 text-sm opacity-80 text-white w-[60%]'>Inter Ed provides tailored expereince to empower your eduction and prepare you for a better future!</div>
            <button className='px-6 py-1 rounded-md text-white mt-3 bg-primary text-sm'>Get Started</button>
          </div>
        </div>
    </div>
  )
}

export default HeroSection