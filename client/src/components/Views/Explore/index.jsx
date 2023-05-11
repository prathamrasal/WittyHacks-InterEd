import Layout from '@/components/common/BaseLayout';
import Header from '@/components/common/Header';
import React from 'react';
import { BsDot } from 'react-icons/bs';
import MyCourse from './MyCourse';
import ProfileCategory from './ProfileCategory';
import MyBlog from './MyBlog';
import ProfileSection from './ProfileSection';
import HeroSection from './HeroSection';
import CategorySelection from './CategorySelection';
import ContentGroup from './ContentGroup';
import TeachersCollection from './TeachersCollection';
import CoursesSection from './CoursesSection';
import { useAppStore } from '@/hooks/useAppStore';

const Explore = () => {
  
  return (
    <Layout>
      <div className="w-full py-3 bg-[#f6f8fa] gap-10 grid grid-cols-[4fr_1.4fr]">
        <div className="w-full">
          <Header />
          <div className="mt-4">
            <HeroSection />
            <div className="mt-4">
              <CategorySelection />
            </div>
            <div className="mt-5">
              <ContentGroup />
            </div>
            <div className="mt-5 w-full">
              <div className="text-xl w-full font-semibold">Popular Courses</div>
              <div className="mt-5 w-full">
                <CoursesSection />
                
              </div>
            </div>
            <div className="mt-5">
              <div className="text-xl font-semibold">Top Teachers</div>
              <div className="mt-5">
                {/* <TeachersCollection /> */}
                <div className='mt-2 opacity-50'>No Teachers Found!</div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-3">
          <ProfileSection />
        </div>
      </div>
    </Layout>
  );
};

export default Explore;
