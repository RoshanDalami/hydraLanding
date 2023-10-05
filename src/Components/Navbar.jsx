import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

//image imports
import logo from '@/Images/logo.svg'
import logotext from '@/Images/logotext.svg'
import hamburgur from '@/Images/Hamburger.svg';

export default function Navbar() {
  return (
    <>
    <main className=' hidden md:flex items-center justify-between w-full px-20 my-5 sticky top-5 z-50 '>
        <section className='flex gap-2'>
            <Image src={logo} alt='' width={75} height={75} />
            <Image src={logotext} alt='' width={50} height={50} />
        </section>
        <section className='flex gap-10 text-white'>
                <p className='nav_link'>ABOUT</p>
                <p className='nav_link'>SERVICES</p>
                <p className='nav_link'>TECHNOLOGY</p>
                <p className='nav_link'>HOW TO</p>
        </section>
        <section className='flex gap-6 text-white'>
            <button className='nav_link contactus_btn '>CONTACT US</button>
            <button className='nav_link join_btn '>JOIN HYDRA</button>
        </section>
    </main>
    <main className=' md:hidden  flex items-center justify-between w-full px-10 my-5 sticky top-5 z-50 '>
        <section className='flex gap-2'>
            <Image src={logo} alt='' width={75} height={75} />
            <Image src={logotext} alt='' width={50} height={50} />
        </section>
        <section>
          <Image src={hamburgur} alt=''/>
        </section>
    </main>



    </>
  )
}
