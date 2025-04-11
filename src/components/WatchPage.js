import React, { use, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/AppSlice';
import { useSearchParams } from 'react-router';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {

  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className='w-full'>
      <div className='flex'>
        <div>
          <iframe width="900" height="500" src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div className='w-full  px-4'>
          <LiveChat/>
        </div>
      </div>
      <div>
        <CommentContainer />
      </div>
    </div>
  )
}



export default WatchPage;
