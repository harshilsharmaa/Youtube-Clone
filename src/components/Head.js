import React from "react";
import { toogleMenu } from "../utils/slices/appSlice";
import {useDispatch } from 'react-redux'

const Head = () => {


  const dispatch = useDispatch();

  return (
    <div className="grid grid-flow-col p-1">
      <div className="flex items-center col-span-1">
        <img
          onClick={()=>dispatch(toogleMenu())}
          className="h-12 cursor-pointer"
          src="https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg"
          alt="menu"
        />

        <img
        className="h-16"
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          alt="youtube logo"
        />
      </div>

      <div className="col-span-10  flex items-center justify-center">
        <input type="text" className="w-1/2 rounded-l-full py-2 px-3 border border-gray-200 outline-none" placeholder="Search"/>
      </div>

      <div className="flex items-center col-span-1">
        <img
        className="h-8"
          src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
          alt="user icon"
        />
      </div>
    </div>
  );
};

export default Head;
