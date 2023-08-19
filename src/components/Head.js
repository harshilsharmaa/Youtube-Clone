import React,{useState, useEffect} from "react";
import { toogleMenu } from "../utils/slices/appSlice";
import {useDispatch, useSelector } from 'react-redux'
import { SEARCH_SUGGESTION } from "../utils/constants";
import { cacheResults } from "../utils/slices/searchSlice";

const Head = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store)=>store.search);

  const dispatch = useDispatch();

  const getSuggestions = async()=>{

    const res = await fetch(SEARCH_SUGGESTION+searchQuery);
    const data = await res.json();
    setSuggestions(data[1]);
    dispatch(cacheResults({
      [searchQuery]: data[1]
    }));
  }

  useEffect(()=>{
    
    const timer = setTimeout(()=>{
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }
      else{
        getSuggestions();
      }
    },200)

    return ()=>{
      clearTimeout(timer);
    }
  },[searchQuery])

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
        <input type="text" className="w-1/2 rounded-l-full py-2 px-3 border border-gray-200 outline-none focus:border-blue-300" placeholder="Search"
        value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
        onFocus={()=>setShowSuggestions(true)}
        onBlur={()=>setShowSuggestions(false)}
        />
        <button className="py-2 px-3 rounded-r-full border border-gray-200">🔍</button>

        {
        // absolute top-14
          suggestions && showSuggestions && searchQuery.length>0?
          <div className="absolute top-16 w-[28rem] mr-20 bg-white rounded-lg border border-gray-200">
            {
              suggestions.map((suggestion, index)=>{
                return(
                  <div key={index} className="flex items-center p-2 hover:bg-gray-100">
                    <h3>🔍</h3>
                    <h3 className="text-gray-600 text-sm ml-3"> {suggestion}</h3>
                  </div>
                )
              })
            }
          </div>:null
        }
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
