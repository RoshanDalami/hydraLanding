import React from "react";
import Image from "next/image";

//images import
import location from "@/Images/location.svg";
import mail from "@/Images/mail.svg";
import phone from "@/Images/phone.svg";
import verticalLine from '@/Images/verticalLine.svg'

export default function HeroNav() {
  return (
    <main className="bg-gradient-radial from-[#3A3456] to-[#211E2E] rounded-full flex py-4 px-16 items-center">
      <section className="flex  items-center gap-5">
        <Image src={location} alt="location" height={30} width={30} />
        <div>
          <h1 className="text-[24px] font-bold text-white">Pay Us a Visit</h1>
          <p className="text-[14px] text-white">Union St, Seattle, WA 98101, United States</p>
        </div>
      </section>
      <Image src={verticalLine} alt="vertical line" className="mx-5 " />
      <section className="flex items-center gap-5">
        <Image src={phone} alt="phone" height={40} width={40} />

        <div>
          <h1 className="text-[24px] font-bold text-white">Give Us a Call</h1>
          <p className="text-[14px] text-white">(110) 1111-1010</p>
        </div>
      </section>
      <Image src={verticalLine} alt="vertical line" className="mx-5"/>
      <section className="flex items-center gap-5"> 
        <Image src={mail} alt="mail" height={50} width={50} />

        <div>
            <h1 className="text-[24px] font-bold text-white">Send Us a Message</h1>
            <p className="text-[14px] text-white">Contact@HydraVTech.com</p>
        </div>
      </section>
    </main>
  );
}
