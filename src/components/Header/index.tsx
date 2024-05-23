'use client'
import React, { useState } from 'react';
import './style.css'
import HeaderIcons from '../HeaderIcons';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="bg-white fixed top-0 left-0 right-0 z-50 grid grid-cols-2 justify-between items-center px-6 py-4 shadow-lg">
      <div className="grid items-center">
        <button className="lg:hidden" onClick={() => setShowMenu(!showMenu)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 fill-current text-black hover:text-green-500">
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
          </svg>
        </button>
        <ul className={`bg-white flex flex-col absolute min-h-[25vh] lg:min-h-0 left-0 top-[11%] mt-10 lg:mt-0 lg:flex-row tracking-normal uppercase lg:space-x-1 ${showMenu ? 'sm:flex-col w-full' : 'hidden lg:flex'}`}>
          <NavItem text="Shop" hasDropdown>
            <DropdownShop />
          </NavItem>
          <hr className='mx-16 border-black' />
          <NavItem text="About" hasDropdown>
            <DropdownAbout />
          </NavItem>
          <hr className='mx-16 border-black'/>
          <NavItem text="The Greenery" hasDropdown={undefined} children={undefined} />
        </ul>
      </div>
      <div className='grid'><HeaderIcons/></div>
    </nav>
  );
};

const NavItem = ({ text, hasDropdown, children }) => {
  return (
    <li className="group relative mt-5 lg:mt-0 flex flex-col items-center lg:block">
      <a
        href="#"
        className="text-black flex items-center py-2 lg:py-4 px-4 lg:px-6 hover:text-green-500"
      >
        {text}
        {hasDropdown && (
          <svg
            className="ml-2 h-4 lg:h-5 w-4 lg:w-5 fill-current group-hover:fill-green-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
            />
          </svg>
        )}
      </a>
      {hasDropdown && (
        <div className="dropdown-content bg-white lg:top-[88%] hidden lg:absolute lg:shadow-lg group-hover:block">
          {children}
        </div>
      )}
    </li>
  );
};

const DropdownShop = () => {
  return (
    <div className="flex flex-row p-4 md:mx-4">
      <div className="mr-4">
        <h4 className="font-bold">By Category</h4>
        <ul className='sub-menu'>
          <li><a href="#" className="block py-1">Shop all</a></li>
          <li><a href="#" className="block py-1">Cleansers</a></li>
          <li><a href="#" className="block py-1">Moisturizers</a></li>
          <li><a href="#" className="block py-1">Mists</a></li>
          <li><a href="#" className="block py-1">Serums</a></li>
        </ul>
      </div>
      <div className="border-l border-gray-300 pl-4">
        <h4 className="font-bold">By Collection</h4>
        <ul className='sub-menu'>
          <li><a href="#" className="block py-1">Illuminating</a></li>
          <li><a href="#" className="block py-1">Clearing</a></li>
          <li><a href="#" className="block py-1">Soothing</a></li>
        </ul>
      </div>
    </div>
  );
};

const DropdownAbout = () => {
  return (
    <div className="flex flex-col lg:flex-row p-4 w-52">
      <ul className='sub-menu'>
        <li><a href="#" className="block py-1">Our Promise</a></li>
        <li><a href="#" className="block py-1">Our Story</a></li>
        <li><a href="#" className="block py-1">Our Beliefs</a></li>
      </ul>
    </div>
  );
};

export default Navbar;