import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const buttonList = ["All", "Music", "Coding", "Web", "Laptop", "Watched"];

  return (
    <div className='flex'>
      {
        buttonList.map((item)=>{
          return (<Button text={item} key={item}/>)
        })
      }
    </div>
  )
}

export default ButtonList