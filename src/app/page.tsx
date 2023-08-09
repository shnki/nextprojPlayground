import Link from "next/link";
import { prisma } from "@/db";
import { Userslist } from "@/components/Userslist";
import Navbar from "@/components/NavBar";
import GlassyLayout from "@/components/GlassyLayout";
import Carousel from "@/components/Carousel";

function getUsers() {
  return prisma.users.findMany();
}

async function toggleAvailability(id: string, avaliable: boolean) {
  "use server";
  await prisma.users.update({ where: { id }, data: { avaliable } });
}
export default async function Home() {
  const users = await getUsers();

  return (
    <>
      <Navbar />
      <header className="flex justify-between items-center mb-4"></header>
      <div>
        <Carousel />
      </div>
    </>
  );
}
