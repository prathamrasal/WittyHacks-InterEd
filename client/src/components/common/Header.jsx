import React from 'react'
import { MdSearch } from 'react-icons/md'
import {IoMdNotificationsOutline,} from 'react-icons/io'
import {IoSettingsOutline} from 'react-icons/io5'
import { useAppStore } from '@/hooks/useAppStore'
const Header = () => {
    const user = useAppStore(state=>state.user);
  return (
    <div className='flex items-center justify-between w-full py-3'>
        <div>
            <div className='text-base font-[500]'>Hello, {user?.fullName}</div>
            <div className='text-sm opacity-60'>welcome to your dashboard</div>
        </div>
        <div className='flex items-center gap-5'>
            <div className='flex items-center gap-2 relative'>
                <MdSearch className='text-lg text-gray-400 absolute left-2'/>
                <input placeholder='Search your courses..' className='w-[250px] text-sm py-[10px] bg-white rounded-lg placeholder:text-gray-400 pl-9'/>
            </div>
            <div className='w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center'>
                <IoMdNotificationsOutline className='text-lg'/>
            </div>
            <div className='w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center'>
                <IoSettingsOutline className='text-lg'/>
            </div>
        </div>
    </div>
  )
}

export default Header