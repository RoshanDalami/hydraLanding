import React from "react";
import Image from "next/image";
import longarrow from "@/Images/longarrow.svg";
import CircleCard from "./CircleCard";
import curve15 from '@/Images/curve15.svg';
export default function Build() {
    const data = [
        {
            id:'1',
            title:'01',
            desc:'3D Conception & Design'
        },
        {
            id:'2',
            title:'02',
            desc:'Interaction Design'
        },
        {
            id:'3',
            title:'03',
            desc:'VR World User Testing'
        },
        {
            id:'4',
            title:'04',
            desc:'Hydra VR Deploy'
        },
    ]
  return (
    <>
    
    <main className="text-white hidden md:flex flex-col gap-20">
      <section className="flex items-center justify-between">
        <section>
          <h1 className="text-[36px] font-bold">HOW WE BUILD</h1>
          <section className="flex items-center gap-6">
            <h1 className="text-[36px] font-thin">WITH HYDRA VR?</h1>
            <Image src={longarrow} alt="" />
          </section>
        </section>
        <p className="text-[16px] font-thin w-2/4">
          Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
          amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
          aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
          Lectus magna fringilla urna porttitor rhoncus vitae.
        </p>
      </section>
      <section className="flex justify-between items-center ">
        {
            data.map((item)=>{
                return(

                    <CircleCard key={item.id} title={item.title} desc={item.desc} />
                )
            })
        }
        <Image src={curve15} alt="" className=" absolute left-0 -z-50 mt-[-150px] "/>
      </section>
    </main>
    <main className="text-white md:hidden flex flex-col gap-20">
      <section className="flex items-center justify-between">
        <section>
          <h1 className="text-[26px] font-bold">HOW WE BUILD</h1>
          
            <h1 className="text-[26px] font-thin">WITH HYDRA VR?</h1>
        </section>
      </section>
      <section className="flex flex-col justify-between items-center ">
        {
            data.map((item)=>{
                return(

                    <CircleCard key={item.id} title={item.title} desc={item.desc} />
                )
            })
        }
        
      </section>
    </main>
    </>
  );
}
