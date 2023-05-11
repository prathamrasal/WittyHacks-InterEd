import React from 'react'

const Header = () => {
  return (
    <div className='py-9 px-10 w-full flex items-center justify-between'>
        <div className='font-semibold uppercase text-lg'>Inter<span className='lowercase'>Ed</span></div>
        <button className='px-6 py-2 bg-black text-white font-semibold rounded-md'>Join InterEd</button>
    </div>
  )
}

export default Header