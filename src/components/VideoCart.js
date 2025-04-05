import React from 'react';

const VideoCart = ({info}) => {
    
  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
         <img className='rounded-lg' src={info?.snippet?.thumbnails?.medium?.url} alt="video" />
                <ul className='py-2'>
                    <li className='font-semibold'>{info?.snippet?.title}</li>
                    <li className='text-gray-900'>{info?.snippet?.channelTitle}</li>
                    <li className='text-gray-700'>{info?.snippet?.publishedAt}</li>
                    <li className='text-gray-700'>{ Math.round(info?.statistics?.viewCount / 1000)} k views</li>
                </ul>
      
     </div>
  )
}

export const AdVideoCard = ({info}) => {
  return (
    <div className='m-1 p-1 border border-lime-800 rounded-lg'>
      <span className='px-4 rounded-lg bg-blue-900 text-white'>* Ad</span>
      <VideoCart info={info}/>
    </div>
  )
}

export default VideoCart;
