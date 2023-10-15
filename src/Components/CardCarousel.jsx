import Carousel from "@/Components/Carousel";
import CarouselForCard from "@/Components/CarouselForCard";
import React from "react";
import Card from "@/Components/Card";
import simulation from "@/Images/simulation.svg";
import education from "@/Images/education.svg";
import selfcare from "@/Images/selfcare.svg";
import outdoor from "@/Images/outdoor.svg";
import curve14 from "@/Images/curve14.svg";

const data = [
  {
    id: "1",
    title: "SIMULATION",
    image: simulation,
    btn_title: "TRY IT NOW",
    desc: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.",
  },
  {
    id: "2",
    title: "EDUCATION",
    image: education,
    btn_title: "TRY IT NOW",
    desc: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.",
  },
  {
    id: "3",
    title: "SELF-CARE",
    image: selfcare,
    btn_title: "TRY IT NOW",
    desc: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.",
  },
  {
    id: "4",
    title: "OUTDOOR",
    image: outdoor,
    btn_title: "TRY IT NOW",
    desc: "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.",
  },
];
export default function CardCarousel() {
  return (
    <div className="mx-6 text-white ">
      <CarouselForCard>
        {data.map((item) => {
          return (
            <div key={item.id} className="mx-6" >
              <Card
                key={item.id}
                image={item.image}
                title={item.title}
                btn_title={item.btn_title}
                desc={item.desc}
              />
            </div>
          );
        })}
      </CarouselForCard>
    </div>
  );
}
