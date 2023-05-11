import React from 'react'

const CategoryItem = ({isActive,title})=>{
    return (
        <div className={`${isActive?'bg-primary text-white':'hover:bg-primary hover:text-white transition-all'} px-5 py-2 cursor-pointer text-gray-600 rounded-full`}>
            {title}
        </div>
    )
}

const CategorySelection = () => {
  return (
    <div className='flex items-center gap-4'>
        <CategoryItem title='Trending' isActive={true}/>
        <CategoryItem title='Blogs' />
        <CategoryItem title='Lectures' />

    </div>
  )
}

export default CategorySelection