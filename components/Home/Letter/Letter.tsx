import React from 'react';
import { BsEnvelopePaper } from 'react-icons/bs';

const Letter = () => {
  return (
    <div className="bg-gray-600 pt-16 mb-16 flex flex-col items-center justify-center w-full h-full">
      <BsEnvelopePaper className="w-16 h-16 mt-20 text-white" />
      <h1 className="text-lg sm:text-xl md:text-2xl text-white font-semibold mt-10 tracking-widest">
        Your Travel Journey Starts Here
      </h1>
      <p className="mt-3 text-white text-xs sm:text-sm">
        Sign Up And We Will Send You The Best Deals
      </p>
      {/* subscriptions form */}
      <form className="w-full mb-24">
        <label htmlFor="#" className="">
          <input
            type="email"
            name=""
            id=""
            placeholder='Email'
            className="px-6 py-3.5 bg-white mt-8 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none"
          />
        </label>
        <button  type='submit' className="px-6 py-3.5 bg-green-600 mt-4 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none  hover:scale-110 text-white tracking-widest font-bold hover:bg-gradient-to-r hover:from-green-500 hover:to-green-300 tet-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">Subscribe</button>
      </form>
    </div>
  );
};
 
export default Letter;
