import { navLinks } from '@/constant/constant';
import React from 'react';
import Link from 'next/link';
import { CgClose } from 'react-icons/cg';
type Props = {
  showNav: boolean;
  closeNav: () => void;
};
const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]';

  return (
    <div>
      {/* OVERLAY */}
      <div
        className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}
      ></div>
      {/* NAVLINKS */}
      <div
        className={`text-white ${navOpen}  fixed  py-10 flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-yellow-400 space-u-6 z-[1050]`}
      >
        {navLinks.map((link) => {
          return (
            <Link href={link.url} key={link.id}>
              <p className="text-white w-fit text-[20px] ml-12 border-b-[2px] border-red-500 pb-1 sm:text-[30px] ">
                {link.label}
              </p>
            </Link>
          );
        })}
        {/* CLOSE BUTTON */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
        />
      </div>
    </div>
  );
};

export default MobileNav;
