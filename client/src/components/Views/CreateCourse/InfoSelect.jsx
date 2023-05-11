import React from 'react';
import { MdDesignServices, MdOutlineDesignServices } from 'react-icons/md';

const InfoSelect = () => {
  return (
    <div className="w-full">
      <div className="text-sm font-[600] opacity-80  uppercase">CATEGORY</div>
      <div className="bg-white w-full mt-2 rounded-lg py-2 px-3 shadow-md flex items-center gap-3">
        <div className="flex items-center text-white shrink-0 justify-center w-[45px] bg-sky-300 h-[45px] rounded-full">
          <MdDesignServices size={22}/>
        </div>
        <select className="bg-transparent font-[500] w-full  outline-none">
            <option htmlFor="">UI UX Design</option>
        </select>
      </div>
    </div>
  );
};

export default InfoSelect;
