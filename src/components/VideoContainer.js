import React, { useEffect, useState } from 'react'
import {YOUTUBE_API} from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import HomePageShimmer from './HomePageShimmer';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  const getVideos = async()=>{
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();  

    setVideos(json.items);
  }

  useEffect(()=>{
    getVideos();
  },[])

  if(videos===null || videos.length===0){
    return (
      <HomePageShimmer/>
    )
  }

  return (
    <div className='w-full flex flex-wrap justify-evenly pt-2 ps-4'>
      {
        videos.length>0 &&

        videos.map((item)=>{
          return(
            <Link key={item.id} to={`/watch?v=${item.id}`}>
              <VideoCard info={item} />
            </Link>
          )
        })
      }
    </div>
  )
}

export default VideoContainer