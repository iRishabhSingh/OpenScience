import { React, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center p-2 bg-[#B7EFFB] h-20 w-full">
        <div className="border-black border-2 flex w-1/4"></div>
        <div className="flex justify-between items-center w-1/3">
          <div className="flex justify-between text-lg">
            <NavLink className="flex m-3 items-center" to = "/">Home</NavLink>
            <NavLink className="flex m-3 items-center">About Us</NavLink>
            <NavLink className="flex m-3 items-center">Projects</NavLink>
          </div>
          <div className="flex p-2">
            <button className="flex text-white h-10 bg-[#003366] justify-center items-center w-20 rounded-md font-serif">
              <NavLink to="/signup">Login</NavLink>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
