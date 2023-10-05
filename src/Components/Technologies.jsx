import React from "react";
import Image from "next/image";
import technologies from "@/Images/technologies.svg";
import arrowdown from "@/Images/arrowdown.svg";
import circlesmall from '@/Images/circlesmall.svg';
import unity from '@/Images/unity.svg'
import unreal from '@/Images/unreal.svg'
import oculus from '@/Images/oculus.svg';
import vive from '@/Images/vive.svg';

export default function Technologies() {
  return (
    <>

    <>

      <main className="relative hidden md:flex flex-col items-center ">
        <Image src={technologies} alt="image" className="relative" />
        <div className="absolute top-0 text-center flex items-center flex-col justify-center w-full h-full">
          <h1 className="text-[36px] font-bold text-white">
            TECHNOLOGIES & HARDWARE
          </h1>
          <p className="text-[36px] text-white font-thin">USED BY HYDRA VR.</p>
        </div>
       

      <div className="bg-gradient-to-r from-[#8176AF]  to-[#C0B7E8] w-[40px]  rounded-full mt-[-25px] z-50 relative  ">
        <Image src={arrowdown} alt="arrow down"  />
        
      
        </div>
      </main>
      <main className=" hidden md:flex items-center justify-between">
        <Image src={unreal} alt=""/>
        <Image src={unity} alt=""/>
        <Image src={oculus} alt=""/>
        <Image src={vive} alt=""/>
      </main>
    </>
    <>

      <main className="relative flex md:hidden flex-col items-center mx-10 ">
        <Image src={technologies} alt="image"  />
        <div className="absolute top-0 text-center flex items-center flex-col justify-center w-full h-full">
          <h1 className="text-[16px] font-bold text-white">
            TECHNOLOGIES & HARDWARE
          </h1>
          <p className="text-[24px] text-white font-thin">USED BY HYDRA VR.</p>
        </div>
      </main>
      <main className="flex flex-col items-center md:hidden justify-between">
        <Image src={unreal} alt=""/>
        <Image src={unity} alt=""/>
        <Image src={oculus} alt=""/>
        <Image src={vive} alt=""/>
      </main>
    </>
    </>
  );
}
