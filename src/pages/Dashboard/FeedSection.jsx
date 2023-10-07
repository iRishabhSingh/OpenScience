import React from "react";

const FeedSection = () => {
  const tweets = [
    {
      name: "Lavesh Bharadwaj",
      date: "26 sep , 2023",
      image: "https://picsum.photos/536/354",
      content:
        "I found out the we are going to loose the hackathon , I found out the we are going to loose the hackathon ,I found out the we are going to loose the hackathon ,I found out the we are going to loose the hackathon ,",
    },
    {
      name: "Lavesh Bharadwaj",
      date: "26 sep , 2023",
      image: "https://picsum.photos/536/354",
      content:
        "I found out the we are going to loose the hackathon , I found out the we are going to loose the hackathon ,I found out the we are going to loose the hackathon ,I found out the we are going to loose the hackathon ,",
    },
    {
      name: "Lavesh Bharadwaj",
      date: "26 sep , 2023",
      image: "https://picsum.photos/536/354",
      content:
        "I found out the we are going to loose the hackathon , I found out the we are going to loose the hackathon ,I found out the we are going to loose the hackathon ,I found out the we are going to loose the hackathon ,",
    },
    {
      name: "Lavesh Bharadwaj",
      date: "26 sep , 2023",
      image: "https://picsum.photos/536/354",
      content:
        "I found out the we are going to loose the hackathon , I found out the we are going to loose the hackathon ,I found out the we are going to loose the hackathon ,I found out the we are going to loose the hackathon ,",
    },
    {
      name: "Lavesh Bharadwaj",
      date: "26 sep , 2023",
      image: "https://picsum.photos/536/354",
      content:
        "I found out the we are going to loose the hackathon , I found out the we are going to loose the hackathon ,I found out the we are going to loose the hackathon ,I found out the we are going to loose the hackathon ,",
    },
    {
      name: "Lavesh Bharadwaj",
      date: "26 sep , 2023",
      image: "https://picsum.photos/536/354",
      content:
        "I found out the we are going to loose the hackathon , I found out the we are going to loose the hackathon ,I found out the we are going to loose the hackathon ,I found out the we are going to loose the hackathon ,",
    },
    {
      name: "Lavesh Bharadwaj",
      date: "26 sep , 2023",
      image: "https://picsum.photos/536/354",
      content:
        "I found out the we are going to loose the hackathon , I found out the we are going to loose the hackathon ,I found out the we are going to loose the hackathon ,I found out the we are going to loose the hackathon ,",
    },
    {
      name: "Lavesh Bharadwaj",
      date: "26 sep , 2023",
      image: "https://picsum.photos/536/354",
      content:
        "I found out the we are going to loose the hackathon , I found out the we are going to loose the hackathon ,I found out the we are going to loose the hackathon ,I found out the we are going to loose the hackathon ,",
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      {tweets.map((tweet, index) => {
        return (
          <div
            key={index}
            className="flex items-start gap-4 py-10 px-5 border rounded-lg"
          >
            <div className="">
              <img className="h-20 w-32 rounded-full" src={tweet.image} />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold">{tweet.name}</h2>
              <p className="break-word text-lg">{tweet.content}</p>
              <time className="text-xs">{tweet.date}</time>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeedSection;
