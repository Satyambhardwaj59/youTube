import React from 'react';
import ShimmarData from './ShimmarData';

const ShimmarArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const Shimmar = () => {
  return (
    <div className='flex flex-wrap gap-2 justify-around'>
      {ShimmarArr.map((item) => (
        <ShimmarData key={item} />
      ))}
    </div>

  )
}

export default Shimmar;
