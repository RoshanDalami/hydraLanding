import React from "react";
import location from "@/Images/location.svg";
import mail from "@/Images/mail.svg";
import phone from "@/Images/phone.svg";
import Image from "next/image";
import Carousel from "@/Components/Carousel";
export default function HomeNavCarousel() {
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
  return (
    <div className="bg-gradient-radial from-[#3A3456] to-[#211E2E] rounded-full md:hidden  w-[370px] h-[130px] mx-auto px-5  " >
      <Carousel>
        {Data.map((items) => {
          return (
            <div key={items.id} className=" mt-8 ml-8  "  >

            <section key={items.id} className="flex  items-center gap-5">
              <Image src={items.image} alt="location" height={50} width={50} />
              <div>
                <p className="text-[16px] text-white  ">{items.title}</p>
              </div>
            </section>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
