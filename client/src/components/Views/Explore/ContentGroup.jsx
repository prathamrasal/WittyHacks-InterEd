import React from 'react'
import ContentItem from './ContentItem'
import { CONTENT_DATA } from '@/utils/data/ContentData'

const ContentGroup = () => {
  return (
    <div className='grid grid-cols-2 gap-12 my-7'>
       {CONTENT_DATA.map(item=>(
        <ContentItem {...item}/> 
       ))}
    </div>
  )
}

export default ContentGroup