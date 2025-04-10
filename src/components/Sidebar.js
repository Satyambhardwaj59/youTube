import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router';

const SubArray = ['Music', 'Sports', 'Gaming', 'Movie'];

const Sidebar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early Return pattern

  if(!isMenuOpen) return null;
  return (
      <div className='p-5 shadow-xl bg-gray-100 h-screen sticky top-0 text-xl'>
        <div>
          <ul>
            <li className='shadow-md rounded-lg py-1 text-center m-2 hover:bg-gray-200'><Link to="/">Home</Link></li>
            <li className='shadow-md rounded-lg py-1 text-center m-2 hover:bg-gray-200'><Link to="/Shimmar">Shorts</Link></li>
            <li className='shadow-md rounded-lg py-1 text-center m-2 hover:bg-gray-200'><Link to="/Shimmar">Videos</Link></li>
            <li className='shadow-md rounded-lg py-1 text-center m-2 hover:bg-gray-200'><Link to="/Shimmar">Live</Link></li>
          </ul>
        </div>
         <div className='pt-5'>
          <h1 className='font-bold text-2xl pb-2'>Subscription </h1>
            <ul>
              <li className='shadow-md rounded-lg py-1 text-center m-2 hover:bg-gray-200'><Link to="/Shimmar">Music</Link></li>
              <li className='shadow-md rounded-lg py-1 text-center m-2 hover:bg-gray-200'><Link to="/Shimmar">Sports</Link></li>
              <li className='shadow-md rounded-lg py-1 text-center m-2 hover:bg-gray-200'><Link to="/Shimmar">Gaming</Link></li>
              <li className='shadow-md rounded-lg py-1 text-center m-2 hover:bg-gray-200'><Link to="/Shimmar">Movie</Link></li>
            </ul>
        </div>
         <div className='pt-5' >
          <h1 className='font-bold text-2xl pb-2'>Watch Later</h1>
          <ul>
              <li className='shadow-md rounded-lg py-1 text-center m-2 hover:bg-gray-200'><Link to="/Shimmar">Music</Link></li>
              <li className='shadow-md rounded-lg py-1 text-center m-2 hover:bg-gray-200'><Link to="/Shimmar">Sports</Link></li>
              <li className='shadow-md rounded-lg py-1 text-center m-2 hover:bg-gray-200'><Link to="/Shimmar">Gaming</Link></li>
              <li className='shadow-md rounded-lg py-1 text-center m-2 hover:bg-gray-200'><Link to="/Shimmar">Movie</Link></li>
            </ul>
        </div>
        
      </div>
  )
}

export default Sidebar;
