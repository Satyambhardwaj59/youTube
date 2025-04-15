import React, { useEffect, useState }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/AppSlice';
import { Link } from 'react-router';
import { USER_ICON, YOUTUBE_SEARCH_API, BELL_ICON } from '../utils/Constents';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {

    const timer = setTimeout(() => {
      if(searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggesation();
      }

      
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggesation = async () => {
    
    console.log("API CALL - " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    
    setSuggestions(json[1]);

    

    // update the cache
    dispatch(cacheResults({
      [searchQuery]: json[1]
    }));

  }
  

  const dispatch = useDispatch();

  const toggelMenuHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className='grid grid-flow-col  p-5 m-2 shadow-md'>
      
        <div className='flex col-span-1'>
        
            <img onClick={() => toggelMenuHandler()} className='h-8 mr-4 cursor-pointer' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png" alt="menu" />
            <img className='h-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="youtube-logo" />
       
        </div>
        <div className='col-span-9 flex flex-col place-content-center'>
          <div className='flex justify-center'>
              <input className='w-1/2 p-2  border-gray-300 border-2 rounded-l-full' type="text" placeholder="Search" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setShowSuggestions(false)}
              />
              <button className='border-gray-300 bg-gray-200 py-2 px-5 border-2 rounded-r-full'>🔍︎</button>
              <button className='border-gray-300 bg-gray-200 p-1 rounded-full text-3xl ml-10'>🎙️</button>

            </div>
          {showSuggestions && <div className=' absolute bg-white shadow-lg  mt-10 rounded-lg top-12 px-6 py-2 w-3/8 ml-44'>
            <ul className=' items-center'>
              {suggestions.map((sug) =><li key={sug} className='py-3 shadow-sm hover:bg-gray-100'><span className='text-gray-300 px-2 text-xl'>🔍︎</span>{sug} </li>)}
              
            </ul>
          </div>}
        </div>
        
        <div className='col-span-1 flex justify-center items-center '>
          <button className='border-gray-300 bg-gray-200 py-1 px-2 rounded-full text-xl'> + Create</button>
          <img className='h-8 mx-8' src={BELL_ICON} />
            <img className='h-10' src={USER_ICON} alt="user-icon" />
        </div>

    </div>

  )
}

export default Head;
