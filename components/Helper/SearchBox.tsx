import React from 'react';
import { FaCalendarWeek, FaMap } from 'react-icons/fa';
import { FaPeopleGroup } from 'react-icons/fa6';

const SearchBox = () => {
  return (
    <div className="bg-white rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-8 mt-4 sm:mt-12 w-[95%] sm:w-[80%]">
      {/* input one */}
      <div className="flex items-center space-x-6 ">
        <FaMap className="w-6 h-6 text-blue-600" />
        <div>
          <p className="text-lg font-medium mb-[0.2rem]">Location</p>
          <input
            type=" text"
            placeholder="Where Are You Going?"
            className="outline-none  placeholder:text-gray-500 border border-spacing-10 p-1"
          />
        </div>
      </div>

      {/* input two */}
      <div className="flex items-center space-x-6">
        <FaCalendarWeek className="w-6 h-6 text-blue-600" />
        <div>
          <p className="text-lg font-medium mb-[0.2rem]">Start Date</p>
          <input
            type="date"
            placeholder="Choose Your Date"
            className="outline-none border-none placeholder:text-gray-500"
          />
        </div>
      </div>
      {/* input three */}
      <div className="flex items-center space-x-6">
        <FaCalendarWeek className="w-6 h-6 text-blue-600" />
        <div>
          <p className="text-lg font-medium mb-[0.2rem]">End Date</p>
          <input
            type="date"
            placeholder="Choose Your Date"
            className="outline-none border-none placeholder:text-gray-500"
          />
        </div>
      </div>
      {/* input four */}
      <div className="flex items-center space-x-6">
        <FaPeopleGroup className="w-6 h-6 text-blue-600" />
        <div>
          <p className="text-lg font-medium mb-[0.2rem]">Guest</p>
          <p className="text-base font-normal">1 Guest 1 Room</p>
          <input
            type="number"
            className="outline-none border-none placeholder:text-gray-500"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
