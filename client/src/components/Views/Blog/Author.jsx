import React from 'react'

const Author = ({className}) => {
  return (
    <div className={className}>
    <div className={`w-full flex max-md:flex-row items-start max-xl:flex-col gap-4`}>
        <div className='h-[75px] max-sm:h-[55px] max-sm:w-[55px] max-xl:h-[65px] shrink-0 max-xl:w-[65px] w-[75px] bg-gray-500 rounded-full'></div>
        <div>
            <div className='text-xl max-md:text-lg max-sm:text-base font-semibold'>Nadine mansour</div>
            <div className='mt-0 max-sm:text-sm'>Product Manager, InterEd</div>
            <div className='mt-12 max-md:mt-6 max-sm:text-sm max-sm:mt-4'>03 Dec 2022</div>
        </div>
    </div>
    </div>
  )
}

export default Author