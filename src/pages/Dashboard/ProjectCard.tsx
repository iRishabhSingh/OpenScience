import React from "react";

const ProjectCard = ({src,name,category}) => {
  return (
    <div className="block border-2 border-black max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <div className="relative overflow-hidden bg-cover bg-no-repeat">
        <img
          className="rounded-lg h-60"
          src={src}
          alt=""
        />
      </div>
      <div className="pl-5 py-2">
        <p className="text-lg text-black">
          {name}
        </p>
        <p className="text-base text-black font-bold tracking-widest">{category}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
