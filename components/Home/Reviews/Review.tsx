import React from 'react';
import { FaStar } from 'react-icons/fa6';
import ReviewSlider from './ReviewSlider';

const Review = () => {
  return (
    <div className="pt-20 pb-20 flex items-center justify-center flex-col bg-[#15803d]">
      {/* text content */}
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="">
          <h1 className="text-2xl font-semibold text-white">
            What Do Our Customers Say About Us?
          </h1>
          <p className="mt-6 text-gray-200">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Laboriosam, voluptate dolores. Beatae at impedit ratione eligendi,
            corporis architecto quidem id hic ipsa deserunt maiores quisquam
            maxime officiis quo vitae dolor.
          </p>
          {/* raiting */}
          <div className="mt-6 flex items-center space-x-6">
            <div className="font-bold text-white">
              <p className="text-xl ">4.95</p>
              <p className="text-white mb-2 font-normal">Overall Raiting</p>
              <div className="flex items-center">
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
              </div>
            </div>
          </div>
        </div>
        {/* slider */}
        <div className="overflow-hidden">
          <ReviewSlider />
        </div>
      </div>
    </div>
  );
};

export default Review;
