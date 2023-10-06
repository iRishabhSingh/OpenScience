import React from "react";
import { Sidenav, initTE } from "tw-elements";

const UserDrawer = () => {
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-4"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-2/3 md:w-1/4 min-h-full bg-white text-black">
        <li>
          <h1 className="text-xl">Complete Your Profile</h1>
        </li>
        <li>
          <div className="flex gap-5">
            <progress
              className="progress progress-success w-56 bg-green-500"
              value="100"
              max="100"
            ></progress>
            <p>100%</p>
          </div>
        </li>
        <li>
          <div className="flex">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <p>Lavesh Bharadwaj</p>
              <p>Lavesh Bharadwaj@gmail.com</p>
              <div className="flex items-center gap-2">
                <div className="flex gap-2 border-r pr-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 54 48"
                    fill="none"
                  >
                    <path
                      d="M22.8238 13.2552C24.5937 9.33316 25.4786 7.37216 27.0003 7.37216C28.5221 7.37216 29.407 9.33316 31.1769 13.2552L31.2593 13.4378C32.2592 15.6535 32.7591 16.7614 33.778 17.4348C34.7969 18.1081 36.1344 18.2146 38.8095 18.4276L39.2931 18.4661C43.6712 18.8146 45.8602 18.9889 46.3286 20.2268C46.797 21.4648 45.1714 22.7795 41.92 25.4089L40.8349 26.2864C39.189 27.6174 38.3661 28.283 37.9825 29.1552C37.9109 29.3179 37.8515 29.4846 37.8044 29.6543C37.5523 30.5636 37.7933 31.529 38.2753 33.46L38.4253 34.061C39.311 37.6097 39.7539 39.384 38.9807 40.1494C38.6917 40.4353 38.3162 40.6412 37.899 40.7424C36.7825 41.0132 35.1974 39.8651 32.0273 37.5689C29.9457 36.0612 28.9048 35.3073 27.7099 35.1377C27.2398 35.071 26.7608 35.071 26.2908 35.1377C25.0958 35.3073 24.055 36.0612 21.9734 37.5689C18.8032 39.8651 17.2182 41.0132 16.1017 40.7424C15.6845 40.6412 15.309 40.4353 15.02 40.1494C14.2467 39.384 14.6896 37.6097 15.5754 34.061L15.7254 33.46C16.2074 31.529 16.4484 30.5636 16.1962 29.6543C16.1492 29.4846 16.0897 29.3179 16.0182 29.1552C15.6346 28.283 14.8117 27.6174 13.1658 26.2864L12.0806 25.4089C8.82929 22.7795 7.20362 21.4648 7.67202 20.2268C8.14042 18.9889 10.3295 18.8146 14.7075 18.4661L15.1912 18.4276C17.8662 18.2146 19.2037 18.1081 20.2227 17.4348C21.2416 16.7614 21.7415 15.6535 22.7414 13.4378L22.8238 13.2552Z"
                      stroke="#222222"
                    />
                  </svg>
                  150
                </div>
                <div className="flex gap-2 border-r pr-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                    />
                  </svg>
                  102932
                </div>
                <div className="">Projects - 32</div>
              </div>
            </div>
          </div>
        </li>
        <li className="mt-5">
          <h2 className="text-xl underline font-medium">For User</h2>
          <p>Invitations</p>
          <p>Notifications</p>
          <p>Projects / Feed</p>
          <p>Chats</p>
          <p>Setting</p>
        </li>
      </ul>
    </div>
  );
};

export default UserDrawer;
