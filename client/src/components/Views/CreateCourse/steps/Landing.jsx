import React from 'react'
import InfoSelect from '../InfoSelect'
import LevelSelection from '../LevelSelection'
import SelectText from '../SelectText'
import ImageSelection from '../ImageSelection'

const Landing = ({setActiveStep}) => {
  return (
    <>
     <div className="mt-8 w-[70%]">
          <div className="bg-primary rounded-lg py-7 px-5">
            <input
              className="text-xl outline-none placeholder:text-white placeholder:opacity-50 text-white w-full bg-transparent "
              placeholder="Your course title goes here..."
            />
          </div>
          <div className="mt-8">
            <InfoSelect />
            
          </div>
          <div className="mt-8">
            <LevelSelection />
          </div>
          <div className="mt-8">
            <div className="text-sm font-[600] opacity-80  uppercase">
              DESCRIPTION
            </div>
            <textarea
              placeholder="This course includes..."
              rows={8}
              className="mt-3 bg-white border rounded-lg p-3 outline-0  text-sm w-full"
            ></textarea>
          </div>
          <div className="mt-8">
            <SelectText />
          </div>
          <div className="mt-8">
            <ImageSelection />
          </div>
          <div className="mt-8 flex justify-end">
            <button onClick={()=>setActiveStep(prev=>prev+1)} className="px-6 py-2 rounded-md bg-primary text-white">
              Continue
            </button>
          </div>
        </div>
    </>
  )
}

export default Landing