import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/slices/chatSlice'
import {generateName} from '../utils/helper'


const LiveChat = () => {

    const messages = useSelector((store)=>store.chat.messages);
    const dispatch = useDispatch();

    const [myMessage, setMyMessage] = useState('');

    useEffect(()=>{
        const i = setInterval(()=>{
            dispatch(addMessage({
                name: generateName(),
                text: "Lorem ipse dolor ida"
            }));
        },800)

        return ()=>{
            clearInterval(i);
        }
    },[])

    const addMessageHandler = (e)=>{
        e.preventDefault();
        if(myMessage.length>0){
            dispatch(addMessage({
                name: "You",
                text: myMessage
            }))
        }
        setMyMessage('');
    }

  return (
    <div className="w-10/12 h-[455px] p-3 m-auto rounded-lg border border-gray-300 bg-slate-100 flex flex-col justify-between">
        <h3>Top Chats</h3>
        <div className='mt-2 h-[77%] overflow-y-scroll flex flex-col-reverse'>
            
            {
                messages && messages.length>0 ?
                messages.map((message, index)=>{
                    return <ChatMessage name={message.name} text={message.text} key={index}/>
                })
                :null
            }
        </div>
        <form onSubmit={(e)=>addMessageHandler(e)} className='mt-1 flex items-center justify-evenly'>
            <input className='w-[80%] m-1 px-3 py-3 font-medium rounded-lg border border-black' type="text" value={myMessage} onChange={(e)=>setMyMessage(e.target.value)} />
            <button type='submit' className='rounded-full w-10 h-10 bg-green-600 text-white text-lg'>s</button>
        </form>
    </div>
  )
}

export default LiveChat