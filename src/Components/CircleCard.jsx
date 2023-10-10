import React from 'react'
import Image from 'next/image'
import circlesmall from '@/Images/bigcircle.svg'
import roundcard from '@/Images/roundcard.svg';
import smallarrow from '@/Images/hero_arrow.svg';

export default function CircleCard({title,desc}) {
  return (
    <>
    <main className='flex flex-col gap-5'  >
        
    <div className='relative flex  justify-center items-center'>
        <Image src={roundcard} alt='' className='mt-5'/>
        <Image src={circlesmall} alt='' className='absolute top-0 -z-30'/>
        <h2 className='text-[#343045] text-[64px] absolute font-bold' >{title}</h2>
    </div>
    <div className='flex justify-center items-center'>
        
        <Image src={smallarrow} alt=''/>
        <p className='text-[24px] font-bold'>{desc}</p>
    </div>

    </main>
    </>
  )
}
