import React from 'react';
import { USER_ICON } from '../utils/Constents';

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center shadow-lg rounded-lg p-1 gap-3'>
        <img className='h-8 rounded-full' src={USER_ICON} alt="user-icon" />
        <span className='font-bold'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage;
