import React from "react";

const CreateFeed = () => {
  return (
    <button className="hover:-translate-y-1 active:translate-y-0 transition bg-[#003366] text-white px-2 md:px-5 rounded flex justify-center place-items-center gap-3 hover:opacity-70">
      <p>CreateFeed</p>
      <p className="bg-white rounded-full text-black w-5 h-5 flex justify-center items-center">
        +
      </p>
    </button>
  );
};

export default CreateFeed;
