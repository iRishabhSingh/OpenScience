import React from 'react'
import pic4 from "../../assets/4.jpg"
import { NavLink } from 'react-router-dom'
const Projects = () => {
  return (
    <div className="flex h-112 pl-10 pr-10">
          <div className="flex flex-col w-2/3 justify-evenly">
            <h1 className="flex text-3xl">Explore Open Science projects...</h1>
            <div className="flex w-full h-88 ">
              <div className="flex flex-col w-1/2 ">
                <button className="flex w-72 p-3 rounded-md h-12 bg-[#B7EFFB] mt-3 border-2 border-black items-center text-xl">
                  <NavLink>Life Sciences & Biology</NavLink>
                </button>
                <button className="flex w-72 p-3 rounded-md h-12 bg-[#B7EFFB] mt-3 border-2 border-black items-center text-xl">
                  <NavLink>Medicine & Healthcare</NavLink>
                </button>
                <button className="flex w-72 p-3 rounded-md h-12 bg-[#B7EFFB] mt-3 border-2 border-black items-center text-xl">
                  <NavLink>Physical & Particle Research</NavLink>
                </button>
                <button className="flex w-72 p-3 rounded-md h-12 bg-[#B7EFFB] mt-3 border-2 border-black items-center text-xl">
                  <NavLink>Astronomy / Space Exploration</NavLink>
                </button>
                <button className="flex w-72 p-3 rounded-md h-12 bg-[#B7EFFB] mt-3 border-2 border-black items-center text-xl">
                  <NavLink>Chemistry & Materials Science</NavLink>
                </button>
              </div>
              <div className="flex flex-col w-1/2">
                <button className="flex w-64 p-3 rounded-md h-12 bg-[#B7EFFB] mt-3 border-2 border-black items-center text-xl">
                  <NavLink>Environmental Science</NavLink>
                </button>
                <button className="flex w-64 p-3 rounded-md h-12 bg-[#B7EFFB] mt-3 border-2 border-black items-center text-xl">
                  <NavLink>Data Science & AI</NavLink>
                </button>
                <button className="flex w-64 p-3 rounded-md h-12 bg-[#B7EFFB] mt-3 border-2 border-black items-center text-xl">
                  <NavLink>Social Sciences</NavLink>
                </button>
                <button className="flex w-64 p-3 rounded-md h-12 bg-[#B7EFFB] mt-3 border-2 border-black items-center text-xl">
                  <NavLink>Archaeology/Anthropology</NavLink>
                </button>
                <button className="flex w-64 p-3 rounded-md h-12 bg-[#B7EFFB] mt-3 border-2 border-black items-center text-xl">
                  <NavLink>Engineering & Technology</NavLink>
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-1/2">
            <img src={pic4} className="h-3/4 m-auto rounded-lg"></img>
          </div>
        </div>
  )
}

export default Projects