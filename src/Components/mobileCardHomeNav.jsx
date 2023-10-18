import React from "react";
import Image from "next/image";
import location from "@/Images/location.svg";
import mail from "@/Images/mail.svg";
import phone from "@/Images/phone.svg";

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
    id: "3",
    image: mail,
    title: "Contact@HydraVTech.com",
  },
];
export default function mobileCardHomeNav() {
  return (
    <div>
      {Data.map((items) => {
        return (
          <section key={items.id} className=" mt-[20px] ">
            <Image src={items.image} alt="mail" height={50} width={50} />
            <p className="text-[14px] text-white">{items.title}</p>
          </section>
        );
      })}
    </div>
  );
}
