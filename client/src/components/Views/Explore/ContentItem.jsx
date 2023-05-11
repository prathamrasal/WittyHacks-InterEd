import { useRouter } from 'next/router'
import React from 'react'

const ContentItem = ({img,title,desc,author,authorImg}) => {
  const router = useRouter();
  return (
    <div onClick={()=>router.push(`/app/blog/12`)} className='flex cursor-pointer items-center w-full gap-3'>
        <div style={{background : `url(${img}) center center/cover`}} className='w-[120px] shrink-0 rounded-md h-[120px] bg-gray-400'></div>
        <div className=''>
            <div className='text-lg font-semibold'>{title}</div>
            <div className='text-xs mt-1'>{desc}</div>
            <div className='mt-2 flex items-center  gap-2'>
                <div style={{background : `url(${authorImg}) center center/cover`}} className='h-[30px] w-[30px] bg-gray-300 rounded-full'></div>
                <div className='text-sm'>{author}</div>
            </div>
        </div>
    </div>
  )
}

export default ContentItem