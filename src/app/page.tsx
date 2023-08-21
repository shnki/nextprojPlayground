import Link from "next/link";
import { prisma } from "@/db";
import { Userslist } from "@/components/Userslist";
import Navbar from "@/components/NavBar";
import GlassyLayout from "@/components/GlassyLayout";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Carouseltest from "@/components/Carouseltest";
import Image from "next/image";
import Categories from "@/components/Categories";

function getUsers() {
  return prisma.users.findMany();
}

async function toggleAvailability(id: string, avaliable: boolean) {
  "use server";
  await prisma.users.update({ where: { id }, data: { avaliable } });
}
export default async function Home() {
  const users = await getUsers();

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

  const categories = [
    "/gpu.png",
    "/ram.png",
    "/cpu.png",
    "/powersupply.png",
    "/case.png",
    "/motherboard.png",
    "/driver.png",
  ];
  const testslides = ["/slide1.jpeg", "/slide2.jpg", "/slide3.jpeg"];

  return (
    <>
      <Navbar />
      <header className="flex justify-between items-center"></header>
      <div>
        <Carouseltest autoSlide={true} autoSlideInterval={10000}>
          {testslides.map((slide) => (
            <img key={slide} src={slide} />
          ))}
        </Carouseltest>
        <Categories>
          {categories.map((item) => (
            <div key={item} className="relative group cursor-pointer">
              <img
                src={item}
                className="max-w-[13rem] hover:shadow-gradient"
                alt={`image of ${item}`}
              />
              <div className="absolute flex justify-center items-end bottom-0 left-0 right-0 h-full bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="p-5 text-xl">{item}</h1>
              </div>
            </div>
          ))}
        </Categories>
        <Carousel />
      </div>
      <Footer />
    </>
  );
}
