"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export default function Carousel() {
  const slides = [
    {
      url: "/slide1.jpeg",
    },
    {
      url: "/slide2.jpg",
    },
    {
      url: "/slide3.jpeg",
    },
  ];
  const [slide, setslide] = useState(0);
  useEffect(() => {
    const slideIntervel = setTimeout(() => {
      slide === slides.length - 1 ? setslide(0) : setslide(slide + 1);
    }, 5000);
    return () => clearInterval(slideIntervel);
  }, [slide]);

  return (
    <div className=" max-w-[1400px] h-[580px] w-full m-auto py-7 px-4 relative group">
      <div
        style={{
          backgroundImage: `url(${slides[slide].url})`,
        }}
        className="w-full h-full rounded-2xl bg-center bg-cover"
      ></div>
      {/* left arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/2 text-white cursor-pointer  ">
        <BsChevronCompactLeft
          onClick={() => {
            slide === 0 ? setslide(slides.length - 1) : setslide(slide - 1);
          }}
          size={30}
        />
      </div>
      {/* right arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/2 text-white cursor-pointer  ">
        <BsChevronCompactRight
          onClick={() => {
            slide === slides.length - 1 ? setslide(0) : setslide(slide + 1);
          }}
          size={30}
        />
      </div>
    </div>
  );
}
