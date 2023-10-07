import { useEffect } from "react";
import { Tab, initTE } from "tw-elements";
import ProjectCard from "./ProjectCard";
const CollaboratorSection = () => {
  const data1 = [
    {
      title:
        "abcd for abceefasdasndm ;cvzsandmc.vnk;b addkabhlbmnsdm afjhkbna .fjah afah",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title:
        "abcd for abceefasda sndm;cvzsandmc.vnk;b addkabhlbmnsdm afjhkbna .fjah afah",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title:
        "abcd for abceefasdas ndm;cvzsandmc.vnk;b addkabhlbmnsdm afjhkbna .fjah afah",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title:
        "abcd for abceefasdasndm ;cvzsandmc.vnk;b addkabhlbmnsdm afjhkbna .fjah afah",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title:
        "abcd for abceefasdasndm ;cvzsandmc.vnk;b addkabhlbmnsdm afjhkbna .fjah afah",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title:
        "abcd for abceefasdasndm ;cvzsandmc.vnk;b addkabhlbmnsdm afjhkbna .fjah afah",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title:
        "abcd for abceefasdasndm ;cvzsandmc.vnk;b addkabhlbmnsdm afjhkbna .fjah afah",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title:
        "abcd for abceefasdasndm ;cvzsandmc.vnk;b addkabhlbmnsdm afjhkbna .fjah afah",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title:
        "abcd for abceefasdasndm ;cvzsandmc.vnk;b addkabhlbmnsdm afjhkbna .fjah afah",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title:
        "abcd for abceefasdasndm ;cvzsandmc.vnk;b addkabhlbmnsdm afjhkbna .fjah afah",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },

    {
      title:
        "abcd for abceefasdasndm ;cvzsandmc.vnk;b addkabhlbmnsdm afjhkbna .fjah afah",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title:
        "abcd for abceefasdasndm ;cvzsandmc.vnk;b addkabhlbmnsdm afjhkbna .fjah afah",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title:
        "abcd for abceefasdasndm ;cvzsandmc.vnk;b addkabhlbmnsdm afjhkbna .fjah afah",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title:
        "abcd for abceefasdasndm ;cvzsandmc.vnk;b addkabhlbmnsdm afjhkbna .fjah afah",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title:
        "abcd for abceefasdasndm ;cvzsandmc.vnk;b addkabhlbmnsdm afjhkbna .fjah afah",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
    {
      title:
        "abcd for abceefasdasndm ;cvzsandmc.vnk;b addkabhlbmnsdm afjhkbna .fjah afah",
      category: "science and exhibition",
      src: "https://picsum.photos/536/354",
    },
  ];
  useEffect(() => {
    initTE({ Tab });
  }, []);
  return (
    <div className="px-10">
      <div className="flex justify-between">
        <ul
          className="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
          role="tablist"
          data-te-nav-ref
        >
          <li role="presentation">
            <a
              href="#tabs-home"
              className="my-2 block border-2 rounded border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-black data-[te-nav-active]:bg-[#B7EFFB] hover:opacity-75 focus:isolate focus:border-transparent data-[te-nav-active]:border-black data-[te-nav-active]:text-black dark:text-neutral-400 dark:data-[te-nav-active]:border-black-400 dark:data-[te-nav-active]:text-black-400"
              data-te-toggle="pill"
              data-te-target="#tabs-home"
              data-te-nav-active
              role="tab"
              aria-controls="tabs-home"
              aria-selected="true"
            >
              Current Projects
            </a>
          </li>
          <li role="presentation">
            <a
              href="#tabs-profile"
              className="my-2 block border-2 rounded border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-black data-[te-nav-active]:bg-[#B7EFFB] hover:opacity-75 focus:isolate focus:border-transparent data-[te-nav-active]:border-black data-[te-nav-active]:text-black dark:text-neutral-400 dark:data-[te-nav-active]:border-black-400 dark:data-[te-nav-active]:text-black-400"
              data-te-toggle="pill"
              data-te-target="#tabs-profile"
              role="tab"
              aria-controls="tabs-profile"
              aria-selected="false"
            >
              History
            </a>
          </li>
          <li role="presentation">
            <a
              href="#tabs-messages"
              className="my-2 block border-2 rounded border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-black data-[te-nav-active]:bg-[#B7EFFB] hover:opacity-75 focus:isolate focus:border-transparent data-[te-nav-active]:border-black data-[te-nav-active]:text-black dark:text-neutral-400 dark:data-[te-nav-active]:border-black-400 dark:data-[te-nav-active]:text-black-400"
              data-te-toggle="pill"
              data-te-target="#tabs-messages"
              role="tab"
              aria-controls="tabs-messages"
              aria-selected="false"
            >
              Feed
            </a>
          </li>
        </ul>

        <button className="hover:-translate-y-1 active:translate-y-0 transition h-max py-3 mr-5 bg-[#003366] text-white px-2 md:px-5 rounded flex justify-center place-items-center gap-3 hover:opacity-70">
          <p>CreateFeed</p>
          <p className="bg-white rounded-full text-black w-5 h-5 flex justify-center items-center">
            +
          </p>
        </button>
      </div>
      <div className="mb-6">
        <div
          className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-home"
          role="tabpanel"
          aria-labelledby="tabs-home-tab"
          data-te-tab-active
        >
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
        <div
          className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-profile"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab"
        >
          Tab 2 content
        </div>
        <div
          className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-messages"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab"
        >
          Tab 3 content
        </div>
      </div>
    </div>
  );
};

export default CollaboratorSection;
