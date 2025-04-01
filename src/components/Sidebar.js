import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router';


const Sidebar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early Return pattern

  if(!isMenuOpen) return null;
  return (
      <div className='p-5 shadow-xl '>
        <div>
          <ul>
            <Link to="/">Home</Link>
            <li>Shorts</li>
            <li>Videos</li>
            <li>Live</li>
          </ul>
        </div>
         <div className='pt-5'>
          <h1 className='font-bold'>Subscription </h1>
            <ul>
              <li>Music</li>
              <li>Sports</li>
              <li>Gaming</li>
              <li>Movie</li>
            </ul>
        </div>
         <div className='pt-5' >
          <h1 className='font-bold'>Watch Later</h1>
            <ul>
              <li>Music</li>
              <li>Sports</li>
              <li>Gaming</li>
              <li>Movie</li>
            </ul>
        </div>
      </div>
  )
}

export default Sidebar;
