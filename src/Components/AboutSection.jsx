import React from "react";
import Image from "next/image";
import lognarrow from "@/Images/longarrow.svg";
import aboutImage from "@/Images/about_section.svg";
import curve7 from "@/Images/curve7.svg";
import curve8 from "@/Images/curve8.svg";
export default function AboutSection() {
  return (
    <>
    
    <main className="text-white hidden md:flex flex-col gap-10 ">
      <section className="flex items-center justify-between">
        <section className="">
          <h1 className="text-[36px] font-bold">INTRODUCTION</h1>
          <section className="flex items-center gap-6">
            <h1 className="text-[36px] font-light">TO Debuginit</h1>
            <Image src={lognarrow} alt="long arrow" />
          </section>
        </section>
        <section className="w-2/4">
          <p className="text-[16px] font-normal">
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </section>
      </section>
      <section className="flex items-center justify-between">
        <div className="absolute -z-50">
        <Image src={curve7} alt="curve" className=" -z-50 rotate-[0deg] " />
        <Image src={curve8} alt="curve" className=" -z-50 rotate-[0deg] " />

        </div>
        <Image src={aboutImage} alt="image" width={400} height={400} />
        <section className="w-2/4 flex flex-col gap-6">
          <div>
            <h1 className="text-[36px] font-bold"> ABOUT</h1>
            <h1 className="text-[36px] font-extralight">Debuginit</h1>
          </div>
          <p className="text-[16px] font-light">
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
            mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
            dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
            tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
            purus in massa. Est placerat in egestas erat imperdiet sed.
            Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet
            sit amet cursus sit amet. Vel eros donec ac odio tempor orci
            dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
            bibendum. Leo a diam sollicitudi n tempor.
          </p>
          <button className="join_btn w-2/4">LET&apos;S GET IN TOUCH</button>
        </section>
      </section>
    </main>
    <main className="text-white flex md:hidden flex-col gap-10 mx-5 ">
      <section className="flex items-center justify-between">
        <section className="flex flex-col items-center justify-center  w-full">
          <h1 className="text-[36px] font-bold">INTRODUCTION</h1>
            <h1 className="text-[36px] font-light">TO Debuginit</h1>
          
        </section>
      </section>
      <section className="flex flex-col gap-10 items-center justify-between">
        <Image src={aboutImage} alt="image" width={400} height={400} />
        <section className=" flex flex-col items-center gap-6">
          <p className="text-[16px] font-light">
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
            mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
            dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
            tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
            purus in massa. Est placerat in egestas erat imperdiet sed.
            Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet
            sit amet cursus sit amet. Vel eros donec ac odio tempor orci
            dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
            bibendum. Leo a diam sollicitudi n tempor.
          </p>
          <button className="join_btn w-3/4 ">LET&apos;S GET IN TOUCH</button>
        </section>
      </section>
    </main>
    </>

  );
}
