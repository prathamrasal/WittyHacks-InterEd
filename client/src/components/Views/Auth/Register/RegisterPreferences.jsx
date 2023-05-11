import { useRouter } from 'next/router';
import React, { useState } from 'react';

const PreferenceItem = ({title,isSelected, handleClick,value})=>{
    return (
        <div onClick={()=>handleClick(value)} className={`${isSelected?'bg-primary text-white':''} px-6 py-[6px] border rounded-3xl text-sm hover:text-white cursor-pointer transition-all text-gray-500 hover:bg-primary`}>{title}</div>
    )
}

const PREFERENCE_ITEMS = [
  {value : 'blog', label : "Blog"},
  {value : 'video', label : "Video Lectures"},
  {value : 'audio', label : "Audio Books"},
]
const INTERESTED_TOPIC = [
  {value : "React", label : "React"},
  {value : "Node Js", label : "node"},
  {value : "Next.Js", label : "next"},
  {value : "Redis", label : "redis"},
  {value : "MongoDB", label : "mongo"},
  {value : "Express", label : "express"},

]

const RegisterPreferences = ({
  studyPreferences,setStudyPreference,
  interestedTopics,setInterestedTopics,
  isLoading,handleRegisterCall
}) => {
  const router = useRouter();
 
  const handleStudyPrefClick = (value)=>{
    if(studyPreferences.includes(value)){
      setStudyPreference(studyPreferences.filter(item=>item!==value))
    }else{
      setStudyPreference([...studyPreferences,value])
    }
  }
  const handleInterestedTopicClick = (value)=>{
    if(interestedTopics.includes(value)){
      setInterestedTopics(interestedTopics.filter(item=>item!==value))
    }else{
      setInterestedTopics([...interestedTopics,value])
    }
  }
  return (
    <div className="w-[30%] 2max-xl:w-[40%] mx-auto max-xl:w-[50%] max-lg:w-[55%] max-lg:mt-20 max-sm:mt-12 max-xs:mt-10 max-md:w-[70%] max-sm:w-[90%]">
      <div className="text-3xl font-semibold text-center">
        Customize your experience
      </div>
      <div className='mt-10 space-y-10'>
        <div className=''>
            <div className='text-base pb-2 border-b'>Study Preferences</div>
            <div className='mt-3 flex gap-5'>
              {
                PREFERENCE_ITEMS.map((item,index)=>(
                  <PreferenceItem handleClick={handleStudyPrefClick} value={item.value} isSelected={studyPreferences.includes(item.value)} key={index} title={item.label}/>
                ))
              }
            </div>
        </div>
        <div className=''>
            <div className='text-base pb-2 border-b'>Interested Topics</div>
            <div className='mt-3 flex gap-5 gap-y-3 items-center flex-wrap'>
                {INTERESTED_TOPIC.map(item=>(
                    <PreferenceItem handleClick={handleInterestedTopicClick} value={item.value} isSelected={interestedTopics.includes(item.value)} key={item.value} title={item.label}/>
                ))}
                <div className='px-3 text-sm hover:underline cursor-pointer hover:text-primary underline'>more..</div>
            </div>
        </div>
        <button disabled={studyPreferences.length === 0 || interestedTopics.length === 0 || isLoading} onClick={handleRegisterCall} className='w-full disabled:opacity-50 mx-auto bg-black rounded-md text-white py-2'>{isLoading?"Loading..":"Let's Go"}</button>
      </div>
    </div>
  );
};

export default RegisterPreferences;
