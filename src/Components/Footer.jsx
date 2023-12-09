import React from "react";
import Image from "next/image";
import footerLine from "@/Images/footerLine.svg";
import logo from "@/Images/logo.svg";
import footerHorizontal from "@/Images/footerhorizontal.svg";
import curve18 from "@/Images/curve18.svg";
import curve19 from "@/Images/curve19.svg";
import footermobile from '@/Images/footermobile.svg';
import mobileCurveOne from '@/Images/footerMobile1.svg'
import mobileCurveTwo from '@/Images/footerMobile2.svg'

import facebook from '@/Images/facebook.svg';
import twitter from '@/Images/twitter.svg';
import linkedin from '@/Images/linkedin.svg';
import youtube from '@/Images/youtube.svg';
import instagram from '@/Images/instagram.svg';
import pinterest from '@/Images/pinterest.svg';

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <main className="w-[100%] hidden md:block  text-white">
        <div className="  justify-center items-center gap-20 flex">

          <section>
            {/* <Image src={logo} alt="" width={150} height={150} /> */}
            <span className="text-[#BD4EE3] text-3xl  font-bold  cursor-pointer "  >
            Debuginit
          </span>
          </section>
          <Image src={footerLine} alt="" />
          <section className="flex flex-col gap-4">
            <p className="footertext">ABOUT</p>
            <p className="footertext">SERVICES</p>
            {/* <p className="footertext">TECHNOLOGIES</p> */}
            <p className="footertext">WHAT WE DO</p>
            {/* <p className="footertext">JOIN HYDRA</p> */}
          </section>
          <Image src={footerLine} alt="" className="py-7" />
          <section className="flex flex-col gap-4">
            <p className="footertext">F.A.Q</p>
            <p className="footertext">SITEMAP</p>
            <p className="footertext">CONDITIONS</p>
            <p className="footertext">LICENSES</p>
          </section>
          <Image src={footerLine} alt="" />
          <section className="flex flex-col gap-4">
            <p className="footertext">SOCIALIZE WITH DEBUGINIT</p>
            <div className="flex items-center gap-6">
                <Image src={facebook} alt="facebook"/>
                <Image src={twitter} alt="twitter"/>
                <Image src={linkedin} alt="linkedin"/>
                <Image src={youtube} alt="youtube"/>
                <Image src={instagram} alt="instagram"/>
                <Image src={pinterest} alt="pinterest"/>
            </div>
            <button className="join_btn" >BUILD YOUR WORLD</button>
          </section>
        </div>
        <Image src={footerHorizontal} alt="" className="my-5" />
        <div>
          <p className="text-[14px] font-bold text-center py-6 ">
          {currentYear} © Debuginit LANDING PAGE{" "} - BY SANJAY SHAH - ALL RIGHTS
            RESERVED{" "}
          </p>
        </div>
      </main>
      <main className=" flex flex-col items-center md:hidden text-white">
        <div className="  justify-center items-center  flex flex-col ">

        <section className="my-10">
            {/* <Image src={logo} alt="" width={150} height={150} /> */}
            <span className="text-[#BD4EE3] text-3xl  font-bold  cursor-pointer "  >
            Debuginit
          </span>
          </section>

          <section className="flex flex-col gap-6">
            <p className="footertext">SOCIALIZE WITH DEBUGINIT</p>
            <div className="flex items-center gap-6">
                <Image src={facebook} alt="facebook"/>
                <Image src={twitter} alt="twitter"/>
                <Image src={linkedin} alt="linkedin"/>
                <Image src={youtube} alt="youtube"/>
                <Image src={instagram} alt="instagram"/>
                <Image src={pinterest} alt="pinterest"/>
            </div>
            <button className="join_btn" >BUILD YOUR WORLD</button>
          </section>
        </div>
        <Image src={footermobile} alt="" className="py-5 "  />
        <div className="flex flex-col gap-3 mb-[70px]">
          <p className="text-[14px] font-bold text-center  ">
            {currentYear} © Debuginit LANDING PAGE{" "}
          </p>{" "}
          <p className="text-[14px] font-bold text-center "> BY SANJAY SHAH </p> 
          <p className="text-[14px] font-bold text-center  ">ALL RIGHTS RESERVED </p>
        </div>
      </main>
    </>
  );
}
