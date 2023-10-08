import React, { useState, useEffect } from "react";
import axios from "axios";

const Feeds = () => {
  const [feeds, setFeeds] = useState([]);
  const fetchData=async ()=>{
    const res=await fetch("http://localhost:8989/api/v1/project/getfeeds")
    const data=await res.json()
    setFeeds(data)
  }
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className="flex flex-col gap-5">
      {feeds.map((feed, index) => {
        return (
          <div
            key={index}
            className="flex items-start gap-4 py-10 px-5 border rounded-lg"
          >
            {/* <div className="">
              <img className="h-20 w-32 rounded-full" src={feed.image} />
            </div> */}
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold">{feed.title}</h2>
              <p className="break-word text-lg">{feed.summary}</p>
              {/* <time className="text-xs">{feed.date}</time> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Feeds;
