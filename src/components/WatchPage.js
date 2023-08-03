import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu, openMenu } from '../utils/slices/appSlice';
import { useSearchParams } from 'react-router-dom';
import {YOUTUBE_VIDEO} from '.././utils/constants'

const WatchPage = () => {

    const [videoInfo, setVideoInfo] = useState();
    const [videoId, setVideoId] = useState(null);

    const [searchParams] = useSearchParams();

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());

        return ()=>{
            dispatch(openMenu());
        }
    },[])

    const getVideoInfo = async(id)=>{
        const data = await fetch(`${YOUTUBE_VIDEO}${id}`);
        const json = await data.json();
        console.log(json.items[0]);

        setVideoInfo(json.items[0]);
    }

    useEffect(()=>{
        const id = searchParams.get('v');
        if(id){
            setVideoId(id);
            getVideoInfo(id);
        }
    },[searchParams])

    if(videoId===null) return <h1>Shimmer</h1>

  return (
    <div>
        <iframe width="760" height="415" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage