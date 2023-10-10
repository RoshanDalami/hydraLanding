import React from "react";
import Image from "next/image";

//images import
import location from "@/Images/location.svg";
import mail from "@/Images/mail.svg";
import phone from "@/Images/phone.svg";
import verticalLine from "@/Images/verticalLine.svg";
import Carousel from "./Carousel";

const Data = [
  {
    id: "1",
    image: location,
    title: "Union St, Seattle, WA 98101, United States",
  },
  {
    id: "2",
    image: phone,
    title: "(110) 1111-1010",
  },
  {
    id: "1",
    image: mail,
    title: "Contact@HydraVTech.com",
  },
];

export default function HeroNav() {
  return (
    <>
      <main className="bg-gradient-radial from-[#3A3456] to-[#211E2E] rounded-full hidden md:flex py-4 px-16 items-center">
        <section className="flex  items-center gap-5">
          <Image src={location} alt="location" height={30} width={30} />
          <div>
            <h1 className="text-[24px] font-bold text-white">Pay Us a Visit</h1>
            <p className="text-[14px] text-white">
              Union St, Seattle, WA 98101, United States
            </p>
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
        <Image src={verticalLine} alt="vertical line" className="mx-5" />
        <section className="flex items-center gap-5">
          <Image src={mail} alt="mail" height={50} width={50} />

          <div>
            <h1 className="text-[24px] font-bold text-white">
              Send Us a Message
            </h1>
            <p className="text-[14px] text-white">Contact@HydraVTech.com</p>
          </div>
        </section>
      </main>
      <main className="bg-gradient-radial from-[#3A3456] to-[#211E2E] rounded-full md:hidden  w-[370px] h-[130px] px-5 ">
        <Carousel>
          {/* {Data.map((items) => {
            <section className=" mt-[20px] border-2  ">
              <Image src={location} alt="location" height={30} width={30} />
              <p className="text-[14px] text-white  inline">
                Union St, Seattle, WA 98101, United States
              </p>
            </section>;
          })} */}
          <section className=" mt-[20px]   ">
            <Image src={location} alt="location" height={30} width={30} />
            <p className="text-[14px] text-white  inline">
              Union St, Seattle, WA 98101, United States
            </p>
          </section>
          <section className=" mt-[20px]   ">
            <Image src={phone} alt="phone" height={40} width={40} />
            <p className="text-[14px] text-white">(110) 1111-1010</p>
          </section>
          <section className=" mt-[20px]  ">
            <Image src={mail} alt="mail" height={50} width={50} />
            <p className="text-[14px] text-white">Contact@HydraVTech.com</p>
          </section>
        </Carousel>
      </main>
    </>
  );
}
