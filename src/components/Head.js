import React from 'react'

const Head = () => {
  return (
    <div className='grid grid-flow-col  p-5 m-2 shadow-md'>
        <div className='flex col-span-1'>
            <img className='h-8 mr-4' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png" alt="menu" />
            <img className='h-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="youtube-logo" />
      
        </div>
        <div className='col-span-9 flex place-content-center'>
            <input className='w-1/2 p-2  border-gray-300 border-2 rounded-l-full' type="text" placeholder="Search" />
            <button className='border-gray-300 bg-gray-200 py-2 px-5 border-2 rounded-r-full'>🔍︎</button>
            <button className='border-gray-300 bg-gray-200 p-1 rounded-full text-3xl ml-10'>🎙️</button>
        </div>
        
        <div className='col-span-1'>
            <img className='h-10' src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="user-icon" />
        </div>

    </div>

  )
}

export default Head;
