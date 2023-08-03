import React, { useEffect, useState } from 'react'
import {YOUTUBE_API} from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

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

  return (
    <div className='w-full flex flex-wrap pt-2 ps-4'>
     {/* {
       videos.length>0 && <VideoCard info={videos[0]}/>
    }  */}
      {
        videos.length>0 &&

        videos.map((item)=>{
          return(
            <Link to={`/watch?v=${item.id}`}>
              <VideoCard info={item} key={item.id}/>
            </Link>
          )
        })
      }
    </div>
  )
}

export default VideoContainer