'use client'
import HeroSection from '@/Components/HeroSection'
import HeroNav from '@/Components/HeroNav'
import AboutSection from '@/Components/AboutSection'
import WithCard from '@/Components/WithCard'
import Technologies from '@/Components/Technologies'
import Build from '@/Components/Build'
import Form from '@/Components/Form'
import Footer from '@/Components/Footer'
import CardCarousel from '@/Components/CardCarousel'
import ImageCarousel from '@/Components/ImageCarousel'
import CircleCardCarousel from '@/Components/CircleCardCarousel'
import HomeNavCarousel from '@/Components/HomeNavCarousel'
export default function Home() {
  return (
    <main className=" md:mx-10">

      <HeroSection/>
      <div className='mt-20 '>
      <HeroNav/>
      </div>
      <HomeNavCarousel/>
      <div className='my-20 md:mx-20'>
      <AboutSection/>
      </div>
      <div className=''>
        <WithCard/>
        <div className='md:hidden '>
        <CardCarousel />
        </div>
      </div>
      <div>
        <Technologies/>
        <div className='pb-[130px] md:hidden'>
          <ImageCarousel/>
        </div>
      </div>
      <div className='mx-20'>
        <Build/>
        <div className='md:hidden w-full'>
          <CircleCardCarousel/>
        </div>
      </div>
      <div className='my-20  flex items-center justify-center  '>
        <Form/>
      </div>
    <div className='flex items-center justify-center' >

        <Footer/>
    </div>
      
    </main>
  )
}
