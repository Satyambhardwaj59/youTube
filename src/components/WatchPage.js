import React, { use, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/AppSlice';
import { useSearchParams } from 'react-router';

const WatchPage = () => {

  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div>
      <iframe width="1100" height="500" src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}



export default WatchPage;
