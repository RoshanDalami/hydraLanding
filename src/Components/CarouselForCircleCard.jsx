'use client'
import React from 'react'
import Slider from "react-slick";
import Image from 'next/image';

import rightArrow from '@/Images/cardArrowRight.png'
import leftArrow from '@/Images/cardArrowLeft.png'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <Image src={rightArrow} className={className} alt='' onClick={onClick} style={{...style,width:'65px',height:'65px',display:'absolute',marginTop:'75px' , marginRight:'-40px',zIndex:10 }} />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <Image src={leftArrow} className={className } alt='' onClick={onClick} style={{...style,width:'65px',height:'65px',display:'absolute',marginTop:'75px', zIndex:10, marginLeft:'-40px'  }} />
      );
  }


export default function CarouselForCircleCard({children}) {
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
