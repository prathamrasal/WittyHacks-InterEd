import React from 'react'

const Input = ({label,error,...props}) => {
  return (
    <div>
        <label className='text-homePrimary font-[400]'>{label}</label>
        <input className='mt-2 rounded-lg placeholder:text-black placeholder:text-opacity-50 text-[16px] border-[2px] border-homePrimary w-full max-sm:py-[6px] py-[11px] px-5' {...props}/>
        {error && <p className='text-red-500 text-sm italic'>{error}</p>}
    </div>
  )
}

export default Input