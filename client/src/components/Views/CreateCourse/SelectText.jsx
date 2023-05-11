import React from 'react'
import { MdClear } from 'react-icons/md'

const SelectedText = ({text})=>{
    return (
        <div className='px-4 py-1 bg-gray-200 text-sm flex items-center gap-2 text-gray-500 rounded-2xl'>
            {text}
            <MdClear className='text-sm'/>
        </div>
    )
}

const SelectText = () => {
  return (
    <div>
        <div className="text-sm font-[600] opacity-80  uppercase">WHAT STUDENTS WILL LEARN</div>
        <input placeholder='What will students learn..' className='py-3 rounded-md mt-3 text-sm border focus:border-primary w-full px-4'/>
        <div className='mt-4 flex flex-wrap gap-3'>
            <SelectedText text='How to create UI UX'/>
            <SelectedText text='How to learn add'/>
        </div>
    </div>
  )
}

export default SelectText