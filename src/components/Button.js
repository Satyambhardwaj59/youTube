import React from 'react';

const Button = ({name}) => {
  return (
    <div>
        <button className='px-5 py-1 rounded-xl m-2 bg-gray-200'>{name}</button>
    </div>
  )
}

export default Button;
