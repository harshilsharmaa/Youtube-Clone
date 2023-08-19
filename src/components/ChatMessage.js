import React from 'react'

const ChatMessage = ({name, text}) => {
  return (
    <div className='flex mt-3'>
        <div className='flex'>
            <img className='h-6 w-6' src="https://cdn-icons-png.flaticon.com/512/552/552721.png" alt="user image" />
            <h3 className='ml-3 text-gray-800'>{name}</h3>
        </div>
        <p className='ml-3'>{text}</p>
    </div>
  )
}

export default ChatMessage