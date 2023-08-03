import React from 'react'

const Button = ({text}) => {
  return (
    <div>
        <button className='rounded-lg m-2 py-1 px-3 bg-gray-200'>{text}</button>
    </div>
  )
}

export default Button