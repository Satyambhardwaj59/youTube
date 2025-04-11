import React, {useEffect} from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage,  } from '../utils/helper';

const LiveChat = () => {

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
    <div className='w-full h-[500]  border-2 border-black ml-2 p-4 rounded-lg shadow-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse'>
        {
            chatMessages.map((chat, index ) => <ChatMessage key={index} name={chat.name} message={chat.message}/>
        )
        }        
    </div>
  )
}

export default LiveChat;
