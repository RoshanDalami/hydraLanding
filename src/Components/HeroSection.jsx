import React from "react";

//image imports
import arrow from "@/Images/outline/shape.svg";
import Image from "next/image";
import curve4 from "@/Images/herocurve04.svg";
import heroimage from "@/Images/hero_image.svg";
import herobg from "@/Images/Rectangle.svg";
import curve1 from "@/Images/herocurve1.svg";
import curve2 from "@/Images/herocurve2.svg";
import curve3 from "@/Images/herocurve3.svg";
import HeroNav from "./HeroNav";

export default function HeroSection() {
  return (
    <>
      <main className=" hidden md:flex items-center justify-between mx-16 mt-20   ">
        <section className="w-2/4 flex flex-col gap-10 ">
          {/* text will go here  */}
          <Image src={curve4} alt="curve" className="absolute left-0 -z-50" />
          <div className="">
            <h1 className="hero_text">
              {" "}
              <span className=" linear_gradient_text">Dive</span> Into The
              Depths
            </h1>
            <h1 className="hero_text">
              Of{" "}
              <span className="linear_gradient_text_reverse">
                Virtual Reality
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
            <Image src={arrow} alt="" />
          </div>
        </section>
        <section>
          {/* image will go here  */}
          <div className=" relative flex items-center ">
            <div className="p-3 ">
              <Image
                src={heroimage}
                alt="hero image"
                width={400}
                height={400}
                className=""
              />
              <Image
                src={herobg}
                alt="hero bg"
                className="absolute inset-0 -z-10"
              />
            </div>

            <Image
              src={curve1}
              alt="curve 1"
              className="absolute  -z-50 ml-[140px] mt-[20px]"
              width={320}
              height={320}
            />
            <Image
              src={curve2}
              alt="curve 2"
              className="absolute -z-50 ml-[60px]"
              width={350}
              height={350}
            />
            <Image
              src={curve3}
              alt="curve 3"
              className="absolute  -z-50 ml-[-60px] mt-[250px]  "
            />
          </div>
        </section>
      </main>
      <main className="flex flex-col md:hidden items-center justify-between  mt-20  ">
        <section>
          {/* image will go here  */}
          <div className=" mx-12 relative flex items-center ">
            <div className="p-3 ">
              <Image
                src={heroimage}
                alt="hero image"
                width={400}
                height={400}
                className=""
              />
              <Image
                src={herobg}
                alt="hero bg"
                className="absolute inset-0 -z-10"
              />
            </div>

            <Image
              src={curve1}
              alt="curve 1"
              className="absolute  -z-50 ml-[140px] mt-[20px]"
              width={320}
              height={320}
            />
            <Image
              src={curve2}
              alt="curve 2"
              className="absolute -z-50 ml-[60px]"
              width={350}
              height={350}
            />
            <Image
              src={curve3}
              alt="curve 3"
              className="absolute  -z-50 ml-[-60px] mt-[250px]  "
            />
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
              <span className="linear_gradient_text_reverse text-[36px]">
                Virtual Reality
              </span>
            </h1>
          </div>
          
            <button className="build_btn">BUILD YOUR WORLD</button>
          
        </section>
      </main>
    </>
  );
}
