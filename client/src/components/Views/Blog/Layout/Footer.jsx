import React from 'react'
import SocialIconsGroup from '../SocialIconsGroup'

const Footer = () => {
  return (
    <div className='py-32 max-[1450px]:px-16 max-xl:px-10 max-xl:py-24 max-xs:py-8 max-s-xl:py-16 max-sm:px-5  max-xl:gap-5  px-24 bg-[#f4f2f0]'>
        <div className='grid grid-cols-[1fr_5fr] max-s-xl:gap-8 max-md:grid-cols-1 max-md:gap-12'>
            <div className='text-xl max-md:justify-center max-md:flex'>
                InterEd
            </div>
            <div className='grid grid-cols-5 max-s-xl:grid-cols-2 max-xs:gap-y-12 max-sm:gap-12 max-xs:gap-7 max-s-xl:gap-y-8  items-start'>
                <div className='space-y-2 max-xs:text-sm font-light'>
                    <div>About</div>
                    <div>My Courses</div>
                    <div>Explore</div>
                    <div>Curate Course</div>
                </div>
                <div className='space-y-2 max-xs:text-sm font-light'>
                    <div>Contact Us</div>
                    <div>Terms </div>
                    <div>Privacy</div>
                </div>
                <div className='space-y-2 max-xs:text-sm font-light'>
                    <div className='font-semibold'>Top Tutors</div>
                    <div>Kunal Sangtiani </div>
                    <div>Pratham Rasal</div>
                    <div>Piyush Agrawal</div>
                </div>
                <div className='space-y-2 max-xs:text-sm font-light'>
                    <div className='font-semibold'>Use Cases</div>
                    <div>Personalized Learning </div>
                    <div>Course Curation</div>
                    <div>Expert Support</div>
                </div>
                <SocialIconsGroup/>
            </div>
        </div>
    </div>
  )
}

export default Footer