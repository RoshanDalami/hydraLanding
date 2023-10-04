import React from 'react'
import Image from 'next/image'
import footerLine from '@/Images/footerLine.svg';
import logo from '@/Images/logo.svg'
import footerHorizontal from '@/Images/footerhorizontal.svg'
import curve18 from '@/Images/curve18.svg'
import curve19 from '@/Images/curve19.svg'
export default function Footer() {
  return (
    <main className='w-[80%]  text-white'>
        <div className='  justify-center items-center gap-20 flex'>
            <Image src={curve19} alt='' className='absolute left-0 mb-[500px] rotate-[-3deg] -z-50 '/>
            <Image src={curve18} alt='' className='absolute left-0 -z-50 '  />
        <section>
            <Image src={logo} alt='' width={150} height={150}/>
        </section>
        <Image src={footerLine} alt=''/>
        <section className='flex flex-col gap-4'>
            <p className='footertext'>ABOUT</p>
            <p className='footertext'>SERVICES</p>
            <p className='footertext'>TECHNOLOGIES</p>
            <p className='footertext'>HOW TO</p>
            <p className='footertext'>JOIN HYDRA</p>
        </section>
        <Image src={footerLine} alt='' className='py-7'/>
        <section className='flex flex-col gap-4'>
            <p className='footertext'>F.A.Q</p>
            <p className='footertext'>SITEMAP</p>
            <p className='footertext'>CONDITIONS</p>
            <p className='footertext'>LICENSES</p>
        </section>
        <Image src={footerLine} alt=''/>
        <section className='flex flex-col gap-4'>
            <p className='footertext'>SOCIALIZE WITH HYDRA</p>
        </section>
        </div>
        <Image src={footerHorizontal} alt='' className='my-5'/>
        <div>
            <p className='text-[14px] font-bold text-center py-6 '>2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED </p>
        </div>
    
    </main>
  )
}
