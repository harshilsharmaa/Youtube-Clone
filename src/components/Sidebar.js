import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {

  const {isMenuOpen} = useSelector((state)=>state.app);

  // Early return
  if(!isMenuOpen) return null;

  return (
    // <div className="col-span-2 shadow-md flex flex-col items-center ps-2">
    <div className="w-2/12 shadow-md flex flex-col items-center ps-2">
      <div className="w-11/12 border-b-2 border-gray-200 py-1">
        <ul>
          <li className=" p-2 ps-4 rounded-lg hover:bg-gray-100">Home</li>
          <li className=" p-2 ps-4 rounded-lg hover:bg-gray-100">Shorts</li>
          <li className=" p-2 ps-4 rounded-lg hover:bg-gray-100">Subscriptions</li>
        </ul>
      </div>

      <div className="w-11/12 border-b-2 border-gray-200 py-1">
        <ul>
          <li className=" p-2 ps-4 rounded-lg hover:bg-gray-100">Library</li>
          <li className=" p-2 ps-4 rounded-lg hover:bg-gray-100">History</li>
          <li className=" p-2 ps-4 rounded-lg hover:bg-gray-100">Watch Later</li>
          <li className=" p-2 ps-4 rounded-lg hover:bg-gray-100">Liked Videos</li>
        </ul>
      </div>

      <div className="w-11/12 border-b-2 border-gray-200 py-1">
        <h3 className="font-bold ">Subscription</h3>
        <ul>
          <li className=" p-2 ps-4 rounded-lg hover:bg-gray-100">Music</li>
          <li className=" p-2 ps-4 rounded-lg hover:bg-gray-100">Movies</li>
          <li className=" p-2 ps-4 rounded-lg hover:bg-gray-100">Games</li>
        </ul>
      </div>

      <div className="w-11/12 border-b-2 border-gray-200 py-1">
        <h3 className="font-bold ">Explore</h3>
        <ul>
          <li className=" p-2 ps-4 rounded-lg hover:bg-gray-100">Trending</li>
          <li className=" p-2 ps-4 rounded-lg hover:bg-gray-100">Shoping</li>
          <li className=" p-2 ps-4 rounded-lg hover:bg-gray-100">Films</li>
          <li className=" p-2 ps-4 rounded-lg hover:bg-gray-100">Live</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
