import React from "react";
import ProjectCard from "./ProjectCard";
import l1 from "../../assets/l1.png";
import l2 from "../../assets/l2.png";
import l3 from "../../assets/l3.jfif";
import l4 from "../../assets/l4.png";
const ProjectSection = () => {
  const data1 = [
    {
      title: "abcd for abceefasdasndm ",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title: "abcd for abceefasda sndm;cvzs",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title: "abcd for abceefasdas ndm;cvzsan",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title: "abcd for abceefasdasndm ;cvzsandm",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title: "abcd for abceefasdasndm ;cvzsand",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
  ];
  return (
    <div className="flex flex-col h-172 pl-10 pr-10 bg-white justify-between">
      <div className="flex h-fit flex-col">
        <h1 className="text-2xl mb-3">Top Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {data1.map((val, index) => {
            return (
              <ProjectCard
                key={index}
                name={val.title}
                category={val.category}
                src={val.src}
              />
            );
          })}
        </div>
      </div>
      <div className="flex h-fit flex-col py-10">
        <h1 className="text-2xl mt-2">Trusted By</h1>
        <div className="grid grid-cols-4 gap-5 mt-3 p-3">
          {[l1, l2, l3, l4].map((imageSrc, index) => (
            <img
              key={index}
              src={imageSrc}
              className="flex w-60 h-32 rounded-md p-2 shadow-lg"
              alt={`Image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
