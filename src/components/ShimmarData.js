import React from 'react'

const ShimmarData = () => {
  return (   
    <div className='m-2'>
      <div className='h-56 w-64 bg-gray-300 animate-pulse shadow-lg rounded-xl'></div>
      <div className='my-5 flex items-center justify-around '>
        <div className='h-10 w-10 bg-gray-300 rounded-full animate-pulse'></div>
        <div>
            <div className='h-4 w-42 bg-gray-300 animate-pulse rounded-3xl mb-2'></div>
            <div className='h-4 w-34 bg-gray-300 animate-pulse rounded-3xl'></div>
        </div>
      </div>
    </div>
  )
}

export default ShimmarData;
