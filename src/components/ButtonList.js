import React from 'react';
import Button from './Button';
import Slider from "react-slick";

const btnArr = ["All", "Music", "Mixes","T-Series", "React", "JavaScript", "Movie", "Interview", "Comedy", "Tech", "Science", "Sports"];

const ButtonList = () => {

  return (
    <div className='flex'>
       {btnArr.map((btn, index) => <Button key={index} name={btn}/>)}
    </div>
  )
}

export default ButtonList;

{/*  
  
   var settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 7,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  */}

{/* <Button name="All"/>
        <Button name="Music"/>
        <Button name="Mixes"/>
        <Button name="T-Series"/>
        <Button name="React"/>
        <Button name="JavaScript"/>
        <Button name="Movie"/>
        <Button name="Interview"/>
        <Button name="Comedy"/>
        <Button name="Tech"/>
        <Button name="Science"/>
        <Button name="Sports"/>
      

*/ }
