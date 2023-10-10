import React from 'react'
import Image from 'next/image'
import CarouselForCard from './CarouselForCard'
import unity from '@/Images/unity.svg'
import unreal from '@/Images/unreal.svg'
import oculus from '@/Images/oculus.svg';
import vive from '@/Images/vive.svg';
import CarouselForImage from './CarouselForImage'

export default function ImageCarousel() {
  return (
    <div className='mx-10 h-[80px]'>
        <CarouselForImage>
        <Image src={unreal} alt="" className=' w-[200px] h-[200px]   '  />
        <Image src={unity} alt="" className=' w-[200px] h-[200px] -my-10   '/>
        <Image src={oculus} alt="" className=' w-[200px] h-[200px] -my-10   '/>
        <Image src={vive} alt="" className=' w-[200px] h-[200px] -my-10 '/>
        </CarouselForImage>
      
    </div>
  )
}
