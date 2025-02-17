import Link from 'next/link';
import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="pr-16 pb-16">
      <div className="w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* 1st part */}
        <div className="space-y-5">
          <h1 className="tetx-lg font-bold">Company</h1>
          <p className="text-gray-500 font-medium cursor-pointer text-sm hover:text-gray-900">
            About Us
          </p>
          <p className="text-gray-500 font-medium cursor-pointer text-sm hover:text-gray-900">
            Careers
          </p>
          <p className="text-gray-500 font-medium cursor-pointer text-sm hover:text-gray-900">
            Blog
          </p>
          <p className="text-gray-500 font-medium cursor-pointer text-sm hover:text-gray-900">
            Gift Cards
          </p>
          <p className="text-gray-500 font-medium cursor-pointer text-sm hover:text-gray-900">
            Magazine
          </p>
        </div>
        {/* 2nd part */}
        <div className="space-y-5">
          <h1 className="tetx-lg font-bold">Support</h1>
          <p className="text-gray-500 font-medium cursor-pointer text-sm hover:text-gray-900">
            Contact
          </p>
          <p className="text-gray-500 font-medium cursor-pointer text-sm hover:text-gray-900">
            Legal Notice
          </p>
          <p className="text-gray-500 font-medium cursor-pointer text-sm hover:text-gray-900">
            Provacy Policy
          </p>
          <p className="text-gray-500 font-medium cursor-pointer text-sm hover:text-gray-900">
            Terms and Conditions
          </p>
          <p className="text-gray-500 font-medium cursor-pointer text-sm hover:text-gray-900">
            Sitemap
          </p>
        </div>
        {/* 3rd part */}
        <div className="space-y-5">
          <h1 className="tetx-lg font-bold">Other Services</h1>
          <p className="text-gray-500 font-medium cursor-pointer text-sm hover:text-gray-900">
            Car Hire
          </p>
          <p className="text-gray-500 font-medium cursor-pointer text-sm hover:text-gray-900">
            Activity Finder
          </p>
          <p className="text-gray-500 font-medium cursor-pointer text-sm hover:text-gray-900">
            Tour List
          </p>
          <p className="text-gray-500 font-medium cursor-pointer text-sm hover:text-gray-900">
            Flight Finder
          </p>
          <p className="text-gray-500 font-medium cursor-pointer text-sm hover:text-gray-900">
            Travel Agent
          </p>
        </div>
        {/* 4th part */}
        <div className="space-y-5">
          <h1 className="tetx-lg font-bold">Contact Us</h1>
          <div className="mt-6">
            <p className="text-sm text-gray-600">Our Mobile Number</p>
            <span className="text-base font-bold mt-1">+023 4564 456 587</span>
          </div>
          <div className="mt-6">
            <p className="text-sm text-gray-600">Our Email</p>
            <span className="text-base font-bold mt-1">example@gmail.com</span>
          </div>
        </div>
      </div>
      {/* bottom section */}
      <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p className="text-center md:text-left">
          Copyright Nataliia 2025. All Right reserved
        </p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span className="flex flex-row space-x-4">
            <p>Social:</p>
            <Link href="#" className="text-gray-500 hover:text-gray-800">
              <FaFacebook />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-800">
              <FaTwitter />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-800">
              <FaInstagram />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
