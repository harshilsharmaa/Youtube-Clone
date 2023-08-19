import React from 'react'


const VideoCardShimmer = () => {
  return (

    <div className='w-80 mx-2 my-3'>
    <div>
        <div className='rounded-xl bg-slate-200 h-44 w-80'></div>
    </div>

    <div className='flex ps-2 pt-2'>

        <div className='w-8 h-8 rounded-full bg-slate-200'></div>

        <div className='ps-2 flex flex-col justify-center'>
            <h3 className='w-56 h-5  bg-slate-200'></h3>
            <h3 className='mt-1 w-48 h-5  bg-slate-200'></h3>
            <div>
                <h5 className='mt-1 w-12 h-4  bg-slate-200'></h5>
            </div>
        </div>
    </div>
</div>
  )
}

const HomePageShimmer = ()=>{


    return (
        <div className='w-full flex flex-wrap justify-evenly pt-2 ps-4'>
            <VideoCardShimmer/>
            <VideoCardShimmer/>
            <VideoCardShimmer/>
            <VideoCardShimmer/>
            <VideoCardShimmer/>
            <VideoCardShimmer/>
        </div>
    )
}

export default HomePageShimmer