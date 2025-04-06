import React from 'react';
import { LIKE_ICON, USER_ICON, DISLIKE_ICON } from './../utils/Constents';


function Comment({data}) {
    const { name, text, time, likes, reply, disLikes } = data;
    console.log(data);
    
  return (
    <div>
        <div className='flex items-center gap-2 p-2 bg-gray-100 rounded-sm m-3'>
            <img className='h-10 rounded-full' src={USER_ICON} alt="user-icon" />
            <div className='flex flex-col'>
                <span className='font-bold'>{name}</span>
                <span>{text}</span>
                <div className='flex justify-around mt-1'>
                    <div className='flex items-center gap-2 '>
                        <img className='h-5 rounded-full' src={LIKE_ICON} alt="like icon" />
                        <span className='font-semibold'>{likes}</span>
                    </div>
                    <div className='flex items-center gap-1 '>
                        <img className='h-5 rounded-full' src={DISLIKE_ICON} alt="Dislike icon" />
                        <span className='font-semibold'>{disLikes}</span>
                        <span className='pl-3 text-gray-600'>{time}</span>
                    </div>
                </div>
            </div>
        </div>
        
      
    </div>
  )
}

export default Comment;
