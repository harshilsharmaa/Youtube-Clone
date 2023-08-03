import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import {Outlet} from 'react-router-dom'

const Body = () => {

  return (
    // <div className='w-full grid grid-flow-col'>
    <div className='w-full flex '>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Body