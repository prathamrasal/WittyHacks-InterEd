import React from 'react'
import {FcGoogle} from 'react-icons/fc';
const GoogleAuthButton = ({text}) => {
  return (
    <div className='w-full p-[1px] cursor-pointer py-3 text-center relative  rounded-md bg-[#286efa]'>
        <div className='bg-white absolute  p-4 top-[1px] bottom-[1px] left-[1px] rounded-l-md'><FcGoogle size={18}/></div>
        <div className='text-white font-[700]'>{text || 'Signin with Google'}</div>
    </div>
  )
}

export default GoogleAuthButton