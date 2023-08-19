import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu, openMenu } from "../utils/slices/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO } from ".././utils/constants";
import CommentsContainer from './CommentsContainer'
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [videoInfo, setVideoInfo] = useState(null);
  const [videoId, setVideoId] = useState(null);
  const [showDecription, setShowDecription] = useState(false);
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());

    return () => {
      dispatch(openMenu());
    };
  }, []);

  const getVideoInfo = async (id) => {
    const data = await fetch(`${YOUTUBE_VIDEO}${id}`);
    const json = await data.json();
    console.log(json.items[0]);

    setVideoInfo(json.items[0]);
  };

  useEffect(() => {
    const id = searchParams.get("v");
    if (id) {
      setVideoId(id);
      getVideoInfo(id);
    }
  }, [searchParams]);

  if (videoId === null || videoInfo===null) return <h1>Shimmer</h1>;

  const {title, channelTitle, description } = videoInfo?.snippet;
  let {commentCount, likeCount, viewCount } = videoInfo?.statistics;

  if(likeCount>=1000){
    likeCount = `${Math.floor(likeCount/1000)} K`;
  }

  return (
    <div className="w-full py-3 px-8  flex">
      <div className="w-8/12 flex flex-col">
        <iframe
          width="830"
          height="455"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <div className=" flex flex-col mt-2">
          <h2 className="font-bold text-xl">
            {title}
          </h2>

          <div className="flex justify-between mt-2">
            <div className="flex items-center">
              <img
                className="w-8 h-8"
                src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
                alt="Channel img"
              />

              <div className="ml-2">
                <h5>{channelTitle}</h5>
                <h6>123k subscribers</h6>
              </div>

              <button className="ml-4 px-3 py-2 bg-gray-950 text-white rounded-full hover:bg-gray-900">
                Subscribe
              </button>
            </div>

            <div className="flex items-center">
              <div className="mr-2">
                <button className="rounded-l-full p-2 bg-gray-200 cursor-pointer hover:bg-gray-300">
                  {likeCount} Like
                </button>
                <button className="rounded-r-full p-2 bg-gray-200 cursor-pointer hover:bg-gray-300">
                  Dislike
                </button>
              </div>

              <button className="mr-2 rounded-full p-2 bg-gray-200 cursor-pointer hover:bg-gray-300">
                Share
              </button>
              <button className="mr-2 rounded-full p-2 bg-gray-200 cursor-pointer hover:bg-gray-300">
                Download
              </button>
            </div>
          </div>

          <div
            
            className="rounded-xl p-2 bg-slate-200 hover:bg-slate-300"
          >
            <div className="flex">
              <h4>334 views</h4>
              <h4>4 days ago</h4>
              <h4>#abc #cs #sdf</h4>
            </div>

            <div
            onClick={() => {
                setShowDecription(true);
             }}
              className={`${
                !showDecription ? `h-16 overflow-hidden` : null
              } cursor-pointer `}
            >
              <p className="">
                {description}
                asljfjaklsdf \n\n
              </p>
            </div>
            <button hidden={showDecription?false:true} onClick={() => setShowDecription(false)}>Show Less</button>
          </div>
        </div>

        <CommentsContainer/>
      </div>
      <div className="w-full">
        <LiveChat/>
      </div>
    </div>
  );
};

export default WatchPage;
