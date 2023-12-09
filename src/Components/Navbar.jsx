"use client";
import React, { useLayoutEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

//image imports
import logo from "@/Images/logo.svg";
import logotext from "@/Images/logotext.svg";
import hamburgur from "@/Images/Hamburger.svg";

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useLayoutEffect(() => {
    function updateScrollPosition() {
      setScrollPosition(window.pageYOffset);
    }
    // Add an event listener to update the scroll position on scroll
    window.addEventListener("scroll", updateScrollPosition);

    // Call the update function initially to get the initial scroll position
    updateScrollPosition();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);

  const handleHow = () => {
    window.scrollTo({
      top: 2500,
      behavior: "smooth",
    });
  };
  // const handleTechnology = () => {
  //   window.scrollTo({
  //     top: 2305,
  //     behavior: "smooth",
  //   });
  // };
  const handleService = () => {
    window.scrollTo({
      top: 1600,
      behavior: "smooth",
    });
  };

  const handleAbout = () => {
    window.scrollTo({
      top: 780,
      behavior: "smooth",
    });
  };
  const handleHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleContact = () => {
    window.scrollTo({
      top: 3400,
      behavior: "smooth",
    });
  };
  return (
    <>
      <main className=" hidden md:flex items-center justify-between w-full px-20 py-5 sticky top-0 z-50 bg-black ">
        {/* <section className="flex gap-2 " > */}
          {/* <Image src={logo} alt='' width={75} height={75} />
            <Image src={logotext} alt='' width={50} height={50} /> */}
          <span className="text-[#BD4EE3] text-3xl  font-bold  cursor-pointer " onClick={handleHome} >
            Debuginit
          </span>
        {/* </section> */}
        <section className="flex gap-10 text-white">
          <p className="nav_link" onClick={handleAbout}>
            ABOUT
          </p>
          <p className="nav_link" onClick={handleService}>
            SERVICES
          </p>
          {/* <p className="nav_link" onClick={handleTechnology}>
            TECHNOLOGY
          </p> */}
          <p className="nav_link" onClick={handleHow}>
            HOW TO
          </p>
        </section>
        <section className="flex gap-6 text-white">
          <button className="nav_link contactus_btn " onClick={handleContact}>
            CONTACT US
          </button>
          {/* <button className='nav_link join_btn '>JOIN HYDRA</button> */}
        </section>
      </main>
      <main className=" md:hidden  flex items-center justify-between w-full px-10 my-5 ">
        {/* <section className="flex gap-2">
          <Image src={logo} alt="" width={75} height={75} />
          <Image src={logotext} alt="" width={50} height={50} />

        </section> */}
         <span className="text-[#BD4EE3] text-3xl  font-bold  cursor-pointer " onClick={handleHome} >
            Debuginit
          </span>
        <section>
          <Image src={hamburgur} alt="" />
        </section>
      </main>
    </>
  );
}
