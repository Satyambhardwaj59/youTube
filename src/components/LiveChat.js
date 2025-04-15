import React, {useEffect, useState} from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage,  } from '../utils/helper';

const LiveChat = () => {

    const [liveMessage, setLiveMessage] = useState("");

    const dispatch = useDispatch();

    const chatMessages = useSelector((store) => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
            //console.log("Interval");
            dispatch(addMessage({
                name: generateRandomName(),
                message: makeRandomMessage(20) + "  🚀"
            }));
        }, 1000);

        return () => clearInterval(i);

    }, [])

  return (
    <>
        <div className='w-full h-[500]  border-2 border-black ml-2 p-4 rounded-lg shadow-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse'>
            {
                chatMessages.map((chat, index ) => <ChatMessage key={index} name={chat.name} message={chat.message}/>
            )
            }        
        </div>
        <form className='w-full border border-black ml-2 mt-1 p-2 rounded-lg shadow-lg bg-slate-100' 
        onSubmit={(e) => {
            e.preventDefault();
            dispatch(addMessage({
                name: "Satyam Bhardwaj",
                message: liveMessage
            }));
            setLiveMessage("");
            
        }}
        >
            <input className='w-2/3 p-1 border rounded-lg' type="text" placeholder='Chat...' value={liveMessage} onChange={(e) => {
                setLiveMessage(e.target.value);
            }} />
            <button className='ml-2 px-2 py-1 bg-green-100 font-bold rounded-lg'>Send</button>
        </form>
    </>
  )
}

export default LiveChat;
