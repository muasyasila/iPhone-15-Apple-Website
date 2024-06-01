// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <NavLink to="/" className="flex items-center">
          <img src={appleImg} alt="Apple" width={14} height={18} />
        </NavLink>
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <NavLink
              key={nav}
              to={`/${nav.toLowerCase()}`}
              className={({ isActive }) =>
                `px-5 text-sm cursor-pointer transition-all ${isActive ? 'text-white underline' : 'text-gray hover:text-white'}`
              }
            >
              {nav}
            </NavLink>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
