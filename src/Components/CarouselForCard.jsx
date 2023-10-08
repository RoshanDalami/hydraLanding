'use client'
import React from 'react'
import Slider from "react-slick";
import Image from 'next/image';

import rightArrow from '@/Images/outline/card-arrow-right.svg'
import leftArrow from '@/Images/outline/card-arrow-left.svg'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <Image src={rightArrow} className={className} alt='' onClick={onClick} style={{...style,width:'30px',height:'40px',display:'absolute',marginTop:'8%' , marginRight:'5%',zIndex:10 }} />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <Image src={leftArrow} className={className } alt='' onClick={onClick} style={{...style,width:'30px',height:'40px',display:'absolute',marginTop:'8%' , marginLeft:'5%', zIndex:10 }} />
      );
  }


export default function CarouselForCard({children}) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
      };
  return (
    <Slider {...settings} >
        {children}
    </Slider>
  )
}
