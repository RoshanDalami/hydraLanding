import React from "react";
import Image from "next/image";
import formLine from "@/Images/formline.svg";

// bg-gradient-radial from-[#2f1231] to-[#371053]

export default function Form() {
  return (
    <>
    
    <main className="text-white hidden md:flex flex-col items-center justify-center w-[1000px] py-16 gap-10 rounded-lg ">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-[36px] ">CONTACT DEBUGINIT</h1>
        <Image src={formLine} alt="" />
        <h1 className="text-[36px] ">Let&apos;s Solve Your IT Problem</h1>
      </div>
      <div className=" flex flex-col  gap-6 w-full px-10 items-center ">
        <div className="flex gap-4 w-full ">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            className="input"
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            className=" input "
          />
        </div>
        <div className="flex gap-4  w-full">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className=" input"
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone Number"
            className=" input "
          />
        </div>
        <input
          type="text"
          name={"subject"}
          placeholder="Subject"
          className="input"
        />
        <textarea
          type="text"
          placeholder="Tell Us Something..."
          className=" input_textarea"
          cols={30}
          rows={7}
        />
        <button className="join_btn text-[12px] font-bold">
          SEND TO DEBUGINIT
        </button>
      </div>
    </main>
    <main className=" text-white flex md:hidden flex-col items-center justify-center  py-16 gap-8 rounded-[30px] ">
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-[24px] ">CONTACT DEBUGINIT</h1>
        <Image src={formLine} alt="" width={200} />
        <h1 className="text-[24px] font-thin text-center ">Let&apos;s Solve Your IT Problem</h1>
      </div>
      <div className=" flex flex-col  gap-6 w-full px-5 items-center ">
        <div className="flex flex-col gap-4 w-full ">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            className="input"
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            className=" input "
          />
        </div>
        <div className="flex flex-col gap-4  w-full">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className=" input"
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone Number"
            className=" input "
          />
        </div>
        <input
          type="text"
          name={"subject"}
          placeholder="Subject"
          className="input"
        />
        <textarea
          type="text"
          placeholder="Tell Us Something..."
          className=" input_textarea"
          cols={30}
          rows={7}
        />
        <button className="join_btn text-[12px] font-bold">
          SEND TO DEBUGINIT
        </button>
      </div>
    </main>
    </>
  );
}
