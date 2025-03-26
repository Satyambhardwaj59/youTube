import React from 'react';

const VideoCart = ({info}) => {
    
  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
         <img className='rounded-lg' src={info?.snippet?.thumbnails?.medium?.url} alt="video" />
                <ul className='py-2'>
                    <li className='font-semibold'>{info?.snippet?.title}</li>
                    <li className='text-gray-900'>{info?.snippet?.channelTitle}</li>
                    <li className='text-gray-700'>{info?.snippet?.publishedAt}</li>
                    <li className='text-gray-700'>{info?.statistics?.viewCount} views</li>
                </ul>
      
     </div>
  )
}

export default VideoCart;
