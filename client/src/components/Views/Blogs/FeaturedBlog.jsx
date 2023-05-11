import React from 'react';

const FEEATURE_IMG =
  'https://res.cloudinary.com/insight-byte/image/upload/v1680966068/workload-management--1200x560.jpg.optimal_kmgkpw.jpg';

const FeaturedBlog = () => {
  return (
    <div className="my-8 grid gap-10  grid-cols-[1fr_0.7fr]">
      <div
        className="h-auto w-full"
        style={{ background: `url(${FEEATURE_IMG}) center center/cover` }}
      ></div>
      <div>
        <div className="uppercase opacity-60">REACT INTRO - 6 Min Read</div>
        <div className="mt-6">
          <div className="text-3xl font-semibold">
            The biggest challanges faced by modern Agile Teams who work on javascript
          </div>
          <div className="mt-6 opacity-50 ">
Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet consectetur adipisicing elit.  adipisicing elit. Nemo aut officia aliquid dolores sapiente modi, vero temporibus optio dolore saepe.
          </div>
        </div>
        <div className="mt-5 flex items-center gap-2">
          <div className="h-[40px] w-[40px] rounded-full bg-gray-300"></div>
          <div>
            <div className="text-sm uppercase">Kunal Sangtiani</div>
            <div className="text-xs opacity-80">Product Manage, Inter Id</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlog;
