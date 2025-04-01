import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEO_API } from './../utils/Constents';
import VideoCart from './VideoCart';
import { Link } from 'react-router';

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
  console.log(videos.id);
  return (
    
    
    <div className='flex flex-wrap justify-center'>
      
        {videos.map(video => 
        <Link to={"/watch?v=" + video.id} key={video.id} >
          <VideoCart info={video} />
        </Link>
        )}
      
    </div>
  )
}

export default VideoContainer;
