import React, { useState } from 'react'

const Comment = ({data}) => {
    const {name, text, replies, id} = data;
    const [showReplies, setShowReplies] = useState(false);
  return (
    <div className='p-2 flex '>
        <div className='flex'>
            <img className='w-7 h-7' src="https://cdn-icons-png.flaticon.com/512/552/552721.png" alt="user img" />
        </div>
        <div className='ml-2'>
            <h3 className='font-bold'>{name}</h3>
            <h3 className=''>{text}</h3>
            {
                replies && replies.length>0 ?
                <div className='border-l border-gray-300 p-2'>
                    <h3 onClick={()=>setShowReplies(!showReplies)} className='cursor-pointer'>Replies: 🔽</h3>
                    {
                        showReplies && replies.map((reply)=>{
                            return <Comment data={reply} key={reply.id} />
                        })
                    }
                </div>
                :null
            }
        </div>
    </div>
  )
}

export default Comment