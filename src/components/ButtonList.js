import React from 'react';
import Button from './Button';

const btnArr = ["All", "Music", "Mixes", "T-Series", "React", "JavaScript", "Movie", "Interview", "Comedy", "Tech", "Science", "Sports"];

const ButtonList = () => {
  return (
    <div className='flex'>
      {btnArr.map((btn, index) => <Button key={index} name={btn} />)}
    </div>
  )
}

export default ButtonList;
