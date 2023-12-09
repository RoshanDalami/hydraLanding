import React from "react";

//image imports

import Image from "next/image";

import heroimage from "@/Images/debuginit_hero.svg";
import herobg from "@/Images/Rectangle.svg";


export default function HeroSection() {
  return (
    <>
      <main className=" hidden md:flex items-center justify-between mx-16 min-h-screen -mt-20  ">
        <section className="w-2/4 flex flex-col gap-10 ">
          {/* text will go here  */}

          <div className="">
            <h1 className="hero_text">
              {" "}
              <span className=" linear_gradient_text">Dive</span> Into The
              Depths
            </h1>
            <h1 className="hero_text">
              Of{" "}
              <span className="linear_gradient_text">
                IT Solution .
              </span>
            </h1>
          </div>
          <p className="text-[16px] text-white font-light mr-12 w-3/4 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
            Lectus mauris eros in vitae .
          </p>
          <div className="flex gap-6">
            <button className="build_btn">BUILD YOUR WORLD</button>
            {/* <Image src={arrow} alt="" /> */}
          </div>
        </section>
        <section>
          {/* image will go here  */}
          <div className=" relative flex items-center ">
            <div className="p-3 ">
              <Image
                src={heroimage}
                alt="hero image"
                width={600}
                height={600}
                className=""
              />
              <Image
                src={herobg}
                alt="hero bg"
                className="absolute inset-0 -z-10"
              />
            </div>


          </div>
        </section>
      </main>
      <main className="flex flex-col md:hidden items-center justify-center   min-h-screen -mt-20 ">
        <section>
          {/* image will go here  */}
          <div className="mx-4 relative flex items-center ">
            <div className="p-3 ">
              <Image
                src={heroimage}
                alt="hero image"
                width={900}
                height={900}
                className=""
              />
              <Image
                src={herobg}
                alt="hero bg"
                className="absolute inset-0 -z-10"
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-10 ">
          {/* text will go here  */}
          <div className="">
            <h1 className="hero_text_mobile">
              {" "}
              <span className=" linear_gradient_text text-[36px]">Dive</span> Into The
              Depths
            </h1>
            <h1 className="hero_text_mobile">
              Of{" "}
              <span className="linear_gradient_text text-[36px]">
              IT Solution .
              </span>
            </h1>
          </div>
          
            <button className="build_btn">BUILD YOUR WORLD</button>
          
        </section>
      </main>
    </>
  );
}
