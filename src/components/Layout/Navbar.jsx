import { React, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Sidenav, initTE } from "tw-elements";
import UserDrawer from "./UserDrawer";
const Navbar = () => {
  initTE({ Sidenav });
  return (
    <>
      <header className="bg-[#B7EFFB]">
        <div className="container mx-auto justify-around flex p-5 flex-col md:flex-row items-center">
          <NavLink
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 w-1/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span>
          </NavLink>
          <div className="flex">
            <nav className="flex w-max items-center text-base justify-center">
              <NavLink to="/" className="mr-5 hover:text-gray-900">
                Home
              </NavLink>
              <NavLink to="/aboutus" className="mr-5 hover:text-gray-900">
                About
              </NavLink>
              <NavLink to="/projects" className="mr-5 hover:text-gray-900">
                Projects
              </NavLink>
              <NavLink to="/dashboard" className="mr-5 hover:text-gray-900">
                Dashboard
              </NavLink>
              <NavLink to="/listing" className="mr-5 hover:text-gray-900">
                Listing
              </NavLink>
              <NavLink to="/profile" className="mr-5 hover:text-gray-900">
                Profile
              </NavLink>
            </nav>
            <div className="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                <label htmlFor="my-drawer-4" className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-14 h-14 bg-white rounded-full"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </label>
              </div>
              <UserDrawer />
            </div>
            <button className="inline-flex ml-5 items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              <NavLink to="/register">Login</NavLink>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
