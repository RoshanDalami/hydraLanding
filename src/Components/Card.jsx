import React from "react";
import Image from "next/image";

//image imports
import simulation from "@/Images/simulation.svg";
import circle from "@/Images/circle.svg";
import horizontalLine from "@/Images/horizontalLine.svg";

export default function Card({title,image,btn_title,desc}) {
  return (
    <main className="bg-gradient-radial from-[#3A3456] to-[#211E2E] h-[450px] w-[300px] rounded-[35px] flex flex-col items-center justify-between py-6 ">
      <div className="relative ">
        <Image
          src={image}
          alt="simulation"
          className="border-[10px] border-black/30 rounded-full"
        />
        <Image
          src={circle}
          alt="shade"
          className="absolute inset-0 -z-10 border-2 border-red-600 "
        />
      </div>
      <h1 className="text-[24px] font-bold">{title}</h1>
      <Image src={horizontalLine} alt="" />
      <p className="text-[12px] font-light px-5">
        {desc}
      </p>
      <button className="join_btn">{btn_title}</button>
    </main>
  );
}
