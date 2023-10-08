'use client'
import HeroSection from '@/Components/HeroSection'
import HeroNav from '@/Components/HeroNav'
import AboutSection from '@/Components/AboutSection'
import WithCard from '@/Components/WithCard'
import Technologies from '@/Components/Technologies'
import Build from '@/Components/Build'
import Form from '@/Components/Form'
import Footer from '@/Components/Footer'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <HeroSection/>
      <div className='mt-20'>
      <HeroNav/>
      </div>
      <div className='my-20 mx-20'>
      <AboutSection/>
      </div>
      <div className='mx-20'>
        <WithCard/>
      </div>
      <div>
        <Technologies/>
      </div>
      <div className='mx-20'>
        <Build/>
      </div>
      <div className='my-20'>
        <Form/>
      </div>
    
        <Footer/>
      
    </main>
  )
}
