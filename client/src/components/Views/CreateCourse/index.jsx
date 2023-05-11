import Layout from '@/components/common/BaseLayout';
import React, { useState } from 'react';
import CourseSteps from './CourseSteps';
import InfoSelect from './InfoSelect';
import LevelSelection from './LevelSelection';
import SelectText from './SelectText';
import ImageSelection from './ImageSelection';
import Curriculum from './steps/Curriculum';
import Landing from './steps/Landing';

const CreateCourse = () => {
    const [activeStep,setActiveStep] = useState(0);
  return (
    <Layout>
      <div className="py-7">
        <div className="flex items-center text-sm gap-3">
          <div className="text-gray-400">Courses / </div>
          <div className="font-[500]">Create Course</div>
        </div>
        <div className="text-2xl font-semibold mt-3">{activeStep===1?'Create New Curriculum':''}</div>
        <div className="my-4 mt-6 w-[50%]">
          <CourseSteps activeStep={activeStep} />
        </div>
       {activeStep==0?<Landing setActiveStep={setActiveStep}/>:activeStep==1?<Curriculum/>:null}
      </div>
    </Layout>
  );
};

export default CreateCourse;
