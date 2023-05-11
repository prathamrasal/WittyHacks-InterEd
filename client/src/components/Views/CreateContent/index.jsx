import Layout from '@/components/common/BaseLayout';
import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BsImages, BsThreeDots } from 'react-icons/bs';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BiVideo } from 'react-icons/bi';
import { FormControlLabel, Switch } from '@mui/material';
const CreateContent = () => {
  return (
    <Layout>
      <div className="flex items-center px-12 py-5 justify-between">
        <div className="text-base flex  items-center gap-5">
          <div>
            <AiOutlineArrowLeft className="cursor-pointer" />
          </div>
          <div className="text-2xl font-[500]">Create Content</div>
        </div>
        <div className="flex py-6 space-x-4 px items-center gap-3">
          <BsThreeDots className="cursor-pointer text-lg" />
          <IoMdNotificationsOutline className="cursor-pointer text-lg" />
        </div>
      </div>
      <div className="mt-6 pb-8 px-16 grid grid-cols-2 gap-12">
        <div>
          <div>
            <input
              className="w-full py-3  bg-transparent outline-none border-b text-2xl appearance-none"
              placeholder="Title"
            />
          </div>
          <div className="font-[500] mt-8 text-gray-600">Upload Video</div>
          <div className="mt-3 flex flex-col border-black opacity-30 hover:opacity-100 transition-all cursor-pointer items-center justify-center w-full py-4 border-dashed border-2 h-[160px]">
            <BiVideo />
            <div className="text-center">Drag and Drop</div>
          </div>
          <div className="flex items-center mt-5 gap-2">
            <div className="w-full h-[1px] bg-gray-400"></div>
            <div className="shrink-0">OR</div>
            <div className="w-full h-[1px] bg-gray-400"></div>
          </div>
          <input
            className="py-2 border w-full mt-6 rounded-md outline-none px-3"
            placeholder="Add Video URL"
          ></input>
          <div className="font-[500] mt-8 text-gray-600">Upload Thumbnail</div>
          <div className="mt-3 flex flex-col border-black opacity-30 hover:opacity-100 transition-all cursor-pointer items-center justify-center w-full py-4 border-dashed border-2 h-[110px]">
            <BsImages />
            <div className="text-center">Drag and Drop</div>
          </div>
          <div className="flex items-center mt-5 gap-2">
            <div className="w-full h-[1px] bg-gray-400"></div>
            <div className="shrink-0">OR</div>
            <div className="w-full h-[1px] bg-gray-400"></div>
          </div>
          <input
            className="py-2 border w-full mt-6 rounded-md outline-none px-3"
            placeholder="Add Thumbnail URL"
          ></input>
        </div>
        <div className="">
          <div className="font-[500] text-lg">Basic Details</div>
          <div className="mt-4 space-y-4">
            <div>
              <div className="text-base font-[500] text-gray-600">
                Description
              </div>
              <textarea
                className="w-full mt-2 border rounded-sm p-2"
                rows={4}
                placeholder="Add Description"
              ></textarea>
            </div>
            <div>
              <div className="text-base font-[500] text-gray-600">Tags</div>
              <input
                className="w-full mt-2 border rounded-sm p-2"
                placeholder="Add Comma Separated Tags"
              ></input>
            </div>
          </div>
          <div className="mt-8">
            <div className="font-[500] text-lg">Public Details</div>
            <div className="mt-1 flex flex-col space-y-1">
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Allow curators to use this content."
              />
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Allow comments & reviews"
              />
            </div>
            <div className="mt-12 flex justify-end">
              <button className="bg-primary px-8 py-2 text-white rounded-lg">
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateContent;
