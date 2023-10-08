'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import longarrow from "@/Images/longarrow.svg";
import Image from "next/image";
import Card from "./Card";
//images
import simulation from '@/Images/simulation.svg';
import education from '@/Images/education.svg';
import selfcare from '@/Images/selfcare.svg';
import outdoor from '@/Images/outdoor.svg';
import curve14 from '@/Images/curve14.svg';
import CarouselForCard from "./CarouselForCard";


export default function WithCard() {

    const data = [
        {
            id:'1',
            title:'SIMULATION',
            image:simulation,
            btn_title:'TRY IT NOW' ,
            desc:"Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae."
        },{
            id:'2',
            title:'EDUCATION',
            image:education,
            btn_title:'TRY IT NOW' ,
            desc:"Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae."
        },
        {
           id:'3',
            title:'SELF-CARE',
            image:selfcare,
            btn_title:'TRY IT NOW' ,
            desc:"Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae."
        },
        {
           id:'4',
            title:'OUTDOOR',
            image:outdoor,
            btn_title:'TRY IT NOW' ,
            desc:"Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae."
        },
    ]        

  return (
    <>
    
    <main className="text-white py-20 hidden md:flex flex-col gap-16 ">
      <section className="flex items-center justify-between ">
        <section>
          <h1 className="text-[36px] font-bold">WHY BUILD</h1>
          <section className="flex items-center gap-4">
            <h1 className="text-[36px] font-thin">WITH HYDRA?</h1>
            <Image src={longarrow} alt="arrow" />
          </section>
        </section>
        <section className="w-2/4">
          <p>
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </section>
      </section>
      <section className="flex items-center  justify-between ">
        <Image src={curve14} alt="curve" className="absolute   -z-50 left-0 mb-[-450px]  "/>
        {
            data.map((item)=>{
                return(
                    <Card key={item.id} image={item.image} title={item.title} btn_title={item.btn_title} desc={item.desc}  />
                )
            })
        }
      </section>
    </main>
    <main className="text-white py-20 md:hidden items-center flex flex-col gap-16 ">
      <section className="flex items-center justify-between ">
        <section className="flex items-center flex-col">
          <h1 className="text-[26px] font-bold">WHY BUILD</h1>
  
            <h1 className="text-[26px] font-thin">WITH HYDRA?</h1>
          
        </section>
      </section>
      <section className="flex items-center flex-wrap  justify-between ">
        <div>
        
        {
            data.map((item)=>{
                return(
                  
                    <Card key={item.id} image={item.image} title={item.title} btn_title={item.btn_title} desc={item.desc}  />
                )
            })
        }
        
        </div>
      </section>
    </main>
    </>
  );
}
