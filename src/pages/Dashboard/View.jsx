import React from "react";

const Projects = () => {
  return (
    <div class="overflow-auto">
    
      <div className="bg-gradient-to-b from-[#B7EFFB] to-white flex flex-col pl-5 pr-5">
      <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
  <div class="-m-1 flex flex-wrap md:-m-2">
    <div class="flex w-1/2 flex-wrap">
           
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center transition duration-300 ease-in-out hover:scale-110"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
      </div>
    </div>
    <div class="flex w-1/2 flex-wrap absolute-right-0">
    <div>
    <h1 className="text-2xl font-bold dark:text-white left-9 ml-5">Project title: "Global Climate Observations Initiative(GCOI)"</h1><br/>
            <div class="flex w-1/3">
      <label class="block  font-bold mr-10" for="inline-Skills">
        DOMAIN:
      </label>
    </div>
    <div class="flex w-2/3">
    <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Machine learning</option>
          <option>HTML</option>
          <option>MERN</option>
          <option>SCALA</option>
          <option>FRONTEND</option>
        </select>
    </div>
    <div class="flex w-1/3">
      <label class="block  font-bold " for="inline-Skills">
        Skills:
        </label>
    </div>
    <div class="flex w-2/3">
    <input type="text" id="first_name" class="bg-gray-200 border border-gray-300 text-gray-700 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g. AIML" required/>
    </div>
    <div class="flex w-1/3">
      <label class="block  font-bold " for="inline-Skills">
        EXPERTISE:
      </label>
    </div>
    <div class="flex w-2/3">
    <input type="text" id="first_name" class="bg-gray-200 border border-gray-300 text-gray-700 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Expertise" required/>
    </div>
              
            </div>
          </div>
        </div>

</div>
        
 <div>      
<h2 class="text-xl font-bold dark:text-white left-9 ml-5">Project Description</h2>
<p class="font-medium text-sm pt-5 text-justify ml-8 mr-10">The "Global Climate Observations Initiative (GCOI)" is a pioneering open science project dedicated to monitoring, understanding, and mitigating the impact of climate change on a global scale. With a community of scientists, researchers, and concerned citizens from around the world, GCOI exemplifies the principles of open science, collaboration, and data sharing to address one of the most pressing challenges of our time: climate change.</p>
<p class="font-medium text-sm pt-5 text-justify ml-8 mr-10"> 1. Comprehensive Climate Data Collection: GCOI aims to collect, curate, and openly share a vast array of climate data, including temperature readings, sea-level measurements, greenhouse gas concentrations, and extreme weather event records.<br/>
            2. Advanced Climate Modeling: The project employs state-of-the-art climate models, powered by artificial intelligence and machine learning, to predict future climate trends and assess their impact on ecosystems and human societies.<br/>
            3. Collaborative Research: GCOI serves as a global hub for interdisciplinary collaboration, bringing together climatologists, meteorologists, oceanographers, environmentalists, and policymakers to exchange ideas and findings. <br/>
            4. Public Engagement: The initiative emphasizes the importance of public engagement and education. It provides accessible climate data and tools for individuals, students, and educators to raise awareness and empower informed decision making.</p>
</div><br/>
<div>
<h2 class="text-xl font-bold dark:text-white left-9 ml-5">Objective (optional):</h2>
<p class="font-medium text-sm pt-5 text-justify ml-8 mr-10">The GCOI project has already made a significant impact on the global understanding of climate change. Its comprehensive data collection and analysis have contributed to more accurate climate models, informed policy decisions, and a growing public awareness of the urgent need to address climate-related challenges. GCOI continues to drive innovation and inspire action on a global scale.</p>

</div><br/>
<div><a href="#_" class="ml-8 relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
<span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
<span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="relative ml-8">Write Your Views</span>
</a></div>
<div>

<h2 class="text-xl font-bold dark:text-white left-9 ml-5 mt-6">"What makes you suitable for project ?"</h2>

<form>
   <div class="ml-8 mr-10 mt-5 mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
       <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
           <label for="comment" class="sr-only">Your comment</label>
           <textarea id="comment" rows="4" class="ml-8 w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required></textarea>
       </div>
       <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
           <button type="submit" class="ml-8 inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
               Apply
           </button>
           
       </div>
   </div>
</form>
</div>
<div >
{//Created by
}
<p class="text-xl font-semibold leading-6 text-gray-900 ml-8 mr-10">Created By:</p>
<br/>
  <div class="grid grid-cols-2 divide-x">
  <div className="mr-10"><div class="flex min-w-0 gap-x-4 mr-8 ">
      <img class="h-12 w-12 flex-none rounded-full bg-gray-50 " src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
      <div class="min-w-0 flex-auto">
        <p class="text-lg font-semibold leading-6 text-gray-900">Name</p>
        <p class="mt-1 truncate text-xs leading-5 text-gray-500">Skills</p>
      </div>
    </div><br/>
    <div class="flex min-w-0 gap-x-4 ">
  <svg class="h-8 w-8 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
</svg><p class="text-lg font-semibold leading-6 text-gray-900">12 Projects</p>
</div><br/>
<div class="flex min-w-0 gap-x-4 ">
<svg class="h-8 w-8 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
</svg><p class="text-lg font-semibold leading-6 text-gray-900">25 Feeds</p>
</div>
  </div>
  
  <div>
<div class="flex items-center space-x-1">
{
  //Rating
}
<p class="text-lg font-semibold leading-6 text-gray-900">Give Rating : </p>
    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
</div><br/>
{
  //Feedback
}

  <label for="message" class="text-lg font-semibold leading-6 text-gray-900 absolute-right-0 block mb-2  dark:text-white">Give Feedback:</label>
  <form class="max-w-2xl bg-white rounded-lg border p-2 mx-auto ">
    <div class="px-3 mb-2 mt-2">
        <textarea placeholder="Your Feedback........." class="w-full bg-gray-100 rounded border border-gray-400 leading-normal resize-none h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"></textarea>
    </div>
    <div class="flex justify-end px-4">
        <input type="submit" class="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500" value="Submit"/>
    </div>
</form>
</div>

</div>


</div>
{
  //suggested Projects;
}
<div className="flex mt-4">
<div
  class=" ml-8 block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
  <div class="relative overflow-hidden bg-cover bg-no-repeat">
    <img
      class="rounded-t-lg"
      src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
      alt="" />
  </div>
  <div class="p-6">
    <p class="text-base text-neutral-600 dark:text-neutral-200">
      Hello hey there!!!!!!!!!!
    </p>
  </div>
</div>
<div
  class=" ml-8 block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
  <div class="relative overflow-hidden bg-cover bg-no-repeat">
    <img
      class="rounded-t-lg"
      src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
      alt="" />
  </div>
  <div class="p-6">
    <p class="text-base text-neutral-600 dark:text-neutral-200">
    Hello hey there!!!!!!!!!!
    </p>
  </div>
</div>
<div></div>
<div
  class=" ml-8 block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
  <div class="relative overflow-hidden bg-cover bg-no-repeat">
    <img
      class="rounded-t-lg"
      src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
      alt="" />
  </div>
  <div class="p-6">
    <p class="text-base text-neutral-600 dark:text-neutral-200">
    Hello hey there!!!!!!!!!!
    </p>
  </div>
</div>
<div
  class=" ml-8 block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
  <div class="relative overflow-hidden bg-cover bg-no-repeat">
    <img
      class="rounded-t-lg"
      src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
      alt="" />
  </div>
  <div class="p-6">
    <p class="text-base text-neutral-600 dark:text-neutral-200">
    Hello hey there!!!!!!!!!!
    </p>
  </div>
</div>


</div>

       
      <><br/></>
    </div>
    </div>
  );
};

export default Projects;
