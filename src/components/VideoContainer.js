import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEO_API } from './../utils/Constents';
import VideoCart from './VideoCart';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect( () => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
    
  }

  return (
    <div className='flex flex-wrap justify-center'>
      {videos.map(video => <VideoCart key={video.id} info={video} />)}
    </div>
  )
}

export default VideoContainer;
