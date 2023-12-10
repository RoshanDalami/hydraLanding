import React from 'react'
import CarouselForCircleCard from './CarouselForCircleCard';
import CircleCard from './CircleCard';

export default function CircleCardCarousel() {
  const data = [
    {
      id: "1",
      title: "01",
      desc: "Product",
    },
    {
      id: "2",
      title: "02",
      desc: "Services",
    },
    {
      id: "3",
      title: "03",
      desc: "Technology",
    },
    {
      id: "4",
      title: "04",
      desc: "IoT Devices",
    },
  ];
  return (
    <div className='text-white md:mx-20 '>
        <CarouselForCircleCard>
        {data.map((item) => {
            return (
              <CircleCard key={item.id} title={item.title} desc={item.desc} />
            );
          })}
        </CarouselForCircleCard>
      
    </div>
  )
}
