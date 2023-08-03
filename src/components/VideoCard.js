import React from 'react'

const VideoCard = ({info}) => {
    console.log(info)

    const {channelTitle, title, thumbnails, publishedAt} = info?.snippet;
    const {viewCount} = info?.statistics;
    const shortTitle = title.substr(0, 61);

  return (
    <div className='w-80 mx-2 my-3 cursor-pointer'>
        <div>
            <img src={thumbnails.medium.url} className="rounded-xl" alt="thumbnail" />
        </div>

        <div className='flex ps-2 pt-2'>
            <img className='w-8 h-8' src="https://cdn-icons-png.flaticon.com/512/552/552721.png" alt="Channel img" />

            <div className='ps-2'>
                <h3 className='font-bold text-gray-900'>{shortTitle} {title.length>shortTitle.length?"...":null}</h3>
                <div>
                    <h5 className='text-sm text-gray-600'>{channelTitle}</h5>
                    <h5 className='text-sm text-gray-600'>{viewCount}-{publishedAt}</h5>
                </div>
            </div>

            <span>a</span>
        </div>
    </div>
  )
}

export default VideoCard